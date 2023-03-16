import { useContext, useEffect, useState } from "react";
import { ActivityIndicator, Pressable, ScrollView } from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import { UsersContext } from "../../context";
import {
  FlatList,
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
} from "react-native";

export default function Home({ navigation }) {
  const person = useContext(UsersContext);

  return (
    <SafeAreaView>
      <View style={GlobalStyles.headerbar}>
        <Text style={GlobalStyles.Txt}>Users</Text>
      </View>
      {person.isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={person.users}
          renderItem={({ item }) => (
            
            <ScrollView>
              <View style={GlobalStyles.card}>
                <Image
                  style={GlobalStyles.img}
                  source={{ uri: `${item.avatar}` }}
                />
                <View style={styles.name}>
                  <Text style={GlobalStyles.user_name}>{item.first_name}</Text>
                  <Text style={GlobalStyles.user_name}>{item.last_name}</Text>
                </View>
                <Pressable
                  onPress={() =>
                    navigation.navigate("Detail", { itemId: item.id })
                  }
                >
                  <View style={GlobalStyles.button}>
                    <Text style={GlobalStyles.btnTxt}>Show Profile</Text>
                  </View>
                </Pressable>
              </View>
            </ScrollView>
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  name: {
    flex: 1,
    flexDirection: "row",
  },
});


