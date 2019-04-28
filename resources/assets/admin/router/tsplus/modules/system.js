const SystemRouter = {
  path: '/system',
  component: () => import(/* webpackChunkName: 'system' */ '@/layout'),
  name: 'System',
  meta: { title: 'system.root', icon: 'tree' },
  redirect: '/system/info',
  children: [
    {
      path: 'info',
      component: () => import(/* webpackChunkName: 'system' */ '@/views/tsplus/system/systemInfo'),
      name: 'System-Info',
      meta: { title: 'system.info', icon: 'example' }
    },
    {
      path: 'user',
      name: 'System-Payment-User-Setting',
      meta: { title: 'system.user.root', icon: 'people' }
    },
    {
      path: 'register',
      // component: RegisterSetting,
      name: 'System-Register-Setting',
      meta: { title: 'system.registerSetting', icon: 'user' }
    },
    {
      path: 'certification',
      name: 'System-Certification-Setting',
      meta: { title: 'system.certification', icon: 'people' }
    },
    {
      path: 'thirdparty',
      name: 'System-Thirdparty-Setting',
      meta: { title: 'system.thirdparty', icon: 'wechat' }
    },
    {
      path: 'sms',
      name: 'System-Sms-Setting',
      component: () => import(/* webpackChunkName: 'system' */ '@/views/tsplus/system/sms/index'),
      meta: { title: 'system.sms.root', icon: 'message' },
      redirect: '/system/sms/logs',
      children: [
        {
          path: 'logs',
          component: () => import(/* webpackChunkName: 'system' */ '@/views/tsplus/system/sms/logs/index'),
          name: 'System-Sms-Log',
          meta: { tabs: true, title: 'system.sms.list' }
        },
        {
          path: 'configure',
          component: () => import(/* webpackChunkName: 'system' */ '@/views/tsplus/system/sms/configure/index'),
          name: 'System-Sms-Config',
          meta: { tabs: true, title: 'system.sms.config' }
        }
      ]
    },
    {
      path: 'mail',
      name: 'System-Mail-Setting',
      meta: { title: 'system.mailSetting', icon: 'email' },
      component: () => import(/* webpackChunkName: 'system' */ '@/views/tsplus/system/mail/configure')
    },
    {
      path: 'payment',
      name: 'System-Payment-Setting',
      meta: { title: 'system.payment', icon: 'money' }
    },
    {
      path: 'cors',
      name: 'System-Cors',
      component: () => import(/* webpackChunkName: 'system' */ '@/views/tsplus/system/cors/cors'),
      meta: { title: 'system.cors.root', icon: 'lock' }
    }
  ]
}

export default SystemRouter