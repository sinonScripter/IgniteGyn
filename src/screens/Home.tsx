import { useNavigation } from '@react-navigation/native';
import { VStack, FlatList, HStack, Heading, Text, ScrollView} from 'native-base';
import { useState } from 'react';
import { ExerciseCard } from 'src/Components/ExerciseCard';
import { Group } from 'src/Components/Gruop';
import { HomeHeader } from 'src/Components/HomeHeader';
import { AppNavigatorRoutesProps } from 'src/routes/App.routes'

export function Home(){
    const [group, setgroup] = useState (['costas','ombro','biceps','triceps']);
    const [exercicios, setexercicios] = useState (['Puxada frontal','Remada curvada','Remada unilateral','Levantamento terra']);
    const [groupSelected, setgroupSelected] = useState ('costas');

    const navitaion = useNavigation<AppNavigatorRoutesProps>();

    function handleOpenExerciseDetails(){
        navitaion.navigate('exercise');
    }

    return(
        <ScrollView>
     <VStack flex={1}>
        <HomeHeader />
        <FlatList 
        data={group} 
        keyExtractor={item => item}
        renderItem={({ item }) =>(
            <Group
            name={item}
            isActive={groupSelected.toLocaleUpperCase() ===item.toLocaleUpperCase() }
            onPress= {() => setgroupSelected(item)}
           
            />

        ) 
    } 
    horizontal
    showsHorizontalScrollIndicator={false}
    _contentContainerStyle={{px:8}}
    my={10}
    maxH={10}
        />


        <VStack flex={1} px={8}>

<HStack justifyContent={'space-between'} mb={5}>
    <Heading color={'gray.200'} fontSize='md'>
        Exercicios
    </Heading>

    <Text color={'gray.200'} fontSize='sm'>
        {exercicios.length}
    </Text>

</HStack>

<ExerciseCard
onPress={handleOpenExerciseDetails}
/>
<FlatList
data={exercicios}
keyExtractor={item => item}
renderItem={({ item }) => (
<ExerciseCard/>
)}
showsVerticalScrollIndicator={false}
_contentContainerStyle={{paddingBottom:20}}
/>

</VStack>

     </VStack>
     </ScrollView>
    );
}