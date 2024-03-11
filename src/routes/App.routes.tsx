import { useTheme } from "native-base";
import { createBottomTabNavigator, BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import { Platform } from "react-native"; 
import HomeSvg from './../assets/home.svg'
import HistorySvg from './../assets/history.svg'
import PorfileSvg from './../assets/profile.svg'


import { Home } from '@screens/Home';
import { Exercise } from '@screens/Exercise';
import { Porfile } from '@screens/Porfile';
import { History } from '@screens/History';
import { color } from "native-base/lib/typescript/theme/styled-system";

type AppRoutes = {
    home:undefined;
    exercise:undefined;
    porfile:undefined;
    history:undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;   



const { Navigator, Screen} =  createBottomTabNavigator<AppRoutes>();

export function AppRoutes(){
        const { sizes, colors } = useTheme();

        const iconSize = sizes[6]


        
    return(
     <Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.green[500],
        tabBarInactiveTintColor: colors.gray[200],
        tabBarStyle:{
                backgroundColor: colors.gray[600],
                borderTopWidth:0,
                height: Platform.OS === 'android' ? 'auto' : 80,
                paddingBottom: sizes[10],
                paddingTop:sizes[6]
        }
     }}>
        <Screen
        name="home"
        component={Home}
        options={{
                tabBarIcon: ( {color} ) => (
                        <HomeSvg fill={color}  width={iconSize} height={iconSize}/>
                )
        }}
        />
       
        <Screen
name="history"
component={History}
options={{
        tabBarIcon: ( {color} ) => (
                <HistorySvg fill={color}  width={iconSize} height={iconSize}/>
        )
}}
/>

                <Screen
        name="porfile"
        component={Porfile}

        options={{
                tabBarIcon: ( {color} ) => (
                        <PorfileSvg fill={color}  width={iconSize} height={iconSize}/>
                )
        }}
        />

<Screen
        name="exercise"
        component={Exercise}
         options={{ tabBarButton: () => null}}
        />
    
    
 
     </Navigator>
    );

}