import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import styles from './FakeSearchBarStyle';

export default class FakeSearchBar extends React.PureComponent {
    static style = {};

    static defaultProps = {
        placeholder: 'Search',
        activeOpacity: 0.9,
        style: {},
    };

    _mergeStyle = (key) => [FakeSearchBar.style[key] || styles[key], this.props.style[key]];

    render() {
        const {
            placeholder,
            image = require('./image/input_search.png'),
            onFocus,
            activeOpacity,
            style
        } = this.props;
        return (
            <TouchableOpacity
                onPress={onFocus}
                style={this._mergeStyle('touch')}
                activeOpacity={activeOpacity}
            >
                <Image source={image} style={this._mergeStyle('image')} />
                <Text style={this._mergeStyle('text')} numberOfLines={1}>
                    {placeholder}
                </Text>
            </TouchableOpacity>
        );
    }
}