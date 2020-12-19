import * as React from "react";
import { StyleSheet, FlatList, TouchableOpacity, Button } from "react-native";
import { SearchBar } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

import { Movie, movies, movieToComponent } from "../components/Movie";

const wrapMovieWithLink = (navigation, renderElement) => {
  return (m) => {
    const movie = renderElement(m, false);
    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Root", {
              screen: "TabTwo",
              params: {
                screen: "TabTwoScreen",
                params: {
                  movieId: m.item.id,
                },
              },
            })
          }
        >
          {movie}
        </TouchableOpacity>
        <Button
          title="Delete"
          onPress={() => {
            const movieValue = movies.find((mov) => mov.id === m.item.id);
            const movieIndex = movies.indexOf(movieValue);
            movies.splice(movieIndex, 1);
            navigation.navigate("Root", {
              screen: "TabOne",
              params: {
                screen: "TabOneScreen",
                params: {
                  removedMovieId: m.item.id,
                },
              },
            });
          }}
        />
      </View>
    );
  };
};

const TabOneScreen = ({ navigation }) => {
  const [search, setSearch] = React.useState("");

  const renderMovies = movies.filter((m) => m.title.includes(search));

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search for movies..."
        onChangeText={(search) => setSearch(search)}
        value={search}
      />
      <Text style={styles.title}>Some movies for you</Text>
      {renderMovies.length !== 0 ? (
        <FlatList
          data={renderMovies}
          renderItem={wrapMovieWithLink(navigation, movieToComponent)}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text>No movies found</Text>
      )}
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

export default TabOneScreen;
