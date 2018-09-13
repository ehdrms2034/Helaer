import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
/**
* Override styles that get passed from props
**/
propStyle = (percent, base_degrees) => {
  const rotateBy = base_degrees + (percent * 3.6);
  return {
    transform: [{ rotateZ: `${rotateBy}deg` }]
  };
}

renderThirdLayer = (percent) => {
  if (percent > 50) {
    /**
    * Third layer circle default is 45 degrees, so by default it occupies the right half semicircle.
    * Since first 50 percent is already taken care  by second layer circle, hence we subtract it
    * before passing to the propStyle function
    **/
    return <View style={[styles.secondProgressLayer, propStyle((percent - 50), 45)]}></View>
  } else {
    return <View style={styles.offsetLayer}></View>
  }
}

const CircularProgress = ({ percent, dDay }) => {
  let firstProgressLayerStyle;
  if (percent > 50) {
    firstProgressLayerStyle = propStyle(50, -135);
  } else {
    firstProgressLayerStyle = propStyle(percent, -135);
  }


  return (
    <View style={styles.container}>
      <View style={[styles.firstProgressLayer, firstProgressLayerStyle]}></View>
      {renderThirdLayer(percent)}
      <Text style={styles.display}>D-{dDay}</Text>
    </View>
  );

}

let size = 60;

const styles = StyleSheet.create({
  container: {
    width: size - 1,
    height: size - 1,
    borderWidth: 0.8,
    borderRadius: (size - 1) / 2,
    borderColor: '#ffe3dd',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 0.5,
    elevation: 1,
  },
  firstProgressLayer: {
    width: size,
    height: size,
    borderWidth: 2.8,
    borderRadius: size / 2,
    position: 'absolute',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: '#ff6443',
    borderTopColor: '#ff6443',
    transform: [{ rotate: '-135deg' }]
  },
  secondProgressLayer: {
    width: size,
    height: size,
    position: 'absolute',
    borderWidth: 2.8,
    borderRadius: size / 2,
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: '#ff6443',
    borderTopColor: '#ff6443',
    transform: [{ rotate: '-45deg' }]
  },
  offsetLayer: {
    width: size - 1,
    height: size - 1,
    position: 'absolute',
    borderWidth: 0.8,
    borderRadius: (size - 1) / 2,
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: '#ffe3dd',
    borderTopColor: '#ffe3dd',
    transform: [{ rotateZ: '-135deg' }]
  },

  display: {
    position: 'absolute',
    color: '#000',
    fontSize: 21,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 24.7,
    letterSpacing: 0,
    textAlign: "left",
    textShadowColor: "rgba(0, 0, 0, 0.16)",
    textShadowOffset: {
      width: 0,
      height: 1
    },
    textShadowRadius: 2
  }
});

export default CircularProgress;