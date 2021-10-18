const express = require('express');

const app = express();
// 随机列表
var names = ["01","02","03","04","05","06","07","08","09","10","11","12"];
// 结果列表
var result = {"马尼拉":[],"吹牛":[],"卡坦岛":[]}


var games = Object.keys(result)

app.get('/total', (req, res) => {
  res.send(names)
})
app.get('/result', (req, res) => {
  if(names.length > 0){
    index = Math.floor(Math.random()*1000 % names.length);
    var str = names[index]
    names.splice(index, 1);
    name = games[(str - 1)%games.length];
    res.send(name)
    result[name].push(req.query.name)
    console.log('get', JSON.stringify(result))
  } else {
    res.send('~结束~')
  }
})

app.use(express.static('./dist'));


app.listen(4000,()=>{
    console.log("server running at http:127.0.0.1:4000");
})