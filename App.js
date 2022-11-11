//imports from react native 
import {ScrollView, FlatList, StyleSheet, SafeAreaView, Text, Image, Platform, View, Pressable, InteractionManager  } from "react-native";
import { millisToMinutesAndSeconds, useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import { getAlbumTracks } from "./utils/apiOptions";
import { getMyTopTracks } from "./utils/apiOptions";
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons'; 
//screen navigation 
import 'react-native-gesture-handler';
import { WebView } from "react-native-webview";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
//custom components 
import Item from './components/Item';
import RenderItem from './components/RenderItem';
import TopTrackHeader from "./components/TopTrackHeader";
//screeens 
import SongDetailsScreen from "./screens/SongDetailsScreen";
import SongPreviewScreen from "./screens/SongPreviewScreen";



const images = {
  logoPng: require('./assets/spotify-logo.png'),
};

//APP function 
export default function App() {

  let [fontsLoaded] = useFonts({
    GothamBlack: require('./assets/fonts/Gotham-Black.otf'),
    GothamBold: require('./assets/fonts/Gotham-Bold.otf'),
    GothamThin: require('./assets/fonts/Gotham-Thin.otf'),
    GothamXLight: require('./assets/fonts/Gotham-XLight.otf'),
  });

  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();
  
  let contentDisplayed;

  //if else to display connect or list of songs 
  if (token) {
  // // render Flatlist
  contentDisplayed = 
  <>
    <TopTrackHeader 
    images = {images}
    />
  <FlatList
      data={tracks}
      renderItem={RenderItem}
      keyExtractor={item => item.id} />
   </>
  } else {
  // render AuthButton
  contentDisplayed = 
    <View style = {styles.home}> 
      {/* Authbutton */}
      <Pressable
        onPress={getSpotifyAuth} 
        style = {styles.spotConnectButton}>
          <Image style={styles.logoImageStyle}
            source={images.logoPng} />
          <Text style={styles.buttonTxt}> CONNECT WITH SPOTIFY </Text>
      </Pressable>
    </View>
  }

  const Stack = createStackNavigator();

  const TracksSreen = ({ navigation }) => {
    return (
      <SafeAreaView style={styles.container}>
        {contentDisplayed}
      </SafeAreaView>
    );
  };

  return (
    <NavigationContainer> 
      
       <Stack.Navigator>
       <Stack.Screen 
          name="TracksScreen" 
          component={TracksSreen} 
          options={{headerShown: false}}/>
        <Stack.Screen 
          name = "SongDetailsScreen"
          component = {SongDetailsScreen}
          options={{headerShown: false}}/>
        <Stack.Screen 
          name = "SongPreviewScreen"
          component = {SongPreviewScreen}
          options={{headerShown: false}}/>
       </Stack.Navigator>
    </NavigationContainer>
);
}






//style sheet 
const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    flex: 1,
    display: 'flex',
  },


  home: {
    display: 'flex',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },


  //STYLES FOR BUTTON PAGE 
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
