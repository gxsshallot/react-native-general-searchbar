# react-native-general-searchbar

[中文说明](README-zh_CN.md)

A general search bar and clickable fake search bar.

## ScreenShots

### iPhoneX ( SearchBar + FakeSearchBar)

<p float="left">

<img src="/resource/SearchBar-iPhoneX.png" width="25%">

<img src="/resource/FakeSearchBar-iPhoneX.png" width="25%">

</p>

### Android ( SearchBar + FakeSearchBar)

<p float="left">

<img src="/resource/SearchBar-Android.jpeg" width="25%">

<img src="/resource/FakeSearchBar-Android.jpeg" width="25%">

</p>

## Install

Install by Yarn:

```shell
yarn add react-native-general-searchbar
```

Install by NPM:

```shell
npm install --save react-native-general-searchbar
```

You should also install the package in `peerDependencies`:

* react
* react-native

## Usage

### SearchBar

Import the module in the file:

```javascript
import SearchBar from 'react-native-general-searchbar';
```

It has several properties to control its behavior:

* `autoFocus?: boolean`: Inner `TextInput` component will auto focus or not.
* `searchText?: string`: Current text display.
* `placeholder?: string`: Placeholder text.
* `placeholderTextColor?: string`: Placeholder text color.
* `canCancel?: boolean`: Has cancel button or not.
* `cancelText?: string`: Cancel button text.
* `canClear?: boolean`: Has clear input button or not.
* `isSearching?: boolean`: Is in searching status or not.
* `onPressCancel?: () => void`: Cancel button callback.
* `onSubmitEditing?: (event) => void`: Callback when submit current editing text.
* `onChangeText?: (text: string) => void`: Current text changed callback.
* `textInputProps?: any`: Inner `TextInput` component properties.
* `style?: SearchBarStyle`: Custom style.

### FakeSearchBar

Import the module in the file:

```javascript
import { FakeSearchBar } from 'react-native-general-searchbar';
```

Properties:

* `placeholder?: string`: Placeholder text.
* `onFocus?: () => void`: Callback when click.
* `image?: any`: Search image.
* `activeOpacity?: number`: `activeOpacity` of `TouchableOpacity`.
* `style?: FakeSearchBarStyle`: Custom style.

### Global Style

You can change their styles globally. It will override default settings. For example:

```javascript
// SearchBarStyle in index.d.ts
SearchBar.style = {
    inputView: {
        ...
    },
    ...
};
// FakeSearchBar in index.d.ts
FakeSearchBar.style = {
    touch: {
        ...
    },
    ...
}
```

## Reference

Please see this repository: [react-native-items](https://github.com/gaoxiaosong/react-native-items).