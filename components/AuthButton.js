//NOT FUNCTIONING 


import {StyleSheet, Text, Image, View, Pressable} from "react-native";
import { Themes } from '../assets/Themes';
import { millisToMinutesAndSeconds, useSpotifyAuth } from "../utils";



//need to pass in images + getspotifyAuth

// logoPng =  require('../assets/spotify-logo.png');

const authButton = (images) => {
  const {tracks, getSpotifyAuth } = useSpotifyAuth();
  

  return (
    <View style = {styles.home}> 
      <Pressable
        onPress={getSpotifyAuth} 
        style = {styles.spotConnectButton}>
          <Image style={styles.logoImageStyle}
            source={images.logoPng} />
          <Text style={styles.buttonTxt}> CONNECT WITH SPOTIFY </Text>
      </Pressable>
    </View>
  );
};

export default authButton;


const styles = StyleSheet.create ({
  //STYLES FOR BUTTON PAGE 
  home: {
    display: 'flex',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  spotConnectButton: {
    backgroundColor: Themes.colors.spotify,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 99999,

  },

  scbPressed: {
    backgroundColor: Themes.colors.gray,
  },


  buttonTxt: {
    fontSize: 14, 
    color: Themes.colors.white,
    fontFamily: 'GothamBold',

  },

  logoImageStyle: {
    width: 25,
    height: 25,
  },

});