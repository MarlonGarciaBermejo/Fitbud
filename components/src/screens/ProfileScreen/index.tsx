import React, { useEffect, useState } from "react";
import { View, Image, Text, Button, StyleSheet, StyleProp } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { FIREBASE_AUTH } from "../../../../FireBaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UpperBodyEasyScreen from "../../screens/UpperBodyEasyScreen";
import UpperBodyHardScreen from "../UpperBodyHardScreen";
import LowerBodyEasyScreen from "../LowerBodyEasyScreen";
import LowerBodyHardScreen from "../LowerBodyHardScreen";
import CoreEasyScreen from "../CoreEasyScreen";
import CoreHardScreen from "../CoreHardScreen";
import { useNavigation } from "@react-navigation/native";

export default function ProfilePage() {
  const [image, setImage] = useState("https://via.placeholder.com/150");
  const [upperBodyEasyCount, setUpperBodyEasyCount] = useState(5);
  const [upperBodyHardCount, setUpperBodyHardCount] = useState(10);
  const [lowerBodyEasyCount, setLowerBodyEasyCount] = useState(5);
  const [lowerBodyHardCount, setLowerBodyHardCount] = useState(3);
  const [coreEasyCount, setCoreEasyCount] = useState(10);
  const [coreHardCount, setCoreHardCount] = useState(12);
  const navigation = useNavigation();

  useEffect(() => {
    AsyncStorage.getItem("imageUri").then((storedImageUri) => {
      console.log(storedImageUri);
      if (storedImageUri) {
        setImage(storedImageUri);
      }
    });
  }, []);

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      console.log(result);

      if (result && !result.canceled && result.assets && result.assets.length > 0) {
        console.log(result.assets[0].uri);
        setImage(result.assets[0].uri);
        AsyncStorage.setItem("imageUri", result.assets[0].uri)
          .then(() => console.log("Image URI saved"))
          .catch((error) => console.error(error)); // Logs any error
      }
    } catch (error) {
      console.error(error);
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#202020",
      alignItems: "center",
    },
    userStyle: {
      color: "white",
      textAlign: "center",
      fontWeight: "500",
      fontSize: 19,
      marginTop: 10,
      marginLeft: 10,
      alignItems: "center",
    },
    viewStyle: {
      backgroundColor: "#2F2F2F",
      width: 380,
      height: 200,
      marginTop: 10,
      borderRadius: 15,
    },
  });

  const user = FIREBASE_AUTH.currentUser;
  const username = user ? user.email : "";

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Button title="+" color="white" onPress={pickImage} />
        {image && <Image key={image} source={{ uri: image }} style={{ width: 150, height: 150, borderRadius: 100 }} />}
        <Text style={styles.userStyle}>{username}</Text>
      </View>
      <Text style={{ color: "white", paddingRight: 270, paddingTop: 45, fontWeight: "500", fontSize: 15 }}>
        Activity feed
      </Text>
      <View style={{ ...styles.viewStyle, marginTop: 8 }}>
        <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
          <View style={{ paddingRight: 20, marginLeft: 20 }}>
            <Text style={{ color: "white", paddingTop: 5, fontSize: 16, fontWeight: "500" }}>UpperBody</Text>
            <Text style={{ color: "white", paddingTop: 20, marginLeft: -15, fontSize: 16 }}>
              Easy: <Text style={{ color: "#0085FF" }}>{upperBodyEasyCount}</Text>
            </Text>
            <Text style={{ color: "white", paddingTop: 20, marginLeft: -15, fontSize: 16 }}>
              Hard: <Text style={{ color: "#0085FF" }}>{upperBodyHardCount}</Text>
            </Text>
          </View>
          <View style={{ height: 200, borderLeftWidth: 0.5, borderLeftColor: "white", paddingLeft: 35 }} />
          <View style={{ paddingRight: 25 }}>
            <Text style={{ color: "white", paddingTop: 5, fontSize: 16, fontWeight: "500" }}>LowerBody</Text>
            <Text style={{ color: "white", paddingTop: 20, marginLeft: -30, fontSize: 16 }}>
              Easy: <Text style={{ color: "#0085FF" }}>{lowerBodyEasyCount}</Text>
            </Text>
            <Text style={{ color: "white", paddingTop: 20, marginLeft: -30, fontSize: 16 }}>
              Hard:<Text style={{ color: "#0085FF" }}>{lowerBodyHardCount}</Text>
            </Text>
          </View>
          <View style={{ height: 200, borderLeftWidth: 0.5, borderLeftColor: "white", paddingLeft: 40 }} />
          <View>
            <Text style={{ color: "white", paddingTop: 5, fontSize: 16, fontWeight: "500" }}>Core</Text>
            <Text style={{ color: "white", paddingTop: 20, marginLeft: -30, fontSize: 16 }}>
              Easy: <Text style={{ color: "#0085FF" }}>{coreEasyCount}</Text>
            </Text>
            <Text style={{ color: "white", paddingTop: 20, marginLeft: -30 }}>
              Hard: <Text style={{ color: "#0085FF" }}>{coreHardCount}</Text>
            </Text>
          </View>
        </View>
      </View>
      <UpperBodyEasyScreen setUpperBodyEasyCount={setUpperBodyEasyCount} navigation={navigation} />
    </View>
  );
}
