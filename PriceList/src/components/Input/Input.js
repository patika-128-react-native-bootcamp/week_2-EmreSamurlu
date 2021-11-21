import React from 'react';
import {View, TextInput, Text} from 'react-native';

import styles from './Input.style';

const Input = ({placeholder, onType}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{placeholder}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onType}
      />
    </View>
  );
};

export default Input;