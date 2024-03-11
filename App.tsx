import {  StatusBar} from 'react-native';
import { NativeBaseProvider } from 'native-base'
import { useFonts, Roboto_400Regular,  Roboto_700Bold} from '@expo-google-fonts/roboto';
import { THEME } from 'src/theme';
import { Loanding } from './src/Components/Loanding';
import { Routes } from './src/routes';

export default function App () {
 const [fontsLoanding]= useFonts ({ Roboto_400Regular, Roboto_700Bold});

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='trasparent'
        translucent
      />
         {fontsLoanding ? <Routes/> : < Loanding />}
    </NativeBaseProvider>
  )
}
