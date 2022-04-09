<template>
  <el-form-item
    :prop="config.prop"
    :label="config.label"
    :label-width="config.labelWidth"
    :required="config.required"
    :rules="config.rules"
    :error="config.error"
    :show-message="config.showMessage"
    :inline-message="config.inlineMessage"
    :size="config.size"
    @resetField="resetField"
    @clearValidate="clearValidate"
  >
    <flm-input
      v-if="customConfig.type === 'input'"
      :data="data"
      :config="customConfig.config"
      :customConfig="customConfig.customConfig"
      @change="change"
    />
    <flm-select
      v-else-if="customConfig.type === 'select'"
      :data="data"
      :config="customConfig.config"
      :customConfig="customConfig.customConfig"
      @change="change"
    />
    <flm-switch
      v-else-if="customConfig.type === 'switch'"
      :data="data"
      :config="customConfig.config"
      :customConfig="customConfig.customConfig"
      @change="change"
    />
    <flm-date-time
      v-else-if="customConfig.type === 'dateTime'"
      :data="data"
      :config="customConfig.config"
      :customConfig="customConfig.customConfig"
      @change="change"
    />
    <template v-else-if="customConfig.type === 'slot'">
      <slot :name="config.prop" :data="{ data, config, customConfig }"></slot>
    </template>
  </el-form-item>
</template>

<script>
import {
  flmInput,
  flmSwitch,
  flmSelect,
  flmDateTime
} from '../flmFormComponent'
export default {
  name: 'flmFormItem',
  components: {
    flmDateTime,
    flmInput,
    flmSwitch,
    flmSelect
  },
  props: {
    data: null,
    config: {
      type: Object,
      default() {
        return {
          prop,
          label,
          labelWidth,
          required,
          rules,
          error,
          showMessage,
          inlineMessage,
          size,
        }
      }
    },
    customConfig: Object
  },
  methods: {
    resetField() {},
    clearValidate() {},
    change(event) {
      this.$emit('change', event)
    }
  }
}
</script>
