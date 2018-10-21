import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Keyboard, Image, TextInput } from 'react-native';

export default class extends React.PureComponent {
    static defaultProps = {
        autoFocus: false,
        searchText: '',
        placeholder: '搜索',
        placeholderTextColor: '#999999',
        canCancel: false,
        cancelText: '取消',
        canClear: false,
        isSearching: true,
    };

    _onTextChange = (text) => {
        const {onChangeText} = this.props;
        onChangeText && onChangeText(text);
    };

    _renderSearchImage = () => {
        return (
            <Image
                source={require('./image/search.png')}
                style={styles.searchImage}
            />
        );
    };

    _renderTextInput = () => {
        const {placeholder, placeholderTextColor, textInputProps, onSubmitEditing, autoFocus, searchText} = this.props;
        return (
            <TextInput
                ref={(ref) => this.searchInput = ref}
                style={styles.searchInput}
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
                style={styles.emptyInputContainer}
                onPress={() => this._onTextChange('')}
            >
                <Image
                    source={require('./image/search_empty.png')}
                    style={styles.searchEmpty}
                />
            </TouchableOpacity>
        );
    };

    _renderCancelButton = () => {
        const {cancelText, onPressCancel} = this.props;
        return (
            <TouchableOpacity
                style={styles.cancelContainer}
                onPress={() => {
                    Keyboard.dismiss();
                    onPressCancel && onPressCancel();
                }}
            >
                <Text style={styles.cancelText}>
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
            <View style={[styles.headerContainer, style]}>
                <View style={styles.inputContainer}>
                    {this._renderSearchImage()}
                    {this._renderTextInput()}
                    {hasClear && this._renderClearButton()}
                </View>
                {hasCancel && this._renderCancelButton()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 8,
        marginRight: 8,
        height: 35,
        backgroundColor: '#e6e8ea',
        alignItems: 'center',
        borderRadius: 10,
    },
    searchImage: {
        marginLeft: 10,
        width: 16,
        height: 16,
    },
    searchInput: {
        padding: 0,
        marginLeft: 6,
        fontSize: 15,
        color: '#333333',
        flex: 1,
    },
    emptyInputContainer: {
        width: 34,
        height: 27,
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchEmpty: {
        width: 14,
        height: 14,
    },
    cancelContainer: {
        width: 62,
        alignItems: 'center',
    },
    cancelText: {
        fontSize: 16,
        color: '#999999',
    },
});