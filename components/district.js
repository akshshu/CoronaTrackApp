import React from "react";
import { View, Picker, StyleSheet, TouchableOpacity } from "react-native";
export default function StatePicker({ districtreturn, selectedDistrict, DistrictList }) {

   const update2 = (itemValue) => {
      districtreturn(itemValue)
   }
   return (
      <TouchableOpacity style={styles.container}>
         <Picker
            selectedValue={selectedDistrict}
            style={{ height: 50, width: 300, color: 'grey' }}
            onValueChange={(itemValue) => { update2(itemValue) }}
         >
            {DistrictList.map(district => {
               return (
                  <Picker.Item label={district} value={district} key={district} />)
            })}

         </Picker>
      </TouchableOpacity>
   );

}

const styles = StyleSheet.create({
   container: {
      width: 280,
      marginTop: 30,
      alignSelf: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#0097E0'

   }
});