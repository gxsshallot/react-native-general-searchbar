# react-native-general-searchbar

## 安装

使用Yarn安装:

```shell
yarn add react-native-general-searchbar
```

使用NPM安装:

```shell
npm install --save react-native-general-searchbar
```

## 使用

### SearchBar

在文件中导入模块:

```javascript
import SearchBar from 'react-native-general-searchbar;
```

有几个属性来控制组件的行为:

* `autoFocus: boolean`: 内部`TextInput`组件自动Focus与否.
* `searchText: string`: 当前展示的文本.
* `placeholder: string`: 占位文本.
* `canCancel: boolean`: 有没有取消按钮.
* `canClear: boolean`: 有没有清空输入按钮.
* `isSearching: boolean`: 是否处于搜索中状态.
* `onPressCancel: () => void`: 取消按钮的回调方法.
* `onSubmitEditing: (event) => void`: 当提交编辑文本时的回调方法.
* `onChangeText: (text: string) => void`: 当前输入文本改变的回调方法.
* `textInputProps: any`: 内部`TextInput`组件的属性.
* `style: any`: 外部视图样式.

### FakeSearchBar

在文件中导入模块:

```javascript
import { FakeSearchBar } from 'react-native-general-searchbar;
```

属性:

* `placeholder?: string`: 占位文本.
* `onFocus?: () => void`: 点击回调方法,
* `image?: any`: 搜索图标.
* `activeOpacity?: number`: `TouchableOpacity`的`activeOpacity`属性.
* `touchStyle?: any`: 外部`TouchableOpacity`组件样式.
* `imageStyle?: any`: 搜索图标样式.
* `textStyle?: any`: 占位文本样式.

## 参考

请参照这个仓库的说明: [react-native-items](https://github.com/gaoxiaosong/react-native-items/blob/master/README-zh_CN.md).