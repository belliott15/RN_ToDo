import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* todays task */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Todays Tasks</Text>
        <View style={styles.item}>{/* this is where the tasks will go */}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BDB9AC",
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
