import { Box, Button, Code, Stack } from "@chakra-ui/react";
import { useAuth } from "hooks/auth";
import { LOGIN, PROTECTED, USERS } from "lib/routes";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "components/profile/Avatar";

function ActiveUser() {
  const { user, isLoading } = useAuth()


  if (isLoading) {
    return <p>Loading users...</p>
  }

  // const navigate = useNavigate()
  // if (user == null){
  //   navigate(LOGIN)
  // }

  return(
    <Stack align='center' spacing='5' my='8'>

      <Avatar user={user}></Avatar>
      <Code>@{user.username}</Code>
      <Button colorScheme='teal' w='full' as={Link} to={`${PROTECTED}/profile/${user.id}`}>Edit Profile</Button>

    </Stack>
  )
}

export default function Sidebar() {
  return (
    <Box px='6' height='100vh' w='100%' maxW='300px' borderLeft='1px solid' borderLeftColor='teal.100'
      position='sticky' top='16' display={{ base: 'none', md: 'block' }} >

      <ActiveUser />
      <Box align='center'>

        <Box as='ul' borderBottom='2px solid' borderColor='teal.100' />
        <Button variant='outline' colorScheme='teal' mt='4' size='sm'
          as={Link} to={USERS}
        >ALL USERS</Button>

      </Box>
    </Box>
  )
}
