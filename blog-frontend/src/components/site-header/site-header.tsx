import React from 'react'
import {
  Container,
  Heading,
  Flex,
  Box,
  Button,
  Spacer,
  Link,
  Image
} from '@chakra-ui/react'
import { Link as RouteLink } from 'react-router-dom'
import Logo from '../../images/logo-blog.svg'

interface Props {
  links: [string, string]
}

const SiteHeader: React.FC<Props> = () => {
  return (
    <Container maxW="1170px">
      <Flex py="4" alignItems={'center'} alignContent={'center'}>
        <Box>
          <RouteLink to={'/'}>
            <Image src={Logo} width={30} alt="blog logo" />
          </RouteLink>
        </Box>

        <Spacer />

        <Box>
          <Link mr="5">About</Link>
          <Link mr="5">Contact</Link>
          <Button colorScheme="teal" size="md" isLoading={false}>
            Login
          </Button>
        </Box>
      </Flex>
    </Container>
  )
}

export default SiteHeader
