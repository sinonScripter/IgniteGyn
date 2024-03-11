import { VStack, Image, Text, Center , Heading , ScrollView} from 'native-base';
import BackgroundImg from '@assets/background.png';
import LogoSVG from '@assets/logo.svg';
import { Input } from 'src/Components/Input';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';

export function SignUp(){


    const navigation = useNavigation ();


    function handleGoBack (){
        navigation.goBack();
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
           <Input
            placeholder="Nome"

            />
           <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize='none'
            />
           <Input placeholder="Senha"
           secureTextEntry
            />
      <Button title={'Criar e Acessar'}></Button>
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