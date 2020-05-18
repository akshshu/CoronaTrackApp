import React from "react";
import { View, Picker, StyleSheet, Button } from "react-native";
export default function Details({ selectedState, selectedDistrict, showdet }) {
   const submithandler = () => {
      fetch("https://api.covid19india.org/state_district_wise.json")
         .then((response) => response.json())
         .then((json) => {
            var confirmed = json[selectedState]['districtData'][selectedDistrict]['confirmed']
            var active = json[selectedState]['districtData'][selectedDistrict]['active']
            var death = json[selectedState]['districtData'][selectedDistrict]['deceased']
            var recovered = json[selectedState]['districtData'][selectedDistrict]['recovered']
            showdet(confirmed, active, death, recovered)
         });
   }

   return (
      <View style={styles.but}>
         <Button onPress={() => submithandler()} title="Show" color='#0097E0' />
      </View>
   )
}
const styles = StyleSheet.create({
   but: {
      width: 280,
      alignSelf: "center",
      marginTop: 50,
      marginLeft: 0,
      paddingBottom: 30

   }
});