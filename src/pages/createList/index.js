import styles from "./style";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView, View, TextInput, Button, Pressable } from "react-native";
import React, {useState} from "react";


export default function CreateList({ route, navigation }) {
  const [text, onChangeText] = useState();
  // const [number, onChangeNumber] = useState(null);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TextInput
        style={styles.inputCreate}
        onChangeText={onChangeText}
        value={text}
        placeholder="Nome da Lista"
      />
      {/* <TextInput
          style={styles.inputCreate}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Teclado Numérico"
          keyboardType="numeric"
        /> */}
      <View>
        <Pressable style={styles.createButton}
          title="CREATE"
          onPress={() => {
            route.params?.addList(text);
            navigation.navigate("Home");
          }}>
            <AntDesign name="check" size={40} color="black" />
          </Pressable>
      </View>
    </SafeAreaView>
  );
}
