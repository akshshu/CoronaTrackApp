import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import Details from './components/details'
import Header from './components/header'
import DistrictPicker from './components/district'
import StatePicker from './components/states'
export default function App() {
   const [selectedState, setStateValue] = useState("None");
   const [selectedDistrict, setDistrictValue] = useState("None");
   const [DistrictList, setDistrictlist] = useState([]);
   const [states, setstatelist] = useState([]);
   const [total, setTotal] = useState(0);
   const [deaths, setDeaths] = useState(0);
   const [recovered, setRecovered] = useState(0);
   const [active, setActive] = useState(0);


   useEffect(() => {
      fetch("https://api.covid19india.org/state_district_wise.json")
         .then((response) => response.json())
         .then((json) => {
            var i, state_list = [];
            for (i in json) {
               state_list.push(i);
            }
            setstatelist(state_list);
         })
         .catch((error) => {
            console.error(error);
         });
   }, []);
   const showdet = (con, act, dea, rec) => {
      setTotal(con);
      setActive(act);
      setDeaths(dea);
      setRecovered(rec);
   }
   const districtlist = (sel) => {
      fetch("https://api.covid19india.org/state_district_wise.json")
         .then((response) => response.json())
         .then((json) => {
            var i, districts = [];
            for (i in json[sel]['districtData']) {
               districts.push(i);
            }
            setDistrictlist(districts)
            setDistrictValue(districts[0])
         })
         .catch((error) => {
            console.error(error);
         });
   }
   const statereturn = (value) => {
      setStateValue(value)
   }
   const districtreturn = (value) => {
      setDistrictValue(value)

   }
   return (
      <View style={styles.contianer}>
         <Header />
         <View style={styles.box}>
            <StatePicker style={styles.content} statereturn={statereturn} selectedState={selectedState} districtlist={districtlist} states={states} />
            <DistrictPicker style={styles.content} districtreturn={districtreturn} selectedDistrict={selectedDistrict} DistrictList={DistrictList} />
            <Details style={styles.content} selectedState={selectedState} selectedDistrict={selectedDistrict} showdet={showdet} />
         </View>
         <View style={styles.minboxcontainer}>
            <View style={styles.minbox}>
               <Text style={styles.text}>{total}</Text>
               <Text style={styles.total}>Total</Text>

            </View>
            <View style={styles.minbox2} >
               <Text style={styles.text}>{deaths}</Text>
               <Text style={styles.red}>Deaths</Text>

            </View>
         </View>
         <View style={styles.minboxcontainer}>
            <View style={styles.minbox3}>
               <Text style={styles.text}>{recovered}</Text>
               <Text style={styles.green}>Recovered</Text>

            </View>
            <View style={styles.minbox4}>
               <Text style={styles.text}>{active}</Text>

               <Text style={styles.total}>Active</Text>

            </View>
         </View>
      </View>

   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'red',
      flexDirection: 'row'

   },
   content: {
      marginTop: 50,
      marginBottom: 30,

   },
   box: {
      alignSelf: 'center',
      width: 380,
      marginTop: -40,
      borderRadius: 10,
      elevation: 2,
      backgroundColor: 'white'
   },
   minboxcontainer: {
      minHeight: 120,
      width: 380,
      alignSelf: 'center',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 30
   },
   minbox: {
      minWidth: 160,
      minHeight: 120,
      borderRadius: 10,
      backgroundColor: 'white',
      borderBottomColor: '#0097E0',
      borderBottomWidth: 3,
      alignItems: 'center'
   },
   minbox2: {
      minWidth: 160,
      minHeight: 120,
      borderRadius: 10,
      backgroundColor: 'white',
      borderBottomColor: 'red',
      borderBottomWidth: 3,
      alignItems: 'center'
   },
   minbox3: {
      minWidth: 160,
      minHeight: 120,
      borderRadius: 10,
      backgroundColor: 'white',
      borderBottomColor: 'green',
      borderBottomWidth: 3,
      alignItems: 'center'
   },
   minbox4: {
      minWidth: 160,
      minHeight: 120,
      borderRadius: 10,
      backgroundColor: 'white',
      borderBottomColor: '#0097E0',
      borderBottomWidth: 3,
      alignItems: 'center'
   },
   text: {
      paddingTop: 10,
      fontSize: 35,
      color: 'grey'

   },
   total: {
      fontSize: 25,
      color: '#0097E0',
      marginTop: 18
   },
   red: {
      fontSize: 25,
      color: 'red',
      marginTop: 18
   },
   green: {
      fontSize: 25,
      color: 'green',
      marginTop: 18
   }
}


);
