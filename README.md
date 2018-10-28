# react-native-general-searchbar

[![npm version](https://img.shields.io/npm/v/react-native-general-searchbar.svg?style=flat)](https://www.npmjs.com/package/react-native-general-searchbar)

A general search bar and clickable fake search bar.

## ScreenShots

### iPhoneX

<p float="left">

<img src="/resource/SearchBar-iPhoneX.png" width="25%">

<img src="/resource/FakeSearchBar-iPhoneX.png" width="25%">

</p>

### Android

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

## Usage

### SearchBar

Import the module in the file:

```javascript
import SearchBar from 'react-native-general-searchbar';
```

It has several properties to control its behavior:

* `autoFocus`: Inner `TextInput` component will auto focus or not.
* `searchText`: Current text display.
* `placeholder`: Placeholder text.
* `placeholderTextColor`: Placeholder text color.
* `canCancel`: Has cancel button or not.
* `cancelText`: Cancel button text.
* `canClear`: Has clear input button or not.
* `isSearching`: Is in searching status or not.
* `onPressCancel`: Cancel button callback.
* `onSubmitEditing`: Callback when submit current editing text.
* `onChangeText`: Current text changed callback.
* `textInputProps`: Inner `TextInput` component properties.
* `style`: Custom style.

### FakeSearchBar

Import the module in the file:

```javascript
import { FakeSearchBar } from 'react-native-general-searchbar';
```

Properties:

* `placeholder`: Placeholder text.
* `onFocus`: Callback when click.
* `image`: Search image.
* `activeOpacity`: `activeOpacity` of `TouchableOpacity`.
* `style`: Custom style.

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