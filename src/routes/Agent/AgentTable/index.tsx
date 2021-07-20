import { Table } from 'antd';
import { normalizedAgentTable } from '../../../normalizer';
import { useLocation } from 'react-router-dom';

const columns = [
  {
    title: 'Phone number',
    dataIndex: 'phone',
  },
  {
    title: 'Call date and time',
    dataIndex: 'call_date_time',
  },
  {
    title: 'Resolution',
    dataIndex: 'resolution',
  }
];


const AgentTable = () => {
  const location = useLocation();
  const agentIdentifier = location.pathname.split('/')[2];
  const dataSource = normalizedAgentTable(agentIdentifier);

  return (
    <Table columns={columns} dataSource={dataSource} />
  );
};

export default AgentTable;