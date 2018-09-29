# react-native-general-searchbar

[Chinese README](README-zh_CN.md)

[ScreenShots](resource/ScreenShot.md)

A general search bar and clickable fake search bar.

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

* `autoFocus?: boolean`: Inner `TextInput` component will auto focus or not.
* `searchText?: string`: Current text display.
* `placeholder?: string`: Placeholder text.
* `canCancel?: boolean`: Has cancel button or not.
* `cancelText?: string`: Cancel button text.
* `canClear?: boolean`: Has clear input button or not.
* `isSearching?: boolean`: Is in searching status or not.
* `onPressCancel?: () => void`: Cancel button callback.
* `onSubmitEditing?: (event) => void`: Callback when submit current editing text.
* `onChangeText?: (text: string) => void`: Current text changed callback.
* `textInputProps?: any`: Inner `TextInput` component properties.
* `style?: any`: Style of outter view.

### FakeSearchBar

Import the module in the file:

```javascript
import { FakeSearchBar } from 'react-native-general-searchbar';
```

Properties:

* `placeholder?: string`: Placeholder text.
* `onFocus?: () => void`: Callback when click,
* `image?: any`: Search image.
* `activeOpacity?: number`: `activeOpacity` of `TouchableOpacity`.
* `touchStyle?: any`: Out `TouchableOpacity` style.
* `imageStyle?: any`: Search image style.
* `textStyle?: any`: Placeholder text style.

## Reference

Please see this repository: [react-native-items](https://github.com/gaoxiaosong/react-native-items).