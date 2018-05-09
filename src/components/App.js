import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppState
} from 'react-native';
import { play, pause, add, skip, stop, configPlayer } from './src/track-player/player-commands';
import CurrentTrack from './src/components/currenttrack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers/reducers';
import TrackPlayer, { ProgressComponent } from 'react-native-track-player';
import ProgressBar from './src/components/progressbar';

import createEventHandler from './src/track-player/player-handler';


const store = createStore(reducers);


TrackPlayer.registerEventHandler(createEventHandler(store));

class App extends Component{
  constructor(props) {
    super(props);

    this.formatTime = this.formatTime.bind(this);
    this.updatePlayer = this.updatePlayer.bind(this);
  }
  static store = null;

  componentDidMount(){

    const track1 = {
      id: '1',
      url: 'https://mms.yaharamusic.org/tc?src=https%3A%2F%2Fjsfs.yaharamusic.org%2Fcomplete-submission%2Fthe-hussy-pagan-hiss%2F1-02-right-quick--1480427107000.wav&fmt=mp3&auth=foo',
      title: 'Title1',
      artist: 'artist1'
    };
    const track2 = {
      id: '2',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      title: 'Title2',
      artist: 'artist1'
    };
    const track3 = {
      id: '3',
      url: 'https://drive.google.com/uc?export=download&id=1bN_jKkCTDc8lCDFNb1NaEwZUx_eA7t8k',
      title: 'Brainbug',
      artist: 'Track Artist'
    };

    const track4 = {
      id: '4',
      url: 'https://www.blackfoxnewz.com/music?wix-music-track-id=5278523396718592&wix-music-comp-id=comp-j6e5wjhu',
      title: 'Lost',
      artist: 'B$hip Grady'
    };
 
    const track5 = {
      id: '5',
      url: 'https://www.blackfoxnewz.com/music?wix-music-track-id=6087763954761728&wix-music-comp-id=comp-j6e5wjhu',
      title: '2 Many MCs',
      artist: 'B$hip Grady'
    };
  setInterval(this.updatePlayer, 500)

    configPlayer().then(() => {
      add(track1);
      add(track2);
      add(track3);
      add(track4);
      add(track5);
    });

  }

formatTime(seconds) {
    const ss = Math.floor(seconds) % 60;
    const mm = Math.floor(seconds / 60) % 60;
    const hh = Math.floor(seconds / 3600);

    if(hh > 0) {
        return hh + ':' + this.formatTwoDigits(mm) + ':' + this.formatTwoDigits(ss);
    } else {
        return mm + ':' + this.formatTwoDigits(ss);
    }
}

formatTwoDigits(n) 
{
  return n < 10 ? '0' + n : n;
}


async updatePlayer()
{
  let position = await TrackPlayer.getPosition();
  position = (Math.floor(position));
  
  let duration = await TrackPlayer.getDuration();
  duration = (Math.floor(duration));
  
  let leftover = duration - position;
  
  let info = this.formatTime(leftover) + ' / ' + this.formatTime(duration);
  
  store.dispatch({
    type: 'PLAYBACK_UPDATE',
    state: {info: info, duration:duration, position:position}
})
}

  render() {
    
    return (
      <View style={styles.container}>
          <Text style={styles.welcome} className="Play" onPress={play}>
            Play
          </Text>
          <Text style={styles.welcome} className="Pause" onPress={pause}>
            Pause
          </Text>
          <Text style={styles.instructions} className="Next" onPress={next}>
            Next
          </Text>
          <Text style={styles.instructions} className="Previous" onPress={previous}>
            Prev
          </Text>
          <Text style={styles.instructions} className="State" onPress={this.updatePlayer}>
            State!
          </Text>                
        <CurrentTrack store={store} />  
        <ProgressBar store={store}/>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  view: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    width: '100%'
},
info: {
    color: '#c0c0c0',
    fontSize: 16,
    fontWeight: '300',
    margin: 10
},
bar: {
    backgroundColor: '#575757',
    height: 5,
    width: '100%',
    margin: 10,
    flexDirection: 'row',
    alignItems: 'flex-start'
},
played: {
    backgroundColor: '#03A9F4',
    height: 5
},
buffered: {
    backgroundColor: '#797979',
    height: 5
}
});

export default App;