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

export interface FakeSearchBarProps {
    placeholder?: string,
    onFocus?: () => void,
    image?: ImageSourcePropType,
    activeOpacity?: number,
    touchStyle?: StyleProp<ViewStyle>,
    imageStyle?: StyleProp<ImageStyle>,
    textStyle?: StyleProp<TextStyle>,
}

export class FakeSearchBar extends React.PureComponent<FakeSearchBarProps> {
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
    onSubmitEditing?: (
        e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
    ) => void,
    onChangeText?: (text?: string) => void,
    textInputProps?: TextInputProps,
    style?: StyleProp<ViewStyle>,
}

export default class SearchBar extends React.PureComponent<SearchBarProps> {
}