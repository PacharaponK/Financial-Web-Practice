import { Space, Table, Tag, Button } from 'antd';
import moment from 'moment';
import EditButton from './EditItem';


export default function TransactionList(props) {
  const columns = [
    {
      key:'id',
      title: 'ID',
      dataIndex: 'id'
    },
    {
      key: 'id',
      title: 'Date-Time',
      dataIndex: 'action_datetime',
      render: (text) => moment(text).format('YYYY-MM-DD HH:mm:ss')
    },
    {
      key: 'id',
      title: 'Type',
      dataIndex: 'type',
      render: type => type === 'income' ? <Tag color='green'>รายรับ</Tag> : <Tag color='red'>รายจ่าย</Tag>
    },
    {
      key: 'id',
      title: 'Amount',
      dataIndex: 'amount',
    },
    {
      key: 'id',
      title: 'Note',
      dataIndex: 'note',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() =>props.onTransactionEdited(record)}>Edit</Button>
          <Button danger type="primary" onClick={() => props.onTransactionDeleted(record.id)}>Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <Table columns={columns} dataSource={props.data} />
  )
}
