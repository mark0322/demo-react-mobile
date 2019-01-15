const express = require('express')
const Router = express.Router()
const { md5 } = require('utility')
const models = require('./model')
const User = models.getModel('user')
const _filterRes = {'pwd': 0, '__v': 0} // 删除 res.data 中的 密码


Router.get('/list', (req, res) => {
  // User.remove({}, (err, doc) => {}) // 清库
  const { type } = req.query

  User.find({type}, function(err, doc) {
    return res.json({code: 0, data: doc})
  })
})

Router.post('/login', (req, res) => {
  const {user, pwd} = req.body
  User.findOne({user, pwd: md5Pwd(pwd)}, _filterRes, (err, doc) => {
    if (err) return res.json({code: 1, 'msg': '后台出错了'})

    if (!doc) {
      return res.json({code: 1, 'msg': 'Error: 用户名或密码错误～'})
    }

    // 为浏览器种下 cookie，以标示用户已登录
    res.cookie('userid', doc._id)

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
    const userModel = new User({user, type, pwd: md5Pwd(pwd)})
    userModel.save((err, doc) => {
      if (err) return res.json({code: 1, msg: '后端出错'})

      const {user, type, _id} = doc
      res.cookie('userid', _id)
      return res.json({code: 0, data: {user, type, _id}})
    })
  })
})

Router.get('/info', (req, res) => {
  const { userid } = req.cookies
  if (!userid) {
    return res.json({code: 1})
  }
  User.findOne({_id: userid}, _filterRes, (err, doc) => {
    if (err) return res.json({code: 1, 'msg': '后台出错了'})

    if (doc) {
      res.json({code: 0, data: doc})
    }
  })
})

Router.post('/update', (req, res) => {
  const { userid } = req.cookies
  if (!userid) return res.json({code: 1})

  const body = req.body

  User.findByIdAndUpdate(userid, body, (err,doc) => {
    const data = {
      user: doc.user,
      type: doc.type,
      ...body
    }
    return res.json({
      code: 0,
      data
    })
  })
})

exports.userRouter = Router


// 对用户的密码做 复杂度 增加
function md5Pwd(pwd) {
  const salt = '87*12_/~mark_0322!@$%*'
  return md5(md5(pwd + salt))
}
