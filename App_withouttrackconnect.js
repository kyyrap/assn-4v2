import { FlatList, Button, StyleSheet, SafeAreaView, Text, Image, Platform, View, StatusBar, ImageBackground, Dimensions, Pressable  } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import { getAlbumTracks } from "./utils/apiOptions";
import { getMyTopTracks } from "./utils/apiOptions";


const images = {
  logoPng: require('./assets/spotify-logo.png'),
};

const songData = [
  {
    index: '1',
    id: '1fknfnj', 
    albumnImage: 'https://i.scdn.co/image/ab67616d000048512a7db835b912dc5014bd37f4',
    songTitle: 'title 1',
    songArtist: 'artist 1',
    albumnName: 'albumn 1',
    duration: '1:00',
},

{
  index: '2',
  id: '2ndskjnfk', 
  albumnImage: "https://i.scdn.co/image/ab67616d00001e022a7db835b912dc5014bd37f4",
  songTitle: 'title 2',
  songArtist: 'tartist 2',
  albumnName: 'alnumn 2',
  duration: '2:00',

},

{
  index: '3',
  id: '2ndskjnfk', 
  albumnImage: "https://i.scdn.co/image/ab67616d000048512a7db835b912dc5014bd37f4",
  songTitle: 'title 3',
  songArtist: 'tartist 3',
  albumnName: 'alnumn 3',
  duration: '3:00',

},


];


const Item = ({ albumnImage, songTitle, albumnName, songArtist, duration }) => (
  <View style={styles.songContainer}>
    <View style = {styles.subSongContainer}> 
      <Text style = {styles.indexStyle}> {1}</Text>
      <Image style = {styles.albumnImageStyle} source = {{ uri : albumnImage,}}></Image>

      <View style = {styles.songDescriptContainer}>
        <Text style={styles.songTitleStyle}>{songTitle}</Text>
        <Text style = {styles.artistStyle}> {songArtist}</Text>
      </View>
    </View>

    <Text style = {styles.txtTest}> {albumnName}</Text> 
    <Text style = {styles.txtTest}> {duration}</Text>

  </View>
);


// const List = () => {
//   // FlatList data={tracks}
//   return (
//     <Text style = {styles.txtTest}> List</Text>
//   );
//  };



export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

  let contentDisplayed;

  const renderItem = ({ item }) => (
    <View style = {styles.songContainer}>
      <Item 
        songTitle={item.songTitle}
        albumnImage = {item.albumnImage}
        index = {item.index} 
        albumnName = {item.albumnName}
        songArtist = {item.songArtist}
        duration = {item.duration}
        />
    </View>
  );
  
  //if else to display connect or list of songs 
  if (token) {
  // // render Flatlist
  contentDisplayed = 
      <FlatList
        data={songData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        />

  } else {
  // // render AuthButton
  contentDisplayed = 

    //connect button
    <View style = {styles.home}> 
      <Pressable
        onPress={getSpotifyAuth} 
        style = {styles.spotConnectButton}>
        {/* <Image> {spotifyLogo.logoPng} </Image> */}
          <Image style={styles.logoImageStyle}
            source={images.logoPng} />
          <Text style={styles.buttonTxt}> CONNECT WITH SPOTIFY </Text>
      </Pressable>
    </View>
  };


  return (
    <SafeAreaView style={styles.container}>
      {contentDisplayed}
    </SafeAreaView>
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

  //ex list text stule 
  txtTest : {
    fontSize: 14,
    color: Themes.colors.white,
  },

  
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

  subSongContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '50%',
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
  },

  songTitleStyle: {
    color: Themes.colors.white,
    fontSize: 14,
  },

  artistStyle: {
    fontSize: 12, 
    color: Themes.colors.gray,
  },


  albumnImageStyle: {
    height: 50,
    width: 50,
    paddingLeft: 5,
    paddingRight: 5,
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

  },

  logoImageStyle: {
    width: 25,
    height: 25,
  },


});
