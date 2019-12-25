import React from "react";
import { connect } from "react-redux";
import { List, Card, Button, Icon, Modal, Carousel } from "antd";
import {
  getAllGames,
  setFavorite,
  unsetFavorite,
  showFullGameInfo,
  closeFullGameInfo
} from "../../redux/actions/games";
const { Meta } = Card;

class Showcase extends React.Component {
  handleOk = () => {
    this.props.closeFullGameInfo();
  };

  render() {
    return (
      <React.Fragment>
        <List
          loading={this.props.games.gamesLoading}
          grid={{
            gutter: 16,
            column: 6
          }}
          dataSource={this.props.source}
          renderItem={item => (
            <List.Item key={item.id}>
              <Card
                hoverable
                style={{ width: 240, overflow: "hidden" }}
                cover={
                  <img
                    alt="example"
                    src={item.background_image}
                    height={150}
                    onClick={() => this.props.showFullGameInfo(item)}
                  />
                }
              >
                <Meta
                  title={item.name}
                  description={"Release date: " + item.released}
                />
                <br />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around"
                  }}
                >
                  <Button
                    key="list-favorite"
                    onClick={() => {
                      this.props.games.favoriteGames.indexOf(item) !== -1
                        ? this.props.unsetFavorite(item)
                        : this.props.setFavorite(item);
                    }}
                  >
                    <Icon
                      type={"star"}
                      theme={
                        this.props.games.favoriteGames.indexOf(item) !== -1
                          ? "filled"
                          : "outlined"
                      }
                    />
                  </Button>
                </div>
              </Card>
            </List.Item>
          )}
        />
        {this.props.games.currentSelected ? (
          <Modal
            visible={this.props.games.isFullInfoShown}
            title={this.props.games.currentSelected.name}
            onOk={this.handleOk}
            onCancel={this.handleOk}
            width={"50%"}
            footer={[
              <Button key="submit" type="primary" onClick={this.handleOk}>
                Ok
              </Button>,
              <Button
                onClick={() => {
                  this.props.games.favoriteGames.indexOf(
                    this.props.games.currentSelected
                  ) !== -1
                    ? this.props.unsetFavorite(this.props.games.currentSelected)
                    : this.props.setFavorite(this.props.games.currentSelected);
                }}
              >
                <Icon
                  type={"star"}
                  theme={
                    this.props.games.favoriteGames.indexOf(
                      this.props.games.currentSelected
                    ) !== -1
                      ? "filled"
                      : "outlined"
                  }
                />
              </Button>
            ]}
          >
            <div>
              <img
                alt={"example"}
                src={this.props.games.currentSelected.background_image}
                width={"100%"}
                height={"100%"}
              />
            </div>
            <p>
              Rating: {this.props.games.currentSelected.rating}/
              {this.props.games.currentSelected.rating_top}
            </p>
            <p>Metacritic: {this.props.games.currentSelected.metacritic}/100</p>
            <p>
              Platforms:{" "}
              {this.props.games.currentSelected.platforms.map(item => {
                return item.platform.name + ", ";
              })}
            </p>
            <p>
              Genres:{" "}
              {this.props.games.currentSelected.genres.map(item => {
                return item.name + ", ";
              })}
            </p>
            <Carousel autoplay dotPosition={"top"} overflow={"hidden"}>
              {this.props.games.currentSelected.short_screenshots.map(item => {
                return <img alt={"example"} src={item.image} width={"300"} />;
              })}
            </Carousel>
          </Modal>
        ) : (
          undefined
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ games }) => ({ games });
const mapDispatchToProps = {
  getAllGames,
  showFullGameInfo,
  setFavorite,
  closeFullGameInfo,
  unsetFavorite
};

export default connect(mapStateToProps, mapDispatchToProps)(Showcase);
