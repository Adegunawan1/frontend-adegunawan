import { StyleSheet, Dimensions } from "react-native";

const { width: WIDTH } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold",
  },
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
  logo: {
    width: 120,
    height: 120,
  },
  LogoText: {
    color: "black",
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "500",
    marginTop: 10,
    opacity: 0.5,
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    color: "rgba(255, 255, 255, 0.7)",
    marginHorizontal: 25,
  },
  inputIcon: {
    position: "absolute",
    top: 8,
    left: 37,
  },
  inputContainer: {
    marginTop: 10,
  },
  btnEye: {
    position: "absolute",
    top: 8,
    right: 37,
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    backgroundColor: "#432577",
    justifyContent: "center",
    marginTop: 20,
  },
  header: {
    color: "#fff",
    fontSize: 28,
    borderColor: "#fff",
    borderWidth: 2,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: "rgba(255,2555,255,0.1)",
  },
  header: {
    display: "flex",
  },
  body: {
    display: "flex",
    flexGrow: 2,
  },
  textProfile: {
    fontFamily: "Tinos",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 21,
    lineHeight: 21,
    textAlign: "center",
  },
  iconUser: {
    color: "#97CCB9",
    marginRight: 10,
    height: 70,
  },
  buttonSignOut: {
    width: 150,
    left: 130,
    bottom: 90,
    backgroundColor: "#97CCB9",
    justifyContent: "center",
  },
  textName: {
    fontFamily: "Tinos",
    fontStyle: "normal",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
    paddingRight: 100,
  },
  namePrice: {
    marginLeft: 40,
    fontSize: 20,
    fontFamily: "Tinos",
    fontWeight: "bold",
  },
  textSignOut: {
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
    paddingBottom: 250,
  },
  icon: {
    color: "black",
    fontSize: 14,
    paddingLeft: 190,
  },
  textPay: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  Text: {
    alignItems: "center",
    fontWeight: "bold",
  },
  TextBold: {
    alignItems: "center",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  account: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  image: {
    fontSize: 100,
  },
  iconList: {
    fontSize: 20,
    color: "#97CCB9",
    paddingRight: 20,
  },
  iconProfile: {
    fontSize: 40,
    color: "#97CCB9",
    paddingRight: 20,
  },
  textList: {
    fontSize: 15,
    fontWeight: "bold",
  },
  icon1: {
    color: "black",
    fontSize: 14,
    paddingLeft: 220,
  },
  icon2: {
    color: "black",
    fontSize: 14,
    paddingLeft: 250,
  },
  icon3: {
    color: "black",
    fontSize: 14,
    paddingLeft: 170,
  },
  icon4: {
    color: "black",
    fontSize: 14,
    paddingLeft: 150,
  },
  icon5: {
    color: "black",
    fontSize: 14,
    paddingLeft: 200,
  },
  icon6: {
    color: "black",
    fontSize: 14,
    paddingLeft: 220,
  },

  buttonSave: {
    backgroundColor: "#97CCB9",
    marginTop: 20,
    alignSelf: "center",
    borderRadius: 50,
  },
  textSave: {
    color: "white",
  },
});

export default styles;
