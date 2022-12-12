import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';



export default function Service(props) {
 return (
   <TouchableOpacity onPress={props.onPress} style={styles.container}>
     <Image
      source={props.cover}
      style={styles.cover}
     />

     <View style={styles.content}>
      <Text style={styles.title}>{props.name}</Text>
      

     

     

     </View>
     <Text style={styles.subtitle}>{props.subtitle}</Text>
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
      marginTop: 16,
      backgroundColor: '#FFF',
      height: 288,
      width: 226,
      elevation: 2,
      borderRadius: 10,
      padding: 15,
      marginRight: 30,
      marginLeft: 2,
      marginBottom: 5,
    },
    cover:{
      width: 60,
      height: 60,
      borderRadius: 50,
      position:'absolute',
      marginLeft:'4%',
      marginTop:'4%'
    },
    content:{
     flexDirection: 'row',
    
     marginVertical: 10, 
    
   
   
      
    },
    title:{
      fontSize:16,
      color: '#4f4a4a',
      position:'absolute',
      marginLeft:'44%',
      marginBottom:'400%',
      fontWeight: "bold",
      textAlign:'center'
      
      
      
     
  
    },
    subtitle:{
      marginTop:'24%',
      fontSize:14,
      color: '#4f4a4a',
      position:'absolute',
      marginLeft:'56%',
      marginBottom:'300%',
      alignItems:'center',
      justifyContent:'center',
      alignSelf:'stretch',
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

paddingStart:'10%',
    },


services:{
backgroundColor:'#049eda',

borderRadius:10,
color:'#fff',
marginTop:170 ,
position:'absolute',
alignSelf:'center',
width:200
    },

notes:{
        backgroundColor:'#69c4d9',       
        borderRadius:10,
        color:'#fff',
        marginTop:220 ,
        position:'absolute',
        alignSelf:'center',
        width:200


    },

textNotes:{

 borderRadius:10,
 color:'#fff',
 fontSize:16,

paddingStart:'10%',
    },

    locateText:{
     
     
    },

    locate:{
        alignSelf:'flex-end',
        position:'absolute',
        marginTop:266,
        paddingRight:10

    }



  });