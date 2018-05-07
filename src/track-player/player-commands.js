import TrackPlayer from 'react-native-track-player';

const play = () => {
    TrackPlayer.setupPlayer({}).then(() => {
        TrackPlayer.play();
    });
}

const pause = () => {
    TrackPlayer.setupPlayer({}).then(() => {
        TrackPlayer.pause();
    });
}

const stop = () => {
    TrackPlayer.setupPlayer({}).then(() => {
        TrackPlayer.stop();
    });
}

const add = (track) => {
    TrackPlayer.setupPlayer({}).then(() => {
        TrackPlayer.add(track);
    });
}

const configPlayer = async () => {
    TrackPlayer.setupPlayer({}).then(() => {
        TrackPlayer.updateOptions({
          capabilities: [
              TrackPlayer.CAPABILITY_PLAY,
              TrackPlayer.CAPABILITY_PAUSE,
              TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
              TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS
          ]
        });
    });
}

module.exports = {
    play,
    pause,
    stop,
    add,
    configPlayer
};