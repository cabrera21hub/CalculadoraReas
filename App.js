import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

const CalculatorButton = ({ label, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [currentValue, setCurrentValue] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handlePressNumber = (num) => {
    setCurrentValue(currentValue === "0" ? num : currentValue + num);
  };

  const handlePressOperator = (op) => {
    setOperator(op);
    setPreviousValue(currentValue);
    setCurrentValue("0");
  };

  const calculateResult = () => {
    const current = parseFloat(currentValue);
    const previous = parseFloat(previousValue);
    if (operator && previous !== null) {
      let result;
      switch (operator) {
        case '+':
          result = previous + current;
          break;
        case '-':
          result = previous - current;
          break;
        case 'x':
          result = previous * current;
          break;
        case '/':
          result = previous / current;
          break;
        case '%':
          result = (previous * current) / 100;
          break;
        default:
          return;
      }
      setCurrentValue(result.toString());
      setOperator(null);
      setPreviousValue(null);
    }
  };

  const handlePressAC = () => {
    setCurrentValue("0");
    setPreviousValue(null);
    setOperator(null);
  };

  const handlePressPlusMinus = () => {
    setCurrentValue(`${parseFloat(currentValue) * -1}`);
  };

  const handlePressPercent = () => {
    setCurrentValue(`${parseFloat(currentValue) / 100}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{currentValue}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <CalculatorButton label="AC" onPress={handlePressAC} style={styles.greyButton} />
        <CalculatorButton label="+/-" onPress={handlePressPlusMinus} style={styles.greyButton} />
        <CalculatorButton label="%" onPress={handlePressPercent} style={styles.greyButton} />
        <CalculatorButton label="/" onPress={() => handlePressOperator('/')} style={styles.orangeButton} />
      </View>
      <View style={styles.buttonContainer}>
        <CalculatorButton label="7" onPress={() => handlePressNumber("7")} />
        <CalculatorButton label="8" onPress={() => handlePressNumber("8")} />
        <CalculatorButton label="9" onPress={() => handlePressNumber("9")} />
        <CalculatorButton label="x" onPress={() => handlePressOperator('x')} style={styles.orangeButton} />
      </View>
      <View style={styles.buttonContainer}>
        <CalculatorButton label="4" onPress={() => handlePressNumber("4")} />
        <CalculatorButton label="5" onPress={() => handlePressNumber("5")} />
        <CalculatorButton label="6" onPress={() => handlePressNumber("6")} />
        <CalculatorButton label="-" onPress={() => handlePressOperator('-')} style={styles.orangeButton} />
      </View>
      <View style={styles.buttonContainer}>
        <CalculatorButton label="1" onPress={() => handlePressNumber("1")} />
        <CalculatorButton label="2" onPress={() => handlePressNumber("2")} />
        <CalculatorButton label="3" onPress={() => handlePressNumber("3")} />
        <CalculatorButton label="+" onPress={() => handlePressOperator('+')} style={styles.orangeButton} />
      </View>
      <View style={styles.buttonContainer} lastRow>
        <CalculatorButton label="0" onPress={() => handlePressNumber("0")} style={[styles.button, styles.wideButton]} />
        <CalculatorButton label="." onPress={() => handlePressNumber(".")} />
        <CalculatorButton label="=" onPress={calculateResult} style={styles.orangeButton} />
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
    width: 170, // Ajustado para cubrir dos espacios
    paddingLeft: 34,
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
