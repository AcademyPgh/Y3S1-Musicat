import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { loadAlbums } from '../data/albums';
import styles from '../styles/styles'

class Albums extends Component {
    componentDidMount() {
        this.props.store.dispatch({
            type: 'LOAD_ALBUMS',
            state: {albums: loadAlbums}
        });
    }

    render() {
        return (<Text>I'm the albums view! {this.props.display.albums.length} {loadAlbums.length}</Text>);
    }
}

function mapStateToProps(state) {
    return {
        display: state.albums
    };
}

module.exports = connect(mapStateToProps)(Albums);