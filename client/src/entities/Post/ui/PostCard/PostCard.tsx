import React from 'react'
import PostCardHeader from '../PostCardHeader/PostCardHeader'
import PostCardBody from '../PostCardBody/PostCardBody'
import PostCardIcons from '../PostCardIcons/PostCardIcons'
import PostCardImages from '../PostCardImages/PostCardImages'

const PostCard = () => {
  return (
    <div>
      <PostCardHeader />
      <PostCardImages />
      <PostCardIcons />
      <PostCardBody />
    </div>
  )
}

export default PostCard
