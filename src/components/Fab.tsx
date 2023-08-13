import React from 'react';
import { TouchableWithoutFeedback , TouchableHighlight,View, Text, StyleSheet,Platform, TouchableNativeFeedback } from 'react-native';


interface Props{
    onPress:(num: number) => void;
    num: number;
    text: string;
    className: 'br' | 'bl';
}

export const Fab = ({onPress,num,text,className = 'br'}:Props) => {

    const ios = () =>{
        return (
        <TouchableHighlight  onPress={()=>onPress(num)} style={[styles.fabLocation,(className === 'br') ? styles.left : styles.right]} activeOpacity={0.8}>
            <View style={styles.fab}>
                <Text style={styles.fabText}>{text}</Text>
            </View>
        </TouchableHighlight >
        );
    };
    const android = () =>{
       return ( <View style={[styles.fabLocation,(className === 'br') ? styles.left : styles.right]} >
            <TouchableWithoutFeedback  onPress={()=>onPress(num)} >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{text}</Text>
                </View>
            </TouchableWithoutFeedback >
         </View>
         );
    };

  return (Platform.OS === 'ios') ? ios() : android();
};

const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 0,
        padding:5,
        shadowColor: '#000',

    },
    left: {
     left: 0,
    },
    right: {
     right: 0,
    },
    fab:{
        backgroundColor: '#5856D6',
        width:60,
        height:60,
        borderRadius:100,
        justifyContent: 'center',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
    },
    fabText:{
        color: 'white',
        fontSize:25,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});
