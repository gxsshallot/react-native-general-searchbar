import * as React from 'react';
import {
    ImageSourcePropType,
    StyleProp,
    TextInputProps,
    TextStyle,
    ImageStyle,
    ViewStyle,
    NativeSyntheticEvent,
    TextInputSubmitEditingEventData
} from 'react-native';

export interface SearchBarStyle {
    view?: StyleProp<ViewStyle>,
    inputView?: StyleProp<ViewStyle>,
    searchImage?: StyleProp<ImageStyle>,
    searchInput?: StyleProp<TextStyle>,
    searchEmptyTouch?: StyleProp<ViewStyle>,
    searchEmptyImage?: StyleProp<ImageStyle>,
    cancelTouch?: StyleProp<ViewStyle>,
    cancelText?: StyleProp<TextStyle>,
}

export interface SearchBarProps {
    autoFocus?: boolean,
    searchText?: string,
    placeholder?: string,
    placeholderTextColor?: string,
    canCancel?: boolean,
    cancelText?: string,
    canClear?: boolean,
    isSearching?: boolean,
    onPressCancel?: () => void,
    onSubmitEditing?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void,
    onChangeText?: (text?: string) => void,
    textInputProps?: TextInputProps,
    style?: SearchBarStyle,
}

export default class SearchBar extends React.PureComponent<SearchBarProps> {
    static style: SearchBarStyle;
}

export interface FakeSearchBarStyle {
    touch?: StyleProp<ViewStyle>,
    image?: StyleProp<ImageStyle>,
    text?: StyleProp<TextStyle>,
}

export interface FakeSearchBarProps {
    placeholder?: string,
    onFocus?: () => void,
    image?: ImageSourcePropType,
    activeOpacity?: number,
    style?: FakeSearchBarStyle,
}

export class FakeSearchBar extends React.PureComponent<FakeSearchBarProps> {
    static style: SearchBarStyle;
}