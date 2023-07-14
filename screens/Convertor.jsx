import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Data from "../components/Data";
import Length from "../components/Length";
import Mass from "../components/Mass";
import Temperature from "../components/Temperature";
import Volume from "../components/Volume";

const Convertor = () => {
  const [currentType, setCurrentType] = useState("length");
  const [inputValue, setInputValue] = useState("");

  const handleNumberPress = (number) => {
    setInputValue((prevValue) => prevValue + number);
  };

  const handleTypePress = (type) => {
    setCurrentType(type);
    setInputValue("");
  };

  const handleClearPress = () => {
    setInputValue("");
  };

  const renderConverterComponent = () => {
    switch (currentType) {
      case "length":
        return <Length />;
      case "temperature":
        return <Temperature />;
      case "volume":
        return <Volume />;
      case "mass":
        return <Mass />;
      case "data":
        return <Data />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Type selection */}
      <View style={styles.typeContainer}>
        <TouchableOpacity
          style={[
            styles.typeButton,
            currentType === "length" && styles.selectedTypeButton,
          ]}
          onPress={() => handleTypePress("length")}
        >
          <Text style={styles.buttonText}>Length</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.typeButton,
            currentType === "temperature" && styles.selectedTypeButton,
          ]}
          onPress={() => handleTypePress("temperature")}
        >
          <Text style={styles.buttonText}>Temperature</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.typeButton,
            currentType === "volume" && styles.selectedTypeButton,
          ]}
          onPress={() => handleTypePress("volume")}
        >
          <Text style={styles.buttonText}>Volume</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.typeButton,
            currentType === "mass" && styles.selectedTypeButton,
          ]}
          onPress={() => handleTypePress("mass")}
        >
          <Text style={styles.buttonText}>Mass</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.typeButton,
            currentType === "data" && styles.selectedTypeButton,
          ]}
          onPress={() => handleTypePress("data")}
        >
          <Text style={styles.buttonText}>Data</Text>
        </TouchableOpacity>
      </View>

      {/* Converter component */}
      <View style={styles.converterContainer}>
        {renderConverterComponent()}
      </View>

      {/* Shared number input area */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>{inputValue}</Text>
      </View>

      {/* Number buttons */}
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberPress("1")}
          >
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberPress("2")}
          >
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberPress("3")}
          >
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
        </View>
        {/* Add other number buttons based on your requirement */}
        {/* ... */}
      </View>
    </View>
  );
};

export default Convertor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  typeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  typeButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dbb6e3",
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  selectedTypeButton: {
    backgroundColor: "#a55fa5",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  converterContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
  },
  inputText: {
    fontSize: 24,
  },
  buttonContainer: {
    // ...
  },
  row: {
    // ...
  },
  button: {
    // ...
  },
  // ...
});
