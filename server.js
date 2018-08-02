var http = require('http');
var url = require('url');

http.createServer(function (request, response) {

    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:9090');//前端的端口
    // ���� HTTP ͷ�� 
    // HTTP ״ֵ̬: 200 : OK
    // ��������: text/plain
    
    response.setHeader("Access-Control-Allow-Headers", "Content-Type,XFILENAME,XFILECATEGORY,XFILESIZE");
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    
    let u = url.parse(request.url)
    console.log('-------------------')
    console.log(u)

//Access-Control-Request-Headers:content-type,xfilecategory,xfilename,xfilesize
    // ������Ӧ���� "Hello World"
    if (u.path == '/text') { //根据axja不同地址返回不同内容
        response.end('text\n');
    } else if (u.path == '/login') {

        response.end("1");
    } else {
        response.end('{"name":"zhangsan"}');
    }

}).listen(8888);

// �ն˴�ӡ������Ϣ
console.log('Server running at http://127.0.0.1:8888/');
