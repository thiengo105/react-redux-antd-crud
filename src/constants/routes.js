import { FileOutlined } from "@ant-design/icons";
import TodoPage from "pages/main/todo/TodoPage";

export const ROUTES = [
  {
    href: "todo",
    text: "Manage todo",
    icon: <FileOutlined />,
    component: <TodoPage />
  }
]