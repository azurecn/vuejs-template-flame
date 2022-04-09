<template>
  <div>
    <el-divider content-position="left">分页器模型</el-divider>
    <flmPagination class="model-main" :config="paginationSetting" />
    <el-divider content-position="left">默认配置</el-divider>
    <el-form
      class="setting-form"
      ref="form"
      :model="paginationForm"
      label-width="160px"
      label-suffix=":"
    >
      <el-row>
        <el-col :span="12">
          <el-form-item label="small" prop="small">
            <flmSwitch v-model="paginationForm.small" />
            <flmTooltip content="是否使用小型分页样式" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="background" prop="background">
            <flmSwitch v-model="paginationForm.background" />
            <flmTooltip content="是否为分页按钮添加背景色" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="page-size" prop="pageSize">
            <flmInput v-model="paginationForm.pageSize" :config="{ type: 'number' }" />
            <flmTooltip content="每页显示条目个数" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="page-sizes" prop="pageSizes">
            <flmInput v-model="paginationForm.pageSizes" />
            <flmTooltip content="每页显示个数选择器的选项设置" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="total" prop="total">
            <flmInput v-model="paginationForm.total" :config="{ type: 'number' }" />
            <flmTooltip content="总条目数" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="current-page" prop="currentPage">
            <flmInput v-model="paginationForm.currentPage" :config="{ type: 'number' }" />
            <flmTooltip content="当前页数" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="page-count" prop="pageCount">
            <flmInput v-model="paginationForm.pageCount" :config="{ type: 'number' }" />
            <flmTooltip content="总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="pager-count" prop="pagerCount">
            <flmSelect v-model="paginationForm.pagerCount" :customConfig="{ options: pagerCountOptions }" />
            <flmTooltip content="页码按钮的数量，当总页数超过该值时会折叠	number	大于等于 5 且小于等于 21 的奇数" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="popper-class" prop="popperClass">
            <flmInput v-model="paginationForm.popperClass" />
            <flmTooltip content="每页显示个数选择器的下拉框类名" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="layout" prop="layout">
        <el-checkbox-group v-model="paginationForm.layout">
          <el-checkbox
            v-for="layoutOption in layoutOptions"
            :key="layoutOption.value"
            :label="layoutOption.value"
          >{{ layoutOption.label }}</el-checkbox>
        </el-checkbox-group>
        <flmTooltip content="组件布局，子组件名用逗号分隔" />
      </el-form-item>
      <el-row>
        <el-col :span="12">
          <el-form-item label="prev-text" prop="prevText">
            <flmInput v-model="paginationForm.prevText" />
            <flmTooltip content="替代图标显示的上一页文字" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="next-text" prop="nextText">
            <flmInput v-model="paginationForm.nextText" />
            <flmTooltip content="替代图标显示的下一页文字" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="disabled" prop="disabled">
            <flmSwitch v-model="paginationForm.disabled" />
            <flmTooltip content="是否禁用" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="hide-on-single-page" prop="hideOnSinglePage">
            <flmSwitch v-model="paginationForm.hideOnSinglePage" />
            <flmTooltip content="只有一页时是否隐藏" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import {
  flmForm,
  flmPagination,
  flmTooltip,
  flmInput,
  flmSelect,
  flmSwitch
} from "@/components"
export default {
  name: 'settingPagination',
  components: {
    flmForm,
    flmPagination,
    flmTooltip,
    flmInput,
    flmSelect,
    flmSwitch
  },
  data() {
    return {
      // 分页配置
      paginationSetting: {},
      paginationForm: {
        small: false,
        background: false,
        pageSize: 10,
        total: null,
        pageCount: null,
        pagerCount: 7,
        currentPage: 1,
        layout: ['prev','pager','next','jumper','->','total'],
        pageSizes: '10,20',
        popperClass: null,
        prevText: null,
        nextText: null,
        disabled: false,
        hideOnSinglePage: null,
      },
    }
  },
  computed: {
    layoutOptions() {
      const layout = {
        prev: '上一页',
        next: '下一页',
        pager: '页码列表',
        jumper: '跳页元素',
        '->': '元素靠右',
        total: '总条目数',
      }
      return Object
        .entries(layout)
        .map(([ value, text ]) => ({ value, label: `${value}${text}` }))
    },
    pagerCountOptions() {
      return Array
        .from(Array(9), (v, index) => (index + 2) * 2 + 1)
        .map(item => ({ label: item, value: item }))
    }
  },
  watch: {
    paginationSetting(newValue, oldValue) {
      JSON.stringify(oldValue) === "{}" && this.settingToForm()
    },
    paginationForm: {
      deep: true,
      handler() {
        this.formToSetting()
      }
    }
  },
  methods: {
    settingToForm() {
      const { layout, pageSizes } = this.paginationSetting
      this.paginationForm =  {
        ...this.paginationSetting,
        layout: layout ? layout.split(',') : [],
        pageSizes: pageSizes ? pageSizes.join(',') : ''
      }
    },
    formToSetting() {
      const { layout, pageSizes } = this.paginationForm
      this.paginationSetting =  {
        ...this.paginationForm,
        layout: layout ? layout.join(',') : '',
        pageSizes: pageSizes.split(',').map(item => Number(item))
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../routerSetting.scss';
</style>
