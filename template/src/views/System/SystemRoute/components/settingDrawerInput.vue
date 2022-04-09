<!-- input输入框属性 -->
<!--  type	类型	string	text，textarea 和其他 原生 input 的 type 值	text-->
<!--  value / v-model	绑定值	string / number	—	—-->
<!--  maxlength	原生属性，最大输入长度	number	—	—-->
<!--  minlength	原生属性，最小输入长度	number	—	—-->
<!--  show-word-limit	是否显示输入字数统计，只在 type = "text" 或 type = "textarea" 时有效	boolean	—	false-->
<!--  placeholder	输入框占位文本	string	—	—-->
<!--  clearable	是否可清空	boolean	—	false-->
<!--  show-password	是否显示切换密码图标	boolean	—	false-->
<!--  disabled	禁用	boolean	—	false-->
<!--  size	输入框尺寸，只在 type!="textarea" 时有效	string	medium / small / mini	—-->
<!--  prefix-icon	输入框头部图标	string	—	—-->
<!--  suffix-icon	输入框尾部图标	string	—	—-->
<!--  rows	输入框行数，只对 type="textarea" 有效	number	—	2-->
<!--  autosize	自适应内容高度，只对 type="textarea" 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }	boolean / object	—	false-->
<!--  autocomplete	原生属性，自动补全	string	on, off	off-->
<!--  auto-complete	下个主版本弃用	string	on, off	off-->
<!--  name	原生属性	string	—	—-->
<!--  readonly	原生属性，是否只读	boolean	—	false-->
<!--  max	原生属性，设置最大值	—	—	—-->
<!--  min	原生属性，设置最小值	—	—	—-->
<!--  step	原生属性，设置输入字段的合法数字间隔	—	—	—-->
<!--  resize	控制是否能被用户缩放	string	none, both, horizontal, vertical	—-->
<!--  autofocus	原生属性，自动获取焦点	boolean	true, false	false-->
<!--  form	原生属性	string	—	—-->
<!--  label	输入框关联的label文字	string	—	—-->
<!--  tabindex	输入框的tabindex	string	-	- -->
<!--  validate-event	输入时是否触发表单的校验	boolean	-	true-->
<template>
  <el-drawer
      class="components-drawer"
      size="50%"
      :title="title"
      :visible.sync="isShow"
      :direction="direction"
      :before-close="handleClose">
    <div class="drawer-content">
      <div class="demo-style">
        <span style="margin-right:1em;padding-left: 1em;font-size: 14px;">配置样板(14px)：</span>
        <span style="padding: 0 1em;">{{ label }}</span>
        <el-input
          :value="drawerForm.value"
          :type="drawerForm.type"
          :maxlength="drawerForm.maxlength"
          :minlength="drawerForm.minlength"
          :show-word-limit="drawerForm.showWordLimit"
          :placeholder="drawerForm.placeholder"
          :clearable="drawerForm.clearable"
          :show-password="drawerForm.showPassword"
          :disabled="drawerForm.disabled"
          :size="drawerForm.size"
          :prefix-icon="drawerForm.prefixIcon"
          :suffix-icon="drawerForm.suffixIcon"
          :rows="drawerForm.rows"
          :autosize="drawerForm.autosize"
          :autocomplete="drawerForm.autocomplete"
          :auto-complete="drawerForm.autoComplete"
          :name="drawerForm.name"
          :readonly="drawerForm.readonly"
          :max="drawerForm.max"
          :min="drawerForm.min"
          :step="drawerForm.step"
          :resize="drawerForm.resize"
          :autofocus="drawerForm.autofocus"
          :form="drawerForm.form"
          :label="drawerForm.label"
          :tabindex="drawerForm.tabindex"
          :validate-event="drawerForm.validateEvent"
          @input="changeValue"
          @clear="clearValue"
        ></el-input>
      </div>

      <el-form
        class="setting-drawer-form"
        ref="form"
        label-width="100px"
        label-suffix=":"
        >
        <div style="padding: 15px 0 20px">常用配置</div>

