import {
  Body,
  Button,
  Container,
  Content,
  Fab,
  Icon,
  Left,
  List,
  ListItem,
  Text,
  Thumbnail,
  View,
  Toast,
} from "native-base";
import React, { Component } from "react";
import { Alert, RefreshControl } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { connect } from "react-redux";
import { deleteUnitById, findUnitAll } from "../../../actions/units";
import styles from "./styles";

function RowItem({ item, onPress }) {
  return (
    <Content>
      <List>
        <ListItem avatar style={styles.item} onPress={() => onPress(item)}>
          <Left>
            <Thumbnail source={{ uri: item.photo }} />
          </Left>
          <Body>
            <Text>
              {item.firstName} {item.lastName}
            </Text>
          </Body>
        </ListItem>
      </List>
    </Content>
  );
}

class UnitsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount = () => {
    this.reload();
  };

  componentDidUpdate(prevProps, prevState) {
    const { data, savedata, deletedata, deleteerror, error } = this.props;

    if (prevProps.data !== data) {
      this.setState({
        data: data?.data,
      });
    } else if (
      prevProps.deletedata !== deletedata ||
      prevProps.savedata !== savedata
    ) {
      this.onRefresh();
    } else if (deleteerror && prevProps.deleteerror !== deleteerror) {
      Toast.show({
        text: deleteerror.message,
        buttonText: "OK",
        type: "danger",
      });
    } else if (error && prevProps.error !== error) {
      Toast.show({
        text: error.message,
        buttonText: "OK",
        type: "danger",
      });
    }
  }
  reload() {
    this.props.findUnitAll();
  }

  onRefresh = () => {
    this.setState({ data: [] }, () => this.reload());
  };

  onDelete = (unit) => {
    Alert.alert("Confirmation", "delete this Contact ?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => this.props.deleteUnitById(unit.id),
      },
    ]);
  };

  onAdd = () => {
    this.props.navigation.navigate("Unit");
  };

  onShowForm = (unit) => {
    this.props.navigation.navigate("Unit", unit ? { id: unit.id } : null);
  };

  onSearch = () => {
    const { search, params } = this.state;
    this.setState({ data: [] }, () => this.reload(this.state.params));
  };

  render() {
    const { loading } = this.props;
    const { data } = this.state;

    return (
      <Container>
        <View style={styles.content}>
          <View style={styles.content} />

          <SwipeListView
            refreshControl={
              <RefreshControl refreshing={loading} onRefresh={this.onRefresh} />
            }
            data={data}
            renderItem={({ item }) => (
              <RowItem onPress={this.onShowForm} item={item} />
            )}
            renderHiddenItem={(data) => (
              <View style={styles.hiddenItem}>
                <Button onPress={() => this.onDelete(data.item)}>
                  <Icon name="md-trash" />
                </Button>
              </View>
            )}
            rightOpenValue={-60}
            keyExtractor={(item) => item.id.toString()}
            onEndReached={this.onEndReached}
            onEndReachedThreshold={0.5}
          />
        </View>
        <Fab style={{ color: "#778899" }} onPress={this.onShowForm}>
          <Icon name="add" />
        </Fab>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  savedata: state.addedUnit.data,
  data: state.Units.data,
  loading: state.Units.loading,
  error: state.Units.error,
  deletedata: state.deletedUnit.data,
  deleteloading: state.deletedUnit.loading,
  deleteerror: state.deletedUnit.error,
});

const mapDispatchToProps = {
  findUnitAll,
  deleteUnitById,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnitsScreen);
