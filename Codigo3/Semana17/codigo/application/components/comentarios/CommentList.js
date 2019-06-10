import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import PreLoader from '../PreLoader';
import { Divider, Card, Rating } from 'react-native-elements';
import * as firebase from 'firebase';

export default class CommentList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comentarios: [],
            cargado: false
        }
        this.refComentarios = firebase.database().ref().child(`comentarios/${this.props.idPlaya}`);
    }

    componentDidMount() {
        this.refComentarios.on('value', data => {
            var comentariosTMP = [];
            data.forEach(fila => {
                comentariosTMP.push({
                    id: fila.key,
                    comentario: fila.val().comentario,
                    rating: fila.val().rating
                })
            });
            this.setState({
                cargado: true,
                comentarios: comentariosTMP
            })
        })
    }
    renderComment = (comentario) => {
        return (
            <Card title={comentario.comentario}>
                <Rating style={misEstilos.rating}
                    type="bell"
                    readonly
                    imageSize={20}
                    startingValue={comentario.rating} />
            </Card>
        )
    }

    render() {
        const { cargado, comentarios } = this.state;
        if (!cargado) {
            return (<PreLoader />)
        }
        if (comentarios == []) {
            return (
                <View style={misEstilos.noCommentView}>
                    <Text style={misEstilos.noCommentText}>No hay cometarios, se el primero en comentar</Text>
                </View>
            )
        } else {
            return (
                <View style={misEstilos.container}>
                    <Text style={misEstilos.title}> Lista de comentarios </Text>
                    <Divider />
                    <Card>
                        <FlatList data={comentarios}
                            renderItem={({ item }) => {
                                return this.renderComent(item);
                            }}
                            keyExtractor={(data) => { data.id }} >
                        </FlatList>
                    </Card>
                </View>
            )
        }

    }
}
const misEstilos = StyleSheet.create({
    rating:{
        alignItems:'center'
    },
    container:{
        justifyContent:'center',
        flex:1,
        marginTop:10,
        marginBottom:10
    },
    title:{
        fontSize:30,
        color:'white',
        textAlign:'center'
    },
    noCommentView:{
        justifyContent:'center',
        flex:1,
        marginTop:10,
        marginBottom:10
    },
    noCommentText:{
        backgroundColor:'rgba(10,255,10,0.8)',
        color:'white',
        textAlign:'center',
        padding:20
    }
})