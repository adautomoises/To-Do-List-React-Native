import React from "react";
import {Text, View} from "react-native";
import styles from "./listStyle";

export default function(props) {
  return (
    <View style={styles.list}>
    <Text style={styles.text}>{props.nomedalista}</Text>
    </View>
  )
}