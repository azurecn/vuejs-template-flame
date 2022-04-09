```
// 测试axios
import axios from 'axios'
axios({
  baseURL: `/flame-openapi-service`,
  url: '/rest?method=freezer.MasterSupplier.PageSearch&token=1692205797343232099',
  method: 'POST',
  headers: {'Content-Type': 'application/json;charset=utf-8'},
  data: {"page_size":15,"page_no":1,"ref_level":1,"conditions":{}},
}).then(() => {
  console.log('测试axios')
})

// 测试dayjs
import dayjs from 'dayjs'
console.log('测试dayjs', dayjs().format())

// 测试loadsh
import _ from 'loadsh'
console.log('测试loadsh', _.add(1, 2))

// 测试numeral
import numeral from 'numeral'
console.log('测试numeral', numeral(1000).format('0,0'))

// 测试mavon-editor
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)

// 测试element-ui
import "./ui/element/element";
import './ui/element/element-variables.scss'

// 测试env文件
console.log('全局变量', process.env)
```