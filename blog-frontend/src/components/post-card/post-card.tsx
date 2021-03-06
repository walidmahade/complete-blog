import React from 'react'
import { Box, Image, Badge } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
// import { truncate } from '../../utility/functions'

interface Props {
  post: Post
}

const PostCard: React.FC<Props> = ({ post }) => {
  const {
    id,
    Title,
    // content,
    updated_at,
    // slug,
    post_categories,
    featured_image
  } = post
  return (
    <Box
      w="100%"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden">
      <Link to={'/post/' + id} className="post-card">
        <Image
          src={'http://localhost:1337' + featured_image.url}
          alt={featured_image.alternativeText}
        />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            {post_categories.map((category, i) => (
              <Badge borderRadius="full" px="2" colorScheme="teal" key={i}>
                {category.name}
              </Badge>
            ))}
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2">
              {updated_at}
            </Box>
          </Box>

          <Box mt="1" fontWeight="bold" as="h2" lineHeight="tight" isTruncated>
            {Title}
          </Box>

          {/*<Box>{truncate(content, 100, '...')}</Box>*/}
        </Box>
      </Link>
    </Box>
  )
}

export default PostCard
