import { Center, ScrollView, VStack, Skeleton, Text, Heading, useToast} from 'native-base'
import { useState } from 'react';
import {TouchableOpacity } from 'react-native';
import { Input } from 'src/Components/Input';
import { ScreenHeader } from 'src/Components/ScreenHeader';
import { UserPhoto } from 'src/Components/UserPhoto';
import { Button } from 'src/Components/Button';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

const PHOTO_SIZE = 33;

export function Porfile(){
    const [photoisloading, setPhotoIsLoading] = useState(false);

    const [userPhoto,setUserPhoto] = useState('https://github.com/sinonScripter.png')

    const toast = useToast (); 

    async function handleUsePhotoSelect() {
        setPhotoIsLoading(true);
        try {
            
       
        const photoSelect = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality:1,
            aspect: [4, 4],
            allowsEditing: true
        });

        
        if (photoSelect.canceled) {
            return;
        }
        
        if(photoSelect.assets[0].uri) {
            const photoInfo = await FileSystem.getInfoAsync(photoSelect.assets[0].uri);

            if ('size' in photoInfo && photoInfo.size && (photoInfo.size / 1024 / 1024) > 1 ) {
                return toast.show({
                    title:"Essa foto e muito grande ecolha uma de ate 5MG",
                    placement: 'top',
                    bgColor: 'red.500',

                });
                 
            }


            setUserPhoto(photoSelect.assets[0].uri);
        }

       
            setUserPhoto(photoSelect.assets[0].uri);
        } catch (error) {
            console.log(error);
        } finally {
            setPhotoIsLoading(false);
        }
    }

    return  (
        <VStack flex={1}>
            <ScreenHeader  title='Perfil'/>
            <ScrollView>
                <Center mt={6} px={10}>
                 {  
                 photoisloading ?
                 <Skeleton 
                    w={PHOTO_SIZE} 
                    h={PHOTO_SIZE} 
                    rounded='full'
                    startColor={'gray.500'}
                    endColor={'gray.400'}
                    />
      :
               <UserPhoto
                source={{uri: userPhoto}}
                alt='foto do usuario'
                size={PHOTO_SIZE}
                />
                }

                <TouchableOpacity onPress={handleUsePhotoSelect}> 
                    <Text color={'green.500'} fontWeight='bold' fontSize='md' mt={2} mb={8}>
                        Alterar Foto
                    </Text>
                </TouchableOpacity>

                <Input 
                bg={'gray.600'}
                placeholder='Nome'
                />

                <Input 
                bg={'gray.600'}
                placeholder='E-mail'
                isDisabled  
                />
                </Center>

                <VStack px={10} mt={12} mb={9}>
                  <Heading color={'gray.200'} fontSize='md' mb={2}>
                    Alterar Senha
                  </Heading>
                  <Input
                  bg={'gray.600'}
                  placeholder='Senha Atual'
                  secureTextEntry
                  />

<Input
                  bg={'gray.600'}
                  placeholder='Nova Senha'
                  secureTextEntry
                  />

<Input
                  bg={'gray.600'}
                  placeholder='Confirmar Senha'
                  secureTextEntry
                  />
                 <Button
                 title='Atualizar'
                 />
                  
                </VStack>
            </ScrollView>
        </VStack>
    );
}