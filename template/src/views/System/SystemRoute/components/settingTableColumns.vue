<template>
  <div>
    <!-- 基本配置 -->
    <flmForm
      ref="columnsSetting"
      v-model="value.config"
      :config="columnsSetting.config.config"
      :customConfig="columnsSetting.config.customConfig"
    />
    <!-- 自定义配置 -->
    <flmForm
      ref="columnsCustomconfig"
      v-model="value.customConfig"
      :config="columnsSetting.customConfig.config"
      :customConfig="columnsSetting.customConfig.customConfig"
    >
      <template #children>
        <settingTableColumns
          v-for="(column, columnIndex) in value.customConfig.children"
          :key="columnIndex"
          v-model="value.customConfig.children[columnIndex]"
        />
      </template>
    </flmForm>
    <el-button>上移</el-button>
    <el-button>下移</el-button>
    <el-button>删除</el-button>
    <el-button @click="addColumn">增加子列</el-button>
  </div>
</template>

<script>
import { flmForm } from '@/components'
import settingTableColumns from './settingTableColumns'
import { TABLE_COLUMN_SETTING, TABLE_COLUMN_CHILDREN_SETTING } from './settingInfo'
export default {
  name: 'settingTableColumns',
  components: {
    flmForm,
    settingTableColumns
  },
  props: {
    value: {
      type: Object,
      default() {
        return {
          config: {
            type: null,
            index: null,
            columnKey: null,
            label: null,
            prop: null,
            width: null,
            minWidth: null,
            fixed: null,
            renderHeader: null,
            sortable: false,
            sortMethod: null,
            sortBy: null,
            sortOrders: null,
            resizable: true,
            formatter: null,
            showOverflowTooltip: false,
            align: 'left',
            headerAlign: null,
            className: null,
            labelClassName: null,
            selectable: null,
            reserveSelection: false,
            filters: null,
            filterPlacement: null,
            filterMultiple: null,
            filterMethod: null,
            filteredValue: null
          },
          customConfig: {
            isSlot: false,
            children: []
          }
        }
      }
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  data() {
    return {
      // 列配置
      columnsSetting: TABLE_COLUMN_SETTING
    }
  },
  methods: {
    // 增加列
    addColumn() {
      this.value.customConfig.children.push(JSON.parse(JSON.stringify(TABLE_COLUMN_CHILDREN_SETTING)))
    }
  }
}
</script>

<style>

</style>
