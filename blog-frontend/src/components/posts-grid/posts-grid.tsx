import React, { useEffect, useState } from 'react'
import { Container, Grid, Spinner, Stack } from '@chakra-ui/react'
import PostCard from '../post-card/post-card'
import axios from 'axios'

interface Props {}

const PostsGrid: React.FC<Props> = () => {
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:1337/blog-posts').then((response) => {
      setLoading(false)
      setPosts(response.data)
    })
  }, [])

  return (
    <>
      {loading ? (
        <Stack direction="row" justify={'center'} spacing={4} p={50}>
          <Spinner size="xl" />
        </Stack>
      ) : (
        <div className="post-cards-container">
          <Container maxW="1170px" pt={30}>
            <Grid templateColumns="repeat(4, 1fr)" gap={6}>
              {posts.map((post, i) => (
                <PostCard post={post} key={i} />
              ))}
            </Grid>
          </Container>
        </div>
      )}
    </>
  )
}

export default PostsGrid
