const { DataTypes } = require('sequelize')
const seq = require('../db/seq')

// 创建模型(Model user -> 表 users)
const User = seq.define('user', {
  // id 会被sequelize自动创建，管理
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '用户名，唯一'
  },
  password: {
    type: DataTypes.CHAR(64),
    allowNull: false,
    comment: '用户密码'
  },
  is_admin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0,
    comment: '是否为管理员, 0: 不是管理员(默认) 1: 是管理员'
  }
})

// 如果表已经存在 则将其首先删除 然后重新创建
// User.sync({ force: true })

module.exports = User
