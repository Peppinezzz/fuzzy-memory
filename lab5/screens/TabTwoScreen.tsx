import * as React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

import { Movie, movieToComponent, movies } from "../components/Movie";

const TabTwoScreen = ({ route, navigation }) => {
  const movieId = route.params !== undefined ? route.params.movieId : null;
  const movie = movieId !== null ? movies.find((m) => m.id === movieId) : null;
  const movieComponent =
    movie !== null ? movieToComponent({ item: movie }, true) : null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      {movieComponent}
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

export default TabTwoScreen;
