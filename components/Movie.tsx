import * as React from "react";
import { StyleSheet, Image, View, Text } from "react-native";

import Posters from "../assets/images/posters/posters";

const Movie = (props: any) => {
  const poster = props.poster ? (
    <Image style={{ width: 100, height: 100 }} source={Posters[props.poster]} />
  ) : null;
  const title = props.title ? (
    <Text style={styles.text}>Title: {props.title}</Text>
  ) : null;
  const year = props.year ? (
    <Text style={styles.text}>Year: {props.year}</Text>
  ) : null;
  const imdbId = props.imdbId ? (
    <Text style={styles.text}>Imdb ID: {props.imdbId}</Text>
  ) : null;
  return (
    <View style={styles.container}>
      {poster}
      {title}
      {year}
      {imdbId}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 25,
  },
  text: {
    fontSize: 14,
    color: "#FCFCFC",
  },
});

export default Movie;
