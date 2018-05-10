import { combineReducers } from 'redux';

function playbackReducer(state = {playerState: {}, currentTrack: {}}, action) {
    switch(action.type) {
        case 'PLAYBACK_INIT':
            return {
                ...state,
                init: true
            };
        case 'PLAYBACK_STATE':
            return {
                ...state,
                state: action.state
            };
        case 'PLAYBACK_TRACK':
            return {
                ...state,
                currentTrack: action.state
            };
        case 'PLAYBACK_UPDATE':
            return {
                ...state,
                playerState: action.state
            };
        default:
            return state;
    }
}

function albumsReducer(state = {albums: []}, action) {
    switch(action.type) {
        case 'LOAD_ALBUMS':
            return {
                ...state,
                albums: action.state.albums
            };
        default:
            return state;
    }
}

module.exports = combineReducers({
    playback: playbackReducer,
    albums: albumsReducer
});

