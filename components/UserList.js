import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const UserList = ({ users, onEdit, onDelete }) => {
  if (!users || users.length === 0) {
    return <Text style={styles.emptyMessage}>No users found.</Text>;
  }

  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.userItem}>
          <Text style={styles.name}>{item.name}</Text>
          <Text>{item.email}</Text>
          <Text>{item.age} years old</Text>
          <View style={styles.buttons}>
            <Button title="Edit" onPress={() => onEdit(item)} />
            <Button title="Delete" onPress={() => onDelete(item.id)} color="red" />
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  userItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  emptyMessage: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
    marginTop: 20,
  },
});

export default UserList;
