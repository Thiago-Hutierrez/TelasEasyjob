import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'

export default function Login() {
  const navigation = useNavigation();
  
  return (//criando o container - corpo da tela
    <>
    <View style = {styles.container}>
    {/* usando animação dos objetos da tela com a biblioteca animatable*/}
    <Animatable.View
      animation="fadeInDown"
      delay={600}

      /* estrutura dos objetos dentro da tela*/
      style={styles.containerHeader}
      >
       {/* Mensagem de boas vindas*/}
      <Text style={styles.message}>Conecte à sua </Text>
      <Text style={styles.message}>conta</Text>
      <Text style={styles.welcome}>Olá, bem-vindo(a) de volta à sua conta!</Text>
    </Animatable.View>{/*animação com animatable*/}
    
    
    <Animatable.View animation="fadeInUp"
    delay = {600}
    style={styles.containerForm}
    >
      {/* criando a caixa de email com Textinput */}
    <Text style = {styles.title}>E-mail</Text>
    <TextInput
    placeholder='exemplo@email.com'
    fontSize = {16}
    paddingLeft = {10}
    style={styles.input}
      />

{/* criando a caixa da senha com Textinput */}
<Text style = {styles.title}>Senha</Text>
    <TextInput
    placeholder='sua senha'
    fontSize = {16}
    paddingLeft = {10}
    style={styles.input}

      />
    {/* botao Começar */}
         <TouchableOpacity style={styles.button} 

  
    onPress = {() => navigation.navigate('Home')}> 

        <Text style={styles.buttonText}> Conectar </Text>
        
        
        </TouchableOpacity>
        
      

      <Text style={styles.questionText}>Não tem uma Conta ?</Text>

    {/* botao registrar, com use navigation */} 
    <TouchableOpacity style={styles.buttonRegister} 

  
    onPress = {() => navigation.navigate('Register')}> 

        <Text style={styles.registerText}> Registrar </Text>
        
        
        </TouchableOpacity>

        
    </Animatable.View>
    
    </View>
    </>

  );
}
/* estilização da tela */
const styles = StyleSheet.create({

 /* estilização do corpo da tela */
container:{
  flex: 1,
  backgroundColor: '#ffffff',
},

/*  posicionamneto dos objetos, estrutura da tela */
containerHeader:{
 marginTop: 80,
 alignItems:'center'
},

/* Conecte a sua conta */
message:{
  fontSize: 35,
  fontWeight: 'bold',
  color:'black'
},

/* Mensagem de boas vindas */
welcome:{
  fontSize: 15,
  fontWeight: 'bold',
  color:'#b5b5b5',
  marginTop: 20
},

/* estilização do bloco das caixas de input */
containerForm:{
  
  width: 360,
  height: 164,
  marginTop: 100,
  borderColor:'#d9d9d9',
  alignSelf:'center',
  
  
},

/* estilização Email e senha */
title : {
  fontSize: 16,
  color : 'black',
  paddingStart: 15
 
},

/* estilização dos inputs */
input:{
  width: 300,
  height: 44,
  borderTopWidth: 2,
  borderBottomWidth: 2,
  borderLeftWidth:2,
  borderRightWidth: 2,
  borderColor:'#d9d9d9',
  borderRadius: 10,
  alignSelf:'center',
  alignItems:'center',
  marginTop: 10

},
/* estilização do botao */
 button:{
  backgroundColor: '#b5b5b5',
   
     alignSelf: 'center',
     bottom: '15%',
     width: '80%',
     height: '30%',
     borderRadius: 10,
     alignItems:'center',
     marginTop: 80,
     justifyContent:'center'

 },

/* estilização do texto do botao */
 buttonText:{
  color: '#ffffff',
  fontSize: 18,
  paddingLeft:3,

 },


 /* estilização do texto de pergunta */
 questionText:{
  
  fontSize: 16,
  paddingLeft:56,

 },

/* estilização do botao registrar */
 buttonRegister:{
  bottom: '13%',
  width: '20%',
  height: '14%',
  left:'62%',
  
  
 },
 
/* estilização do texto do botao registrar */

 registerText:{
  fontSize: 16,
  color:'#2a8bd1',
  
 }

 
})