import { AntDesign } from "@expo/vector-icons";
import List from "../../../components/list";
import styles from "./style";
import {SafeAreaView,ScrollView,View,Text,Pressable,ImageBackground} from "react-native";
import React , {useState, useEffect} from "react";

export default function Home({ navigation }) {

  const [, setListas] = useState();
  const [itemListas, setItemListas] = useState([]);
  const addList = (text) => {
    setItemListas((oldItemListas) => [...oldItemListas, { name: text }]);
    setListas(null);
    navigation.navigate("Create List")
  };
  const deleteList = (index) => {
    let listCopy = [...itemListas];
    listCopy.splice(index, 1);
    setItemListas(listCopy);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, paddingTop: 50, backgroundColor: "#8ECAE6" }}>
        <ScrollView>
          {!itemListas.length ? (
            <View style={styles.containerBackground}>
              <ImageBackground
                source={require("../../../assets/heart-broken.png")}
                resizeMode="cover"
                style={styles.ImageBackground}
              ></ImageBackground>
              <Text style={styles.text}>Ainda sem listas por aqui...</Text>
            </View>
          ) : (
            <View style={styles.containerList}>
              {itemListas.map((lista, index) => {
                return (
                  <Pressable
                    key={index}
                    onPress={() =>
                        navigation.navigate("View List", {lista, index})
                    }
                  >
                    <List nomedalista={lista.name} />
                  </Pressable>
                );
              })}
            </View>
          )}
        </ScrollView>
        <View style={styles.footer}>
          <Pressable
            onPress={() => {
              addList()
            }}
          >
            <AntDesign name="pluscircle" size={48} color="#219EBC" />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}