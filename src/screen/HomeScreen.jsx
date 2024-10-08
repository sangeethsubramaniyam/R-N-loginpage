import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { fontSize, iconSize, spacing } from '../constants/dimensions'
import { colors } from '../constants/colors'
import { fontFamily } from '../constants/fonts'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline
      }>Find your suitable watch now</Text>
      {/* {search input} */}
      <View style={styles.mainInputContainer}>
        {/* input container */}
        <View style={styles.inputWrapper}>
            {/* icon */}
            <Image source={require("../assets/search.png")} style={styles.logo}/>
            <TextInput style={styles.textInput} placeholder='Search Product' placeholderTextColor={Colors.placeholderText}/>
        </View>
        <View style={styles.categoryContainer}>
          <Image source={require("../assets/category.png")} style={styles.logo}/>
        </View>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.background,
        padding:spacing.xl,
    },
    headline:{
        fontSize:fontSize.xxl,
        color:colors.black,
        fontFamily:fontFamily.Bold,
    },
    mainInputContainer:{
      flexDirection:"row",
      alignItems:"center",
      marginVertical:spacing.xl,
    },
    inputWrapper:{
      flex:1,
      borderWidth:2,
      flexDirection:"row",
      alignItems:"center",
      borderColor:colors.placeholderText,
      borderRadius:44,
      paddingHorizontal:spacing.md,
    
    },
    logo:{
      height:iconSize.md,
      width:iconSize.md,
    },
    textInput:{
      flex:1,
      paddingHorizontal:spacing.md,
      fontSize:fontSize.md,
    },
    categoryContainer:{
      paddingHorizontal:spacing.sm,
    }
});