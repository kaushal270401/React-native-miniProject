import { useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { UsersContext } from "../../context";
import GlobalStyles from "../styles/GlobalStyles";

const Detail = ({ navigation, route }) => {
  const person = useContext(UsersContext);
  const { itemId } = route.params;
  const [user, setUser] = useState({});
  
  

  
  useEffect(()=>{
    const filteredPerson = person.users.find((person) => person.id === itemId);
    setUser(filteredPerson);
  },[itemId])


  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={GlobalStyles.image}
          source={{ uri: `${user.avatar}` }}
        />
      </View>
      <View style={styles.name}>
        <Text style={GlobalStyles.header}>Profile</Text>
        <Text style={GlobalStyles.user}>Name : {user.first_name}</Text>
        <Text style={GlobalStyles.user}>LastName: {user.last_name}</Text>
        <Text style={GlobalStyles.user}>Email : {user.email}</Text>
      </View>
      <Pressable onPress={() => navigation.navigate("Home")}>
        <View style={GlobalStyles.button}>
          <Text style={GlobalStyles.btnTxt}>Go Back</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "rgb(210, 230, 255)",
  },
  name: {
    bottom: 40,
  },
});









































//  <View>
//       {person.users
//         .find()
//         .map((filteredPerson) => (
//           <SafeAreaView style={styles.container} key={filteredPerson.id}>
//             <View>
//               <Image
//                 style={GlobalStyles.image}
//                 source={{ uri: `${filteredPerson.avatar}` }}
//               />
//             </View>
//             <View style={styles.name}>
//               <Text style={GlobalStyles.header}>Profile</Text>
//               <Text style={GlobalStyles.user}>
//                 Name : {filteredPerson.first_name}
//               </Text>
//               <Text style={GlobalStyles.user}>
//                 LastName: {filteredPerson.last_name}
//               </Text>
//               <Text style={GlobalStyles.user}>
//                 Email : {filteredPerson.email}
//               </Text>
//             </View>
//             <Pressable onPress={() => navigation.navigate("Home")}>
//               <View style={GlobalStyles.button}>
//                 <Text style={GlobalStyles.btnTxt}>Go Back</Text>
//               </View>
//             </Pressable>
//           </SafeAreaView>
//         ))}
//     </View>



