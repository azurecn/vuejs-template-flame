<template>
  <el-switch
    :value="data"
    :disabled="config.disabled"
    :active-icon-class="config.activeIconClass"
    :inactive-icon-class="config.inactiveIconClass"
    :active-text="config.activeText"
    :inactive-text="config.inactiveText"
    :active-value="config.activeValue"
    :inactive-value="config.inactiveValue"
    :active-color="config.activeColor"
    :inactive-color="config.inactiveColor"
    :name="config.name"
    :validate-event="config.validateEvent"
    @change="change"
  ></el-switch>
</template>

<script>
export default {
  name: 'flmSwitch',
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
          disabled: false,
          width: 40,
          activeIconClass: null,
          inactiveIconClass: null,
          activeText: null,
          inactiveText: null,
          activeValue: true,
          inactiveValue: false,
          activeColor: '#409EFF',
          inactiveColor: '#C0CCDA',
          name: null,
          validateEvent: true,
        }
      }
    },
    customConfig: Object
  },
  methods: {
    change(event) {
      this.$emit('change', event)
    }
  }
}
</script>
