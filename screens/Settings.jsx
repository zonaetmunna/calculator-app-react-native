import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const toggleDarkMode = () => {
    setDarkModeEnabled(!darkModeEnabled);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.option}>
        <Text style={styles.optionText}>Enable Notifications</Text>
        <TouchableOpacity
          style={[
            styles.optionButton,
            notificationsEnabled && styles.optionButtonEnabled,
          ]}
          onPress={toggleNotifications}
        >
          <View
            style={[
              styles.optionButtonIndicator,
              notificationsEnabled && styles.optionButtonIndicatorEnabled,
            ]}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.option}>
        <Text style={styles.optionText}>Dark Mode</Text>
        <TouchableOpacity
          style={[
            styles.optionButton,
            darkModeEnabled && styles.optionButtonEnabled,
          ]}
          onPress={toggleDarkMode}
        >
          <View
            style={[
              styles.optionButtonIndicator,
              darkModeEnabled && styles.optionButtonIndicatorEnabled,
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  optionText: {
    flex: 1,
    fontSize: 18,
  },
  optionButton: {
    width: 40,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  optionButtonEnabled: {
    borderColor: "#a55fa5",
  },
  optionButtonIndicator: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#ccc",
  },
  optionButtonIndicatorEnabled: {
    backgroundColor: "#a55fa5",
  },
});
