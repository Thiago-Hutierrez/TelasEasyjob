import { View, Text, StyleSheet, ScrollView, TextInput , FlatList} from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import Jobs from '../components/Jobs';




export default function Services() {
    const navigation = useNavigation();
    return (
      <>
      <View>
          <Text style={styles.title}>Serviços</Text>
  
          <View style={styles.back}>
        <Icon.Button style={styles.backButton}
            name='arrow-left'
            color={"#000000"}
            size={40}
            backgroundColor='transparent'
            
            onPress = {() => navigation.navigate('Home')}>
            
            </Icon.Button>    
            </View>
            <View>

            <Icon style={styles.search}
            name="search" 
            size={24} 
            color="black" 
       
        
        />
            <TextInput
          placeholder='Pesquisar'
          fontSize = {16}
          paddingLeft = {10}
          style={styles.input} />
      
      
      </View>
            <ScrollView  style={{ paddingHorizontal: 15, }}>
     <Jobs
       cover={require('../assets/user1.jpg')} 
       name="Ana Carolina"
       subtitle="Inst. de Yoga"
       description="Ministra e prepara o material didático das aulas de Yoga conforme orientação e conteúdo previamente distribuído."
       onPress={() => navigation.navigate('detail') }
      />

     <Jobs
       cover={require('../assets/user2.jpg')} 
       name="Paulo Kogos "
       subtitle="Pintor"
       description="Preparar e pintar as superfícies externas e internas de edifícios e outras obras civis."
       onPress={() => {}}
      />

     <Jobs
       cover={require('../assets/user3.jpg')} 
       name="Lucas Abreu"
       subtitle="Prof. de Matemática"
       description="Ministra e prepara o material didático das aulas de Yoga conforme orientação e conteúdo previamente distribuído."
       onPress={() => {}}
      />
  <Jobs
       cover={require('../assets/user3.jpg')} 
       name="Peter Jordan"
       subtitle="T.I"
       description="Responsável por gerenciar as informações em uma organização, criando e distribuindo-as em redes de computadores, além de lidar com processamento de dados, engenharia de software, informática, hardwares e softwares"
       onPress={() => {}}
      />

       <Jobs
     
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
        
        
      },
  
      title:{
        fontSize: 35,
        fontWeight: 'bold',
        color:'black',
        alignSelf:'center',
        marginTop:'4%'
      },


          
    
    backButton:{
      marginTop:'6%',
     
     
     },
           
     
     
     back:{
       flexDirection:'row',
       backgroundColor:'transparent',
       position:'absolute',
      
     
     },


     notifications:{
      flexDirection:'row',
       backgroundColor:'transparent',
       position:'absolute',
       marginLeft:'84%'
     },


     userName:{

      fontSize: 26,
      marginTop:'4%',
     
      alignSelf:'center'

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
       alignSelf:'flex-end',
      
      
     },
     
     menu:{
       flexDirection:'row',
       backgroundColor:'#ffffff',
       
       borderTopColor:'#b5b5b5',
       borderTopWidth: 1,
       bottom:160,
     
       
       
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
      top:10,
      marginBottom:14
       
    
    },
      
    search:{
      position:'absolute',
      marginTop:'5%',
     paddingLeft:'90%',
     
    },
       
        
      })