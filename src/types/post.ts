type PostDetail = {
  id: number;
  title: string;
  body: string;
  tags: string[];
};

type Comment = {
  id: number;
  body: string;
  likes: number;
  user: {
    username: string;
  };
};

type CommentsResponse = {
  comments: Comment[];
};

export { PostDetail, Comment, CommentsResponse };