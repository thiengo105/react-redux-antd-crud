import { Button, Divider, Form, Input, PageHeader } from "antd";
import { useForm } from "antd/lib/form/Form";
import LayoutContent from "components/LayoutContent/LayoutContent";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createTodoAction, editTodoAction, getTodoAction } from "store/todo/todo.action";

const TodoContainer = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { todo } = useSelector(state => state.todoState);

  const { todoId } = useParams();
  const isEdit = typeof todoId !== "undefined";

  const [form] = useForm();

  const fetchData = useCallback(() => {
    if (todoId) {
      dispatch(getTodoAction(todoId));
    }
  }, [dispatch, todoId])

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (todo) {
      const formValues = {
        name: todo.name
      }

      form.setFieldsValue(formValues);
    }
  }, [form, todo]);

  function handleSubmit(values) {
    if (isEdit) {
      dispatch(editTodoAction({ todoId, body: values}));
    } else {
      dispatch(createTodoAction(values));
    }

    navigate("/todo");
  }

  return (
    <div>
      <PageHeader
        title={isEdit ? "Edit todo" : "Create todo"}
      />

      <LayoutContent>
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>

          <Divider />

          <Form.Item>
            <Button type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </LayoutContent>
    </div>
  )
}

export default TodoContainer;