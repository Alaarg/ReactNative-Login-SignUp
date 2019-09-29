import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Form,
  Image,
  TextInput,
  Button,
  signUpBttn
} from "react-native";
import axios from "axios";

export default class Login extends Component {
  state = {
    // users: [],
    inpUserName: "",
    inpPassword: ""
  };

  loginBttn = () => {
    const userName = this.state.inpUserName;
    const password = this.state.inpPassword;
    const user = { userName, password };

    console.log("user", user);

    axios
      .post("http://10.60.242.77:9000/auth", user)
      .then(res => {
        if (res.data.length) {
          alert("user exissist ");
        } else {
          alert("password and username do not match");
        }

        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  UserName = inputText => {
    this.setState({ inpUserName: inputText });
  };

  password = inputText => {
    this.setState({ inpPassword: inputText });
  };

  // LoginButton = () => {
  //   const usernName = this.state.inpUserName;
  //   const password = this.state.inpPassword;
  //   const user = { usernName, password };

  //   console.log(user);

  //   // this.state.users.map((x, index) => {
  //   //   if (x.userName === this.state.inpUserName) {
  //   //     return alert("you login in");
  //   //   } else {
  //   //     alert("no");
  //   //   }
  //   // });
  // };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Image
            style={{ width: 150, height: 150 }}
            source={require("./search.png")}
          />
          <Text style={styles.formHeader}> مفقوداتكم</Text>
          <Text> تسجيل الدخول</Text>
          <TextInput
            style={{
              borderColor: "#3c1053",
              borderBottomWidth: 1,
              width: "80%",
              marginVertical: 10
            }}
            onChangeText={Text => this.UserName(Text)}
            placeholder="اسم المستخدم"
            textContentType="name"
          />
          <TextInput
            style={{
              borderColor: "#3c1053",
              borderBottomWidth: 1,
              width: "80%",
              marginVertical: 10
            }}
            onChangeText={Text => this.password(Text)}
            placeholder="كلمة السر "
            textContentType="password"
          />
          <Button title="دخول" onPress={this.loginBttn} />
          <Text
            style={{ marginVertical: 10 }}
            onPress={() => navigate("SignUp")}
          >
            لا يوجد لديك حساب !! انشاء حساب الأن
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3c1053"
  },
  form: {
    color: "#fff",
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 5,
    alignItems: "center"
  },
  formHeader: {
    textAlign: "center",
    fontSize: 30
  }
});
