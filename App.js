// importations nécesssaires;
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from "react-native";

// App funtion
export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={styles.container}>
      <ScrollView style={styles.rectStack}>
        <View style={styles.rect}>
        <View style={styles.rect2}></View>
          <Image
            source={require('logo.png')}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <View style={styles.rect3}>
            <Text style={styles.loremIpsum}>Connectez vous pour continuer</Text>
            <View style={styles.rect4}>
              <Image
                source={require('/assets/Image2.png')}
                resizeMode="contain"
                style={styles.image2}
              ></Image>
            </View>
            <Text style={styles.identifiant}>Identifiant</Text>
            <View style={styles.inputView}>
              <TextInput style={styles.TextInput}
                placeholder="Ex: moussa@dpworld.com"
                placeholderTextColor="#3F1994"
                onChangeText={(email) => setEmail(email)}
              />
            </View>
  
            <Text style={styles.motDePasse}>Mot de passe</Text>
            <View style={styles.inputView}>
              <TextInput style={styles.TextInput}
                placeholder="********"
                placeholderTextColor="#3F1994"
                onChangeText={(password) => setPassword(password)}
              />
            </View>
            <TouchableOpacity>
              <View style={styles.rect7}>
                <Text style={styles.seConnecter}>Se connecter</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rect: {
    width: 375,
    height: 812,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    left: 0,
    top: 99
  },
  rect2: {
    top:-Dimensions.get("screen").width/2,
    left: 220,
    width: 500,
    height: Math.sqrt(Math.pow(Dimensions.get("screen").width,2 )+ Math.pow(Dimensions.get("screen").height,2 )*2),
    position: "absolute",
    backgroundColor: "rgba(21,9,72,1)",
    transform: [
      {
        rotate: "-25deg"
      }
    ]
  },
  image: {
    width: 115,
    height: 116,
    marginTop: 97,
    marginLeft: 129
  },
  rect3: {
    width: 280,
    height: 408,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 12,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.24,
    shadowRadius: 0,
    overflow: "hidden",
    marginTop: 10,
    marginLeft: 62
  },
  rect4: {
    width: 53,
    height: 51,
    backgroundColor: "rgba(39,10,93,1)",
    transform: [
      {
        rotate: "49.00deg"
      }
    ],
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      height: 0,
      width: 0
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 18,
    marginLeft: 108
  },
  loremIpsum: {
    fontFamily: "calibri-bold",
    color: "rgba(84,45,158,1)",
    fontSize: 12,
    marginTop: 36,
    marginLeft: 39
  },
  image2: {
    width: 22,
    height: 33,
    marginTop: 8,
    marginLeft: 15,
    transform: [
      {
        rotate: "-50.00deg"
      }
    ],
  },
  identifiant: {
    fontFamily: "gelasio-700",
    color: "rgba(63,25,148,1)",
    fontSize: 12,
    marginTop: 36,
    marginLeft: 32
  },
  inputView: {
    width: 211,
    height: 36,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "rgba(39,10,93,1)",
    borderStyle: "solid",
    marginTop: 5,
    marginLeft: 30
  },
  TextInput: {
    fontFamily: "gelasio-regular",
    color: "rgba(63,25,148,1)",
    fontSize: 12,
    marginTop: 12,
    marginLeft: 9,
    alignItems: "center"
  },
  motDePasse: {
    fontFamily: "gelasio-700",
    color: "rgba(63,25,148,1)",
    fontSize: 12,
    marginTop: 18,
    marginLeft: 32
  },
  
  rect7: {
    width: 163,
    height: 36,
    backgroundColor: "rgba(39,10,93,1)",
    borderRadius: 4,
    marginTop: 30,
    marginLeft: 54
  },
  seConnecter: {
    fontFamily: "gelasio-700",
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    marginTop: 11,
    marginLeft: 41
  },
  
  rectStack: {
    width: 502,
    height: 911,
    marginTop: -99
  }
});
