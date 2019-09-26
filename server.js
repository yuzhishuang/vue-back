let http = require('http')
let users = [{id:11,name:'yzs'},{id:2,name:'yzs'},{id:3,name:'yzs'}];
let server = http.createServer(function(req,res){
  console.log(req.method,req.url);
  if(req.url == '/api/users'){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.end(JSON.stringify(users));
  }else if (req.url == '/users'){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.end('users');
  } else {
    res.end('Now Found!');
  }
});
server.listen(3000,()=>{
  console.log('服务正在3000端口上启动!');
});