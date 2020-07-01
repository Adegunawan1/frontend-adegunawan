import React, { Component } from "react";
import { Body, Button, Header, Icon, Left, Title } from "native-base";
import PropTypes from "prop-types";

class CommonHeader extends Component {
  onMenuPress = () => {
    this.props.navigation.openDrawer();
  };

  onBackPress = () => {
    this.props.navigation.goBack();
  };

  render() {
    const { navigation, hideLeftButton, title } = this.props;
    return (
      <Header>
        {!hideLeftButton && (
          <Left>
            {typeof navigation.openDrawer === "function" ? (
              <Button onPress={this.onMenuPress}>
                <Icon name={"menu"} />
              </Button>
            ) : (
              <Button onPress={this.onBackPress}>
                <Icon name={"ios-arrow-back"} />
              </Button>
            )}
          </Left>
        )}
        <Body>
          <Title>{title}</Title>
        </Body>
      </Header>
    );
  }
}

CommonHeader.propTypes = {
  navigation: PropTypes.object.isRequired,
  hideLeftButton: PropTypes.bool,
  title: PropTypes.string,
};

export default CommonHeader;
