import { View, Text,StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import ListProduits from '../../Components/ListProduits'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

const ListeProduitsScreen = () => {
  return (
   
    <View>
      < Navbar/>
        <ScrollView style={styles.container}>
          <View style={styles.box}>
              <ListProduits/>
              <ListProduits/>
              <ListProduits/>
              <ListProduits/>
              <ListProduits/>
              <ListProduits/>



          </View>
             
        </ScrollView>

      <Footer/>
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    paddingTop:40,
   
    width:"full",
   backgroundColor:"#F5F5F5",
    height:"79%",

  },
  box:{
    flexWrap:"wrap",
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:15

  }
})
export default ListeProduitsScreen