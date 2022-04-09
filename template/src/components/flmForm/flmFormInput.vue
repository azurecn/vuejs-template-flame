<template>
  <el-input v-model="value"
            v-bind="$attrs"
            v-on="$listeners"
            @change="valueChanged($event, $attrs.id)"></el-input>
</template>

<script>
export default {
  name: 'flmFormInput',
  inheritAttrs: true,
  props: {
  },
  data() {
    return {
    }
  },
  computed: {
    value: {
      get() {
        // console.log(this.$attrs.value)
        return this.$attrs.data.value || null
      },
      set(val) {
        this.valueChanged(val, this.$attrs.id)
      }
    },
  },
  methods: {
    valueChanged(val, formItemId) {
      // console.log(`flmFormInput ${formItemId} change ${val}`)
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
