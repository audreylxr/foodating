import * as React from 'react';
import { StyleSheet,Image } from 'react-native';
import ruby from '../assets/images/Ruby.gif';
import { FontAwesome } from '@expo/vector-icons';

import EditScreenInfo from '../components/EditScreenInfo';
import { View,Text } from '../components/Themed';

export default function ProfileScreen() {

  return (
    <View style={styles.container}>
      <View>
        <Image source={ruby} style={profile.pic}></Image>
        <Text style={[profile.username]}>Kurosawa Ruby, 18</Text>
        <Text style={[profile.details]}>School Idol</Text>
        <Text style={[profile.details]}>Currently in 沼津市，静岡県</Text>
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"></View>
      <View style={styles.quotecontainer}>
        <FontAwesome name="quote-left" size={80}/>
        <Text style={profile.quote}>Ganbaruby is life</Text>
        <FontAwesome name="quote-right" size={80}/>
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"></View>

      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    </View>
  );
}

const profile = StyleSheet.create({
  align: {
    textAlign:'left'
  },
  pic: {
    width:150,
    height:150
  },
  username: {
    fontSize:32
  },
  details: {
    fontSize:20,
    color:'#949494'
  },
  quote: {
    fontSize:30,
    padding:40
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quotecontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection:'row'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});