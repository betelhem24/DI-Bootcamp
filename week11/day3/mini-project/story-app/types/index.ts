// 1. The User: Defines what information we store about a person
export interface User {
  id: number;
  username: string;
  email: string;
  password_hash?: string; // The '?' means this is optional (we don't always want to send the password!)
}

// 2. The Story: Defines what a story looks like
export interface Story {
  id: number;
  title: string;
  content: string;
  author_id: number;
  created_at: string;
  updated_at: string;
}

// 3. The Contributor: Defines who is helping with which story
export interface Contributor {
  id: number;
  story_id: number;
  user_id: number;
}