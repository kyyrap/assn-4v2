
//SONG PREVIEW 
import { View, SafeAreaView, Text, ImageBackground, StyleSheet, Pressable } from 'react-native';
import Themes from '../assets/Themes';
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import Item from '../components/Item';



export default function SongPreviewScreen({ route}) {

  const { songprev } = route.params;
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
                <Text style = {styles.buttonTxt}> Song Preview </Text> 
                <Text> fillertxt </Text> 
            </View>

            <WebView 
                source={{ uri: songprev }}
                style= {styles.loginWebView}
            />



        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        display: 'flex',
  },

  loginWebView: {
    flex: 1,
    marginTop: 30,
    marginBottom: 10
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
