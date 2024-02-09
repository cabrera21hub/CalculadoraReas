import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

const CalculatorButton = ({ label, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

const App = () => {
  // Aquí iría la lógica para manejar la entrada del usuario y calcular los resultados
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>0</Text>
      </View>
      <View style={styles.buttonContainer}>
        <CalculatorButton label="AC" style={styles.greyButton} />
        <CalculatorButton label="+/-" style={styles.greyButton} />
        <CalculatorButton label="%" style={styles.greyButton} />
        <CalculatorButton label="/" style={styles.orangeButton} />
      </View>
      <View style={styles.buttonContainer}>
        <CalculatorButton label="7" />
        <CalculatorButton label="8" />
        <CalculatorButton label="9" />
        <CalculatorButton label="x" style={styles.orangeButton} />
      </View>
      <View style={styles.buttonContainer}>
        <CalculatorButton label="4" />
        <CalculatorButton label="5" />
        <CalculatorButton label="6" />
        <CalculatorButton label="-" style={styles.orangeButton} />
      </View>
      <View style={styles.buttonContainer}>
        <CalculatorButton label="1" />
        <CalculatorButton label="2" />
        <CalculatorButton label="3" />
        <CalculatorButton label="+" style={styles.orangeButton} />
      </View>
      <View style={styles.buttonContainer}>
        <CalculatorButton label="0" style={styles.wideButton} />
        <CalculatorButton label="." />
        <CalculatorButton label="=" style={styles.orangeButton} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  displayContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: 20,
  },
  displayText: {
    color: 'white',
    fontSize: 70,
    fontWeight: '300',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 80,
    minHeight: 80,
    borderRadius: 40,
    margin: 10,
  },
  wideButton: {
    width: 160, // El doble de ancho para el botón "0"
    alignItems: 'flex-start',
    paddingLeft: 30,
  },
  greyButton: {
    backgroundColor: '#a6a6a6',
  },
  orangeButton: {
    backgroundColor: '#ff9500',
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
  },
});

export default App;
