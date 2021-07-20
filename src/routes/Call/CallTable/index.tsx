import { Table } from 'antd';
import { normalizedCallTable } from '../../../normalizer';
import { useLocation } from 'react-router-dom';

const columns = [
  {
    title: 'Agent Name',
    dataIndex: 'name',
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


const CallTable = () => {
  const location = useLocation();
  const phoneNumber = `+${location.pathname.split('+')[1]}`;
  const dataSource = normalizedCallTable(phoneNumber);

  return (
    <Table columns={columns} dataSource={dataSource} />
  );
};

export default CallTable;