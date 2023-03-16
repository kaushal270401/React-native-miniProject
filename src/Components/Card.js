import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
const Card = (props) => {
  // const { item } = props;
  <ScrollView>
    <View style={styles.card}>
      <Image style={styles.img} source={{ uri: `${props.image}` }} /> 
       <View style={styles.name}>
        <Text style={styles.user_name}>{props.name}</Text>
        <Text style={styles.user_name}>{props.lastname}</Text>
      </View>
      {/* <Pressable
        onPress={() => navigation.navigate("Detail", { item: { ...item } })}
      >
        <View style={styles.button}>
          <Text style={styles.btnTxt}>Show Profile</Text>
        </View>
      </Pressable>  */}
    </View>
  </ScrollView>;
};
export default Card;

const styles = StyleSheet.create({
  button: {
    fontWeight: "bold",
    color: "white",
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 50,
    marginHorizontal: 5,
  },
  card: {
    padding: 10,
    margin: 3,
    backgroundColor: "rgb(210, 230, 255)",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    flex: 1,
    flexDirection: "row",
  },
  user_name: {
    fontSize: 16,
    // marginRight: 3,
  },
  btnTxt: {
    color: "white",
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: "50%",
    marginHorizontal: 10,
  },
});
