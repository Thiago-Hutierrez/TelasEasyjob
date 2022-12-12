import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'



export default function Splash() {
  const navigation = useNavigation();



  return (//view container

        <><View style={styles.container}>

     {/* Container Logo - Manipulação da logor */} 
       
     
      <View style={styles.containerLogo}>  


        <Animatable.Image
          animation= "flipInY"
          source={require('../assets/logo.png')}
          style = {{width: '75%' }}
          resizeMode = 'contain'

           />
      </View>
    

    {/* Criação da aba onde ficará o botao, com uso de Animação */} 
      <Animatable.View 
      delay={600}animation="fadeInUp" 
      style = {styles.containerForm}>
        <Text style = {styles.title}>
          Encontre o Serviço que você está 
          procurando com apenas um toque
          na tela.
        </Text>

        {/* Criação do botão começar, com useNavigation para navegar entre as telas */} 
        <TouchableOpacity style={styles.button}
        onPress = {() => navigation.navigate('Login')}
        > 
        
          <Text style={styles.buttonText}>Começar !</Text>
        </TouchableOpacity>
      </Animatable.View>
      


    </View>
    
    </>

  );
}

{/* Estilização do corpo da tela */}
const styles = StyleSheet.create({
  container : {
    backgroundColor: '#ffffff',
    flex: 1,
    
  
  },

  containerLogo : {
    backgroundColor: '#ffffff',
    alignItems:'center',
    flex: 2,
    marginTop: 120,
  },

  /* Estilização do da aba do botao */
  containerForm :{
   flex: 1,
   borderTopWidth: 3,
   borderLeftWidth: 3,
   borderRightWidth: 3,
   borderTopLeftRadius: 25,
   borderTopRightRadius: 25,
   paddingBottom: 40,
   justifyContent: 'space-evenly'
  },
  
/* Estilização da Mensagem inicial*/
  title : {
    fontSize: 24,
    color : '#b5b5b5',
    justifyContent: 'center',
    alignSelf:'center',
    marginBottom: 40,
    
  },
  /* Estilização do botao */
  button :{
    backgroundColor: '#b5b5b5',
   
    justifyContent: 'center',
     position: 'absolute',
     alignSelf: 'center',
     bottom: '15%',
     width: '80%',
     height: '30%',
     borderRadius: 10,
     alignItems:'center'
     
    
  },

/* Estilização do texto do botao */
  buttonText :{
    fontSize: 24,
    color: 'white',
    
    
  }
  

  
})