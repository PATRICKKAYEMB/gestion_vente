import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import { Touchable } from 'react-native'





const LoginScreen = ({navigation}) => {
  return (
   <View style={styles.container}>


        <View style={styles.container2} >
            <Text style={styles.Titre} >Login</Text>
            <TextInput style={styles.Input} placeholder='veilleur votre nom:' />
            <TextInput style={styles.Input}  placeholder='veilleur votre nom:' />

             <TouchableOpacity style={styles.Button} onPress={()=> navigation.navigate('scanner')}>
                <Text style={styles.TextButton}>connexion</Text>
            </TouchableOpacity>

        </View>
   </View>
   
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"orange",
        position:"relative"
    },
    container2:{
        height:"55%",
        paddingTop:50,
        paddingLeft:30,
        backgroundColor:"#E2EAF4",
        bottom:0,
        width:"100%",
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        position:"absolute"

    },
    Titre:{
        color:"orange",
        fontSize:30,
        fontWeight:"bold",
        marginBottom:30
    },
    Input:{
        width:"90%",
        borderColor:"Brown",
        padding:15,
        borderWidth:2,
        backgroundColor:"white",
        marginBottom:35,
        borderRadius:18
    },
    Button:{
        width:"90%",
        backgroundColor:"orange",
        padding:10,
        marginBottom:35,
        borderRadius:18
    },
    TextButton:{
        textAlign:"center",
        color:"#fff",
        fontSize:22,
        fontWeight:"bold"
    }

})


export default LoginScreen