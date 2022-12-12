import { View, Text, StyleSheet, TouchableOpacity,  Image } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';




export default function Profile() {
    const navigation = useNavigation();
    return (
      <>
      <View style={styles.container}>
          <Text style={styles.Text}>Perfil</Text>
  
         <View>
       <Image style={styles.Image} source={require('../assets/avatar.jpg')}
         
         resizeMode = 'stretch'  />
        </View> 
      
        <View style={styles.back}>
        <Icon.Button style={styles.backButton}
            name='arrow-left'
            color={"#000000"}
            size={40}
            backgroundColor='transparent'
            
            onPress = {() => navigation.navigate('Home')}>
            
            </Icon.Button>    
            </View>
           
           <View style={styles.notifications}>
            <Icon.Button style={styles.notificationsButton}
            name='bell'
            color={"#000000"}
            size={30} 
            backgroundColor='transparent'
           
            
            onPress = {() => navigation.navigate('Profile')}>
            
            </Icon.Button>  
            </View>
  

         
         <View>
         <Text style={styles.userName}>Pedro Henrique</Text>
         <Text style={styles.subtitle}>Inst. de Yoga</Text>
         </View>



        <View>
          <Text style={styles.jobs}>52 {'\n'} Trabalhos {'\n'} Realizados </Text>
          <Text style={styles.score}>4.6 {'\n'} Pontuação {'\n'} Atual </Text>
        </View>
            
      <View>
        <Text style={styles.task}>Conquistas</Text>
      </View>
      <View style={styles}>
       <Image style={styles.pictures} source={require('../assets/task1.png')}
         
         resizeMode = 'stretch'  />
         <Text style={styles.workDone}> 2  anos{'\n'} ativo(a){'\n'} no App</Text>
        < Image style={styles.pictures2} source={require('../assets/task2.png')}
         
         resizeMode = 'stretch'  />
         <Text style={styles.workDone2}> 50 {'\n'} Trabalhos {'\n'} Realizados</Text>

         <Text style={styles.analysis}>Análises</Text>
        </View> 



<TouchableOpacity style={styles.button} 
        onPress = {() => navigation.navigate('Checkout')}> 
        <Text style={styles.action}>Contratar</Text>
        
        </TouchableOpacity>







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
  
      Text :{
          fontSize: 26,
          marginTop:'8%',
         
          alignSelf:'center'
          
          
        },
        task :{
          fontSize: 20,
          marginTop:'20%',
         
          alignSelf:'flex-start',
          paddingStart:20
          
          
        },
        analysis: {
         position:'absolute',
         marginTop:160,
         paddingStart:22,
         fontSize:20,
         borderBottomWidth:1,
         width:400,
         height:40
        

        },
        jobs :{
          fontSize: 16,
         textAlign:'center',
         position:'absolute',
          paddingLeft:94,
         
          borderRightWidth:1,
      borderStartWidth:14,
      color:'#4f4a4a',
      
          
        }, score :{
          fontSize: 16,
          textAlign:'center',
          position:'absolute',
          alignSelf:'flex-end',
          paddingEnd:100,
          color:'#4f4a4a'
        
          
          
        },
        subtitle :{
          fontSize: 14,
          color:'#4f4a4a',
          alignSelf:'center',
          
          
        },
        
        Image :{
      
          borderRadius:10,
          width: 120,
          height:120,
         
          alignSelf:'center',
          marginTop:'8%'
         
          
          
        },
         
        pictures :{
      
          borderRadius:40,
          width: 60,
          height:50,
          position:'absolute',
         padding:20,
          marginTop:'4%',
          marginLeft:10
         
         
          
          
        },
        pictures2 :{
      
          borderRadius:40,
          width: 60,
          height:50,
          padding:20,
          marginTop:'6%',
          position:'absolute',
          marginLeft:90
            
        },
        workDone:{
          textAlign:'center',
          marginTop:84,
          position:'absolute',
          marginLeft:12,

        },
        
        workDone2:{
          textAlign:'center',
          marginTop:84,
          position:'absolute',
          marginLeft:84,
        },
        backButton:{
          marginTop:'6%',
         
         
         },
               
         notificationsButton:{
           marginTop:'14%',
           
          
          
         },
         
         back:{
           flexDirection:'row',
           backgroundColor:'transparent',
           position:'absolute',
          
         
         },
         button:{
          backgroundColor:'#049eda',
          alignSelf:'center',
         
          marginTop:220,
          width:300,
          height:56,
          borderRadius:8,
          
         },
         action:{
          color:'#fff',
          fontSize:24,
          alignSelf:  'center',
          paddingTop:10
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
           alignItems:'center',
           justifyContent:'center',
         
           
         },




        
      })