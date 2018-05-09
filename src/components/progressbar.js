import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';

class ProgressBar extends Component 
{
    constructor (props)
    {
        super (props);
        
        this.getprogress = this.getprogress.bind(this);
    }

    getprogress()
    {
        const info = this.props.playback.playerState;
        return (parseFloat(info.position) / parseFloat(info.duration) * 100);
    }

    render () 
    {
        return (
            <View style = {styles.backgroundbar}>
                <View style = {[styles.currentbar, {width: this.getprogress() + '%'}]}>

                </View>
            </View>
        )
    }
}

function mapStateToProps(state) 
{
    return 
    {
        playback: state.playback
    };
}


const styles = StyleSheet.create({
    backgroundbar: {
        backgroundColor: '#666666',
        width: '100%'
    },
    currentbar: {
        backgroundColor: '#cc6666',
        height: 5
    }
});


module.exports = connect(mapStateToProps)(ProgressBar);