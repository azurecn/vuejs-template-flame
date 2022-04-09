<template>
  <el-input
    :value="data"
    :type="config.type"
    :maxlength="config.maxlength"
    :minlength="config.minlength"
    :show-word-limit="config.showWordLimit"
    :placeholder="config.placeholder"
    :clearable="config.clearable"
    :show-password="config.showPassword"
    :disabled="config.disabled"
    :size="config.size"
    :prefix-icon="config.prefixIcon"
    :suffix-icon="config.suffixIcon"
    :rows="config.rows"
    :autosize="config.autosize"
    :autocomplete="config.autocomplete"
    :auto-complete="config.autoComplete"
    :name="config.name"
    :readonly="config.readonly"
    :max="config.max"
    :min="config.min"
    :step="config.step"
    :resize="config.resize"
    :autofocus="config.autofocus"
    :form="config.form"
    :label="config.label"
    :tabindex="config.tabindex"
    :validate-event="config.validateEvent"
    @input="change"
  ></el-input>
</template>

<script>
export default {
  name: 'flmInput',
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
          type: 'text',
          maxlength: null,
          minlength: null,
          showWordLimit: false,
          placeholder: null,
          clearable: false,
          showPassword: false,
          disabled: false,
          size: null,
          prefixIcon: null,
          suffixIcon: null,
          rows: 2,
          autosize: false,
          autocomplete: 'off',
          autoComplete: 'off',
          name: null,
          readonly: false,
          max: null,
          min: null,
          step: null,
          resize: null,
          autofocus: false,
          form: null,
          label: null,
          tabindex: null,
          validateEvent: true,
        }
      }
    },
    customConfig: {
      type: Object,
    }
  },
  methods: {
    change(event) {
      this.$emit('change', this.config.type === 'number' ? Number(event) : event)
    }
  }
}
</script>

<style>

</style>
