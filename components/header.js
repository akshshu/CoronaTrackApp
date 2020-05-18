import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function Header() {
   return (
      <View style={styles.header}>
         <Text style={styles.title}>COVID-19</Text>
         <Text style={styles.content}>TRACKING</Text>

      </View>
   )
}
const styles = StyleSheet.create({
   header: {
      height: 240,
      borderBottomColor: '#0097E0',
      borderBottomWidth: 5,
   },
   title: {
      textAlign: "center",
      fontSize: 50,
      fontWeight: 'bold',
      color: '#0097E0',
      paddingTop: 95,

   },
   content: {
      textAlign: "center",
      fontSize: 10,
      fontWeight: 'bold',
      color: '#0097E0',
      letterSpacing: 24,
      marginTop: -10

   }
})