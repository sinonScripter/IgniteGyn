import { Heading, SectionList, Text } from 'native-base';
import { VStack} from 'native-base'
import { ScreenHeader } from 'src/Components/ScreenHeader';
import { HistoryCard } from 'src/Components/HistoryCard';
import { useState } from 'react';


 export function History(){

const [exercises, setExercises]= useState([
    {
    
        title: '11.03.24',
        data: ['Puxada frontal', 'Remada unilateral'],
      },
      {
    
        title: '11.03.24',
        data: ['Puxada frontal'],
      },
])

    return(
        <VStack flex={1}>
           <ScreenHeader title='Histórico de Exercícios'/>
         <SectionList
         sections= {exercises}
         keyExtractor={item => item}
         renderItem={({ item }) => (


             <HistoryCard/>
         )}
         renderSectionHeader={({ section })=> (
            <Heading color={'gray.200'} fontSize='md' mt={10} mb={3}>
                {section.title}
            </Heading>
         ) }
         px={8}
         contentContainerStyle={[].length === 0 && {flex : 1, justifyContent: 'center'}}
         ListEmptyComponent={() => (
        
            <Text color={'gray.100'} textAlign='center'>Nao ha exercicos registrados ainda.{'\n'}
                Vamos fazer exercicios hoje?
                    
                
            </Text>


         )}

          />

           
        </VStack>
    );
}