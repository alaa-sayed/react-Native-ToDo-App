import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Inputfield } from './components/inputfield';
import { Taskitem } from "./components//taskitem";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  Switch,
  SectionList,
  FlatList,
  TextInput,
  Keyboard,
  ScrollView,
} from "react-native";
export default function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  };
  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((val, idx) => idx != deleteIndex));
  };
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="purple" />
      <Inputfield addTask={addTask} />

      <ScrollView>
        {tasks.map((task, idx) => {
          return (
            <View>
              <Taskitem
                task={task}
                deleteTask={() => {
                  deleteTask(idx);
                }}
              />
            </View>
          );
        })}
      </ScrollView>

      <View style={styles.btn}>
        <Button
          title="Clear"
          color={"purple"}
          onPress={() => {
            setTasks([]);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "red",
    width: 200,
    color: "black",
    fontSize: 20,
    borderRadius: 24,
    overflow: "hidden",
    margin: 20,
  },
});