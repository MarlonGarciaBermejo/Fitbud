import React, { useEffect, useState } from "react";
import { View, Image, Text, Button, StyleSheet, StyleProp } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { FIREBASE_AUTH } from "../../../../FireBaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#202020",
    alignItems: "center",
  },
  style: {
    color: "white",
    textAlign: "center",
    fontWeight: "400",
    fontSize: 20,
    marginTop: 20,
    marginLeft: 10,
  },
};

export default function ProfilePage() {
  const [image, setImage] = useState("https://via.placeholder.com/150");

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
          .catch((error) => console.error(error)); // log any error
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
    style: {
      color: "white",
      textAlign: "center",
      fontWeight: "400",
      fontSize: 20,
      marginTop: 20,
      marginLeft: 10,
      alignItems: "center",
    },
  });

  const user = FIREBASE_AUTH.currentUser;
  const username = user ? user.email : "";

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Button title="+" onPress={pickImage} />
        {image && <Image key={image} source={{ uri: image }} style={{ width: 200, height: 200, borderRadius: 100 }} />}
        <Text style={{ ...styles.style, fontWeight: "500" }}>{username}</Text>
      </View>
    </View>
  );
}
