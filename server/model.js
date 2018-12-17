const mongoose = require('mongoose')
// 链接mongo 并且使用imooc这个集合
const DB_URL = 'mongodb://localhost:27017/chat'
mongoose.connect(DB_URL)

const models = {
  user: {
    'user': {type: String, require: true},
    'pwd': {type: String, require: true},
    'type': {type: String, require: true},
    'avatar': {type: String}, // 头像
    'desc': {type: String}, // 简介
    'title': {type: String}, // 职位名
    'company': {type: String}, // if title == boss
    'money': {type: String}, // if title == boss
  },
  chat: {

  }
}

// 批量注册
for (const m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
  getModel: function(name) {
    return mongoose.model(name)
  }
}