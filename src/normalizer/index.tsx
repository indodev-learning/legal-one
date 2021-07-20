import logs from "../json-data/logs.json";
import agents from "../json-data/agents.json";
import resolution from "../json-data/resolution.json";
import { LogItem } from "./types";

/**
 * @function generateProperTime
 * @param time
 * @description set the time tobe 2 digit
 * @returns number | string
 */
const generateProperTime = (time: number) => {
  return time > 9 ? time : `0${time}`;
};

/**
 * @function reduceLogs
 * @description grouping the data by phone number
 * @returns object
 */
const reduceLogs = () => {
  const data = Object.entries(
    logs.reduce((accumulator, currentValue) => {
      accumulator[currentValue.number] = accumulator[currentValue.number] || [];
      accumulator[currentValue.number].push(currentValue);

      return accumulator;
    }, Object.create(null))
  );

  return data;
};

/**
 * @function getAgentName
 * @param agentIdentifier
 * @returns string
 */
const getAgentName = (agentIdentifier: string) => {
  const theAgent = agents.find(
    (item) => item.identifier === agentIdentifier
  ) || { firstName: "", lastName: "" };
  return `${theAgent.firstName} ${theAgent.lastName}`;
};

/**
 * @function generateLastCalls
 * @param item
 * @returns object
 */
const generateLastCalls = (item: Array<LogItem>) => {
  let currentDate: any;
  let agentIdentifier = "";
  let id = "";

  item.map((log: LogItem) => {
    const newDate = new Date(log.dateTime);

    if (!currentDate) currentDate = newDate;

    if (newDate > currentDate) {
      currentDate = newDate;
    }

    agentIdentifier = log.agentIdentifier;
    id = log.agentIdentifier;
    return currentDate;
  });

  const theTime = `${generateProperTime(
    currentDate.getHours()
  )}:${generateProperTime(currentDate.getMinutes())}`;
  const agentName = getAgentName(agentIdentifier);

  return {
    name: agentName,
    time: theTime,
    id,
  };
};

/**
 * @function generateCalls
 * @param item
 * @description get the total calls
 * @returns string
 */
const generateCalls = (item: Array<LogItem>) => {
  const totalCall = item.length || 0;
  return totalCall > 1 ? `${totalCall} calls` : `${totalCall} call`;
};

/**
 * @function getDateTime
 * @param identifier
 * @description get date and time from the timestamps
 * @returns DD/MM/YYY H:I:S
 */
const getDateTime = (identifier: string) => {
  let currentDate: any;

  logs
    .filter((item) => item.identifier === identifier)
    .map((log: LogItem) => {
      const newDate = new Date(log.dateTime);

      if (!currentDate) currentDate = newDate;

      if (newDate > currentDate) {
        currentDate = newDate;
      }

      return currentDate;
    });

  const theDate = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getFullYear()}`;
  const theTime = `${generateProperTime(
    currentDate.getHours()
  )}:${generateProperTime(currentDate.getMinutes())}:${generateProperTime(
    currentDate.getSeconds()
  )}`;

  return `${theDate} ${theTime}`;
};

export const getResolution = (identifier: string) => {
  const selectedResolution =
    resolution.filter((item) => item.identifier === identifier) || [];
  return selectedResolution[0] ? selectedResolution[0].resolution : "";
};

/**
 * @function normalizedCallTable
 * @param item
 * @description get normalized log from raw data
 * @returns object
 */
export const normalizedLogTable = () => {
  const reducedLogs = reduceLogs().map((item: Array<any>, index) => ({
    phone: item[0],
    last_call: generateLastCalls(item[1]),
    calls: generateCalls(item[1]),
    key: index,
  }));

  return reducedLogs;
};

/**
 * @function normalizedCallTable
 * @param phoneNumber
 * @description get normalized call data from raw data
 * @returns object
 */
export const normalizedCallTable = (phoneNumber: string) => {
  const reducedCalls = logs
    .filter((item) => item.number === phoneNumber)
    .map((item: LogItem, index) => {
      return {
        name: getAgentName(item.agentIdentifier),
        call_date_time: getDateTime(item.identifier),
        resolution: getResolution(item.identifier),
        key: index,
      };
    });

  return reducedCalls;
};

/**
 * @function normalizedAgentTable
 * @param agentIdentifier
 * @description get normalized agent data from raw data
 * @returns object
 */
export const normalizedAgentTable = (agentIdentifier: string) => {
  const reducedAgent = logs
    .filter((item) => item.agentIdentifier === agentIdentifier)
    .map((item: LogItem, index) => {
      return {
        phone: item.number,
        call_date_time: getDateTime(item.identifier),
        resolution: getResolution(item.identifier),
        key: index,
      };
    });

  return reducedAgent;
};
