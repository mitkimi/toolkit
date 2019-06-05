export default [
  {
    path: '/',
    name: 'Index',
    breadCrumb: '工具箱',
    component: () => import('@/scene/Home'),
    children: [
      {
        path: 'numAddon',
        name: 'NumAddOn',
        breadCrumb: '单次数字滚动',
        component: () => import('@/views/numAddon')
      },
      {
        path: 'growNumber',
        name: 'GrowNumber',
        breadCrumb: '数字从零滚动',
        component: () => import('@/views/growNumber')
      }
    ]
  }
]
