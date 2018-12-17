const express = require('express')
const Router = express.Router()
const { md5 } = require('utility')
const models = require('./model')
const User = models.getModel('user')

Router.get('/list', (req, res) => {
  // User.remove({}, (err, doc) => {}) // 清库
  User.find({}, function(err, doc) {
    return res.json(doc)
  })
})

Router.post('/login', (req, res) => {
  const {user, pwd} = req.body
  User.findOne({user, pwd: md5Pwd(pwd)}, {pwd: 0}, (err, doc) => {
    if (!doc) {
      return res.json({code: 1, 'msg': 'Error: 用户名或密码错误～'})
    }
    return res.json({code: 0, data: doc})
  })
})

Router.post('/register', (req, res) => {
  const {user, pwd, type} = req.body
  User.findOne({user}, (err, doc) => {
    if (doc) {
      return res.json({code:1, msg: '用户名重复'})
    }

                           // 使用 md5 对密码先加密，在存储至数据库
    User.create({user, type, pwd: md5Pwd(pwd)}, (err, doc) => {
      if (err) {
        return res.json({code: 1, msg: '后端出错'})
      }
      return res.json({code: 0})
    })
  })
})

Router.get('/info', (req, res) => {
  // TODO 根据 cookie 进行身份判断 
  return res.json({code: 1})
})

exports.userRouter = Router


// 对用户的密码做 复杂度 增加
function md5Pwd(pwd) {
  const salt = '87*12_/~mark_0322!@$%*'
  return md5(md5(pwd + salt))
}