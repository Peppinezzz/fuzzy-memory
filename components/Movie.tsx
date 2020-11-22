import * as React from "react";
import { StyleSheet, Image, View, Text } from "react-native";

import Posters from "../assets/images/posters/posters";

export const parseMoviesData = () => {
  const movies_json = require("../assets/movies_list.json");
  const movies = movies_json
    .filter((m) => m.Type == "movie")
    .map((m) => ({
      id: m.imdbID !== "" ? m.imdbID : null,
      title: m.Title !== "" ? m.Title : null,
      year: m.Year !== "" ? Number(m.Year) : null,
      rated: m.Rated !== "" ? m.Rated : null,
      released: m.Released !== "" ? m.Released : null,
      runtime: m.Runtime !== "" ? m.Runtime : null,
      genre: m.Genre !== "" ? m.Genre : null,
      director: m.Director !== "" ? m.Director : null,
      writer: m.Writer !== "" ? m.Writer : null,
      actors: m.Actors !== "" ? m.Actors : null,
      plot: m.Plot !== "" ? m.Plot : null,
      language: m.Language !== "" ? m.Language : null,
      country: m.Country !== "" ? m.Country : null,
      awards: m.Awards !== "" ? m.Awards : null,
      poster: m.Poster !== "" ? m.Poster : null,
      imdbRating: m.imdbRating !== "" ? Number(m.imdbRating) : null,
      imdbVotes: m.imdbVotes !== "" ? m.imdbVotes : null,
      production: m.Production !== "" ? m.Production : null,
    }));
  return movies;
};

export const movieToComponent = (m: any, detailed: bool) => {
  const movieData = m.item;
  if (detailed) {
    return (
      <Movie
        poster={movieData.poster}
        title={movieData.title}
        year={movieData.year}
        imdbId={movieData.imdbId}
        rated={movieData.rated}
        released={movieData.released}
        runtime={movieData.runtime}
        genre={movieData.genre}
        director={movieData.director}
        writer={movieData.writer}
        actors={movieData.actors}
        plot={movieData.plot}
        language={movieData.language}
        country={movieData.country}
        awards={movieData.awards}
        imdbRating={movieData.imdbRating}
        imdbVotes={movieData.imdbVotes}
        production={movieData.production}
      />
    );
  } else {
    return (
      <Movie
        poster={movieData.poster}
        title={movieData.title}
        year={movieData.year}
        imdbId={movieData.imdbId}
      />
    );
  }
};

const wrapText = (text: string) => <Text style={styles.text}>{text}</Text>;

const Movie = (props: any) => {
  const poster = props.poster ? (
    <Image style={{ width: 100, height: 100 }} source={Posters[props.poster]} />
  ) : null;
  const title = props.title ? wrapText(`Title: ${props.title}`) : null;
  const year = props.year ? wrapText(`Year: ${props.year}`) : null;
  const imdbId = props.imdbId ? wrapText(`Imdb ID: ${props.imdbId}`) : null;

  const rated = props.rated && wrapText(`Rated: ${props.rated}`);
  const released = props.released && wrapText(`Released: ${props.released}`);
  const runtime = props.runtime && wrapText(`Runtime: ${props.runtime}`);
  const genre = props.genre && wrapText(`Genre: ${props.genre}`);
  const director = props.director && wrapText(`Director: ${props.director}`);
  const writer = props.writer && wrapText(`Writer: ${props.writer}`);
  const actors = props.actors && wrapText(`Actors: ${props.actors}`);
  const plot = props.plot && wrapText(`Plot: ${props.plot}`);
  const language = props.language && wrapText(`Language: ${props.language}`);
  const country = props.country && wrapText(`Country: ${props.country}`);
  const awards = props.awards && wrapText(`Awards: ${props.awards}`);
  const imdbRating =
    props.imdbRating && wrapText(`Rating: ${props.imdbRating}`);
  const imdbVotes = props.imdbVotes && wrapText(`Votes: ${props.imdbVotes}`);
  const production =
    props.production && wrapText(`Production: ${props.production}`);

  const detailed = (
    <View>
      {rated}
      {released}
      {runtime}
      {genre}
      {director}
      {writer}
      {actors}
      {plot}
      {language}
      {country}
      {awards}
      {imdbRating}
      {imdbVotes}
      {production}
    </View>
  );

  return (
    <View style={styles.container}>
      {poster}
      {title}
      {year}
      {imdbId}
      {detailed}
    </View>
  );
};

export const movies = parseMoviesData();

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
