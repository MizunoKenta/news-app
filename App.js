import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import { ListItem } from "./components/ListItem";
import { useState, useEffect } from "react";
import axios from "axios";

// newsapi.orgのAPIからニュース記事を取得。API_KEYは公開しないようダミーで仮置き。
// 最終的にはExpoのConstantsに記載したい。
const URL = "https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=API_KEY";

export default function App() {
  const { articles, setArticles } = useState({});

  const fetchArticles = async () => {
    try {
      const response = await axios.get(URL);
      // 確認用の出力
      console.log(response.data.articles);
      setArticles(response.data.articles);
    } catch {
      console.error(error);
    }
  };

  // 画面初期化時に1度だけ実行する処理
  useEffect(() => {
    fetchArticles();
  }, {});

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={(item) => {
          return <ListItem ImageUrl={item.urlToImage} title={item.title} author={item.author} />;
        }}
        keyExtractor={(item, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