<!--        &lt;!&ndash; value &ndash;&gt;-->
<!--        <el-form-item label="value" prop="value">-->
<!--          <flmInput-->
<!--              v-model="drawerForm.value"-->
<!--              :config="{ type: 'string' }"/>-->
<!--          <flmTooltip content="值" />-->
<!--        </el-form-item>-->
        <!-- type-->
        <el-form-item label="type" prop="type">
          <el-radio-group
              v-model="drawerForm.type"
              :max="1">
            <el-radio
                v-for="item in optionList(TYPE_OPTION)"
                :key="item.value"
                :label="item.value"
            >{{ item.label }}</el-radio>
            <flmTooltip style="margin-left: 1em;" content="输入框输入值类型" />
          </el-radio-group>
        </el-form-item>
        <!-- size -->
        <el-form-item label="size" prop="size">
          <el-radio-group
              v-model="drawerForm.size"
              :max="1">
            <el-radio
                v-for="item in optionList(SIZE_OPTION)"
                :key="item.value"
                :label="item.value"
            >{{ item.label }}</el-radio>
            <flmTooltip style="margin-left: 1em;" content="输入框尺寸（大小）" />
          </el-radio-group>
        </el-form-item>
        <!-- placeholder -->
        <el-form-item label="placeholder" prop="placeholder">
          <flmInput
              v-model="drawerForm.placeholder"
              :config="{ type: 'string' }"/>
          <flmTooltip content="输入框占位文本，默认string" />
        </el-form-item>
        <!-- clearable -->
        <el-form-item label="clearable" prop="clearable">
          <el-switch v-model="drawerForm.clearable"></el-switch>
          <flmTooltip content="是否可清空，默认false" />
        </el-form-item>
        <!-- resize -->
        <el-form-item label="resize" prop="resize">
          <el-radio-group
              v-model="drawerForm.resize"
              :max="1">
            <el-radio
                v-for="item in optionList(RESIZE_OPTION)"
                :key="item.value"
                :label="item.value"
            >{{ item.label }}</el-radio>
            <flmTooltip style="margin-left: 1em;" content="输入框尺寸（大小）" />
          </el-radio-group>
        </el-form-item>

        <div style="padding: 15px 0 20px">其他配置</div>
        <!-- maxlength-->
        <el-form-item label="maxlength" prop="maxlength">
          <flmInput
              v-model="drawerForm.maxlength"
              :config="{ type: 'number' }"/>
          <flmTooltip content="原生属性，最大输入长度" />
        </el-form-item>
        <!-- minlength-->
        <el-form-item label="minlength" prop="minlength">
          <flmInput
              v-model="drawerForm.minlength"
              :config="{ type: 'number' }"/>
          <flmTooltip content="原生属性，最小输入长度" />
        </el-form-item>
        <!-- show-word-limit-->
        <el-form-item v-show="drawerForm.type ==='text' || drawerForm.type ==='textarea'" label="showWordLimit" prop="showWordLimit">
          <el-switch v-model="drawerForm.showWordLimit"></el-switch>
          <flmTooltip content="是否显示输入字数统计，只在 type = 'text' 或 type = 'textarea' 时有效" />
        </el-form-item>
        <!-- show-password -->
        <el-form-item label="showPassword" prop="showPassword">
          <el-switch v-model="drawerForm.showPassword"></el-switch>
          <flmTooltip content="是否显示切换密码图标，默认false" />
        </el-form-item>
        <!-- disabled -->
        <el-form-item label="disabled" prop="disabled">
          <el-switch v-model="drawerForm.disabled"></el-switch>
          <flmTooltip content="禁用组件，默认false" />
        </el-form-item>
        <!-- prefix-icon-->
        <el-form-item label="prefixIcon" prop="prefixIcon">
          <flmInput
              v-model="drawerForm.prefixIcon"
              :config="{ type: 'string' }"/>
          <flmTooltip content="输入框头部图标，默认string" />
        </el-form-item>
        <!-- suffix-icon-->
        <el-form-item label="suffixIcon" prop="suffixIcon">
          <flmInput
              v-model="drawerForm.suffixIcon"
              :config="{ type: 'string' }"/>
          <flmTooltip content="输入框尾部图标，默认string" />
        </el-form-item>
        <!-- rows -->
        <el-form-item v-show="drawerForm.type==='textarea'" label="rows" prop="rows">
          <flmInput
              v-model="drawerForm.rows"
              :config="{ type: 'number' }"/>
          <flmTooltip content="输入框尾部图标，默认值2（行）" />
        </el-form-item>
        <!-- autosize -->
        <el-form-item v-show="drawerForm.type==='textarea'" label="autosize" prop="autosize">
          <!-- 20211120 此处未来需拓展参数为对象的情况 -->
          <!-- 20211120 此处未来需拓展参数为对象的情况 end -->
          <el-switch v-model="drawerForm.autosize"></el-switch>
          <flmTooltip content="自适应内容高度，只对 type='textarea' 有效，可传入对象" />
        </el-form-item>
        <!-- autocomplete -->
        <el-form-item label="autocomplete" prop="autocomplete">
          <el-switch
              v-model="drawerForm.autocomplete"
              active-value="on"
              inactive-value="off"></el-switch>
          <flmTooltip content="原生属性，自动补全，默认off" />
        </el-form-item>
        <!-- name-->
        <el-form-item label="name" prop="name">
          <flmInput
              v-model="drawerForm.name"
              :config="{ type: 'string' }"/>
          <flmTooltip content="原生属性" />
        </el-form-item>
        <!-- readonly -->
        <el-form-item label="readonly" prop="readonly">
          <el-switch v-model="drawerForm.readonly"></el-switch>
          <flmTooltip content="原生属性，是否只读，默认值false" />
        </el-form-item>
        <!-- max -->
        <el-form-item label="max" prop="max">
          <flmInput
              v-model="drawerForm.max"
              :config="{ type: 'number' }"/>
          <flmTooltip content="原生属性，设置最大值" />
        </el-form-item>
        <!-- min -->
        <el-form-item label="min" prop="min">
          <flmInput
              v-model="drawerForm.min"
              :config="{ type: 'number' }"/>
          <flmTooltip content="原生属性，设置最小值" />
        </el-form-item>
        <!-- step -->
        <el-form-item label="step" prop="step">
          <flmInput
              v-model="drawerForm.step"
              :config="{ type: 'number' }"/>
          <flmTooltip content="原生属性，设置输入字段的合法数字间隔" />
        </el-form-item>
        <!-- autofocus -->
        <el-form-item label="autofocus" prop="autofocus">
          <el-switch v-model="drawerForm.autofocus"></el-switch>
          <flmTooltip content="原生属性，自动获取焦点，默认值false" />
        </el-form-item>
        <!-- form -->
        <el-form-item label="form" prop="form">
          <flmInput
              v-model="drawerForm.form"
              :config="{ type: 'string' }"/>
          <flmTooltip content="原生属性" />
        </el-form-item>
        <!-- label -->
        <el-form-item label="label" prop="label">
          <flmInput
              v-model="drawerForm.label"
              :config="{ type: 'string' }"/>
          <flmTooltip content="输入框关联的label文字" />
        </el-form-item>
        <!-- tabindex -->
        <el-form-item label="tabindex" prop="tabindex">
          <flmInput
              v-model="drawerForm.tabindex"
              :config="{ type: 'string' }"/>
          <flmTooltip content="输入框的tabindex" />
        </el-form-item>
        <!-- validate-event -->
        <el-form-item label="validateEvent" prop="validateEvent">
          <el-switch v-model="drawerForm.validateEvent"></el-switch>
          <flmTooltip content="输入时是否触发表单的校验，默认值true" />
        </el-form-item>
      </el-form>
    </div>
    <div class="drawer-footer">
      <el-button type="primary" @click="handleSubmit">提交</el-button>
      <el-button @click="handleCloseDrawer">取消</el-button>
    </div>
  </el-drawer>
