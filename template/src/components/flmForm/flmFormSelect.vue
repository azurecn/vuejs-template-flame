<template>
  <div>
    <el-select v-model="value"
               v-bind="$attrs"
               :placeholder="$attrs.config.placeholder || placeholder"
               :size="$attrs.config.size || size"
               :clearable="$attrs.config.clearable || clearable"
               :multiple="$attrs.config.multiple || multiple"
               :multiple-limit="$attrs.config['multiple-limit'] || multipleLimit"
               :collapse-tags="$attrs.config['collapse-tags'] || collapseTags"
               :filterable="$attrs.config.filterable || filterable"
               :popper-append-to-body="$attrs.config.popperAppendToBody || popperAppendToBody"
               v-on="$listeners"
               @change="selectChanged($event, $attrs.id)"
    >
      <el-option
          v-for="(item, $sidx) in $attrs.config.options"
          :key="item.value || item.id || $sidx"
          :label="item.label"
          :value="item.value">
      </el-option>
      <!--      -->
      <div v-if="$attrs.config.type === 'Select' && !$attrs.config.multiple" class="prefix-icon" slot="prefix"><svg-icon icon-class="table"></svg-icon></div>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'flmFormSelect',
  inheritAttrs: true,
  props: {
    // options会影响attrs监听，inheritAttrs开启时不使用
    // options: {
    //   type: Array,
    //   default: []
    // },
    // 是否支持多选
    multiple: {
      type: Boolean,
      default: false
    },
    // 占位符默认显示内容
    placeholder: {
      type: String,
      default: '请选择'
    },
    // 是否末尾显示清空value按键
    clearable: {
      type: Boolean,
      default: false
    },
    // div标签尺寸：默认为medium，可选small、mini
    size: {
      type: String,
      default: 'medium',
      validator: function(value) {
        return ['medium', 'small', 'mini'].indexOf(value) !== -1
      }
    },
    // tags收缩方式展示结果：标签方式显示第一个值，其他在第二个tag计数
    'collapse-tags': {
      type: Boolean,
      default: false
    },
    // 多选最大选中数：默认0为不限制数量
    'multiple-limit': {
      type: Number,
      default: 0
    },
    // 可搜索选项：默认false开启后可通过在input输入内容进行筛选
    filterable: {
      type: Boolean,
      default: false
    },
    // 是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false
    'popper-append-to-body': {
      type: Boolean,
      default: true
    },

    // name: {
    //   type: String,
    //   default: ''
    // },
    // autocomplete: {
    //   type: Boolean,
    //   default: false
    // },
    // 'allow-create': {
    //   type: Boolean,
    //   default: false
    // },
    // 'filter-method': Function,
    // remote: {
    //   type: Boolean,
    //   default: false
    // },
    // 'remote-method': {
    //   type: Boolean,
    //   default: false
    // },
    // loading: {
    //   type: Boolean,
    //   default: false
    // },
    // 'loading-text': {
    //   type: String,
    //   default: '请选择'
    // },
    // 'no-match-text': {
    //   type: String,
    //   default: '暂无数据'
    // },
    // 'no-data-text': {
    //   type: String,
    //   default: '暂无数据'
    // },
    // 'popper-class': {
    //   type: String,
    //   default: ''
    // },
    // 'reserve-keyword': {
    //   type: Boolean,
    //   default: false
    // },
    // 'default-first-option': {
    //   type: Boolean,
    //   default: false
    // },

    // 'automatic-dropdown': {
    //   type: Boolean,
    //   default: false
    // }
  },
  data() {
    return {

    }
  },
  computed: {
    value: {
      get() {
        // console.log(this)
        return this.$attrs.data.value || null
      },
      set(val) {
        this.$attrs.data.value = (val || null)
      }
    },
    // disabled() {
    //   return this.$attrs.disabled || false
    // },
    // multiple() {
    //   return this.$attrs.multiple || false
    // },
    // clearable() {
    //   return this.$attrs.clearable || false
    // },
    // ["'collapse-tags'"]() {
    //   return this.$attrs['collapse-tags'] || false
    // }
  },
  methods: {
    selectChanged(val, formItemId) {
      // console.log(`flmFormSelect change formItemId:${formItemId}`)
      this.$emit('change', val, formItemId)
    },
  }
}
</script>

<style lang="scss" scoped>
  .prefix-icon {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
