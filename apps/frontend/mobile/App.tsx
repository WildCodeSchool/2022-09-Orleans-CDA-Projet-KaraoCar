import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";

import { SomeInterface, User } from "@libs/typings";

const API_HOST = Constants.expoConfig?.extra?.API_HOST;

export default function App() {
  const [someData, setSomeData] = useState<SomeInterface>({
    someProperty: "someValue",
  });

  const user: Partial<User> = {};

  useEffect(() => {
    const abortController = new AbortController();
    const go = async () => {
      const response = await fetch(`${API_HOST}/some-route`, {
        signal: abortController.signal,
      });
      const data = await response.json();
      setSomeData(data);
    };

    go();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>{`host: ${API_HOST}`}</Text>
      <Text>{`someProperty: ${someData.someProperty}`}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
