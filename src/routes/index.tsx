import { Box, useTheme } from "native-base";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes} from "./App.routes";


export function Routes(){
  const {colors} = useTheme ();

  const theme = DefaultTheme;
  theme.colors.background = colors.gray[700];


return (
  <Box flex={1} bg='gray.700'>
    <NavigationContainer>
       <  AuthRoutes/>
    </NavigationContainer>

  </Box>
);
}