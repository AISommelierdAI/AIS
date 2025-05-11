import { useEffect } from "react";
import { Text, View } from "react-native";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export default function HomeScreen() {
  useEffect(() => {
    const writeTestData = async () => {
      try {
        await addDoc(collection(db, "test"), {
          name: "Dai",
          timestamp: new Date(),
        });
        console.log("書き込み成功");
      } catch (e) {
        console.error("Firestore 書き込み失敗", e);
      }
    };

    writeTestData();
  }, []);

  return (
    <View>
      <Text>Firestoreに書き込みテスト中...</Text>
    </View>
  );
}
