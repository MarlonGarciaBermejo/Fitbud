import React from "react";
import { View, Text, Button } from "react-native";

const CompletionScreen = ({ onFinish }) => {
  return (
    <View>
      <Text>Congratulations, you completed your workout!</Text>
      <Button title="Finish" onPress={onFinish} />
    </View>
  );
};

export default CompletionScreen;
