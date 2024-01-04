import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from "react-native"

export default function WelcomeScreen() {
  return (
    <ScrollView
      indicatorStyle={"white"}
      style={[
        styles.container
      ]}
    >
      <Image
        style={styles.logo}
        source={require("../img/littleLemonLogo.png")}
        accessible={true}
        accessibilityLabel="Little Lemon Logo"
      />
      {/* <Text style={styles.heading}>Welcome to Little Lemon</Text> */}
      <Text style={styles.textBody}>
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