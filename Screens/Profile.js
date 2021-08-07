import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  useWindowDimensions,
  TouchableOpacity,
  TextInput,
  Modal,
  Alert,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { Avatar } from "react-native-paper";
import Constants from "expo-constants";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Profile({ navigation }) {
  const { width } = useWindowDimensions();
  const [newname, setnewname] = useState("User");
  const [showmodal, setmodal] = useState(false);
  const [newnumber, setnewnumber] = useState("+XX XXXXXXXXXX");
  const [image, setImage] = useState("../assets/profileAvatar.png");
  const [Address, setAddress] = useState("Address");

  return (
    <View style={Styles.container}>
      <KeyboardAvoidingView behavior="height">
        <View style={{ width, paddingLeft: 20, paddingTop: 20 }}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon name="menu" size={25} color="white" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {image == "../assets/profileAvatar.png" ? (
              <Avatar.Image
                size={150}
                source={require("../assets/profileAvatar.png")}
              />
            ) : (
              <Avatar.Image size={150} source={{ uri: image }} />
            )}
          </View>
        </TouchableOpacity>

        <View
          style={{
            backgroundColor: "#fff",

            marginTop: 20,
            width,
            height: 600,
            alignItems: "center",
          }}
        >
          <Text style={{ margin: 20, fontWeight: "bold", fontSize: 20 }}>
            Hello {newname}
          </Text>
          <View
            style={{
              padding: 5,
              width: width / 1.2,
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Text>Edit Name</Text>
          </View>
          <View style={[Styles.inputView, { width: width / 1.2 }]}>
            <TextInput
              style={[Styles.TextInput, { width: "80%" }]}
              editable
              value={newname}
              onChangeText={(text) => {
                setnewname(text);
              }}
            />
            <Icon name="create" size={20} />
          </View>
          <View
            style={{
              padding: 5,
              width: width / 1.2,
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Text>Edit Number</Text>
          </View>
          <View style={[Styles.inputView, { width: width / 1.2 }]}>
            <TextInput
              style={[Styles.TextInput, { width: "80%" }]}
              editable
              value={newnumber}
              onChangeText={(number) => {
                setnewnumber(number);
              }}
            />
            <Icon name="create" size={20} />
          </View>
          <View
            style={{
              padding: 5,
              width: width / 1.2,
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Text>Edit Address</Text>
          </View>
          <View style={[Styles.inputView, { width: width / 1.2 }]}>
            <TextInput
              style={[Styles.TextInput, { width: "80%" }]}
              editable
              value={Address}
              onChangeText={(text) => {
                setAddress(text);
              }}
            />
            <Icon name="create" size={20} />
          </View>

          <TouchableOpacity style={[Styles.loginBtn, { width: width / 1.2 }]}>
            <Text style={Styles.loginText}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#014b78",
  },
  container1: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  inputView: {
    backgroundColor: "#f1f1f1",
    borderRadius: 8,
    width: 300,
    height: 45,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingRight: 5,
  },
  loginBtn: {
    borderRadius: 8,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#014b78",
  },

  loginText: {
    color: "#f1f1f1",
  },

  TextInput: {
    height: 50,
  },
});
