import * as React from "react";
import { StyleSheet, FlatList } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

import Movie from "../components/Movie";

const parseMoviesData = () => {
  const movies_json = require("../assets/movies_list.json");
  const movies = movies_json.Search.filter((m) => m.type == "movie").map(
    (m) => ({
      title: m.title !== "" ? m.title : null,
      year: m.year !== "" ? Number(m.year) : null,
      imdbId: m.imdbID !== "" ? m.imdbID : null,
      poster: m.poster !== "" ? m.poster : null,
    })
  );
  return movies;
};

const movieToComponent = (m: any) => {
  const movieData = m.item;
  return (
    <Movie
      poster={movieData.poster}
      title={movieData.title}
      year={movieData.year}
      imdbId={movieData.imdbId}
    />
  );
};

export default function TabOneScreen() {
  const movies = parseMoviesData();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Some movies for you</Text>
      <FlatList
        data={movies}
        renderItem={movieToComponent}
        keyExtractor={(item) => item.imdbId}
      />
    </View>
  );
}

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
