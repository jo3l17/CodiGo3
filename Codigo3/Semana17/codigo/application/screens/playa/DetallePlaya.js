import React, { Component } from 'react'
import { Text, View } from 'react-native'
import BackGroundImage from '../../components/BackGroundImage';
import Playa from '../../components/playa/Playa';
import { ScrollView } from 'react-native'
import CommentList from '../../components/comentarios/CommentList';

export default class DetallePlaya extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playa: props.navigation.state.params.playa
        }
    }
    render() {
        return (
            <BackGroundImage source={require('../../../assets/BgBlack.jpg')}>
                {/* componente para vidualizar una playa */}
                <ScrollView>
                    <Playa objPlaya={this.state.playa} />
                    {/* lista de comentarios */}
                    <CommentList idPlaya={this.state.playa.id} />
                </ScrollView>
            </BackGroundImage>
        )
    }
}
