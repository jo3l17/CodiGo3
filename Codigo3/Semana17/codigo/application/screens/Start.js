import React, { Component } from 'react'
import { Text, View } from 'react-native'
import BackGroundImage from '../components/BackGroundImage';
import AppButton from '../components/AppButton';
import { NavigationActions } from 'react-navigation';

export default class Start extends Component {
    static navigationOptions={
        title:'Playas App',
        headerTitleStyle:{
            textAlign:'center',
            alignSelf:'center',
            fontSize:20,
            color:'#fff',
            fontWeight:'bold',
            flex:1,
            marginLeft:-15
        }
    }
    iniciarSesion=()=>{
        // redireccionar a la pantalla de inicio de sesion
        this.props.navigation.navigate('miLogin')
    }
    registrarme=()=>{
        this.props.navigation.navigate('miRegister')
    }
    render() {
        return (
            <BackGroundImage source={require('../../assets/BgBlack.jpg')}>
                <View style={{justifyContent:'center',flex:1}}>
                    <AppButton
                        bgColor={'rgba(220,100,20,0.7)'}
                        iconName={'sign-in'}
                        title={"Iniciar Sesion"}
                        action={()=>{}}
                        iconColor={'#fff'}
                        iconSize={30}
                        setWidth={true}
                        action={this.iniciarSesion}
                    />
                    <AppButton
                        bgColor={'rgba(120,200,50,0.7)'}
                        iconName={'user-plus'}
                        title={"Registrarme"}
                        action={()=>{}}
                        iconColor={'#fff'}
                        iconSize={30}
                        setWidth={true}
                        action={this.registrarme}
                    />
                    <AppButton
                        bgColor={'rgba(70,70,150,0.7)'}
                        iconName={'facebook'}
                        title={"Facebook"}
                        action={()=>{}}
                        iconColor={'#fff'}
                        iconSize={30}
                        setWidth={true}
                    />
                </View>
            </BackGroundImage>
        )
    }
}
