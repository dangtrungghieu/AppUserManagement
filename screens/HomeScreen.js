import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Alert, StyleSheet } from 'react-native';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';
import { fetchUsers, addUser, updateUser, deleteUser } from '../utilities/api';

const HomeScreen = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const usersData = await fetchUsers();
        setUsers(usersData);
      } catch (error) {
        Alert.alert('Error fetching users', error.message);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const handleAddUser = async (user) => {
    try {
      const newUser = await addUser(user);
      setUsers([...users, newUser]);
      Alert.alert("Success", "User added successfully.");
    } catch (error) {
      Alert.alert('Error adding user', error.message);
    }
  };

  const handleUpdateUser = async (updatedUser) => {
    try {
      await updateUser(selectedUser.id, updatedUser);
      setUsers(users.map(user => (user.id === selectedUser.id ? { ...user, ...updatedUser } : user)));
      setSelectedUser(null);
      Alert.alert("Success", "User updated successfully.");
    } catch (error) {
      Alert.alert('Error updating user', error.message);
    }
  };

  const handleDeleteUser = async (id) => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete this user?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: async () => {
            try {
              await deleteUser(id.toString());
              setUsers(users.filter(user => user.id !== id));
              Alert.alert("Success", "User deleted successfully.");
            } catch (error) {
              Alert.alert('Error deleting user', error.message);
            }
          },
        },
      ]
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <UserForm 
        onSubmit={selectedUser ? handleUpdateUser : handleAddUser} 
        user={selectedUser} 
        style={styles.form} 
      />
      <UserList 
        users={users} 
        onEdit={setSelectedUser} 
        onDelete={handleDeleteUser} 
        style={styles.userList} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  form: {
    marginBottom: 20,
  },
  userList: {
    marginTop: 20,
  },
});

export default HomeScreen;
