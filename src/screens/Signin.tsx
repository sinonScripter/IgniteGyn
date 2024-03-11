import { VStack, Image, Text, Center , Heading , ScrollView} from 'native-base';
import BackgroundImg from '@assets/background.png';
import LogoSVG from '@assets/logo.svg';
import { Input } from 'src/Components/Input';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';


export function SignIn(){

  
    const navigation = useNavigation<AuthNavigatorRoutesProps>();


    function hendleNewAccount(){
        navigation.navigate('signUp')
    }


    return (
            <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
        <VStack flex={1} bg={'gray.700'} p={10} pb={16}>
            <Image
            source={BackgroundImg}
            alt="Pessoas treinando"
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
            Acesse sua Conta
           </Heading>
           <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize='none'
            />
           <Input placeholder="Senha"
           secureTextEntry
            />
      <Button title={'Acessar'}></Button>
           </Center>

<Center marginTop={24}>
           <Text color='gray.100' fontSize='sm' mb={3} fontFamily='body'>
            Ainda nao tem acesso
           </Text>
           </Center>
           <Button 
           title={'Criar Conta'}
            variant='outline'
            onPress={hendleNewAccount}
            >
            
            </Button>

        </VStack>
        </ScrollView>
    );
}