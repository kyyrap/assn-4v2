import {StyleSheet, Text, Image, View, Pressable} from "react-native";
import { Themes } from '../assets/Themes';
import  Item  from './Item';
import { millisToMinutesAndSeconds } from "../utils";


const renderItem = ({ item, index }) => {
    return (
      <Item 
        songTitle={item.name}
        albumImage = {item.album.images[2].url}
        albumName = {item.album.name}
        songArtist = {item.album.artists[0].name}
        duration = {millisToMinutesAndSeconds(item.duration_ms)}
        index = {index}
        songdeturl = {item.external_urls.spotify}
        songprevurl = {item.preview_url}
        />
    )
};

export default renderItem;

