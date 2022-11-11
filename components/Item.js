import {StyleSheet, Text, Image, View, Pressable} from "react-native";
import * as React from 'react';
import { Themes } from '../assets/Themes';
import { Ionicons } from '@expo/vector-icons'; 
import 'react-native-gesture-handler';
import { WebView } from "react-native-webview";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import SongDetailsScreen from '../screens/SongDetailsScreen'

//to get URL 
//item.external_urls.spotify
//or item.external-urls[0]


const Item = ({albumImage, songTitle, albumName, songArtist, duration, index, songdeturl, songprevurl}) => {
  const navigation = useNavigation(); 


  return(
    <View style={styles.songContainer}>
      <Pressable
          onPress={() => {navigation.navigate('SongPreviewScreen', {songprev: songprevurl});}}> 
          <Ionicons name="play-circle" size={20} color = {Themes.colors.spotify} />  
        </Pressable> 

      <Pressable onPress={() => {navigation.navigate('SongDetailsScreen', {songdet: songdeturl});}} style = {styles.detailspressable}> 
      <View style = {styles.subSongContainer}>
      
        <Image style = {styles.albumImageStyle} source = {{ uri : albumImage,}}></Image>
  
        <View style = {styles.songDescriptContainer}>
          <Text style={styles.songTitleStyle}>{songTitle}</Text>
          <Text style = {styles.artistStyle}> {songArtist}</Text>
        </View>
      </View>
  
      <View style = {styles.rightSongContainer}> 
        <Text style = {styles.txtTest}> {albumName}</Text> 
        <Text style = {styles.txtTest}> {duration}</Text> 
      </View>
    </Pressable>


    </View>

  );
  };

  export default Item;

  
  //style sheet 
const styles = StyleSheet.create({
    //holds each song 
    songContainer: {
      display: 'flex',
      height: 50,
      width:'100%', 
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'flex-start',
      alignItems: 'center',
      paddingLeft: 10,
      paddingRight: 10,
      marginBottom: 10,
      marginTop: 10,
      
    },

    detailspressable: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
    }, 
  
    //holds name + artists 
    subSongContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '50%',
    },


    albumImageStyle: {
        height: 50,
        width: 50,
        marginLeft: 10,
        marginRight: 5,
      },

    indexStyle: {
      fontSize: 12, 
      color: Themes.colors.white,
      paddingRight: 15,
    },
  
    songDescriptContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      paddingLeft: 15,
      width: '65%'
    },
  
    songTitleStyle: {
      color: Themes.colors.white,
      fontSize: 14,
    },
  
    artistStyle: {
      fontSize: 10, 
      color: Themes.colors.gray,
    },
  
    //holds albumn title + duration
    rightSongContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '40%',
      },


    //text for alnumn name + duration  
    txtTest : {
        fontSize: 10,
        color: Themes.colors.white,
  },
});