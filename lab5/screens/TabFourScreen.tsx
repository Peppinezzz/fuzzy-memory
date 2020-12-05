import * as React from "react";
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button,
  Platform,
  Image,
  Dimensions,
} from "react-native";
import { SearchBar } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as ImagePicker from "expo-image-picker";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

const variantLayout = (images) => {
  const nthOrNull = (images, index, style) => {
    return images[index] === undefined ? (
      <View style={style} />
    ) : (
      <Image style={style} source={{ uri: images[index].uri }} />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftcolumn}>
        {nthOrNull(images, 0, styles.three)}
        <View style={styles.ones}>
          {nthOrNull(images, 1, styles.one)}
          {nthOrNull(images, 2, styles.one)}
          {nthOrNull(images, 3, styles.one)}
        </View>
      </View>
      <View style={styles.rightcolumn}>
        {nthOrNull(images, 4, styles.two)}
        {nthOrNull(images, 5, styles.two)}
      </View>
    </View>
  );
};

const TabFourScreen = ({ navigation }) => {
  React.useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          alert("Not gonna work");
        }
      }
    })();
  }, []);

  const [images, setImages] = React.useState([]);
  const [id, setId] = React.useState(0);

  return (
    <View style={styles.mainContainer}>
      {variantLayout(images)}
      <Button
        title="Add"
        onPress={async () => {
          const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
          if (!result.cancelled) {
            let new_images = [
              ...images,
              { id: String(id + 1), uri: result.uri },
            ];
            console.log(new_images);
            setId(id + 1);
            setImages(new_images);
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "85%",
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
  leftcolumn: {
    flexDirection: "column",
    width: "80%",
    display: "flex",
  },
  three: {
    height: "75%",
  },
  ones: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    height: "25%",
  },
  one: {
    flex: 1,
  },
  rightcolumn: {
    width: "20%",
    flexDirection: "column",
    display: "flex",
  },
  two: {
    flex: 1,
    height: "50%",
  },
});

export default TabFourScreen;
