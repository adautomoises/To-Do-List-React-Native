import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text, Pressable } from "react-native";

export default function ViewList({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Ok. nome da lista é: {route.params?.lista.name}</Text>
      <Text>Ok. index da lista é: {route.params?.index}</Text>

      <Pressable
        title="DELETE"
        onPress={() => {
          route.params?.deleteList(route.params?.index);
          navigation.navigate("Home");
        }}
      >
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={30}
          color="black"
        />
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate("EditList");
        }}
      >
        <MaterialCommunityIcons name="pencil" size={30} color="black" />
      </Pressable>
    </View>
  );
}
