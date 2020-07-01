import {
  Body,
  Card,
  CardItem,
  Container,
  Content,
  Icon,
  List,
  ListItem,
  View,
} from "native-base";
import React from "react";
import { Text } from "react-native";
import styles from "./style.js";

function HomeScreen({ navigation }) {
  return (
    <Container>
      <Content>
        <Card>
          <CardItem style={styles.header}>
            <Body>
              <View style={styles.profile}>
                <View style={styles.account}>
                  <Icon
                    name="user-circle"
                    type="FontAwesome5"
                    style={styles.iconProfile}
                  />
                  <View>
                    <Text style={styles.textName}>Ade Gunawan</Text>
                  </View>
                </View>
              </View>
            </Body>
          </CardItem>
        </Card>
        <Container>
          <Content>
            <List>
              <ListItem itemDivider>
                <Text>Account</Text>
              </ListItem>
              <ListItem style={{ height: 70 }}>
                <Icon name="pen" type="FontAwesome5" style={styles.iconList} />
                <Text style={styles.textList}>Edit Profile</Text>

                <Icon name="right" type="AntDesign" style={styles.icon1} />
              </ListItem>

              <ListItem itemDivider>
                <Text>About</Text>
              </ListItem>
              <ListItem style={{ height: 70 }}>
                <Icon
                  name="ios-paper"
                  type="Ionicons"
                  style={styles.iconList}
                />
                <Text style={styles.textList}>Terms and Condition</Text>

                <Icon name="right" type="AntDesign" style={styles.icon4} />
              </ListItem>
              <ListItem style={{ height: 70 }}>
                <Icon name="form" type="AntDesign" style={styles.iconList} />
                <Text style={styles.textList}>Privacy Policy</Text>
                <Icon name="right" type="AntDesign" style={styles.icon5} />
              </ListItem>
              <ListItem style={{ height: 70 }}>
                <Icon
                  name="ios-help-circle"
                  type="Ionicons"
                  style={styles.iconList}
                />
                <Text style={styles.textList}>Help Center</Text>

                <Icon name="right" type="AntDesign" style={styles.icon6} />
              </ListItem>
            </List>
          </Content>
        </Container>
      </Content>
    </Container>
  );
}

export default HomeScreen;
