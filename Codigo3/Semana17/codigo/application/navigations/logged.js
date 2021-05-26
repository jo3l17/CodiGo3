import React from 'react';
import {createStackNavigator,createAppContainer,createDrawerNavigator} from'react-navigation';
import PlayasScreen from '../screens/playa/Playas';
import MapaScreen from '../screens/maps/Mapa';
import AddPlaya from '../screens/playa/AddPlaya';
import DetallePlaya from '../screens/playa/DetallePlaya';

import Icon from 'react-native-vector-icons/FontAwesome'; 
const playasStackNavigator= createStackNavigator(
    {
        miPlayasScreen:{
            screen: PlayasScreen
        },
        miAgregarPlayasScreen:{
            screen:AddPlaya
        },
        miDetallePlayaScreen:{
            screen:DetallePlaya
        }
    },
    {
        initialRouteName:'miPlayasScreen',
        defaultNavigationOptions:{
            headerStyle:{
                backgroundColor:'rgba(30,30,30,1)'
            },
            headerTitleStyle:{
                textAlign:'center',
                alignSelf:'center',
                fontSize:20,
                color:'#fff',
                fontWeight:'bold',
                flex:1
            }
        }
    }
);

const mapasStackNavigator= createStackNavigator(
    {
        miMapaScreen:{
            screen: MapaScreen
        }
    },
    {
        initialRouteName:'miPlayasScreen',
        defaultNavigationOptions:{
            headerStyle:{
                backgroundColor:'rgba(30,30,30,1)'
            },
            headerTitleStyle:{
                textAlign:'center',
                alignSelf:'center',
                fontSize:20,
                color:'#fff',
                fontWeight:'bold',
                flex:1
            }
        }
    }
);

const drawerNavigation = createDrawerNavigator(
    {
        miPlayasStackNavigator:{
            screen:playasStackNavigator,
            navigationOption:()=>{
                return({
                    drawerLabel:"Lista de Playas",
                    drawerIcon:()=>{
                        return (<Icon name="home"size={24} style={{color:'white'}}/>)
                    }
                })
            }
        }, miMapasStackNavigator:{
            screen:mapasStackNavigator,
            navigationOption:()=>{
                return({
                    drawerLabel:"Mapa de Playas",
                    drawerIcon:()=>{
                        return (<Icon name="map" size={24} style={{color:'white'}}/>)
                    }
                })
            }
        },
    },
    {
        drawerBackgroundColor:'rgba(128,35,60,0.7)',
        contentOptions:{
            activeTintColor:'white',
            activeBackgroundColor:'transparent',
            inactiveTintColor:'white',
            itemsContainerStyle:{
                marginVertical:0
            }
        }
    }
)
export default createAppContainer(drawerNavigation);