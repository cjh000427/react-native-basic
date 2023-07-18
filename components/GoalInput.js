import React, { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const GoalInput = (props) => {
  const [enteredGaolText, setEnteredGaolText] = useState("");

  //사용자가 내용을 입력할 때 해당 입력값을 가져오는 함수
  const goalInputHandler = (enteredText) => {
    // console.log(enteredText);
    setEnteredGaolText(enteredText);
  };

  function addGoalHandler() {
    props.onAddGoal(enteredGaolText);
    setEnteredGaolText("");
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/goal.png")} />
        <TextInput
          style={styles.textInput}
          placeholder='죽을사람 이름...'
          onChangeText={goalInputHandler}
          value={enteredGaolText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='죽기...!' onPress={addGoalHandler} color='#b180f0' />
          </View>
          <View style={styles.button}>
            <Button title='취소' onPress={props.onCancel} color='#f31282' />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 150,
    height: 150,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "80%",
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: "20%",
    marginHorizontal: 8,
  },
});
