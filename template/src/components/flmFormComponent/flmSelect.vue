<template>
  <el-select
    :value="data"
    :multiple="config.multiple"
    :disabled="config.disabled"
    :value-key="config.valueKey"
    :size="config.size"
    :clearable="config.clearable"
    :collapse-tags="config.collapseTags"
    :multiple-limit="config.multipleLimit"
    :name="config.name"
    :autocomplete="config.autocomplete"
    :auto-complete="config.autoComplete"
    :placeholder="config.placeholder"
    :filterable="config.filterable"
    :allow-create="config.allowCreate"
    :filter-method="config.filterMethod"
    :remote="config.remote"
    :remote-method="config.remoteMethod"
    :loading="config.loading"
    :loading-text="config.loadingText"
    :no-match-text="config.noMatchText"
    :no-data-text="config.noDataText"
    :popper-class="config.popperClass"
    :reserve-keyword="config.reserveKeyword"
    :default-first-option="config.defaultFirstOption"
    :popper-append-to-body="config.popperAppendToBody"
    :automatic-dropdown="config.automaticDropdown"
    @change="change"
  >
    <el-option
      v-for="(item, $sidx) in customConfig.options"
      :key="item.value || item.id || $sidx"
      :label="item.label"
      :value="item.value"
    ></el-option>
    <div v-if="config.type === 'select' && !config.multiple" class="prefix-icon" slot="prefix">
      <svg-icon icon-class="table"></svg-icon>
    </div>
  </el-select>
</template>

<script>
export default {
  name: 'flmSelect',
  model: {
    prop: 'data',
    event: 'change'
  },
  props: {
    data: null,
    config: {
      type: Object,
      default() {
        return {
          multiple: false,
          disabled: false,
          valueKey: 'value',
          size: null,
          clearable: false,
          collapseTags: false,
          multipleLimit: 0,
          name: null,
          autocomplete: 'off',
          autoComplete: 'off',
          placeholder: '请选择',
          filterable: false,
          allowCreate: false,
          filterMethod: null,
          remote: false,
          remoteMethod: null,
          loading: false,
          loadingText: '加载中',
          noMatchText: '无匹配数据',
          noDataText: '无数据',
          popperClass: null,
          reserveKeyword: false,
          defaultFirstOption: false,
          popperAppendToBody: true,
          automaticDropdown: false,
        }
      }
    },
    customConfig: {
      type: Object,
      default() {
        return {
          prop: null,  // 控件key
          options: []  // 选项
        }
      }
    }
  },
  methods: {
    change (event) {
      this.$emit('change', event)
    }
  }
}
</script>

<style>

</style>
