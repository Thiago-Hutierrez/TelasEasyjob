import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../pages/Splash";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Checkout from "../pages/Checkout";
import Profile from "../pages/Profile"
import Services from "../pages/Services"
import ServicesDone from "../pages/ServicesDone"
import Formulario from "..//pages/Formulario"


const Stack = createNativeStackNavigator();
 export default function Routes(){
    return(
    <Stack.Navigator>
        <Stack.Screen 
          name="Splash"
          component ={Splash}
          options ={{headerShown: false }}
        />
    <Stack.Screen 
          name="Login"
          component ={Login}
          options ={{headerShown: false }}
        />
             
    <Stack.Screen 
          name="ServicesDone"
          component ={ServicesDone}
          options ={{headerShown: false }}
        />
        <Stack.Screen 
          name="Formulario"
          component ={Formulario}
          options ={{headerShown: false }}
        />

    <Stack.Screen 
          name="Register"
          component ={Register}
          options ={{headerShown: false }}
        />

    <Stack.Screen 
          name="Home"
          component ={Home}
          options ={{headerShown: false }}
        />

    <Stack.Screen 
          name="Checkout"
          component ={Checkout}
          options ={{headerShown: false }}
        />

    <Stack.Screen 
          name="Profile"
          component ={Profile}
          options ={{headerShown: false }}
        />   

<Stack.Screen 
          name="Services"
          component ={Services}
          options ={{headerShown: false }}
        />   




      
    
    
    
    

        </Stack.Navigator>
    );
 }

 