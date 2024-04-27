import { Pressable, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
export default function IconButton({ icon, onPress, color }) {
  const [btncolor, setColor] = useState(color);
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => {
        return pressed && styles.pressed;
      }}>
      <Ionicons
        name={icon}
        size={24}
        color={btncolor}
        onPress={() => {
          setColor((prev) => {
            return prev === 'white' ? 'yellow' : 'white';
          });
        }}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});
