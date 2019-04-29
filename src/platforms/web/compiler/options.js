/* @flow */

import {
  isPreTag,
  mustUseProp,
  isReservedTag,
  getTagNamespace
} from '../util/index'

import modules from './modules/index'
import directives from './directives/index'
import { genStaticKeys } from 'shared/util'
import { isUnaryTag, canBeLeftOpenTag } from './util'

export const baseOptions: CompilerOptions = {
  expectHTML: true,
  modules,
  directives,
  isPreTag, // 如果tag标签是pre，就返回true。pre标签显示的是预格式化的代码，比如计算机代码，html标签等，纯粹展示，但是不执行
  isUnaryTag, //tag标签是不是单闭合标签
  mustUseProp, //tag标签是不是必须使用属性，如表单标签、video标签等
  canBeLeftOpenTag, //tag标签是不是左标签可开可闭标签，如dd、dt、option等
  isReservedTag, //tag标签是不是html或者svg标签
  getTagNamespace, //如果是svg标签，返回‘svg’；如果是math标签，返回‘math’，其他都是undefined
  staticKeys: genStaticKeys(modules) // 创建一个string包含modules中的所有staticKeys，并且以逗号隔开
}
