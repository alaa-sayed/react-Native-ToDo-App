import { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const Inputfield= (props) => {
  ///task
  const [task, setTask] = useState();
  const handleAddTask = (value) => {
    props.addTask(value);
    setTask(null);
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputField}
        placeholder="Enter your task Here... "
        onChangeText={(txt) => {
          setTask(txt);
        }}
        value={task}
      />

      <TouchableOpacity
        onPress={() => {
          handleAddTask(task);
        }}
      >
        <View style={styles.btn}>
          <MaterialIcons name="keyboard-arrow-down" color="white" size={22} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 120,
    alignItems: "center",
    flexDirection: "row",
  },
  inputField: {
    width: "80%",
    borderWidth: 2,
    marginVertical: 20,
    marginLeft: 8,
    padding: 8,
    borderRadius: 18,
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "purple",
    width: 50,
    height: 50,
    borderRadius: 20,
    margin: 6,
  },
});
