import * as React from 'react';
import { StyleSheet, Platform,Image, TouchableOpacity } from 'react-native';
import ruby from '../assets/images/Ruby.gif';

import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import EditScreenInfo from '../components/EditScreenInfo';
import { View,Text } from '../components/Themed';
import uploadToAnonymousFilesAsync from 'anonymous-files'; 

export default function TabOneScreen() {
  const [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if(pickerResult.cancelled === true) {
      return;
    }

    if (Platform.OS === 'web') {
      let remoteUri = await uploadToAnonymousFilesAsync(pickerResult.uri);
      setSelectedImage({ localUri: pickerResult.uri, remoteUri });
    } else {
      setSelectedImage({ localUri: pickerResult.uri, remoteUri: null });
    } 
    console.log(pickerResult);
  }

  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }

    Sharing.shareAsync(selectedImage.localUri);
  }; 

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
        <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
          <Text style={styles.buttonText}>Share this photo</Text>
        </TouchableOpacity>
        </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={ruby} style={styles.ruby}></Image>
      <Text style={styles.title}>Foodating Tab One</Text>
      <TouchableOpacity
        onPress={()=>{openImagePickerAsync}}
        style={styles.button}>
          <Text style={{fontSize:20,color:'#fff'}}>Click me</Text>
      </TouchableOpacity>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    backgroundColor:'#eb3492',
    padding: 20,
    borderRadius: 5
  },
  buttonText:{
    backgroundColor:'#eb3492',
    padding: 20,
    borderRadius: 5
  },
  ruby:{
    width:150,
    height:150
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
