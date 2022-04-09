<template>
  <el-form
    :rules="config.rules"
    :inline="config.inline"
    :label-position="config.labelPosition"
    :label-width="config.labelWidth"
    :label-suffix="config.labelSuffix"
    :hide-required-asterisk="config.hideRequiredAsterisk"
    :show-message="config.showMessage"
    :inline-message="config.inlineMessage"
    :status-icon="config.statusIcon"
    :validate-on-rule-change="config.validateOnRuleChange"
    :size="config.size"
    :disabled="config.disabled"
  >
    <flm-form-item
      v-for="item in customConfig.items"
      :key="item.config.prop"
      :data="data[item.config.prop]"
      :config="item.config"
      :customConfig="item.customConfig"
      @change="change($event, item.config.prop)"
    >
      <template v-if="item.customConfig.type === 'slot'" #[item.config.prop]>
        <slot :name="item.config.prop"></slot>
      </template>
    </flm-form-item>
    <el-form-item prop="buttons" >
      <el-button-group v-if="customConfig.buttons && customConfig.buttons.length">
        <flm-button
          v-for="button in customConfig.buttons"
          :key="button.customConfig.operation"
          :config="button.config"
          :customConfig="button.customConfig"
          @buttonClick="buttonClick"
        />
      </el-button-group>
    </el-form-item>
  </el-form>
</template>

<script>
import flmFormItem from './flmFormItem.vue'
import flmButton from '../flmButton/flmButton.vue'
export default {
  name: 'flmForm',
  components: {
    flmButton,
    flmFormItem,
  },
  props: {
    // 数据
    data: {},
    // 默认设置
    config: {
      type: Object,
      default() {
        return {
          rules,
          inline,
          labelPosition,
          labelWidth,
          labelSuffix,
          hideRequiredAsterisk,
          showMessage,
          inlineMessage,
          statusIcon,
          validateOnRuleChange,
          size,
          disabled,
        }
      }
    },
    // 自定义设置
    customConfig: {
      type: Object,
      default() {
        return {
          items: [],    // 表单项
          buttons: [],  // 表单按钮
        }
      }
    }
  },
  model: {
    prop: 'data',
    event: 'changeForm'
  },
  methods: {
    change(event, prop) {
      let data = this.data
      data[prop] = event
      this.$emit('changeForm', data)
    },
    buttonClick(event) {
      this.$emit('formAciton', {
        action: event,
        value: this.data
      })
    },
  }
}
</script>

<style>

</style>
