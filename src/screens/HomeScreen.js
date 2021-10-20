import React from "react";
import { View,Text, StyleSheet, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = (props) => {
  console.log(props);

  return <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button 
        onPress={()=>props.navigation.navigate('Components')}
        title="Go to Componenst Demo" />

        <TouchableOpacity
          onPress={()=>props.navigation.navigate('List')}
          >
            <Text>Go to List Demo</Text>
            <Text>Go to List Demo</Text>
            <Text>Go to List Demo</Text>
            
        </TouchableOpacity>

        <Button 
        onPress={()=>props.navigation.navigate('ColorScreen')}
        title="Go to Color Screen" />
        <Button 
        onPress={()=>props.navigation.navigate('SquareScreen')}
        title="Go to Square Screen" />
    </View>

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
