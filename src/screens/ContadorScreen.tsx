
import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {
    const [contador, setContador] = useState(10);

    const onPress = (num:number) => setContador(prevCount => prevCount + num);


  return (
   <View
    style={styles.container}
   >
        <Text
            style={styles.countContainer}
        >
            Contador: {contador}
        </Text>

        <Fab  onPress={onPress} num={1} text="+1" className="br"/>
        <Fab  onPress={onPress} num={-1} text="-1" className="bl"/>
   </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10,
    },
    countContainer: {
      textAlign: 'center',
      padding: 10,
      fontSize:40,
      top: -15,
    },

  });
