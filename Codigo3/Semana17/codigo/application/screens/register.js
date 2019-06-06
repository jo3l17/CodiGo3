import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import BackGroundImage from '../components/BackGroundImage';

import * as firebase from 'firebase';
import { Card } from 'react-native-elements';
import AppButton from '../components/AppButton';
import t from 'tcomb-form-native';
var Form = t.form.Form;

export default class Register extends Component {
    static navigationOptions={
        title:'Registrarse',
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
    validador;
    passValid;
    constructor(props){
        super(props)
        this.passValid=""
        this.state={
            credentials:''
        }
    }

    registrarse=()=>{
        var value=this.refs.form.getValue();
        if(value){
            console.log(value);
            firebase.auth().createUserWithEmailAndPassword(value.email,value.password)
            .then((response)=>{
                console.log("Usuario ha sido creado con exito");
                console.log(response)
                firebase.database().ref().child('usuarios').child(response.user.uid).set({
                    nombre:value.nombre,
                    apellido:value.apellido
                }).then(()=>{
                    console.log("usuario creado en la base de dato realtime");
                    
                }).catch(()=>{
                    console.log("error al crear usuario")
                })
            }).catch((error)=>{
                console.log("ocurrio un error al crear el usuario");
                console.log(error)
            })
        }else{
            console.log(value);
        }
    }
    guardarState(data){
        console.log(data);
        this.setState({
            credentials:data
        })
    }
    render() {
        this.validador={
            validNombre:t.refinement(t.String,(valor)=>{
                if(valor.length>=3){
                    return true;
                }else{
                    return false
                }
            }),
            validApellido:t.refinement(t.String,(valor)=>{
                if(valor.length>=3){
                    return true;
                }else{
                    return false
                }
            }),
            validEmail:t.refinement(t.String,(valor)=>{
                if(/@/.test(valor)){
                    return true;
                }else{
                    return false;
                }
            }),
            validPass:t.refinement(t.String,(valor)=>{
                if(valor.length >=6){
                    this.passValid=valor
                    return true;
                }else{
                    return false;
                }
            }),
            // validRepPass:t.refinement(t.String,(valor)=>{
            //     if(valor==this.passValid){
            //     return true;
            // }else{
            //     return false
            // }
            // })
            validRepPass:t.refinement(t.String,(valor)=>{
                if(valor===this.state.credentials.password){
                return true;
            }else{
                return false
            }
            })
        }
        var User = t.struct({
            nombre:this.validador.validNombre,
            apellido: this.validador.validApellido,
            email: this.validador.validEmail,
            password: this.validador.validPass,
            repPass: this.validador.validRepPass
        });
        var options = {
            fields: {
                nombre: {
                    help: 'Nombre',
                    error: 'nombre invalido',
                    placeholder:'Ejm: John'
                },
                apellido: {
                    help: 'Apellido',
                    error: 'Apellido Invalido',
                    placeholder:'Doe'
                },
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
                },
                repPass:{
                    help:'repite tu password',
                    error:'password no coincide',
                    password:true,
                    secureTextEntry:true,
                    label:'Repetir Contraseña'
                }
            },
        };

        return (
            <BackGroundImage source={require('../../assets/BgBlack.jpg')}>
                <ScrollView>
                {/* <View> */}
                    <Card title="Registrarsee" wrapperStyle={{ paddingLeft: 10,height:600}}>
                        <Form value={this.state.credentials} ref="form" type={User} options={options} onChange={(data)=>{this.guardarState(data)}}/>
                        <AppButton
                        bgColor={'rgba(111,38,74,0.7)'}
                        iconName={'sign-in'}
                        title={"Registras"}
                        action={this.registrarse}
                        iconColor={'#fff'}
                        iconSize={30}
                        setWidth={false}
                        
                    />
                    </Card>
                {/* </View> */}
                </ScrollView>
            </BackGroundImage>
        )
    }
}
