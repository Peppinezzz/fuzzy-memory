import * as React from "react";
import { StyleSheet, TextInput, Switch, Button } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

import { Movie, movieToComponent, movies } from "../components/Movie";

const TabThreeScreen = ({ route, navigation }) => {
  const [title, setTitle] = React.useState("");
  const [type, setType] = React.useState("");
  const [year, setYear] = React.useState("");
  const [imdbId, setImdbId] = React.useState("");
  const [error, setError] = React.useState(null);

  const submitMovie = (id, title, type, year, setError) => {
    if (title === "") {
      setError("Title is empty");
      return;
    }
    if (type !== "Movie") {
      setError("Type is not a Movie");
      return;
    }
    if (year === "") {
      setError("Year is empty");
      return;
    }
    if (Number.isNaN(Number(year))) {
      setError("Year is not a valid year");
      return;
    }
    if (Number(year) > 2099 || Number(year) < 1800) {
      setError("Year is not a valid year");
      return;
    }
    if (movies.find((m) => m.id === id) !== undefined) {
      setError("Id is already taken");
      return;
    }
    if (id === "") {
      setError("Id is empty");
      return;
    }
    setError(null);
    const movie = {
      id: id,
      title: title,
      year: Number(year),
    };

    movies.push(movie);
    console.log("Added a movie");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a new movie</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text>{error}</Text>
      <Text>Title:</Text>
      <TextInput onChangeText={(title) => setTitle(title)} value={title} />
      <Text>Type:</Text>
      <TextInput onChangeText={(type) => setType(type)} value={type} />
      <Text>Release year:</Text>
      <TextInput onChangeText={(year) => setYear(year)} value={year} />
      <Text>Imdb id:</Text>
      <TextInput onChangeText={(imdbId) => setImdbId(imdbId)} value={imdbId} />
      <Button
        title="Submit"
        onPress={(event) => submitMovie(imdbId, title, type, year, setError)}
      />
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

export default TabThreeScreen;
