import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, SafeAreaView, Text, FlatList } from "react-native";
import { ListItem } from "./components/ListItem";
import articles from "./dummies/articles";

export default function App() {
  const items = articles.map((article, index) => {
    return (
      <ListItem
        ImageUrl={article.urlToImage}
        title={article.title}
        author={article.author}
        key={index.toString()}
      />
    );
  });

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
