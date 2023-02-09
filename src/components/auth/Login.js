import { Box, Center, Heading, FormControl, Input, FormLabel, FormErrorMessage, Button, Link, Text } from "@chakra-ui/react";
import { REGISTER } from "lib/routes";
import { Link as RouterLink } from "react-router-dom";

export default function Login() {
  return (
    <Center w='100%' h='100vh'>
      <Box mx='1' maxW='md' p='9' borderWidth='1px' borderRadius='lg'>
        <Heading mb='4' size='lg' textAlign='center'>Login</Heading>

        <form onSubmit={() => { }}>
          <FormControl isInvalid={true} py='2'>
            <FormLabel>Email</FormLabel>
            <Input type='email' placeholder="Email" />
            <FormErrorMessage>email invalid</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={true} py='2'>
            <FormLabel>Password</FormLabel>
            <Input type='Password' placeholder="Password" />
            <FormErrorMessage>Password invalid</FormErrorMessage>
          </FormControl>

          <Button mt='4' type="submit" colorScheme='purple' w='full' isLoading={true} loadingText='logging in'>Log in</Button>
        </form>

        <Text fontSize='xlg' align='center' mt='6'>
          Don't have an account?{" "}
          <Link as={RouterLink} to={REGISTER} color='purple.800' fontWeight='medium' textDecor='underline' _hover={{ color: 'purple.500' }}>Register</Link>
          {" "}instead!
        </Text>
      </Box>
    </Center>
  )
}
