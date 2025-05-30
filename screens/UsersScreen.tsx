// import React from 'react';
// import { FlatList, View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, ImageBackground } from 'react-native';
// import { useGetUsersQuery } from '../services/api';
// import { useNavigation } from '@react-navigation/native';


// export default function UsersScreen() {
//   const { data: users, isLoading, isError, refetch } = useGetUsersQuery();
//   const navigation = useNavigation<any>();

//   if (isLoading) {
//     return (
//       <ImageBackground 
//         source={require('../assets/bg1.jpg')}
//         style={styles.background}
//       >
//         <View style={styles.center}>
//           <ActivityIndicator size="large" color="#3498db" />
//           <Text style={styles.loadingText}>Loading users...</Text>
//         </View>
//       </ImageBackground>
//     );
//   }

//   if (isError) {
//     return (
//       <ImageBackground 
//         source={require('../assets/bg1.jpg')}
//         style={styles.background}
//       >
//         <View style={styles.center}>
//           <Text style={styles.errorText}>Error loading users</Text>
//           <TouchableOpacity style={styles.retryButton} onPress={refetch}>
//             <Text style={styles.retryButtonText}>Retry</Text>
//           </TouchableOpacity>
//         </View>
//       </ImageBackground>
//     );
//   }

//   return (
//     <ImageBackground 
//       source={require('../assets/bg1.jpg')}
//       style={styles.background}
//       resizeMode="cover"
//     >
//       <View style={styles.container}>
//         <TouchableOpacity style={styles.refreshButton} onPress={refetch}>
//           <Text style={styles.refreshText}>⟳ Refresh List</Text>
//         </TouchableOpacity>
        
//         <FlatList
//           data={users}
//           keyExtractor={(item) => item.id.toString()}
//           contentContainerStyle={styles.listContent}
//           renderItem={({ item }) => (
//             <TouchableOpacity 
//               style={styles.userCard}
//               onPress={() => navigation.navigate('UserDetails', { user: item })}
//             >
//               <View style={styles.avatarPlaceholder}>
//                 <Text style={styles.avatarText}>
//                   {item.name.charAt(0).toUpperCase()}
//                 </Text>
//               </View>
//               <View style={styles.userInfo}>
//                 <Text style={styles.userName}>{item.name}</Text>
//                 <Text style={styles.userEmail}>{item.email}</Text>
//               </View>
//               <Text style={styles.chevron}>›</Text>
//             </TouchableOpacity>
//           )}
//         />
//       </View>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   center: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255,255,255,0.8)',
//   },
//   loadingText: {
//     marginTop: 20,
//     fontSize: 16,
//     color: '#2c3e50',
//   },
//   errorText: {
//     fontSize: 18,
//     color: '#e74c3c',
//     marginBottom: 20,
//   },
//   listContent: {
//     paddingBottom: 20,
//   },
//   refreshButton: {
//     backgroundColor: '#e06e3d',
//     padding: 12,
//     borderRadius: 25,
//     marginBottom: 20,
//     alignSelf: 'center',
//     width: '60%',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   refreshText: {
//     color: 'white',
//     fontWeight: '600',
//     fontSize: 16,
//   },
//   retryButton: {
//     backgroundColor: '#e74c3c',
//     padding: 12,
//     borderRadius: 6,
//   },
//   retryButtonText: {
//     color: 'white',
//     fontWeight: '600',
//   },
//   userCard: {
//     backgroundColor: 'rgba(255,255,255,0.9)',
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 12,
//     flexDirection: 'row',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   avatarPlaceholder: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: '#e06e3d',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 16,
//   },
//   avatarText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
//   userInfo: {
//     flex: 1,
//   },
//   userName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#2c3e50',
//     marginBottom: 4,
//   },
//   userEmail: {
//     fontSize: 14,
//     color: '#7f8c8d',
//   },
//   chevron: {
//     fontSize: 24,
//     color: '#bdc3c7',
//     fontWeight: 'bold',
//   },
// });

import React from 'react';
import {FlatList,View,Text,TouchableOpacity,StyleSheet,ActivityIndicator,ImageBackground,} from 'react-native';
import { useGetUsersQuery } from '../services/api';
import { useNavigation } from '@react-navigation/native';

export default function UsersScreen() {
  const { data: users, isLoading, isError, refetch } = useGetUsersQuery();
  const navigation = useNavigation<any>();

  let content;

  if (isLoading) {
    content = (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#3498db" />
        <Text style={styles.loadingText}>Loading users...</Text>
      </View>
    );
  } else if (isError) {
    content = (
      <View style={styles.center}>
        <Text style={styles.errorText}>Error loading users</Text>
        <TouchableOpacity style={styles.retryButton} onPress={refetch}>
          <Text style={styles.retryButtonText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  } else if (users) {
    content = (
      <View style={styles.container}>
        <TouchableOpacity style={styles.refreshButton} onPress={refetch}>
          <Text style={styles.refreshText}>⟳ Refresh List</Text>
        </TouchableOpacity>

        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.userCard}
              onPress={() => navigation.navigate('UserDetails', { user: item })}
            >
              <View style={styles.avatarPlaceholder}>
                <Text style={styles.avatarText}>{item.name.charAt(0).toUpperCase()}</Text>
              </View>
              <View style={styles.userInfo}>
                <Text style={styles.userName}>{item.name}</Text>
                <Text style={styles.userEmail}>{item.email}</Text>
              </View>
              <Text style={styles.chevron}>›</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }

  return (
    <ImageBackground
      source={require('../assets/bg1.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      {content}
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
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  loadingText: {
    marginTop: 20,
    fontSize: 16,
    color: '#2c3e50',
  },
  errorText: {
    fontSize: 18,
    color: '#e74c3c',
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: '#e74c3c',
    padding: 12,
    borderRadius: 6,
  },
  retryButtonText: {
    color: 'white',
    fontWeight: '600',
  },
  refreshButton: {
    backgroundColor: '#e06e3d',
    padding: 12,
    borderRadius: 25,
    marginBottom: 20,
    alignSelf: 'center',
    width: '60%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  refreshText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  listContent: {
    paddingBottom: 20,
  },
  userCard: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  avatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e06e3d',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  avatarText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  chevron: {
    fontSize: 24,
    color: '#bdc3c7',
    fontWeight: 'bold',
  },
});
