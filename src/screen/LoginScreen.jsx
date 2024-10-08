import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
// import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {
    const navigation=useNavigation();
    const handleregister = () => {
        navigation.navigate("Signup");
    };
  return (
   <View style={styles.container} >
   
<View style={styles.wellcomecontainer}>
<Text style={styles.wellcometext}>Login page..</Text>
</View>

<View style={styles.inputcontainer}>
<Feather name={"user"} size={24} color={"#9A9A9A"} style={styles.inputicon}/>
    <TextInput style={styles.Textinput} placeholder='Email'/>
</View>
<View style={styles.inputcontainer}>
<Entypo name={"lock"} size={24} color={"#9A9A9A"} style={styles.inputicon}/>
    <TextInput style={styles.Textinput} placeholder='Password' secureTextEntry/>
</View>
<Text style={styles.forgetpasswordtext}>Forget Password ?</Text>
   <TouchableOpacity onPress={handleregister}>
   <Text style={styles.footertext}>Submit<Text style={{textDecorationLine:"underline"}}>Login</Text></Text>
   </TouchableOpacity>
   </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#F5F5F5",
        flex:1,
    },
   
   
    wellcometext:{
        textAlign:"center",
        fontSize:45,
        fontWeight:"500",
        color:"#262626",
    },
    
   inputcontainer:{
    backgroundColor:"#FFFFFF",
    flexDirection:"row",
    borderRadius:20,
    marginHorizontal:40,
    evevation:10,
    marginVertical:20,
    alignItems:"center",
    height:50,
   },

Textinput:{
flex:1,
},
forgetpasswordtext:{
    color:"#BEBEBE",
    textAlign:"right",
    width:"90%",
    fontSize:15,
},


footertext:{
    color:"#262626",
    textAlign:"center",
    fontSize:15,
    marginTop:40,
},
})