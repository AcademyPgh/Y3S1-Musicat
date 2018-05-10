import React, { Component } from 'react';
import { 
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  Button,
  TouchableOpacity,
  Image 
} from 'react-native';
import Song from './song';
import styles from '../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Album extends Component{
  constructor(props) {
      
    super(props);
    this.toggleShowSongs = this.toggleShowSongs.bind(this);
    this.showSongs = this.showSongs.bind(this);
    this.state = {
      trackList: "",
      showSongs: false
    };
  }
  
  showSongs() {
    if (!this.state.showSongs){
      return
    }
    let list = 
      <View>
        {this.props.album.tracks.map((song, index) => {return (
         <Song artist={this.props.album.main_artist_name} album_title={this.props.album.title} album_art={this.props.album.front_cover_art} song={song} key = {index} />
         )})}
      </View>;
      return list
  }
  
  toggleShowSongs() {
    this.setState({showSongs:!this.state.showSongs})
  }

  showOpenCloseIcon() {
    if(this.state.showSongs)
    {
      return <Icon name="angle-down" size={30} color="#009" />
    }
    else
    {
      return <Icon name="angle-right" size={30} color="#6cc7e6" />
    }
  }

  render() {
    return (
      <View>
        <View style={styles.albumheader}> 
          <View style={{flex:1}}>
            <Image source={{uri: this.props.album.front_cover_art}} style={styles.albumpicture} />    
          </View>
          <TouchableOpacity onPress = {this.toggleShowSongs} style={{flex:3}}> 
            <View style={styles.albuminfo}>
              {/* <Text>{this.props.trackNum}. </Text> */}
              <Text style={styles.albumtitle}>{this.props.album.title}</Text>
              <Text style={styles.artistname}>{this.props.album.main_artist_name}</Text>
              {this.showOpenCloseIcon()}
            </View>
          </TouchableOpacity >
        </View>
        {this.showSongs()}
      </View>
    );
  }
};