import { Layout, Menu } from "antd";
import { ROUTES } from "constants/routes";
import TodoContainer from "pages/main/todo/TodoContainer";
import { NavLink, Routes, Route, useLocation } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const MainLayout = (props) => {

  const { pathname } = useLocation();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ backgroundColor: "", color: "#fff" }}>App name</Header>
      <Layout>
        <Sider theme="light">
          <Menu activeKey={pathname} defaultSelectedKeys={[pathname]}>
            {ROUTES.map(route => (
              <Menu.Item key={"/" + route.href} icon={route.icon}>
                <NavLink to={route.href}>{route.text}</NavLink>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Content style={{ paddingBottom: 20}}>
          <Routes>
            {ROUTES.map(route => (
              <Route path={route.href} key={route.href} element={route.component} />
            ))}

            <Route path="todo">
              <Route path="create" element={<TodoContainer />} />
              <Route path=":todoId" element={<TodoContainer />} />
            </Route>
          </Routes>
        </Content>
      </Layout>
    </Layout>
  )
}

export default MainLayout;