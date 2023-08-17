import { Table } from "antd";

const TableSelection = ({ columns, user, setPage,firstname}) => {
  return (
    <Table
      size="small"
      pagination={{
        onChange(current) {
          setPage(current);
        },
        defaultPageSize: 2,
      }}
      columns={columns}
      dataSource={user}
    />
  );
};
export default TableSelection;
