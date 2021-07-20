import { Table } from 'antd';
import { normalizedLogTable } from '../../../normalizer';
import { Link } from 'react-router-dom';

import './styles.css';

const columns = [
  {
    title: 'Phone number',
    dataIndex: 'phone',
    render: (text: string) => <Link to={`/call/${text}`}>{text}</Link>,
  },
  {
    title: 'Number of calls',
    dataIndex: 'calls',
  },
  {
    title: 'Last call details',
    dataIndex: 'last_call',
    render: (last_call: any) => (
      <>
        <Link to={`/agent/${encodeURIComponent(last_call.id)}`}>
          {last_call.name}
        </Link> / {last_call.time}
      </>
    ),
  },
];


const LogTable = () => {
  const dataSource = normalizedLogTable();

  return (
    <Table columns={columns} dataSource={dataSource} />
  );
};

export default LogTable;