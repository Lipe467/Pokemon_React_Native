import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import MyButton from "../components/MyButton";

const Pokemon = ({navigation}) => {

    const styles = StyleSheet.create({
        pokemoncard: {
            padding:16,
            backgroundColor: '#8fbc8f',
            margin:8,
            borderRadius:4
    
        },
        text: {
            color:'#ffff',
            fontSize: 24,
    
        },
        text2: {
            fontWeight:'bold',
            fontSize: 20,
            color: '#af2'
        }
        
    })
   
   const [pokemon, setPokemon] = useState()



   const PokemonItem = ({ pokemon, navigation }) => {
    return (
      <View style={styles.pokemoncard}>
        <Text style={styles.text2}>Name:</Text>
        <Text style={styles.text}>{pokemon.name}</Text>
        <Text style={styles.text2}>Height:</Text>
        <Text style={styles.text}>{pokemon.height}</Text>
        <Text style={styles.text2}>Weight:</Text>
        <Text style={styles.text}>{pokemon.weight}</Text>
        <Text style={styles.text2}>Abilities:</Text>
        <FlatList
          data={pokemon.abilities}
          keyExtractor={(ability) => ability.name}
          renderItem={({ item }) => (
            <Text style={styles.text}>{item.name}</Text>
          )}
        />
        {pokemon.image && (
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: pokemon.image }}
          />
        )}
        <MyButton
          title="PokeRecado"
          background="#f1f1f1"
          onPressButton={() =>
            navigation.navigate('PokemonItem', { pokemon: pokemon })
          }
        />
      </View>
    );
  };

  const fetchPokemon = async () => {
    try {
      const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/');
      const pokemonList = data.results;
  
      const detailedPokemonList = await Promise.all(
        pokemonList.map(async (pokemon) => {
          const { data: pokemonData } = await axios.get(pokemon.url);
  
          // Fetch abilities data for the current Pokémon
          const abilitiesData = await Promise.all(
            pokemonData.abilities.map(async (ability) => {
              const { data: abilityData } = await axios.get(ability.ability.url);
              return {
                name: abilityData.name,
              };
            })
          );
  
          return {
            name: pokemonData.name,
            image: pokemonData.sprites.other['official-artwork'].front_default,
            height: pokemonData.height,
            weight: pokemonData.weight,
            abilities: abilitiesData, // Assign abilities data to the abilities property
          };
        })
      );
  
      setPokemon(detailedPokemonList);
    } catch (error) {
      console.log(error);
    }
  };
   useEffect(() => {
    fetchPokemon()
}, [])



    return (
            <View>
            <FlatList 
            data={pokemon}
             renderItem={({item}) => <PokemonItem pokemon={item} navigation={navigation} 
             />
     }
     />
     </View>

    );
}

export default Pokemon;