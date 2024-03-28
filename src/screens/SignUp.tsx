    import { VStack, Image, Text, Center , Heading , ScrollView} from 'native-base';
    import BackgroundImg from '@assets/background.png';
    import LogoSVG from '@assets/logo.svg';
    import { Input } from 'src/Components/Input';
    import { Button } from 'src/Components/Button';
    import { useNavigation } from '@react-navigation/native';
    import React, { useState } from 'react';
    import { useForm, Controller } from 'react-hook-form';
    import { yupResolver } from '@hookform/resolvers/yup'
    import * as yup from 'yup';


    type FormDataProps = {
        name: string,
        email: string,
        password: string,
        password_confirm:string,


    }

    const signUpSchema = yup.object({
        name: yup.string().required('Informe o nome.'),
        email: yup.string().required('Informe o E-mail').email('E-mail Invalido.'),
        password:  yup.string().required('Informe a Senha').min(6, 'a senha deve ter pelomenos 6 digitos.'),
        password_confirm:  yup.string().required('Confirme a Senha').oneOf([yup.ref('password'), null], 'as duas senha devem ser iguais.')

    });

    export function SignUp() {


        const {control, handleSubmit, formState: {errors} } = useForm<FormDataProps>({
         resolver: yupResolver(signUpSchema)
        });

        const navigation = useNavigation ();


        function handleGoBack (){
            navigation.goBack();
        }

        function handleSignUp ({name, email, password, password_confirm}: FormDataProps){
    console.log({name, email, password, password_confirm});
        }
        
        function register(arg0: { required: string; }): React.MutableRefObject<any> | React.RefCallback<any> | undefined {
            throw new Error('Function not implemented.');
        }

        return (
                <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
            <VStack flex={1} bg={'gray.700'} p={10} pb={16}>
                <Image
                source={BackgroundImg}
                alt="Pessoas treinando"
                defaultSource={BackgroundImg}
                resizeMode='contain'
                position='absolute'
                />
            <Center my={24}>
                <LogoSVG />
                <Text color={'green.100'} fontSize="sm">
                Treine sua mente e o seu corpo
                </Text>
                </Center>

            <Center>
            <Heading color='gray.100' fontSize='xl' mb='6' fontFamily="Heading">
                Crie sua conta
            </Heading>

            <Controller
             control={control}
             name='name'
          
             render={({field: {onChange, value}}) => (
                <Input
                placeholder="Nome" 
                onChangeText={onChange}
                value={value}
                errorMessage={errors.name?.message}
            />
             )}
            />

          

                <Controller
                            control={control}
                            name='email'
                            
                            render={({field: {onChange, value}}) => (
                                <Input
                                placeholder="E-mail"
                                keyboardType="email-address"
                                autoCapitalize='none'
                                onChangeText={onChange}
                                value={value}
                                errorMessage={errors.email?.message}
                        
                            />
                            )}
                            />
            
           
                <Controller
                            control={control}
                            name='password'
                            render={({field: {onChange, value}}) => (
                                <Input placeholder="Senha"
                                secureTextEntry
                                onChangeText={onChange}
                                value={value}
                                errorMessage={errors.password?.message}

                                />
                            )}
                            />



                            
                <Controller
                            control={control}
                            name='password_confirm'
                            render={({field: {onChange, value}}) => (
                                <Input placeholder="Confirme a Senha"
                                secureTextEntry
                                onChangeText={onChange}
                                value={value}
                                onSubmitEditing={handleSubmit(handleSignUp)}
                                returnKeyType='send'
                                errorMessage={errors.password_confirm?.message}

                                />
                            )}
                            />

                <Button
                title='Criar e Acessar'
                onPress={handleSubmit(handleSignUp)}
                >
                
       </Button>
           </Center>


           
         
           <Button 
           title={'Voltar para o Login'}
            variant='outline'
            mt={24}
            onPress={handleGoBack}
            >
            
            </Button>
            

        </VStack>
        </ScrollView>
    );
}