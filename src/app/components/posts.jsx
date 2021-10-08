import PostsList from './postsList'
import Post from './post'
import { useParams } from 'react-router-dom'

const Posts = () => {
    const params = useParams()
    const posts = [
        {id: 1, lebel: 'Post 1'},
        {id: 2, lebel: 'Post 2'},
        {id: 3, lebel: 'Post 3'}
      ]
    const {postId} = params

    return <>
        {postId ? <Post id={postId} posts={posts} /> : <PostsList posts={posts} />}
    </>;
}
 
export default Posts;