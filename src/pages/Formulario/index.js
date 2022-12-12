import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';
//import Checkbox from 'expo-checkbox';
//import Dropdown from 'react-native-input-select';


import { Picker } from '@react-native-picker/picker';



export default function Formulario() {




  
    const [cep, setCep] = React.useState('');
    const [city, setCity] = React.useState('');
    const [uf, setUf] = React.useState('');
    const [telefone, setTelefone] = React.useState('')
    const [ddd, setDdd] = React.useState('')
    const [prestarServicos, setPrestarServico] = React.useState('')
    const [categoria, setCategoria] = React.useState('')
    const [descricaoServico, setDescricaoServico] = React.useState('')
    const [valordoServico, setValordoServico] = React.useState('')
    const [subcategoriadeServicos, setSubcategoriadeServicos] = React.useState('')




    









  
    
    



    const navigation = useNavigation();
    return (
       
     
     <View style={styles.container}>
     <View style={styles.containerHeader}>
   
        {/* estrutura dos objetos dentro da tela*/}
       <Text style = {styles.title}>cep</Text>
        <TextInput
         placeholder='Seu Primeiro Nome'
         fontSize = {16}
         paddingLeft = {3}
         keyboardType="numeric"
         maxLength={8}
         style={styles.input}
         value={cep}
         onChangeText={cep => setCep(cep)}
     />
   
     <Text style = {styles.title}>cidade</Text>
        <TextInput
         placeholder='Ultimo Nome'
         fontSize = {16}
         paddingLeft = {3}
         style={styles.input}
         value={city}
         onChangeText={city => setCity(city)}
   
         
     />
     <Text style = {styles.title}>UF</Text>
     <TextInput
         placeholder='Ultimo Nome'
         fontSize = {16}
         paddingLeft = {3}
         maxLength={2}
         style={styles.input}
         value={uf}
         onChangeText={uf => setUf(uf)}
     />
     <Text style = {styles.title}>Numero</Text>
     <TextInput
         placeholder='Ultimo Nome'
         fontSize = {16}
         paddingLeft = {3}
         keyboardType="numeric"
         maxLength={9}
         style={styles.input}
         value={telefone}
         onChangeText={telefone => setTelefone(telefone)}
     />
     
       
       <Text style = {styles.title}>DDD</Text>
        <TextInput
         placeholder='E-mail'
         fontSize = {16}
         paddingLeft = {3}
         keyboardType="numeric"
         maxLength={2}
         style={styles.input}
         value={ddd}
         onChangeText={ddd => setDdd(ddd)}
     />
   
   
   
     <Text style = {styles.title}>Descrição{'\n'}do Serviço</Text>
        <TextInput
         placeholder='Senha'
         fontSize = {16}
         paddingLeft = {3}
         multiline= {true}
         style={styles.input}
       value={descricaoServico}
       onChangeText={descricaoServico => setDescricaoServico(descricaoServico)}
     />
     <Text style = {styles.title}>Valor {'\n'}do serviço</Text>
        <TextInput
         placeholder='valor'
         fontSize = {16}
         keyboardType="numeric"
         paddingLeft = {3}
         style={styles.input}
         value={valordoServico}
        onChangeText={valordoServico => setValordoServico(valordoServico)}
     />
   
      
   
   
   
    
   <View style={styles.contianer2}>
   <TouchableOpacity style={styles.button} 
       onPress = {() => atualizar()}> 
       <Text style={{alignSelf:'center', margin:15}}>Atualizar</Text>
       
       </TouchableOpacity>
       
   <TouchableOpacity style={styles.button2} 
       onPress = {() => navigation.navigate('Home')}> 
       <Text style={{alignSelf:'center', margin:15}}>Voltar</Text>
       
       </TouchableOpacity>
       
       </View>
   
   
       </View>
     
       <View >
       <View  style={styles.p1}> 
   <View><Text style={styles.categoria}>Categoria</Text></View>
         <Picker style={styles.picker}
         selectedValue={categoria}
         onValueChange={(itemValue) => setCategoria(itemValue)}>
   
     
   
        <Picker.Item label="Escolha a sua Profissao" value = {0}/>
       <Picker.Item label="asisstencia tecnica" value = {1}/>
       < Picker.Item label="serviços domesticos" value = {2}/>
       <Picker.Item label="reformas e reparos" value = {3}/>
       < Picker.Item label="aulas" value = {4}/>
   
        </Picker>
       </View>
   </View>
   
   <View  style={styles.p2}> 
   <View><Text style={styles.subcategoria}>Subcategoria</Text></View>
   <Picker style={styles.picker2}
       selectedValue={subcategoriadeServicos}
       onValueChange={(itemValue) => setSubcategoriadeServicos(itemValue)}>
   
   <Picker.Item label="Escolha a sua Profissao" value = {0}/>
       <Picker.Item label="Ar condicionado" value = {1}/>
       < Picker.Item label="Adega climatizada" value = {2}/>
       <Picker.Item label="Cabeamento e redes" value = {3}/>
       < Picker.Item label="diarista" value = {4}/>
       <Picker.Item label="baba" value = {5}/>
       < Picker.Item label="Adestrador de cachorro" value = {6}/>
       <Picker.Item label="Pedreiro" value = {7}/>
       < Picker.Item label="Eletricista" value = {8}/>
       <Picker.Item label="Encanador" value = {9}/>
       < Picker.Item label="idiomas " value = {10}/>
       <Picker.Item label="Educação espeical" value = {11}/>
       < Picker.Item label="Ensino Profissionalizante " value = {12}/>
   
       </Picker>
       </View>
   
   
       
     <View  style={styles.p3}> 
   <View><Text  style={styles.servicos}>Prestador de Serviços ?</Text></View>
   <Picker style={styles.picker3}
       selectedValue={prestarServicos}
       onValueChange={(itemValue) => setPrestarServico(itemValue)}>
   
   <Picker.Item />
        <Picker.Item label="Sim" value = {true}/>
        < Picker.Item label="Não" value = {false}/>
   
   
       
       </Picker>
   </View>
   
   
   
   
   </View>
   
   )}
   
   const styles = StyleSheet.create({
   
       container:{
         flex: 1,
         backgroundColor: '#ffffff',
         paddingTop: 50,
       },
       contianer2:{
         flexDirection: 'row',
         top:90
         
     },
       
       containerHeader:{
          marginTop:30,
         
         
          marginLeft:10,
          justifyContent:'center',
          textAlign:'center'
           
       },
       message:{
           fontSize: 35,
           fontWeight: 'bold',
           color:'black',           
           alignSelf: 'center',
           paddingTop: 40,
   
   
         },
   
         title : {
           fontSize: 14,
           color : 'black',
         
          bottom:14,
          
           
          
         
         
         },
   
         welcome:{
           fontSize: 17,
           color:'#b5b5b5',
           alignSelf: 'center'
         },
   
   
   
   
         input:{
           width: 240,
           height: 40,
           borderTopWidth: 2,
           borderBottomWidth: 2,
           borderLeftWidth:2,
           borderRightWidth: 2,
           borderColor:'#d9d9d9',
           borderRadius: 10,
           alignItems:'center',
           bottom:40,
           marginLeft:120,
           
           
           
           
         
         },
   
   
         button:{
   backgroundColor: '#1d80e2',
   
    alignSelf: 'flex-start',
    
    width: 160,
    height:50,
    borderRadius: 10,
    alignItems:'flex-start',
   alignSelf:'flex-start',
   justifyContent:'flex-start',
   left:16
   
    
   
   },
   button2:{
     backgroundColor: '#1d80e2',
     
      alignSelf: 'flex-end',
      
      width: 160,
      height:50,
      borderRadius: 10,
      alignItems:'flex-end',
     alignSelf:'flex-end',
     justifyContent:'flex-end',
     marginLeft: 40,
      
     
     },
   
   registerText:{
   color:'#2a8bd1',
   fontSize: 18,
   bottom:'42%',
   left:'64%'
   
   
   },
   /* estilização do texto de pergunta */
   questionText:{
   
   fontSize: 16,
   paddingLeft:3,
   bottom:'14%'
   },
   
   categoria:{
     fontSize:16,
     alignSelf:'flex-start',
     paddingStart:14
     
   
    
   
   },
   p1:{
   
    
    justifyContent:'center',
    bottom:70,
   
   
   },
   p2:{
     justifyContent:'center',
     bottom:90
    },
    p3:{
   
     bottom:60,
     paddingStart:20
     
     
   
    },
   
   subcategoria:{
     fontSize:16,
      alignSelf:'flex-end',
      paddingRight:91,
    
     
   },
   servicos:{
     fontSize:16,
     alignSelf:'flex-start',
     bottom:10,
     paddingTop:10,
     paddingBottom:10,
     paddingRight:50,
     
   },
   
   picker:{
     width:180,
     height:40,
     position:'absolute',
     marginLeft:5,
     top:5
     
     
   
   
      
    
   },
   
   picker2:{
    width:180,
     height:40,
     position:'absolute',
     marginLeft:200,
     top:5
     
     
   
   },
   
   picker3:{
    width:180,
    height:40,
    position:'absolute',
    marginLeft:200,
    top:5
     
   
   },
   
   
   })
   
   