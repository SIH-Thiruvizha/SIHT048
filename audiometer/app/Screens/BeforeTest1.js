import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import {
  DefaultTheme,
  Provider as PaperProvider,
  Button,
  ProgressBar,
} from "react-native-paper";
// import './locales/i18n';
import { useTranslation } from "react-i18next";
import { useLocalSearchParams } from "expo-router";
import { router } from "expo-router";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#EB455F",
    accent: "#f1c40f",
  },
};

const BeforeTest1 = () => {
  const [loudness, setLoudness] = useState(40);
  const params = useLocalSearchParams();
  console.log(params);
  const handleLoudnessChange = (value) => {
    setLoudness(value);
  };
  const { t, i18n } = useTranslation();
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <ProgressBar progress={0.3} color={"#2B3467"} style={{ margin: 15 }} />
        <Text style={styles.title}>{t("Make sure..")}</Text>
        <View
          style={{
            flexDirection: "row",
            margin: "auto",
            justifyContent: "space-evenly",
          }}
        >
          <View style={{ padding: 0, margin: 0, width: "50%" }}>
            <Image
              style={styles.image1}
              source={require("../assets/images/shh.png")}
              resizeMode="cover"
            />
            <Text style={styles.title2}>{t("Quiet Place")}</Text>
          </View>

          <View style={{ padding: 0, margin: 0, width: "50%" }}>
            <Image
              style={styles.image2}
              source={require("../assets/images/headphones.png")}
              resizeMode="cover"
            />
            <Text style={styles.title2}>{t("Headphones")}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            margin: "auto",
            justifyContent: "space-evenly",
          }}
        >
          <View style={{ padding: 0, margin: 0, width: "50%" }}>
            <Image
              style={styles.image1}
              source={require("../assets/images/mute.png")}
              resizeMode="cover"
            />
            <Text style={styles.title2}>{t("Notifications Off")}</Text>
          </View>

          <View style={{ padding: 0, margin: 0, width: "50%" }}>
            <Image
              style={styles.image2}
              source={require("../assets/images/equalizer.png")}
              resizeMode="cover"
            />
            <Text style={styles.title2}>{t("Equalizer Neutral")}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <View style={{ padding: 0, margin: 0, width: "50%" }}>
            <Image
              style={styles.image1}
              source={require("../assets/images/silence.png")}
              resizeMode="cover"
            />
            <Text style={styles.title2}>{t("No Talking")}</Text>
          </View>

          <View style={{ padding: 0, margin: 0, width: "50%" }}>
            <Image
              style={styles.image2}
              source={require("../assets/images/noise-pollution.png")}
              resizeMode="cover"
            />
            <Text style={styles.title2}>{t("Noise-Cancel Off")}</Text>
          </View>
        </View>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => {
            router.push({
              pathname: "/Screens/QuietPlaceDetection",
              params: {
                resulttype: params.resulttype,
                AID: params.AID,
                CID: params.CID,
              },
            });
          }}
        >
          <Text style={styles.buttonText}>{t("Next")}</Text>
        </Button>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1, // Ensure content can scroll
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 24,
    justifyContent: "flex-start",
    borderColor: "white",
    borderWidth: 5,
    borderRadius: 10,
  },
  sliderContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 50,
  },
  sliderLabel: {
    fontSize: 15,
    color: "white",
  },
  sliderLabel1: {
    fontSize: 15,
    color: "red",
  },
  slider: {
    flex: 1,
    width: "100%",
  },
  image1: {
    width: 90,
    height: 90,
    alignContent: "center",
    alignSelf: "center",
    marginBottom: 10,
  },
  image3: {
    width: 140,
    height: 140,
    alignContent: "center",
    alignSelf: "center",
    marginBottom: 10,
  },
  image2: {
    width: 83,
    height: 83,
    alignContent: "center",
    alignSelf: "center",
    marginBottom: 15,
  },
  title: {
    fontSize: 28,
    marginBottom: 65,
    textAlign: "center",
    fontWeight: "bold",
  },
  title2: {
    fontSize: 18,
    fontWeight: "bold",
    alignContent: "center",
    alignSelf: "center",
    marginBottom: 50,
  },
  subtitle: {
    fontSize: 15,
    color: "white",
    marginBottom: 10,
    textAlign: "left",
  },
  button: {
    marginTop: "auto", // Push the button to the bottom
    paddingVertical: 15,
    width: "100%",
    borderColor: "white",
  },
  educatorContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  educatorText: {
    color: "white",
    marginBottom: 10,
  },
  educatorButton: {
    backgroundColor: "#0096FF", // Greenish Yellow
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },

  input: {
    height: 40,
    borderColor: "white",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: "100%",
    color: "white",
    fontStyle: "italic",
  },
});

export default BeforeTest1;
