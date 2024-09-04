 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';

 import HomeScreen from './screens/home';
 import EcossistemaScreen from './screens/ecossistema';
 import EcoTerrestreScreen from './screens/ecoTerrestre';
 import BiomaFlorestaTropicalScreen from './screens/biomaFlorestaTropical'
 import BiomaFlorestaTemperadaScreen from './screens/biomaFlorestaTemperada'
 import BiomaTaigaScreen from './screens/biomaTaiga'
 import BiomaTundraScreen from './screens/biomaTundra'
 import BiomaDesertoScreen from './screens/biomaDeserto'
 import BiomaSavanaScreen from './screens/biomaSavana'
 import BiomaPradariaScreen from './screens/biomaPradaria'
 import EcoAquaticoScreen from './screens/ecoAquatico';
 import AguaDoceScreen from './screens/aguaDoce';
 import AguaSalobraScreen from './screens/aguaSalobra';
 import AguaSalgadaScreen from './screens/aguaSalgada';
 import AboutScreen from './screens/about';
 
 

 const Stack = createNativeStackNavigator();

 function App() {
     return (
      <NavigationContainer>
         <Stack.Navigator>
         <Stack.Screen name='Apresentação' title='Apresentação' component={HomeScreen} />
         <Stack.Screen name='Ecossistema' component={EcossistemaScreen} />
         <Stack.Screen name='Ecossistema Terrestre' component={EcoTerrestreScreen} />
         <Stack.Screen name='Floresta Tropical' component={BiomaFlorestaTropicalScreen} />
         <Stack.Screen name='Floresta Temperada' component={BiomaFlorestaTemperadaScreen} />
         <Stack.Screen name='Taiga' component={BiomaTaigaScreen} />
         <Stack.Screen name='Tundra' component={BiomaTundraScreen} />
         <Stack.Screen name='Deserto' component={BiomaDesertoScreen} />
         <Stack.Screen name='Savana' component={BiomaSavanaScreen} />
         <Stack.Screen name='Pradaria' component={BiomaPradariaScreen} />
         <Stack.Screen name='Ecossistema Aquático' component={EcoAquaticoScreen} />
         <Stack.Screen name='Ecossistema de Água Doce' component={AguaDoceScreen} />
         <Stack.Screen name='Ecossistema de Água Salobra' component={AguaSalobraScreen} />
         <Stack.Screen name='Ecossistema de Água Salgada' component={AguaSalgadaScreen} />
         <Stack.Screen name='Sobre' component={AboutScreen} />
         </Stack.Navigator>
      </NavigationContainer>
     );
 }

 export default App;