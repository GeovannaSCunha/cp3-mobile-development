import { Post } from "@/types";
import { FlatList } from "react-native";
import ListItem from "./ListItem";

type ListProps = {
  posts: Post[];
};

const List = ({ posts }: ListProps) => {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <ListItem post={item} />}
    />
  );
};

export default List;