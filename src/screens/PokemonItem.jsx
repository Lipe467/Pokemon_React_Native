import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MyButton from '../components/MyButton';

const PokemonItem = ({navigation, route, Cep}) => {

const [nome, setNome] = useState()
const [recado, setRecado] = useState()

  const {name, image} = route.params.pokemon
  return (
    <View style={styles.wallpaper}>
       <Image
          style={{ width: 180, height: 180}}
          source={{ uri: image }}
      />
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.recado}>PokeRecado</Text>
      <TextInput
      style={styles.input}
      value={nome}
      onChangeText={setNome}
      placeholder='Nome'
      />
      <TextInput
      style={styles.input}
      value={recado}
      onChangeText={setRecado}
      placeholder='Recado'
      />
      <TouchableOpacity style={{gap: 18}}>
        <MyButton
            title='ENVIAR'
            background={'#f1f1f1'}

        />
      <MyButton title='Buscador de Cep' background={'#f1f1f1'} onPressButton={() =>
                navigation.navigate('Cep', {Cep: Cep})
            }/>
            </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  pokemonImg: {
    width: '100%',
    height: 100
  },
  wallpaper: {
    backgroundColor: '#8fbc8f',
    height: '100%',
  },
  text: {
    color: '#fff',
    fontSize: 24,
  },
  recado: {
    color: '#f1f1f1',
    fontSize: 24,
    textAlign: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor:'#f1f1f1'
  },
  
})

export default PokemonItem;