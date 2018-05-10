import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import styles from '../styles/styles'
import TrackPlayer from 'react-native-track-player';

class CurrentTrack extends Component {
    render () {
        return (
            <View>
                <Text>
                    {this.props.currentTrack}
                </Text>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        playback: state.playback,
        currentTrack: state.playback.test
    };
}

module.exports = connect(mapStateToProps)(CurrentTrack);