import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pokemon from '../screens/Pokemon'
import PokemonItem from '../screens/PokemonItem';
import Login from '../screens/Login';
import Cep from '../screens/Cep';

const Routes = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="Lista de Pokemons"
        component={Pokemon}
        
      />
      <Stack.Screen 
        name="PokemonItem" 
        component={PokemonItem} 
        options={({ route }) => ({
          title: route.params.name,
        })}
        />
         <Stack.Screen 
        name="Cep" 
        component={Cep} 
        options={({ route }) => ({
          title: route.params.name,
        })}
        />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default Routes;