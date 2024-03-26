import React, { useState } from "react";
import { TextInput, Button, Alert, View } from "react-native";
import * as MailComposer from "expo-mail-composer";

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
  },
  input: {
    backgroundColor: "#2F2F2F",
    margin: 10,
    padding: 10,
    borderRadius: 5,
    height: 250,
  },
});

const FeedbackScreen = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSendFeedback = () => {
    if (title.trim() === "" || message.trim() === "") {
      Alert.alert("Error", "Please enter a title and message");
      return;
    }

    const emailSubject = `Feedback: ${title}`;
    const emailBody = message;

    MailComposer.composeAsync({
      recipients: ["your-email@example.com"],
      subject: emailSubject,
      body: emailBody,
    })
      .then((result) => {
        if (result.status === "sent") {
          Alert.alert("Success", "Feedback sent successfully");
          setTitle("");
          setMessage("");
        } else {
          Alert.alert("Error", "Failed to send feedback");
        }
      })
      .catch((error) => {
        Alert.alert("Error", "Failed to send feedback");
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          placeholder="Title:"
          value={title}
          onChangeText={setTitle}
          placeholderTextColor="#FFFFFF"
          style={{ fontSize: 16, color: "white" }}
        />
        <View style={{ width: 390, borderWidth: 0.4, borderColor: "white", marginBottom: 5, marginTop: 8 }} />
        <TextInput
          placeholder="Message:"
          value={message}
          onChangeText={setMessage}
          placeholderTextColor="#FFFFFF"
          multiline
          style={{ fontSize: 16, color: "white" }}
        />
        <View style={{ margin: 90 }} />
        <Button title="Send" onPress={handleSendFeedback} />
      </View>
    </View>
  );
};

export default FeedbackScreen;
