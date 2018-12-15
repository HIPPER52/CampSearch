import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Header = ({title}) =>{
  return(
    <View style=(styles.viewStyle)>
      <Text style=(styles.textStyle)>(title)</Text>
    </View>
  )
}

const styles = StyleSheet.create({
   viewStyle:
   {
      backgroundColor:'',
      height: ,
      justifyContent: 'center',
      paddingLeft: ,
      paddingTop: ,
      shadowColor:,
      shadowOffset:{ width: 0, height: 2},
      shadowOpacity: 0.2,
      elevation:,
      position:'',
   },
   textStyle:
   {
      color:'',
      fontSize:,
      fontFamily:,
   },
});

export default Header
