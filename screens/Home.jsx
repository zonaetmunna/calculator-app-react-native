import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Home = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleNumberPress = (number) => {
    setExpression((prevExpression) => prevExpression + number);
  };

  const handleOperatorPress = (operator) => {
    if (expression === "") return; // Prevent adding operator without a number
    setExpression((prevExpression) => prevExpression + operator);
  };

  const handleEqualPress = () => {
    try {
      setResult(eval(expression));
    } catch (error) {
      setResult("Error");
    }
  };

  const handleClearPress = () => {
    setExpression("");
    setResult("");
  };

  return (
    <View style={styles.container}>
      {/* Display */}
      <View style={styles.displayContainer}>
        <Text style={styles.expression}>{expression}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>
      {/* number */}
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.button, styles.buttonGray]}
            onPress={() => handleClearPress()}
          >
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonGray]}
            onPress={() => handleOperatorPress("/")}
          >
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonGray]}
            onPress={() => handleOperatorPress("*")}
          >
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonGray]}
            onPress={() => handleOperatorPress("-")}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberPress("7")}
          >
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberPress("8")}
          >
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberPress("9")}
          >
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonGray]}
            onPress={() => handleOperatorPress("+")}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberPress("4")}
          >
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberPress("5")}
          >
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberPress("6")}
          >
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleEqualPress()}
          >
            <Text style={[styles.buttonText, styles.buttonEqual]}>=</Text>
          </TouchableOpacity>
        </View>
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
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleOperatorPress(".")}
          >
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.button, styles.buttonZero]}
            onPress={() => handleNumberPress("0")}
          >
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleEqualPress()}
          >
            <Text style={[styles.buttonText, styles.buttonEqual]}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  displayContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 20,
    border: 5,
    borderColor: "#000",
    borderBottomWidth: 0,
    borderTopWidth: 0,
    width: "100%",
    backgroundColor: "#dbb6e3",
  },
  expression: {
    fontSize: 24,
    marginBottom: 40,
  },
  result: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 40,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 20,
    border: 5,
    borderColor: "#000",
    borderBottomWidth: 0,
    borderTopWidth: 0,
    width: "100%",
    backgroundColor: "#dbb6e3",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    backgroundColor: "#fff",
    borderRadius: 5,
    height: 60,
  },
  buttonGray: {
    backgroundColor: "#d3d3d3",
  },
  buttonZero: {
    flex: 2,
  },
  buttonText: {
    fontSize: 24,
  },
  buttonEqual: {
    color: "#fff",
    backgroundColor: "#ff7f50",
  },
});
