import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';       // 必要なら追加
import 'firebase/compat/firestore';  // 必要なら追加

import firebaseConfig from './src/config/firebaseConfig';
import HomeScreen from './src/screens/HomeScreen';

// Firebase を初期化（すでに初期化されている場合はスキップ）
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const App = () => {
  return <HomeScreen />;
};

export default App;
