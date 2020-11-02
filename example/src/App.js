import * as React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import PasswordStrengthMeterBar from 'react-native-password-strength-meter-bar';

export default function App() {
  const [password, setPassword] = React.useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>Password</Text>
      <TextInput
        keyboardType="default"
        autoCapitalize="none"
        placeholder="Enter password"
        autoCorrect={false}
        onChangeText={(val) => setPassword(val)}
        style={styles.inputStyle}
        secureTextEntry={true}
      />
      <View style={styles.componentMargin}>
        <PasswordStrengthMeterBar password={password} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    color: '#323232',
    paddingRight: 8,
    paddingLeft: 8,
    fontSize: 16,
    lineHeight: 23,
    borderRadius: 5,
    height: 50,
    fontFamily: 'Medium',
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgba(164, 167, 221, 0.71)',
    backgroundColor: '#F8F9FE',
  },
  labelStyle: {
    fontSize: 14,
    color: '#343233',
    fontFamily: 'Bold',
    paddingTop: 10,
    paddingBottom: 10,
  },
  componentMargin: {
    marginTop: 10,
  },
});
