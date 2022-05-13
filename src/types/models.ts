interface IPost {
    id: string;
    title: string;
    body: string;
    comments?: IComment[];
}

interface IComment {
    id: string;
    postId: string;
    body: string;
}

export type { IPost, IComment };
