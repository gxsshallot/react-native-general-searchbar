import React from 'react';
import { View, TouchableOpacity, Text, Keyboard, Image, TextInput } from 'react-native';
import styles from './SearchBarStyle';

export default class SearchBar extends React.PureComponent {
    static style = {};

    static defaultProps = {
        autoFocus: false,
        searchText: '',
        placeholder: '搜索',
        placeholderTextColor: '#999999',
        canCancel: false,
        cancelText: '取消',
        canClear: false,
        isSearching: true,
        style: {},
    };

    _mergeStyle = (key) => [SearchBar.style[key] || styles[key], this.props.style[key]];

    _onTextChange = (text) => {
        this.props.onChangeText && this.props.onChangeText(text);
    };

    _renderSearchImage = () => {
        return (
            <Image
                source={require('./image/search.png')}
                style={this._mergeStyle('searchImage')}
            />
        );
    };

    _renderTextInput = () => {
        const {placeholder, placeholderTextColor, textInputProps, onSubmitEditing, autoFocus, searchText} = this.props;
        return (
            <TextInput
                ref={(ref) => this.searchInput = ref}
                style={this._mergeStyle('searchInput')}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                returnKeyType='search'
                onSubmitEditing={onSubmitEditing}
                autoFocus={autoFocus}
                value={searchText}
                onChangeText={this._onTextChange}
                onFocus={() => this._onTextChange(searchText)}
                autoCorrect={false}
                clearButtonMode="never"
                underlineColorAndroid="transparent"
                {...textInputProps}
            />
        );
    };

    _renderClearButton = () => {
        return (
            <TouchableOpacity
                style={this._mergeStyle('searchEmptyTouch')}
                onPress={() => this._onTextChange('')}
            >
                <Image
                    source={require('./image/search_empty.png')}
                    style={this._mergeStyle('searchEmptyImage')}
                />
            </TouchableOpacity>
        );
    };

    _renderCancelButton = () => {
        const {cancelText, onPressCancel} = this.props;
        return (
            <TouchableOpacity
                style={this._mergeStyle('cancelTouch')}
                onPress={() => {
                    Keyboard.dismiss();
                    onPressCancel && onPressCancel();
                }}
            >
                <Text style={this._mergeStyle('cancelText')} numberOfLines={1}>
                    {cancelText}
                </Text>
            </TouchableOpacity>
        );
    };

    render() {
        const {canCancel, canClear, isSearching, style} = this.props;
        const hasClear = canClear && isSearching;
        const hasCancel = canCancel && isSearching;
        return (
            <View style={this._mergeStyle('view')}>
                <View style={this._mergeStyle('inputView')}>
                    {this._renderSearchImage()}
                    {this._renderTextInput()}
                    {hasClear && this._renderClearButton()}
                </View>
                {hasCancel && this._renderCancelButton()}
            </View>
        );
    }
}