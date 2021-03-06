import XEUtils from 'xe-utils'
import Table from './components/table'
import TableColumn from './components/table-column'
import TableToolbar from './components/table-toolbar'
import Grid from './components/grid'
import Excel from './components/excel'
import Pagination from './components/pagination'
import Checkbox from './components/checkbox'
import Radio from './components/radio'
import Input from './components/input'
import Button from './components/button'
import GlobalConfig from './conf'
import Interceptor from './interceptor'
import Renderer from './renderer'

import './style/index.scss'

const installedPlugins = []

const components = [
  Table,
  TableColumn,
  TableToolbar,
  Grid,
  Excel,
  Pagination,
  Checkbox
]

/**
 * 全局参数设置
 */
function setup (options = {}) {
  let { iconMap } = GlobalConfig
  if (options.iconMap) {
    Object.assign(iconMap, options.iconMap)
  }
  Object.assign(GlobalConfig, options, {
    iconMap
  })
}

/**
 * 默认安装
 */
function install (Vue, options) {
  if (XEUtils.isPlainObject(options)) {
    setup(options)
  }
  components.map(component => Vue.component(component.name, component))
}

function use (Plugin, options) {
  if (Plugin && Plugin.install) {
    if (installedPlugins.indexOf(Plugin) === -1) {
      Plugin.install(options, { setup, interceptor: Interceptor, renderer: Renderer })
      installedPlugins.push(Plugin)
    }
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  use,
  setup,
  interceptor: Interceptor,
  renderer: Renderer,
  Table,
  TableColumn,
  TableToolbar,
  Grid,
  Excel,
  Pagination,
  Checkbox,
  Radio,
  Input,
  Button
}
