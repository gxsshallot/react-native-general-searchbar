import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class extends React.Component {
    static propTypes = {
        placeholder: PropTypes.string,
        onFocus: PropTypes.func,
        image: PropTypes.any,
        activeOpacity: PropTypes.number,
        touchStyle: PropTypes.any,
        imageStyle: PropTypes.any,
        textStyle: PropTypes.any,
    };

    static get defaultProps() {
        return {
            image: require('../image/input_search.png'),
            activeOpacity: 0.9,
        };
    }

    render() {
        const {
            placeholder,
            image,
            onFocus,
            activeOpacity,
            touchStyle,
            imageStyle,
            textStyle
        } = this.props;
        return (
            <TouchableOpacity
                onPress={onFocus}
                style={[styles.touch, touchStyle]}
                activeOpacity={activeOpacity}
            >
                <Image
                    source={image}
                    style={[styles.image, imageStyle]}
                />
                <Text style={[styles.text, textStyle]}>
                    {placeholder}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    touch: {
        flex: 1,
        height: 35,
        marginLeft: 16,
        marginRight: 8,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e8e8ea',
    },
    image: {
        marginLeft: 10,
        width: 16,
        height: 16,
    },
    text: {
        marginLeft: 6,
        fontSize: 15,
        color: '#999999',
        flex: 1
    },
});