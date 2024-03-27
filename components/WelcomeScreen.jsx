import React, { useState } from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, useColorScheme, useWindowDimensions, View } from "react-native"
import { useDeviceOrientation } from "@react-native-community/hooks"
import { useClipboard } from "native-base" 

export default function WelcomeScreen() {
  const colorScheme = useColorScheme()
  const window = useWindowDimensions()
  const orientation = useDeviceOrientation()
  const { value, onCopy } = useClipboard()
  const [ counter, setCounter ] = useState(0)

  return (
    <ScrollView
      indicatorStyle={"white"}
      style={[
        styles.container,
        colorScheme === "light"
          ? { backgroundColor: "#FFF" }
          : { backgroundColor: "#333333" },
      ]}
    >
      <Image
        style={styles.logo}
        source={require("../img/littleLemonLogo.png")}
        accessible={true}
        accessibilityLabel="Little Lemon Logo"
      />
      <Text style={styles.regular}>Color scheme: {colorScheme}</Text>
      <Text style={styles.regular}>Height: {window.height}</Text>
      <Text style={styles.regular}>Width: {window.width}</Text>
      <Text style={styles.regular}>Font scale: {window.fontScale}</Text>

      <Text>Orientation: {orientation}</Text>

      <Text>Clipboard data: {value}</Text>
      <Button
        title="Update clipboard"
        onPress={() => {
          setCounter(() => counter + 1)
          onCopy("new value: " + counter)
        }}
      >
        Set clipboard
      </Button>

      <Text
        style={[
          styles.textBody,
          colorScheme === "light"
            ? { color: "#333333" }
            : { color: "#FFF" },
        ]}
      >
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us!
      </Text>
      <View style={styles.gridContainer}>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={require("../img/picture1.png")}
            resizeMode="cover"
            accessible={true}
            accessibilityLabel={"Little Lemon image 1"}
          />
          <Image
            style={styles.image}
            source={require("../img/picture2.png")}
            resizeMode="cover"
            accessible={true}
            accessibilityLabel={"Little Lemon image 2"}
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={require("../img/picture3.png")}
            resizeMode="cover"
            accessible={true}
            accessibilityLabel={"Little Lemon iamge 3"}
          />
          <Image
            style={styles.image}
            source={require("../img/picture4.png")}
            resizeMode="cover"
            accessible={true}
            accessibilityLabel={"Little Lemon image 4"}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 300,
    resizeMode: "contain",
    borderColor: "red",
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 10,
    margin: 5,
  },
  gridContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    padding: 24,
    marginTop: 25
  },
  heading: {
    paddingTop: 10,
    paddingHorizontal: 30,
    fontSize: 36,
    color: "#495E57",
    textAlign: "center",
  },
  textBody: {
    fontSize: 18,
    padding: 20,
    paddingHorizontal: 35,
    marginVertical: 8,
    color: "#495E57",
    textAlign: "center",
    paddingTop: 10,
  },
})