const Mock = require('mockjs')
// var Random = Mock.Random
var template = {
  'data|1-4': [{
    // 'title': '@title',
    // 'article': '@article'
    'id|+1': 0,
    'goodName': '@word'
  }]
}
Mock.mock('/api/goods', template) // 网址自己随意定义，访问时要和这个网址一致就可以
