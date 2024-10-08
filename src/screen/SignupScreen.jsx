import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Signupscreen = () => {
  return (
    <View>
      <Text style={{textAlign:"center",justifyContent:"center", fontSize:25,fontWeight:"bold"}}>You Are Successfully Login</Text>
      <View>
        <Image source={require("../assets/sucfy.png")} style={{width:"100%", height:400}}/>
      </View>
    </View>
  )
}

export default Signupscreen

const styles = StyleSheet.create({})