import { Box, Center, Heading, FormControl, Input, FormLabel, FormErrorMessage, Button, Link, Text } from "@chakra-ui/react";
import { useLogin } from "hooks/auth";
import { DASHBOARD, REGISTER } from "lib/routes";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "react-hook-form"
import { emailValidate, passwordValidate } from "utils/form-validate";


export default function Login() {
  const { login, isLoading } = useLogin()
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  async function handleLogin(data){
    const succeeded =  await login( { email: data.email, 
                                      password: data.password, 
                                      redirectTo: DASHBOARD} )
    if (succeeded) reset() // clear form input field if loggin succeded
    
  }

  return (
    <Center w='100%' h='100vh'>
      <Box mx='1' maxW='md' p='9' borderWidth='1px' borderRadius='lg'>
        <Heading mb='4' size='lg' textAlign='center'>Login</Heading>

        <form onSubmit={( handleSubmit(handleLogin) )}>
          <FormControl isInvalid={ errors.email } py='2'>
            <FormLabel>Email</FormLabel>
            <Input type='email' placeholder="Email" {...register("email", emailValidate)}/>
            <FormErrorMessage>{ errors.email && errors.email.message }</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={ errors.password } py='2'>
            <FormLabel>Password</FormLabel>
            <Input type='Password' placeholder="Password" {...register("password", passwordValidate)}/>
            <FormErrorMessage>{ errors.password && errors.password.message }</FormErrorMessage>
          </FormControl>

          <Button mt='4' type="submit" colorScheme='purple' w='full' isLoading={isLoading} loadingText='logging in'>Log in</Button>
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
