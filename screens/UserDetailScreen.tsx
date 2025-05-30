import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

/**
 * User Detail Screen - Displays comprehensive information about a selected user
 * 
 * @param {object} route - React Navigation route object containing user data
 * @param {object} route.params - Route parameters
 * @param {object} route.params.user - User object containing all user details
 */
export default function UserDetailScreen({ route }) {
  const { user } = route.params;

  return (
    <ImageBackground 
      source={require('../assets/bg2.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>User Details</Text>
          
          <View style={styles.detailRow}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>{user.name}</Text>
          </View>
          
          <View style={styles.detailRow}>
            <Text style={styles.label}>Email:</Text>
            <Text style={[styles.value, styles.email]}>{user.email}</Text>
          </View>
          
          <View style={styles.detailRow}>
            <Text style={styles.label}>Phone:</Text>
            <Text style={styles.value}>{user.phone}</Text>
          </View>
          
          <View style={styles.detailRow}>
            <Text style={styles.label}>Company:</Text>
            <Text style={styles.value}>{user.company.name}</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 15,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
    textAlign: 'center',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#7f8c8d',
    width: '30%',
  },
  value: {
    fontSize: 16,
    color: '#2c3e50',
    width: '65%',
    textAlign: 'right',
  },
  email: {
    color: '#3498db',
  },
});
