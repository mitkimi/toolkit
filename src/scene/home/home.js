import ToolMenu from '@/components/menu'
import routes from '@/router/routes'
export default {
  components: {
    ToolMenu
  },
  data () {
    return {
      breadCrumb: []
    }
  },
  mounted () {
    this.queryBreadCrumb()
  },
  methods: {
    queryBreadCrumb () {
      if (routes) {
        this.breadCrumb.push(routes[0].breadCrumb)
      }
      routes[0].children.map(element => {
        if (this.$route.path === `/${element.path}`) {
          this.breadCrumb.push(element.breadCrumb)
        }
      })
      // console.log(this.$route.path)
    }
  }
}