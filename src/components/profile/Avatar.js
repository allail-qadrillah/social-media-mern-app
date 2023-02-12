import { Link } from 'react-router-dom'
import { Avatar as ChakraAvatar } from '@chakra-ui/react'
import { PROTECTED } from 'lib/routes'

export default function Avatar({ user }) {

  return (
    <ChakraAvatar as={Link} to={`${PROTECTED}/profile/${user?.id}`} name={user?.username} size='lg' src={user?.avatar}
      _hover={{ cursor: "pointer", opacity: '0.8' }}></ChakraAvatar>
  )
}
