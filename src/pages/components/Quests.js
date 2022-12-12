import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';



export default function Questes(props) {
 return (
    <>
  
     

     <View style={styles.content}>
     
       </View>
    
       <Text style={styles.title}>{props.name}</Text>
          <TextInput
          placeholder='Preencha o Campo'
          fontSize = {16}
          paddingLeft = {20}
          style={styles.input}
      />

   
  <View>

  </View>
       </>
  );
}

const styles = StyleSheet.create({
    container:{
      marginTop: 20,
      backgroundColor: '#fff',
      height: 100,
      width: 360,
      elevation: 2,
      borderRadius: 10, 
      bottom:10,
  
     
    
      
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
    registerText:{
        color:'#2a8bd1',
        fontSize: 16,
         bottom:'454%',
         left:'100%'
        
        
         },
         title:{
            fontSize:16,
            color: '#4f4a4a',
            
           
            fontWeight: "bold",
            textAlign:'center',
           
            
            
            
           
        
          },
  });