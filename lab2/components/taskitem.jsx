import { View, Text, TouchableOpacity,StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const Taskitem = (props) => {
  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.text}> {props.task}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          props.deleteTask();
        }}
      >
        <MaterialIcons name="delete" size={30} color="purple" />
      </TouchableOpacity>
    </View>
  );
};

const styles= StyleSheet.create({
    container:{
        flexDirection:"row",
        marginTop:50,
    },
    text:{
       marginRight:190 ,
       fontSize:25,
    }

})
