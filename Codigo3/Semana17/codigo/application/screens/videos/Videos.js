import React, { Component } from 'react'
import { Text, View } from 'react-native'
import BackGroundImage from '../../components/BackGroundImage';
import VideosEmpty from '../../components/videos/VideosEmpty';

export default class Video extends Component {
    render() {
        return (
            <BackGroundImage source={require('./../../../assets/BgBlack.jpg')}>
                <VideosEmpty/>
            </BackGroundImage>
        )
    }
}
