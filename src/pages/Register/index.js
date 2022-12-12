import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'


export default function Register() {
  const navigation = useNavigation();
  return (//criando o container - corpo da tela
    <>
     <View style={styles.container}>
    
    {/* titulo e subtitulo da tela*/}
      <Text style={styles.message}>Criar Conta.</Text>
      <Text style={styles.welcome}>Agradecemos a preferência. Mãos à massa!</Text>


      {/* estrutura dos objetos dentro da tela*/}
      <View style={styles.containerHeader}>


         {/* estrutura dos objetos dentro da tela*/}
        <Text style = {styles.title}>Nome Completo</Text>
         <TextInput
          placeholder='Seu Nome Completo'
          fontSize = {16}
          paddingLeft = {10}
          style={styles.input}
      />
        
        <Text style = {styles.title}>E-mail</Text>
         <TextInput
          placeholder='E-mail'
          fontSize = {16}
          paddingLeft = {10}
          style={styles.input}
      />

        
<Text style = {styles.title}>Cpf</Text>
         <TextInput
          placeholder='Cpf'
          fontSize = {16}
          paddingLeft = {10}
          style={styles.input}
      />

        

<Text style = {styles.title}>Senha</Text>
         <TextInput
          placeholder='Senha'
          fontSize = {16}
          paddingLeft = {10}
          style={styles.input}
      />

       <TouchableOpacity style={styles.button} 
        onPress = {() => navigation.navigate('Home')}> 
        <Text style={styles.buttonText}>Criar Conta</Text>
        
        </TouchableOpacity>



       <Text style={styles.questionText}>Já possui uma Conta ?</Text>

{/*criação do botao para navegar ate a tela de login */}
        <TouchableOpacity style={styles.buttonRegister} 
        onPress = {() => navigation.navigate('Login')}> 
        <Text style={styles.registerText}> Login </Text>
        
        
        </TouchableOpacity>

      
      </View>





    </View>
    </>
    )}

    const styles = StyleSheet.create({

        container:{
          flex: 1,
          backgroundColor: '#ffffff',
        },
        
        containerHeader:{
           marginTop:60,
            
           },
           
        


        message:{
            fontSize: 35,
            fontWeight: 'bold',
            color:'black',           
            alignSelf: 'center',
            paddingTop: 80,


          },

          title : {
            fontSize: 18,
            color : 'black',
            paddingStart: 47,
            
           
          
          
          },

          welcome:{
            fontSize: 17,
            color:'#b5b5b5',
            alignSelf: 'center'
          },




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


          button:{
  backgroundColor: '#b5b5b5',
   
     alignSelf: 'center',
     bottom: '15%',
     width: '80%',
     height: '10%',
     borderRadius: 10,
     alignItems:'center',
     marginTop: 130,
     justifyContent:'center'

 },

 registerText:{
color:'#2a8bd1',
fontSize: 16,
 bottom:'454%',
 left:'64%'


 },
 /* estilização do texto de pergunta */
 questionText:{
  
  fontSize: 16,
  paddingLeft:80,
  bottom:'14%'
 },

 
    })




     /*<Animatable.View
      animation="fadeInDown"
      delay={600}
      style={styles.containerHeader}
></Animatable.View> */