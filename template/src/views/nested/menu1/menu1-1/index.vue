<template>
  <div style="padding:30px;">
    <div style="padding-bottom: 30px;border-bottom: 1px solid #333;">menu 1-1</div>
    <flm-form-item
        ref="flmFormItem"
        :title="title.name"
        :isTitleShow="title.isShow === 'true'"
        :titleDirection="title.direction"
        :titleWidth="title.width"
        :type="type"
        :options="selectProps.options"
        :value="selectProps.value"
        :placeholder="selectProps.placeholder"
        name="123123"
        :collapse-tags="true"
        filterable="true"
        :clearable="true"
        :multiple="selectProps.multiple"
        @change="selectChanged"></flm-form-item>

    <flm-form-radio
        style="padding: 30px 0;"
        ref="radio"
        v-model="title.isShow"
        :options="titleShowOptions" @change="titleShowChanged"></flm-form-radio>
    <flm-form-radio
        style="padding: 30px 0;"
        ref="radio"
        v-model="title.direction"
        :options="titleDirectionOptions" @change="titleDirectionChanged"></flm-form-radio>
    <flm-form-radio
        style="padding: 30px 0;"
        ref="radio"
        v-model="type"
        :options="typeOptions" @change="typeChanged"></flm-form-radio>
  </div>
</template>

<script>
  import flmFormItem from '@/components/flmForm/flmFormItem'
  import FlmFormRadio from '@/components/flmForm/flmFormRadio'

  export default {
    name: 'demo',
    components: {
      flmFormItem,

      FlmFormRadio
    },
    data() {
      return {
        typeOptions: [
          {
            label: 'input输入框',
            value: 'input'
          },
          {
            label: '单选radio',
            value: 'radio',
          },
          {
            label: '多选checkbox',
            value: 'checkbox'
          },
          {
            label: 'selector单选',
            value: 'selector'
          },
          {
            label: 'selector多选',
            value: 'selectorM'
          }
        ],
        titleDirectionOptions: [
          {
            label: '横排',
            value: 'row'
          },
          {
            label: '竖排',
            value: 'column'
          }
        ],
        titleShowOptions: [
          {
            label: '显示',
            value: true
          },
          {
            label: '不显示',
            value: false
          }
        ],

        title: {
          name: '选择Label name',
          isShow: 'true',
          direction: 'column', // 'row'、'column'
          width: '80px'
        },
        isTitleShow: true,
        type: 'checkbox',  // 支持'selector'、'radio'、'checkbox'
        selectProps: {
          value: ['22'], // 多选selector、checkbox
          // value: '22',  // 单选selector、radio
          options: [
            {
              label: '112',
              value: '00',
            },
            {
              label: '222',
              value: '11'
            },
            {
              label: '333',
              value: '22'
            }
          ],
          placeholder: '9999',
          // selector选项
          multiple: true,
        }
      }
    },
    mounted () {
      this.$refs.flmFormItem.test()
    },
    methods: {
      selectChanged(val) {
        console.log(`page demo selectChanged ${val}`)
        this.selectProps.value = val
      },

      typeChanged(val) {
        this.type = val

        switch (val) {
          case 'input':
            this.selectProps.value = '22'
            break
          case 'radio':
            this.selectProps.value = '22'
            break
          case 'checkbox':
            this.selectProps.value = ['22']
            break
          case 'selector':
            this.selectProps.value = '22'
            this.selectProps.multiple = false
            break
          case 'selectorM':
            this.selectProps.value = ['22']
            this.selectProps.multiple = true
            break
        }
      },
      titleShowChanged(val) {
        this.title.isShow = val
      },
      titleDirectionChanged(val) {
        this.title.direction = val
      },
    }
  }
</script>
