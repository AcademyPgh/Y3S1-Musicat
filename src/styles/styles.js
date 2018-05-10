import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    albumtitle:{
        fontSize: 20
    },
    artistname:{
        fontSize: 15
    },
    albuminfo:{
        paddingLeft: 20,
    },
    albumheader:{
        flexDirection: 'row',
        paddingBottom: 20,
        alignItems: 'center'
    },
    playercontrols:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 10
    },
    bottombar:{
        flex: 7,
    },

    mainscreen:{
        flex: 1,
        padding: 20,
    },
    logo:{
        width: 150,
        height: 60

    },
    
    trackstyle: {
        fontSize: 13
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
        currentbar: {
            backgroundColor: '#ff0000',
            height: 5
        },
        buffered: {
            backgroundColor: '#797979',
            height: 5
        },
        albumpicture: {
            width: 100,
            height: 100, 
            borderRadius: 50
        }
    });
    

export default styles;