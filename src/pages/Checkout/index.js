import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'
import { TextInputMask } from 'react-native-masked-text'



export default function Checkout(props) {




  const [horario, setHorario] = React.useState('');
  const [horarioF, setHorarioF] = React.useState('');
  const [descricaoServico, setDescricaoServico] = React.useState('')

  


    





 const navigation = useNavigation();
  return (
    <>
    <View >
      <View style={styles.container}>
    <Text style = {styles.title}>Contratar</Text>
    </View  >

    <View>
      <Text style = {styles.subtitle}>Pagamento</Text>
    </View>

    <Image style={styles.Image} source={require('../assets/cartao.jpg')}
         
         resizeMode = 'stretch'
     />
    <View style = {styles.contianer2}>
      <Text style = {styles.hora}>Escolha o Horario Inicial :</Text>
      <TextInputMask
         type={'datetime'}
         options={{
           format: 'HH:MM:SS'
         }}
          placeholder='15:30:03'
          fontSize = {16}
          paddingLeft = {10}
          style={styles.diainput}
          value={horario}
          onChangeText={horario => setHorario(horario)}
      />
     
    </View>

    <View style = {styles.contianer2}>
      <Text style = {styles.hora}>Escolha o Horario Final :</Text>
      <TextInputMask
         type={'datetime'}
         options={{
           format: 'HH:MM:SS'
         }}
          placeholder='16:30:03'
          fontSize = {16}
          paddingLeft = {10}
          style={styles.diainput}
          value={horarioF}
          onChangeText={horarioF => setHorarioF(horarioF)}
      />
     
    </View>
    
    <View>
      <Text style = {styles.detalhes}>Detalhes :</Text>
      <TextInput
         placeholder='Senha'
         fontSize = {16}
         paddingLeft = {3}
         multiline= {true}
         style={styles.input}
       value={descricaoServico}
       onChangeText={descricaoServico => setDescricaoServico(descricaoServico)}
     />
    </View>
    <View>
      <Text style = {styles.total}>Total :</Text>
    </View>

       <View >

       <TouchableOpacity style={styles.button}
        onPress = {() => contratar()}
        > 
          <Text style={styles.buttonText}>Finalizar</Text>
          
        </TouchableOpacity>

       </View>

       <View >
       <TouchableOpacity style={styles.button}
        onPress = {() =>  navigation.navigate('Formulario')}
        > 
          <Text style={styles.buttonText}>voltar</Text>
        </TouchableOpacity>
       </View>
       
       </View>
    </>


  )}
  const styles = StyleSheet.create({

    container:{
     
      backgroundColor: '#eeeeee',
    },
    contianer2:{
        flexDirection: 'row',
        
    },
    title : {
      fontSize: 23,
      color : 'black',
      justifyContent: 'center',
      alignSelf:'center',
     marginTop:20
      
    },
    
 
     button:{
      backgroundColor: '#049eda',
       
         
         width: 300,
         height: 60,
         borderRadius: 20,
         alignItems:'center',
         alignSelf:'center',
         justifyContent:'center',
         bottom:20,
         marginTop:20
         
     },
     subtitle:{
      fontSize: 18,
     
      justifyContent: 'center',     
      position:'absolute',
      bottom:510,
      paddingStart:40
      
     },
     buttonText:{
      color: '#ffffff',
      fontSize: 18,
      
    
     },

     dia:{
        flexDirection:'row',
      fontSize: 20,
      justifyContent: 'flex-start',     
      bottom:300,
      paddingStart:40,
     
     
     },
     hora:{
      flexDirection:'row',
      fontSize: 20,
      
     
        
      
      bottom:210,
      paddingStart:40
     },
     diainput:{
        flexDirection:'row',
        fontSize: 20,
        justifyContent: 'flex-end',     
       
        
       
       },
     detalhes:{
      fontSize: 20,
     
      justifyContent: 'center',     
      position:'absolute',
      bottom:100,
      paddingStart:40,
      borderBottomWidth:1,
      width:400,
      height:40
     },
     total:{
      fontSize: 20,
     
      justifyContent: 'center',     
      position:'absolute',
      paddingStart:40,
      bottom:60,
     
    
      
     },
          
    Image :{
      
      
      width: 310,
      height:180,
      marginLeft:20,
      position:'absolute',
      marginTop:100,
      alignSelf:'center'
      
      
    },

    
    
    
     
    })
