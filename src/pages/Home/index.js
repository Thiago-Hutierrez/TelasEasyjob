import { View, Text, StyleSheet, ScrollView, TextInput, Image,Button } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather';
import New from '../components/New';
import Service from '../components/Service';


export default function Home() {
  const navigation = useNavigation();
  return (
    <>
    
    <View>
        <Text style={styles.Text}> Olá, {'\n'} Pedro Henrique</Text>

      <Image style={styles.Image} source={require('../assets/avatar.jpg')}
         
          resizeMode = 'stretch'
      />
      <View >
      <Icon style={styles.search}
        name="search" 
        size={24} 
        color="black" 
       
        
        />




      <TextInput
          placeholder='Do que Precisa ?'
          fontSize = {16}
          paddingLeft = {10}
          style={styles.input}

          
      />
      
      <Text style = {styles.title}>Categorias de Serviços</Text>
      </View>
    
   
   <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15, }}>
      <New
       cover={require('../assets/classes.png')} 
       name="Aulas"
       
       onPress={() => navigation.navigate('detail') }
      />

      <New
       cover={require('../assets/driver.png')} 
       name="Automóveis"
      
       onPress={() => {}}
      />

      <New
       cover={require('../assets/cleaner.png')} 
       name="Serviços Domésticos"
       
       onPress={() => {}}
      />

      
      <New
       cover={require('../assets/events.png')} 
       name="Eventos"
       
       onPress={() => {}}
      />

      
      <New
       cover={require('../assets/health.png')} 
       name="Saúde"
       
       onPress={() => {}}
      />

       



    </ScrollView>
    <Text style={styles.TextServices}>Serviços Próximos a Você</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15, }}>
     <Service
       cover={require('../assets/user1.jpg')} 
       name="Ana Carolina"
       subtitle="Inst. de Yoga"
       description="Ministra e prepara o material didático das aulas de Yoga conforme orientação e conteúdo previamente distribuído."
       onPress={() => navigation.navigate('detail') }
      />

     <Service
       cover={require('../assets/user2.jpg')} 
       name="Paulo Kogos "
       subtitle="Pintor"
       description="Preparar e pintar as superfícies externas e internas de edifícios e outras obras civis."
       onPress={() => {}}
      />

     <Service
       cover={require('../assets/user3.jpg')} 
       name="Lucas Abreu"
       subtitle="Prof. de Matemática"
       description="Ministra e prepara o material didático das aulas de Yoga conforme orientação e conteúdo previamente distribuído."
       onPress={() => {}}
      />

    </ScrollView>
   
       <View style={styles.menu}>




        
        <Icon.Button style={styles.Button}
            name='home'
            color={"#000000"}
            size={34}
            backgroundColor='transparent'
            justifyContent='center'
            onPress = {() => navigation.navigate('Home')}>
            
            </Icon.Button>    
            
           
            <Icon.Button style={styles.Button2}
            name='clipboard'
            color={"#000000"}
            size={34} 
            backgroundColor='transparent'
            justifyContent='center'
            
            onPress = {() => navigation.navigate('Services')}>
            
            </Icon.Button>      





            <Icon.Button style={styles.Button3}
            name='user'
            color={"#000000"}
            size={34} 
            backgroundColor='transparent'
            justifyContent='center'
            
            onPress = {() => navigation.navigate('Profile')}>
            
            </Icon.Button>  
            


      
           

      


            </View>

    </View>
    
    </>


  )}


  const styles = StyleSheet.create({
    container : {
      backgroundColor: '#ffffff',
      flex: 1,
      
      
    },

    Image :{
      
        borderRadius:10,
        width: 60,
        height:90,
        marginLeft:'74%',
        position:'absolute',
        marginTop:'4%',
        
        
      },
      
     Text :{
      fontSize:28,
      
      marginTop:'5%'

     },
      
Button:{
 
 paddingLeft:'16%',
 alignSelf:'flex-start'
},
      
Button2:{
 
  paddingLeft:'20%',
  alignSelf:'center'
 
},
Button3:{
 
  paddingLeft:'20%',
  alignSelf:'flex-end'
 
},

menu:{
  flexDirection:'row',
  backgroundColor:'#ffffff',
  marginTop: '3%',
  borderTopColor:'#b5b5b5',
  borderTopWidth: 1,
  alignItems:'center',
  justifyContent:'center'
  
},
title:{
  fontSize:20,
  paddingLeft:'7%',
  marginTop: '2%',
},

input:{
  width: 360,
  height: 44,
  borderTopWidth: 2,
  borderBottomWidth: 2,
  borderLeftWidth:2,
  borderRightWidth: 2,
  borderColor:'#d9d9d9',
  borderRadius: 10,
  alignSelf:'center',
  alignItems:'center',
  marginTop: 30

},

inputArea:{
  paddingHorizontal: 15,
  flexDirection: 'row',
  alignItems: 'center',
  width: '98%',
  backgroundColor:  '#FFF',
  elevation: 2,
  paddingHorizontal: 20,
  height: 37,
  borderRadius: 10,
 
},

search:{
  position:'absolute',
  marginTop:'10%',
 paddingLeft:'88%',
 
},
TextServices:{
  fontSize:20,
  paddingLeft:'7%',
  
},



    })
