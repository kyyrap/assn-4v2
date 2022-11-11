import { View, SafeAreaView, Text, ImageBackground, StyleSheet, Pressable } from 'react-native';
import React, { Component } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { getAlbumTracks } from "../utils/apiOptions";
import { getMyTopTracks } from "../utils/apiOptions";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import Item from '../components/Item';


//to get URL 
//item.external-urls.spotify
//or item.external-urls[0]



export default function SongDetailsScreen({route}) {
    const { songdet } = route.params;
    const navigation = useNavigation(); 

    return (
        <SafeAreaView style={styles.container}>
            <View style = {styles.topContainer}> 
                <Pressable onPress={() => navigation.goBack()}>
                <View style = {styles.backBox}> 
                    <AntDesign name="left" size={24} color="blue" />
                    <Text style = {styles.backStyle}> Back </Text>
                </View>
                </Pressable>
                <Text style = {styles.buttonTxt}> Song Details </Text> 
                <Text> fillertxt </Text> 
            </View>

            <WebView 
                source={{ uri: songdet }}
                style= {styles.loginWebView}
            />

            {/* stack to song preview  */}
            {/* <Pressable onPress={() => {navigation.navigate('SongPreviewScreen', {songpreview: songprev});}}> 
                <Text style = {styles.backStyle}> Go to song preview </Text>
            </Pressable> */}

        </SafeAreaView>
    );
}





const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        display: 'flex',
        //for button ex
        justifyContent: 'space-between',
  },

  loginWebView: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
},

  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  backBox: {
    marginLeft: 10,
    display: 'flex', 
    flexDirection: 'row',
    alignItems: 'center',
    //width: '38%',
    //justifyContent: 'space-between',
  },

  backStyle: {
    fontSize: 14, 
    color: 'blue',
    fontFamily: 'GothamBold',
  },


  buttonTxt: {
    fontSize: 14, 
    color: 'white',
    fontFamily: 'GothamBold',
  },  

});
