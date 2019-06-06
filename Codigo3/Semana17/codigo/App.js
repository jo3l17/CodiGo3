import React from 'react';

import Invitado from './application/navigations/invitado';
// importando el archivo de configuracion de firebase
import firebaseConfig from './application/utils/firebase';
// importar todas las funciones de firebase
import * as firebase from 'firebase';

import PreLoader from './application/components/PreLoader';

import { Text } from 'react-native-elements';
import Playas from './application/screens/playa/Playas';
// inicializar la conexion a nuestra base de datos
firebase.initializeApp(firebaseConfig)

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogged: false,
      cargado: false
    }
    // firebase.auth().signOut();
  }
  async componentDidMount(){
  await  firebase.auth().onAuthStateChanged(usuario=>{
      if(!usuario){
        this.setState({
          isLogged:false,
          cargado:true
        });
      }else{
        this.setState({
          isLogged:true,
          cargado:true
        });
      }
    })
  }
  render() {
    const { isLogged, cargado } = this.state
    if(!cargado){
      return(<PreLoader/>)
    }
    if (isLogged) {
      return (<Playas/>)
    } else {
      return (
        <Invitado />
      );
    }
  }
}
