import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const UserItem = ({ user, onEdit, onDelete }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{user.name}</Text>
      <Text>{user.email}</Text>
      <Text>{user.age}</Text>
      <Button title="Edit" onPress={() => onEdit(user)} />
      <Button title="Delete" onPress={() => onDelete(user.id)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default UserItem;
