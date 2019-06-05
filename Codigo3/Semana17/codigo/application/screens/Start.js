import React, { Component } from 'react'
import { Text, View } from 'react-native'
import BackGroundImage from '../components/BackGroundImage';
import AppButton from '../components/AppButton';


export default class Start extends Component {
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
                    />
                    <AppButton
                        bgColor={'rgba(120,200,50,0.7)'}
                        iconName={'user-plus'}
                        title={"Registrarme"}
                        action={()=>{}}
                        iconColor={'#fff'}
                        iconSize={30}
                        setWidth={true}
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
