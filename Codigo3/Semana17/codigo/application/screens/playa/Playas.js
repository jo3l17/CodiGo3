import React, { Component } from 'react'
import { Text, View } from 'react-native'
import BackGroundImage from '../../components/BackGroundImage';
import PlayaEmpty from '../../components/playa/PlayaEmpty';

export default class Playas extends Component {
    render() {
        return (
            <BackGroundImage source={require('./../../../assets/BgBlack.jpg')}>
                <PlayaEmpty/>
            </BackGroundImage>
        )
    }
}
