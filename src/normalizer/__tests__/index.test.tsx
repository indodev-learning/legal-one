import { mockLogData, mockAgentData, mockCallData } from "../__data_mocks__";
import {
  normalizedLogTable,
  normalizedCallTable,
  normalizedAgentTable,
} from "..";

describe("test the normalizer", () => {
  it("should normalize log table correctly", () => {
    const logData = normalizedLogTable();
    expect(logData).toStrictEqual(mockLogData);
  });

  it("should normalize agent table correctly", () => {
    const logData = normalizedCallTable("+49151484522");
    expect(logData).toStrictEqual(mockAgentData);
  });

  it("should normalize call table correctly", () => {
    const logData = normalizedAgentTable(
      "356b03dc-9ec5-11e7-97a6-d501104f897e"
    );
    expect(logData).toStrictEqual(mockCallData);
  });
});
