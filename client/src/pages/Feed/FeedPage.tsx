import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from './FeedSlice'

// Map to Redux
const mapStateToProps = state => ({
  posts: state.Feed.posts
})

const mapDispatchToProps = { fetchPosts }

// Component
const FeedPage = ({ posts, fetchPosts }) => (
  <div
    style={{
      width: `100vw`,
      height: `100vh`,
      display: `flex`,
      flexDirection: `column`,
      justifyContent: `center`,
      alignItems: `center`,
    }}
  >
    <button onClick={() => fetchPosts()}>Fetch Posts</button>
    {posts.map((post, index) => (
      <div key={index}>
        <p>{post.title}</p>
      </div>
    ))}
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage)