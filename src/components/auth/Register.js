import { Box, Center, Heading, FormControl, Input, FormLabel, FormErrorMessage, Button, Link, Text } from "@chakra-ui/react";
import { useRegister } from "hooks/auth";
import { DASHBOARD, LOGIN } from "lib/routes";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "react-hook-form"
import { emailValidate, passwordValidate, usernameValidate } from "utils/form-validate";


export default function Login() {
  const { register: signup, isLoading } = useRegister()
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  async function handleRegister(data) {
    signup({
      username: data.username,
      email: data.email,
      password: data.password,
      redirectTo: DASHBOARD
    })

  }

  return (
    <Center w='100%' h='100vh'>
      <Box mx='1' maxW='md' p='9' borderWidth='1px' borderRadius='lg'>
        <Heading mb='4' size='lg' textAlign='center'>Signup</Heading>

        <form onSubmit={(handleSubmit(handleRegister))}>
          <FormControl isInvalid={errors.username} py='2'>
            <FormLabel>Username</FormLabel>
            <Input type='text' placeholder="Username" {...register("username", usernameValidate)} />
            <FormErrorMessage>{errors.username && errors.username.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.email} py='2'>
            <FormLabel>Email</FormLabel>
            <Input type='email' placeholder="Email" {...register("email", emailValidate)} />
            <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.password} py='2'>
            <FormLabel>Password</FormLabel>
            <Input type='Password' placeholder="Password" {...register("password", passwordValidate)} />
            <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
          </FormControl>

          <Button mt='4' type="submit" colorScheme='purple' w='full' isLoading={isLoading} loadingText='Signing Up'>Register</Button>
        </form>

        <Text fontSize='xlg' align='center' mt='6'>
          Already have an account?{" "}
          <Link as={RouterLink} to={LOGIN} color='purple.800' fontWeight='medium' textDecor='underline' _hover={{ color: 'purple.500' }}>Log in</Link>
          {" "}instead!
        </Text>
      </Box>
    </Center>
  )
}
