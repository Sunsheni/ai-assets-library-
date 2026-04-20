import cloudbase from '@cloudbase/js-sdk'

// 初始化腾讯云SDK
const app = cloudbase.init({
  env: 'ai-assets-lib-d1gc77tkf246a4124',
  region: 'ap-shanghai'
})

// 获取数据库引用
const db = app.database()

// 获取认证对象
const auth = app.auth()

// 获取云函数对象
const functions = app.callFunction()

export { app, db, auth, functions }
