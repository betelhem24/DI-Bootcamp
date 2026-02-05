export interface User {
    id: number;
    username: string;
    email: string;
}

export interface Story {
    id: number;
    title: string;
    content: string;
    author_id: number;
    author_name: string;
    created_at: string;
}
