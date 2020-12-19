import * as React from "react";
import { Dimensions } from "react-native";
import { LineChart, PieChart } from "react-native-chart-kit";

import { Text, View } from "../components/Themed";

const sampleFunction = (from_: number, to: number) => {
  const data = {
    labels: [],
    datasets: [{ data: [] }],
  };
  for (let i = from_; i <= to; i++) {
    data.labels.push(i);
    data.datasets[0].data.push(i * i * i);
  }
  return data;
};

const TabFiveScreen = ({ navigation }) => {
  const data = sampleFunction(-5, 5);

  return (
    <View>
      <LineChart
        data={data}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel=""
        yAxisSuffix=""
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: "#81a1c1",
          backgroundGradientFrom: "#434c5e",
          backgroundGradientTo: "#4c566a",
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "0",
            strokeWidth: "2",
            stroke: "#a3be8c",
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      <PieChart
        data={[
          {
            name: "orange",
            percentage: 30,
            color: "#d08770",
            legendFontColor: "#ECEFF4",
          },
          {
            name: "green",
            percentage: 30,
            color: "#a3be8c",
            legendFontColor: "#ECEFF4",
          },
          {
            name: "black",
            percentage: 40,
            color: "#2e3440",
            legendFontColor: "#ECEFF4",
          },
        ]}
        accessor={"percentage"}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        bgColor={"transparent"}
        chartConfig={{
          backgroundColor: "#2e3440",
          backgroundGradientFrom: "#4c566a",
          backgroundGradientTo: "#3b4252",
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "0",
            strokeWidth: "2",
            stroke: "#a3be8c",
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default TabFiveScreen;
