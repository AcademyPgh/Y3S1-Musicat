import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import styles from '../styles/styles'

class CurrentTrack extends Component {
    render () {
        const track = this.props.playback.currentTrack;
        const title = track ? track.title : "none";
        return (
            <Text>
                <Text>
                Now Playing: {title}
                </Text>
            </Text>
        )
    }
}

function mapStateToProps(state) {
    return {
        playback: state.playback
    };
}

module.exports = connect(mapStateToProps)(CurrentTrack);