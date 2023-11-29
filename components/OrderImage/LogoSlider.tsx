import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

const data1 = [
  { imageSource: require('../../assets/aluminum.jpeg'), name: 'Aluminum' },
  { imageSource: require('../../assets/brass.jpeg'), name: 'Brass' },
  { imageSource: require('../../assets/copper.jpeg'), name: 'Copper' },
  { imageSource: require('../../assets/iron.jpeg'), name: 'Iron' },
  { imageSource: require('../../assets/lead.jpeg'), name: 'Lead' },
  { imageSource: require('../../assets/plastic.jpeg'), name: 'Glass' },
  { imageSource: require('../../assets/cardboard.jpeg'), name: 'Cardboard' },
];

const LogoSlider = () => {
  return (
    <View>
    
      <FlatList
        data={data1}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.container1}>
            <Image source={item.imageSource} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    width: 120,
    height: 150,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  text: {
    color: 'black',
    fontSize: 16,
    marginTop: 5,
    fontWeight: 'bold',
  },
});

export default LogoSlider;