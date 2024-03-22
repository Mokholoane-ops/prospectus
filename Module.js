import { StyleSheet, Text, View, TouchableOpacity, Image,ImageBackground} from 'react-native'
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';


export default function Module(props) 
{
  const [rate, setRate] = useState(0);

  function increaseRate()
  {
    if(rate < 6)
    {
    setRate(rate+1)
    }
  };

  return (
    <View style={styles.container}>
      <Text>{props.text}</Text>
      <Text>{props.label}</Text>
        <TouchableOpacity style={styles.button} onPress={increaseRate}>
          <Text>rate</Text>
          <Text>{rate}</Text>
          <AntDesign name="star" size={24} color="black" />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: 
     {
      marginTop: 2,
      padding: 10,
      //borderRadius: 5,
      flexWrap: 'wrap'
     },
    button: 
     {
      flexDirection: 'row',
      alignItems: 'center'
     },
    fashion:
     {
      fontWeight:'bold',
     }
    
  });
 