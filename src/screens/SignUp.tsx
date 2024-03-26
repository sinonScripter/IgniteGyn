    import { VStack, Image, Text, Center , Heading , ScrollView} from 'native-base';
    import BackgroundImg from '@assets/background.png';
    import LogoSVG from '@assets/logo.svg';
    import { Input } from 'src/Components/Input';
    import { Button } from 'src/Components/Button';
    import { useNavigation } from '@react-navigation/native';
    import React, { useState } from 'react';
    import { useForm, Controller } from 'react-hook-form';

    export function SignUp(){


        const {control, handleSubmit } = useForm();

        const navigation = useNavigation ();


        function handleGoBack (){
            navigation.goBack();
        }

        function handleSignUp (data: any){
    console.log(data);
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