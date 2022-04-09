<template>
  <div style="text-align: center;" @click="toggleClick">
    <el-button
      class="toggle-btn"
      style="width: 100%;"
      size="small"
      type="text"
    >{{ sidebar.opened ? '收起' : '展开' }}
    </el-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import variables from '@/ui/variables.scss'

export default {
  name: 'Hamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    variables() {
      return variables.themeRed
    }
  },
  methods: {
    toggleClick() {
      this.$emit('toggleClick')
    }
  }
}
</script>

<style scoped>
.hamburger {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
}

.hamburger.is-active {
  transform: rotate(180deg);
}
.toggle-btn {
  color: $themeRed;
}
</style>
