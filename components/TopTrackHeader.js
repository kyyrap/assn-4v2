import {StyleSheet, Text, Image, View, Pressable} from "react-native";
import { Themes } from '../assets/Themes';

const topTrackHeader = ({images}) => {

    return(
        <View style={styles.trackContainerStyled}>
        <Image style = {styles.topTracksLogoStyle} source = {images.logoPng}/>
        <Text style={styles.toptracksStyle}> My Top Tracks </Text>
    </View>
  
    );
};
  
export default topTrackHeader;


const styles = StyleSheet.create ( {
  trackContainerStyled: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',

  },

  toptracksStyle: {
    fontSize: 18,
    color: Themes.colors.white,
    fontFamily: 'GothamBold',
  },


  topTracksLogoStyle: {
    height: 30,
    width: 30,
    marginRight: 5,
    
  },




});