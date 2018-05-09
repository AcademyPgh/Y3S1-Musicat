import React, { Component } from 'react';
import axios from 'axios';
import styles from '../styles/styles';
import Album from './album';
import { 
    Text,
    View,
    ScrollView,
    StyleSheet,
    Button,
       } from 'react-native';
import { connect } from 'react-redux';
//import { loadAlbums } from '../data/albums';

class Albums extends Component {
    componentDidMount() {
        this.loadAlbums();

    }
      loadAlbums() {
    axios
    .get("https://api.musicat.co/public/albums/?collection=org.madisonpubliclibrary.yaharamusic")
    .then((res) => {
      let newList = res.data;
      for (let i=0;i<newList.length;i++){      
        newList[i].album.tracks = newList[i].album.tracks.sort((x,y)=>{
          
          return (x.position < y.position )? -1:1; 
        })
      }
        this.props.store.dispatch({
            type: 'LOAD_ALBUMS',
            state: {albums: newList}
        });
    });
  }
    
    render() {
        return (
            <ScrollView>
          <Text style={styles.instructions}>
          {this.props.display.albums.map((localAlbumList, index) => {
            
            return (
              <Album key = {index} album = {localAlbumList.album} trackNum = {index + 1}/>
          ); 
          })}
          </Text>
      </ScrollView>)
    }
}

function mapStateToProps(state) {
    return {
        display: state.albums
    };
}

module.exports = connect(mapStateToProps)(Albums);