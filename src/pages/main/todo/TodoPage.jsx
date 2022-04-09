import { Button, Input, PageHeader, Space, Table } from "antd";
import LayoutContent from "components/LayoutContent/LayoutContent";
import { PlusOutlined } from "@ant-design/icons";
import { usePagination } from "hooks/usePagination";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { useQuery } from "hooks/useQuery";
import { getTodosAction } from "store/todo/todo.action";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useSearch } from "hooks/antdHooks";
import moment from "moment";
import { Link } from "react-router-dom";

const TodoPage = () => {

  const dispatch = useDispatch();
  const {
    todos,
    loading,
  } = useSelector(state => state.todoState);

  const { page, pageSize } = usePagination();
  const query = useQuery();
  const { search, onSearchChange } = useSearch();

  // Columns for antd table
  const columns = [
    {
      title: "#",
      key: "#",
      render: (_, __, index) => (page - 1) * pageSize + (index + 1),
      width: 70
    },
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Created at",
      key: "created_at",
      dataIndex: "created_at",
      render: (createdAt) => moment(createdAt).format("DD/MM/YYYY")
    },
    {
      title: "",
      key: "actions",
      width: 120,
      align: "center",
      render: (todo) => (
        <Space>
          <Link to={`/todo/${todo.id}`}>
            <Button icon={<EditOutlined />} />
          </Link>
          <Button icon={<DeleteOutlined />} />
        </Space>
      )
    }
  ]

  const fetchData = useCallback(() => {
    dispatch(getTodosAction(query));
  }, [dispatch, query]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <PageHeader
        title="Manage todos"
        extra={(
          <Space>
            <Input.Search defaultValue={search} onSearch={onSearchChange} placeholder="Search..." allowClear />
            <Link to="/todo/create">
              <Button type="primary" icon={<PlusOutlined />}>Add new</Button>
            </Link>

          </Space>
        )} />
      <LayoutContent>
        <Table loading={loading.getAll} columns={columns} dataSource={todos} rowKey="id" />
      </LayoutContent>
    </div>

  )
}

export default TodoPage;