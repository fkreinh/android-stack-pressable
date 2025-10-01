import { useRef, useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { TrueSheet } from "@lodev09/react-native-true-sheet";

export default function Index() {
  const sheet = useRef<TrueSheet>(null);
  const [outsidePressCount, setOutsidePressCount] = useState(0);
  const [insidePressCount, setInsidePressCount] = useState(0);

  const present = async () => {
    await sheet.current?.present();
  };

  const dismiss = async () => {
    await sheet.current?.dismiss();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Outside TrueSheet</Text>
      <Text style={styles.subtitle}>
        This Pressable is outside the bottom sheet
      </Text>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          styles.buttonOutside,
          pressed && styles.buttonPressed,
        ]}
        onPress={() => setOutsidePressCount(outsidePressCount + 1)}
      >
        <Text style={styles.buttonText}>
          Press me! (Count: {outsidePressCount})
        </Text>
      </Pressable>

      <Text style={styles.note}>This Pressable should work ✅</Text>

      <Button title="Open Bottom Sheet" onPress={present} />

      <TrueSheet ref={sheet} sizes={["auto", "large"]} cornerRadius={24}>
        <View style={styles.sheetContent}>
          <Text style={styles.title}>Inside TrueSheet</Text>
          <Text style={styles.subtitle}>
            This Pressable is inside the native bottom sheet
          </Text>

          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
            onPress={() => setInsidePressCount(insidePressCount + 1)}
          >
            <Text style={styles.buttonText}>
              Press me! (Count: {insidePressCount})
            </Text>
          </Pressable>

          <Text style={styles.note}>
            On Android device, this Pressable may not work properly ❌
          </Text>

          <Button title="Close Sheet" onPress={dismiss} />
        </View>
      </TrueSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  sheetContent: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#2196f3",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    marginVertical: 10,
    minWidth: 200,
    alignItems: "center",
  },
  buttonOutside: {
    backgroundColor: "#4caf50",
  },
  buttonPressed: {
    backgroundColor: "#1976d2",
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  note: {
    fontSize: 12,
    color: "#f44336",
    marginTop: 10,
    marginBottom: 20,
    textAlign: "center",
    fontStyle: "italic",
  },
});
