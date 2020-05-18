import React from "react";
import { View, Picker, StyleSheet, TouchableOpacity } from "react-native";
export default function StatePicker({ statereturn, selectedState, districtlist, states }) {
   // const [selectedValue, setSelectedValue] = useState("Andaman and Nicobar Islands");

   const update = (itemValue) => {
      statereturn(itemValue)
      districtlist(itemValue)
   }
   return (
      <TouchableOpacity style={styles.container}>
         <Picker
            selectedValue={selectedState}
            style={{ height: 50, width: 300, color: 'grey' }}
            onValueChange={(itemValue) => { update(itemValue) }}
         >
            {states.map(state => {
               return (
                  <Picker.Item label={state} value={state} key={state} />)
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