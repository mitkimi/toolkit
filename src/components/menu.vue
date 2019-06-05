<template>
<div>
  <a-menu
    style="width: 256px"
    :defaultSelectedKeys="[0]"
    mode="inline"
  >
    <a-menu-item v-for="(item,index) in routes" :key="index" @click="handleRoutePage(item.path)">{{item.breadCrumb}}</a-menu-item>
  </a-menu>
</div>
</template>
<script>
import routes from '@/router/routes'
export default {
  data () {
    return {
      routes: routes[0].children
    }
  },
  methods: {
    handleRoutePage (path) {
      this.$router.push({
        path
      })
    }
  }
}
</script>
