import React from "react";
import { connect } from "react-redux";
import style from "./style.module.scss";
import Finder from "../../components/finder/Finder";
import Showcase from "../../components/showcase/Showcase";
import Pagination from "../../components/pagination/Pagination";
import { Layout, Menu, Icon } from "antd";
import { showFullGameInfo } from "../../redux/actions/games";

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

class SearchPage extends React.Component {
  render() {
    return (
      <Layout className={style.container}>
        <Sider breakpoint="lg" collapsedWidth="0">
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>Main</span>
            </Menu.Item>
            <SubMenu
              title={
                <span>
                  <Icon type="star" theme={"filled"} />
                  <span>My favorites</span>
                </span>
              }
            >
              {this.props.games.favoriteGames !== []
                ? this.props.games.favoriteGames.map(item => {
                    return (
                      <Menu.Item
                        key={item.id}
                        onClick={() => this.props.showFullGameInfo(item)}
                      >
                        {item.name}
                      </Menu.Item>
                    );
                  })
                : undefined}
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header className={style.header}>
            <Finder className={style.finder} />
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <Showcase source={this.props.games.parsedGamesList} />
            <Pagination />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = ({ games }) => ({ games });
const mapDispatchToProps = {
  showFullGameInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
