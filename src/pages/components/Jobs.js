import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';



export default function Jobs(props) {
 return (
   <TouchableOpacity onPress={props.onPress} style={styles.container}>
     <Image
      source={props.cover}
      style={styles.cover}
     />

     <View style={styles.content}>
      <Text style={styles.title}>{props.name}</Text>
      <Text style={styles.subtitle}>{props.subtitle}</Text>

     

     

     </View>
    
     <Text style={styles.description}>
        
       {props.description}
     </Text>

<View style={styles.services}>
     <Text style={styles.textServices}>52  </Text>
     <Text style={styles.textServices}>Trabalhos Realizados</Text>
     
</View>

<View style={styles.notes}>
     <Text style={styles.textNotes}>4.6  </Text>
     <Text style={styles.textNotes}>Pontuação Total</Text>
     
</View>

<View style={styles.locate}>
<Text style={styles.locateText}>500 m</Text>

</View>


   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
      marginTop: 20,
      backgroundColor: '#fff',
      height: 220,
      width: 360,
      elevation: 2,
      borderRadius: 10, 
      bottom:10
     
    
      
      
    },
    cover:{
      width: 60,
      height: 60,
      borderRadius: 50,
      position:'absolute',
      marginLeft:'4%',
      marginTop:'4%',
      
    },
    content:{
     flexDirection: 'row',
     marginVertical: 10, 
     justifyContent:'center',
     
    
   
   
      
    },
    title:{
      fontSize:16,
      color: '#4f4a4a',
      position:'absolute',
      marginLeft:'44%',
      marginBottom:'400%',
      fontWeight: "bold",
      textAlign:'center',
     
      
      
      
     
  
    },
    subtitle:{
      marginTop:'10%',
      fontSize:14,
      color: '#4f4a4a',
      position:'absolute',
      marginLeft:'56%',
     
      alignItems:'center',
      justifyContent:'center',
    
      textAlign:'center'
    },
    dot:{
      width: 4,
      height: 4,
      borderRadius:4,
      backgroundColor: 'red',
      marginHorizontal: 4,
    },
    badge:{
      color: 'red',
      fontSize:9,
    
    },
    description:{
      marginTop:'18%',
      fontSize: 14,
      color:'#4f4a4a',
      paddingTop:10
    },
    footer:{
      flexDirection: 'row',
      marginTop: 5,
      alignItems: 'center',
      width: '100%',
      
    },
    
    textServices:{
borderRadius:10,
color:'#fff',
fontSize:16,

paddingStart:'6%',
    },


services:{
backgroundColor:'#049eda',
borderRadius:10,
color:'#fff',
marginTop:150 ,
position:'absolute',

width:170,

    },

notes:{
        backgroundColor:'#69c4d9',       
        borderRadius:10,
        color:'#fff',
        marginTop:150 ,
        position:'absolute',
        alignSelf:'flex-end',
        width:170,
       

    },

textNotes:{

 borderRadius:10,
 color:'#fff',
 fontSize:16,
 
 paddingStart:'6%',
    },

    locateText:{
     
     
    },

    locate:{
        alignSelf:'flex-end',
        position:'absolute',
        marginTop:2,
        paddingRight:10

    }



  });