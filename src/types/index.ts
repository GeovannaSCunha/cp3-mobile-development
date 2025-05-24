type Reaction = {
    likes: number;
    dislikes: number
}

type Post = {    
    id: number;
    title: string;
    body: string;
    reactions: Reaction;
    views: number
}

type PostResponse = {
    posts: Post[]
}

export {PostResponse, Post}