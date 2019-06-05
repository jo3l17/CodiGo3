import React, { Component } from 'react'
import { Text, View } from 'react-native'
import BackGroundImage from '../components/BackGroundImage';
import { Card } from 'react-native-elements';
import AppButton from '../components/AppButton';
import t from 'tcomb-form-native';
var Form = t.form.Form;

export default class Login extends Component {
    validador;

    iniciarSesion=()=>{
        var value=this.refs.form.getValue();
        if(value){
            console.log(value);
        }else{
            console.log(value);
            
        }
    }
    render() {
        this.validador={
            validEmail:t.refinement(t.String,(valor)=>{
                if(/@/.test(valor)){
                    return true;
                }else{
                    return false;
                }
            }),
            validPass:t.refinement(t.String,(valor)=>{
                if(valor.lenght >=6){
                    return true;
                }else{
                    return false;
                }
            })
        }
        var User = t.struct({
            email: t.String,
            password: t.String,
        });
        var options = {
            fields: {
                email: {
                    help: 'Introduce  tu email',
                    error: 'Email Incorrecto',
                    autoCapitalize: 'none',
                    placeholder:'Ejm: Nose@gmail.com'
                },
                password:{
                    help:'introduce tu password',
                    error:'password Incorrecto',
                    password:true,
                    secureTextEntry:true,
                    label:'Contraseña'
                }
            },
        };

        return (
            <BackGroundImage source={require('../../assets/BgBlack.jpg')}>
                <View>
                    <Card title="Iniciar Sesion" wrapperStyle={{ paddingLeft: 10 }}>
                        <Form ref="form" type={User} options={options} />
                        <AppButton
                        bgColor={'rgba(111,38,74,0.7)'}
                        iconName={'sign-in'}
                        title={"Iniciar Sesion"}
                        action={this.iniciarSesion}
                        iconColor={'#fff'}
                        iconSize={30}
                        setWidth={false}
                    />
                    </Card>
                </View>
            </BackGroundImage>
        )
    }
}
