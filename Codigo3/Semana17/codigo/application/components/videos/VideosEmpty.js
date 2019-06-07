import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class VideosEmpty extends Component {
    render() {
        return (
            <View style={misEstilos.VideosView}>
                <Text style={misEstilos.VideosText}> No hay Videos disponibles </Text>
            </View>
        )
    }
}

const misEstilos = StyleSheet.create({
    VideosView: {
        justifyContent:'center',
        flex:1,
        marginTop:10,
        marginBottom:10
    },
    VideosText: {
        backgroundColor:'rgba(10,225,10,0.5)',
        color:'white',
        textAlign:'center',
        padding:20
    }
})