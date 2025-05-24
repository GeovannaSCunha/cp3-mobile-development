import { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { PostDetailsParams } from "@/types/navigation";
import { PostDetail, Comment, CommentsResponse } from "@/types/post";

import { dummyApi } from "@/api";


const PostDetails = () => {
  const route = useRoute<RouteProp<PostDetailsParams, "PostDetails">>();
  const { postId } = route.params;

  const [post, setPost] = useState<PostDetail | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loadingPost, setLoadingPost] = useState(true);
  const [loadingComments, setLoadingComments] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoadingPost(true);
        const { data } = await dummyApi.get<PostDetail>(`/post/${postId}`);
        setPost(data);
      } catch (error) {
        console.error("Erro ao buscar post:", error);
      } finally {
        setLoadingPost(false);
      }
    };

    const fetchComments = async () => {
      try {
        setLoadingComments(true);
        const { data } = await dummyApi.get<CommentsResponse>(`/comments/post/${postId}`);
        setComments(data.comments);
      } catch (error) {
        console.error("Erro ao buscar comentários:", error);
      } finally {
        setLoadingComments(false);
      }
    };

    fetchPost();
    fetchComments();
  }, [postId]);

  if (loadingPost) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!post) {
    return (
      <View style={styles.center}>
        <Text>Post não encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>

      <View style={styles.tagsContainer}>
        <Text style={styles.subTitle}>Tags:</Text>
        <View style={styles.tags}>
          {post.tags.map((tag) => (
            <Text key={tag}>
              #{tag}
            </Text>
          ))}
        </View>
      </View>

      <View style={styles.commentsContainer}>
        <Text style={styles.subTitle}>Comentários:</Text>
        {loadingComments ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={comments}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.comment}>
                <Text>{item.user.username}</Text>
                <Text>{item.body}</Text>
                <Text>Likes: {item.likes}</Text>
              </View>
            )}
            ListEmptyComponent={<Text>Sem comentários.</Text>}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 6,
  },
  body: {
    fontSize: 16,
    marginBottom: 12,
  },
  tagsContainer: {
    marginBottom: 16,
  },
  subTitle: {
    fontWeight: "600",
    marginBottom: 4,
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  commentsContainer: {
    flex: 1,
  },
  comment: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  }
});

export default PostDetails;
