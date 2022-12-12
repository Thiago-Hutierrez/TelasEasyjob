import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';



export default function New(props) {
 return (
   <TouchableOpacity onPress={props.onPress} style={styles.container}>
     <Image
      source={props.cover}
      style={styles.cover}
     />

     <View style={styles.content}>
      <Text style={styles.title}>{props.name}</Text>

      

    

     </View>

     <Text style={styles.description}>
       {props.description}
     </Text>

    
     

   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop: 10,
    backgroundColor: '#FFF',
    height: 120,
    width: 110,
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
    borderRadius: 10,    
    alignSelf:'center'
  },
  content:{
   flexDirection: 'row',   
   marginVertical: 10, 
   alignSelf:'center'
  },
  title:{
    
    fontSize:13,
    color: '#4f4a4a',
    fontWeight: "bold",
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
    
    fontSize: 12,
    color:'#4f4a4a'
  },
  footer:{
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
    width: '100%'
  },
  price:{
    fontSize: 15,
    
  }
});