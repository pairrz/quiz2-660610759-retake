interface PostOwnerProps {
    username: string;
    userImagePath: string;
    text: string;
    likes: number;
}
export type { PostOwnerProps};


interface CommentProps {
    userImagePath: string;
    username: string;
    comText: string;
    likes: number;
    replies: ReplyProps[];
}
export type { CommentProps };

interface ReplyProps {
    userImagePath: string;
    username: string;
    repText: string;
    likes: number;
}
export type { ReplyProps };