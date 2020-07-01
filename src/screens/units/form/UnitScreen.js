import React, { Component } from "react";
import {
  Button,
  Container,
  View,
  Content,
  Text,
  Form,
  Label,
  Item,
  Input,
  Toast,
  Thumbnail,
  Body,
} from "native-base";
import { CommonHeader } from "../../../components/CommonHeader";
import { findUnitById, saveUnit } from "../../../actions/units";
import { connect } from "react-redux";
import styles from "./styles";

class UnitScreen extends Component {
  constructor(props) {
    super(props);

    const { route } = this.props;
    this.state = {
      id: route.params?.id,
      firstName: "",
      lastName: "",
      age: 0,
      photo: "",
    };
  }

  componentDidMount() {
    const { id } = this.state;
    if (id) {
      this.props.findUnitById(this.state.id);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { navigation, data, error, saveerror, savedata } = this.props;

    if (prevProps.data !== data) {
      this.setState({
        ...data.data,
      });
    } else if (prevProps.savedata !== savedata) {
      navigation.goBack();
      Toast.show({
        text: savedata.message,
        buttonText: "OK",
        type: "success",
      });
    } else if (error && prevProps.error !== error) {
      Toast.show({
        text: error.message,
        buttonText: "OK",
        type: "danger",
      });
    } else if (saveerror && prevProps.saveerror !== saveerror) {
      Toast.show({
        text: saveerror.message,
        buttonText: "OK",
        type: "danger",
      });
    }
  }

  onChange = (firstName, value) => {
    this.setState({ [firstName]: value });
  };

  onSubmit = () => {
    this.props.saveUnit(this.state);
  };

  render() {
    const { navigation, loading, saveerror } = this.props;
    const { firstName, lastName, age, photo } = this.state;
    const errordata = saveerror?.data;
    return (
      <Container>
        <CommonHeader navigation={navigation} title={"Edit Contact"} />

        <Content style={{ marginTop: 30 }}>
          <Body>
            <Thumbnail large source={{ uri: photo }} />
          </Body>
          <Form>
            <View>
              <Item floatingLabel>
                <Label>First Name</Label>
                <Input
                  style={styles.input}
                  value={firstName}
                  onChangeText={(value) => this.onChange("firstName", value)}
                />
              </Item>
              <Item floatingLabel>
                <Label>Last Name</Label>
                <Input
                  style={styles.input}
                  value={lastName}
                  onChangeText={(value) => this.onChange("lastName", value)}
                />
              </Item>
              <Item floatingLabel>
                <Label>Age</Label>
                <Input
                  style={styles.input}
                  value={age.toString()}
                  onChangeText={(value) => this.onChange("age", value)}
                  keyboardType={"numeric"}
                />
              </Item>
              <Item floatingLabel>
                <Label>Photo</Label>
                <Input
                  style={styles.input}
                  value={photo}
                  onChangeText={(value) => this.onChange("photo", value)}
                />
              </Item>
            </View>

            <Button
              style={styles.button}
              full
              onPress={this.onSubmit}
              disabled={loading}
            >
              <Text>Save</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.UnitById.data,
  loading: state.UnitById.loading,
  error: state.UnitById.error,
  savedata: state.addedUnit.data,
  saveloading: state.addedUnit.loading,
  saveerror: state.addedUnit.error,
});

const mapDispatchToProps = {
  findUnitById,
  saveUnit,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnitScreen);
