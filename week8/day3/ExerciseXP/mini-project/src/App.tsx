/**
 * Mini-Project: Product and User List.
 * This app displays lists of posts and users fetched from an external API.
 */
import { PostList } from "./post-list.tsx";
import { UserList } from "./user-list.tsx";

/**
 * Main component for the Mini-Project.
 */
export function App() {
  return (
    <div className="mini-project-container">
      <h1>Mini Project: Post and User Lists</h1>
      <hr />
      <section>
        <h2>Posts</h2>
        <PostList />
      </section>
      <hr />
      <section>
        <h2>Users</h2>
        <UserList />
      </section>
    </div>
  )
}

