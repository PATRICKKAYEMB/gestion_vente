import { View, Text,StyleSheet, Image} from 'react-native'
import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

const DetailsProduitScreen = () => {
  return (
    <View>
      <Navbar/>
            <View style={styles.container}>  
              <Image source={require("../../../assets/ecouteur.jpg")} style={styles.image} />
              


                <View style={styles.text}>
                  <View style={styles.text1}>
                        <Text>charger Itel</Text>
                        <Text style={styles.prix}>5000Fc</Text>
                  </View>
                  <View style={styles.text2}>
                        <Text>quantite :  400</Text>
                        <Text>Etat: normal</Text>
                  </View>

                  <View style={styles.text3}>
                        <Text>date:</Text>
                        <Text>17/04/2024</Text>
                  </View>
                  
                <View>

                </View>

              </View>
                
            </View>
      <Footer/>
    </View>
  )
}

const styles= StyleSheet.create({
      container:{
        width:"full",
        height:"80%",
        paddingTop:10
      },

      image:{

        width:"full",
        height:300,
        backgroundColor:"green"

      },
      text:{
          paddingHorizontal:20
      },
      text1:{
          marginTop:5,
          flexDirection:"row",
          alignItems:"center",
          justifyContent:"space-between"

      },

      text2:{
        marginTop:5,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
        
    },

    text3:{
      marginTop:5,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between"
      
  },
  prix:{
      fontSize:20,
      padding:5,
      fontWeight:"bold",
      borderWidth:1,
      borderRadius:20
  }

})

export default DetailsProduitScreen