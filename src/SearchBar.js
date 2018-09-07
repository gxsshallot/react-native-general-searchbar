import React from 'react';
import { View, TouchableOpacity,Text, StyleSheet, Keyboard, Image, TextInput } from 'react-native';
import PropTypes from 'prop-types';

export default class extends React.Component {
    static propTypes = {
        autoFocus: PropTypes.bool, // 是否自动focus
        searchText: PropTypes.string, // 搜索栏中的文字
        placeholder: PropTypes.string, // 占位文字
        canCancel: PropTypes.bool, // 是否有取消按钮
        canClear: PropTypes.bool, // 是否有清空输入按钮
        isSearching: PropTypes.bool, // 是否处于搜索中状态
        onPressCancel: PropTypes.func, // 取消操作
        onSubmitEditing: PropTypes.func, // 提交编辑
        onChangeText: PropTypes.func, // 文字变更
        textInputProps: PropTypes.any, // 内部TextInput的属性
        style: PropTypes.any,
    };

    static get defaultProps() {
        return {
            autoFocus: false,
            searchText: '',
            placeholder: '',
            canCancel: false,
            canClear: false,
            isSearching: true,
        };
    }

    _onTextChange = (text) => {
        this.props.onChangeText && this.props.onChangeText(text);
    };

    _renderSearchImage = () => {
        return (
            <Image
                source={require('../image/search.png')}
                style={styles.searchImage}
            />
        );
    };

    _renderTextInput = () => {
        return (
            <TextInput
                ref={(ref) => this.searchInput = ref}
                style={styles.searchInput}
                placeholder={this.props.placeholder || '搜索'}
                placeholderTextColor='#999999'
                returnKeyType='search'
                onSubmitEditing={this.props.onSubmitEditing}
                autoFocus={this.props.autoFocus}
                value={this.props.searchText}
                onChangeText={this._onTextChange}
                onFocus={() => this._onTextChange(this.props.searchText)}
                autoCorrect={false}
                clearButtonMode="never"
                underlineColorAndroid="transparent"
                {...this.props.textInputProps}
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
                    source={require('../image/search_empty.png')}
                    style={styles.searchEmpty}
                />
            </TouchableOpacity>
        );
    };

    _renderCancelButton = () => {
        return (
            <TouchableOpacity
                style={styles.cancelContainer}
                onPress={() => {
                    Keyboard.dismiss();
                    this.props.onPressCancel && this.props.onPressCancel();
                }}
            >
                <Text style={styles.cancelText}>
                    取消
                </Text>
            </TouchableOpacity>
        );
    };

    render() {
        const hasClear = this.props.canClear && this.props.isSearching;
        const hasCancel = this.props.canCancel && this.props.isSearching;
        return (
            <View style={[styles.headerContainer, this.props.style]}>
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