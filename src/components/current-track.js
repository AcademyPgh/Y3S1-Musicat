import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import styles from '../styles/styles'

class CurrentTrack extends Component {
    render () {
        return (
            <Text>
                <Text>
                {this.props.playback.state}{"\n"}
                </Text>
                <Text>
                {this.props.playback.playerState.info}
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