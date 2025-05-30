# User List App

This is a simple **cross-platform React Native app** built with **Expo**, using **Redux Toolkit** and **RTK Query** to fetch and display users from a remote API. The app works on **mobile and web** platforms and demonstrates clean architectural practices using modern React Native tools.

---

## 🚀 Features

- Fetches users from [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users)
- Uses **RTK Query** for data fetching and caching
- Navigation using `@react-navigation/native` and Stack Navigator
- Displays users in a scrollable list (`FlatList`)
- Manual refresh button
- Search bar to filter users by name
- Clean and responsive UI with styled cards and avatar initials
- Fully functional on **Web** (`expo start --web`)

---

## 🛠 Tech Stack

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- [React Navigation](https://reactnavigation.org/)

---

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/sumeshi3648/expo-rtk-project.git
cd expo-rtkquery-userlist

2. **Install dependencies**

npm install

3. **Start the app**

npx expo start --web