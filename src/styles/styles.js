import { StyleSheet } from 'react-native';

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
        currentbar: {
            backgroundColor: '#ff0000',
            height: 5
        },
        buffered: {
            backgroundColor: '#797979',
            height: 5
        }
    });
    

export default styles;