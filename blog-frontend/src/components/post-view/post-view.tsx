import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import {
  Heading,
  Stack,
  Spinner,
  Container,
  Box,
  Image
} from '@chakra-ui/react'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'

interface Props extends RouteComponentProps<{ id: string }> {}

const PostView: React.FC<Props> = ({ match }) => {
  const [post, setPost] = useState<Post>()

  useEffect(() => {
    axios
      .get('http://localhost:1337/blog-posts/' + match.params.id)
      .then((response) => {
        setPost(response.data)
      })
  })

  return (
    <>
      {post ? (
        <div className="post-single">
          <Container maxW={900} pt={50}>
            <Box w={'100%'}>
              <Heading as="h1" size="3xl" lineHeight={'80px'} pb={30}>
                {post.Title}
              </Heading>
            </Box>
            <Image
              src={'http://localhost:1337' + post.featured_image.url}
              alt="Segun Adebayo"
            />
            <Box textAlign={'left'} mt={30} mb={100}>
              <ReactMarkdown source={post.content} />
            </Box>
          </Container>
        </div>
      ) : (
        <Stack direction="row" justify={'center'} spacing={4} p={50}>
          <Spinner size="xl" />
        </Stack>
      )}
    </>
  )
}

export default PostView
