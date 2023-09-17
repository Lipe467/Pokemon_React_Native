
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import MyButton from "../components/MyButton";

const Login = ({ navigation, Pokemon }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)


  const styles = StyleSheet.create({
    button: {
      gap: 12
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderColor:'#f1f1f1'
    },
    text: {
      color: `#ff0000`,
      textAlign: 'center'
    },
    center: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: '#8fbc8f'
    }
  })


  const validEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleLogin = () => {
    if(validEmail(email) && password) {
      navigation.navigate('Lista de Pokemons', { Pokemon: Pokemon })
    } else {
      setError(true)
    }
  }

  return (
    <SafeAreaView style={styles.center}>
      <StatusBar />
      <TextInput
        onChangeText={setEmail}
        value={email}
        textContentType="emailAddress"
        style={styles.input}
        placeholder='Email'
      />
      <TextInput
        onChangeText={setPassword}
        value={password}
        style={styles.input}
        placeholder='Senha'
        secureTextEntry={true}
        onpress
      />
      <TouchableOpacity>
        <MyButton title='Entrar'  background={'#f1f1f1'} onPressButton={handleLogin} />
        { error &&  <Text style={styles.text}>Email ou Senha Inválidos</Text>}
      </TouchableOpacity>
      <Text style={{ textAlign: 'center', verticalAlign: 'bottom' , margin:18 }}>Desenvolvido por Felipe Augusto e João Gomes</Text>
    </SafeAreaView>
  );


}


export default Login;