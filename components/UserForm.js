import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const UserForm = ({ onSubmit, user }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      if (user.age !== undefined) {
        setAge(user.age.toString());
      }
    }
  }, [user]);

  const handleSubmit = () => {
    const ageNum = parseInt(age, 10);
    if (!name || !email || !age || isNaN(ageNum)) {
      Alert.alert('Error', 'All fields are required and age must be a number.');
      return;
    }
    onSubmit({ name, email, age: ageNum });
    setName('');
    setEmail('');
    setAge('');
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <Button title={user ? "Update User" : "Add User"} onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
    paddingVertical: 8,
    fontSize: 16,
  },
});

export default UserForm;