</template>

<script>
import {
  flmTooltip,
  flmInput,
} from "@/components"
export default {
  name: 'settingItemDrawer',
  components: {
    flmTooltip,
    flmInput,
  },
  data() {
    return {
      isShow: false,
      direction: 'rtl',

      title: '操作',
      label: '标签名称',
      drawerForm: {
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
      },
      // optionList配置
      TYPE_OPTION: {
        text: '文本',
        textarea: '文本块',
        password: '密码',
        number: '数字',
        email: '邮箱',
        url: '链接'
      },
      SIZE_OPTION: {
        null: '默认',
        medium: '普通',
        small: '小',
        mini: '迷你'
      },
      RESIZE_OPTION: {
        none: '不能重置大小',
        both: '任意方向',
        horizontal: '水平方向',
        vertical: '垂直方向'
      }
    }
  },
  computed: {

  },
  watch: {
    'isShow'() {
      this.transNullToRender(this.drawerForm, 'size')
    }
  },
  methods: {
    optionList(obj) {
      return Object
      .entries(obj)
      .map(([ value, text ]) => ({ value, label: `${value}${text}` }))
    },
    transNullToRender(obj, attr) {
       obj[attr] === null && (obj[attr] = 'null')
    },
    changeValue(e) {
      this.$set(this.drawerForm, 'value', e)
    },
    clearValue() {
      this.drawerForm.value = ''
    },
    handleClose(done) {
      done()
    },
    handleCloseDrawer() {
      this.isShow = false
    },
    formToSetting() {
      this.formData = {
        ...this.drawerForm,
        size: this.transNullToSubmit(this.drawerForm, 'size'),
        value: '' // value 用户输入不赋默认值
      }
    },
    transNullToSubmit(obj, attr) {
      return obj[attr] === 'null' ? null : obj[attr]
    },
    handleSubmit() {
      this.formToSetting()
      this.$emit('actionSubmit', this.formData)
      console.log(this.formData)
      this.handleCloseDrawer()
    },
  }
}
</script>

<style lang="scss">
.components-drawer {
  .drawer-content {
    padding: 15px;
    height: calc(100vh - 50px);
    overflow-y: scroll;
    border-top: 1px solid #eee;
  }
  .demo-style {
    margin: 10px;
    padding: 20px;
    border: 1px solid #eee;
    border-radius: 15px;
  }

  .el-drawer__header {
    margin-bottom: 12px;
  }
  .drawer-footer {
    position: fixed;
    right: 0;
    bottom: 0;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    button + button {
      margin-right: 20px;
    }
  }

  .el-input {
    width: 203px;
  }
}
</style>
