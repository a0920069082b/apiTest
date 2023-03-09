import _ from 'lodash';
import fs from 'fs';
import url from 'url';
import os from 'os';
import http from 'http';

import systemConfig from './configs/systemConfig';

http.createServer((req, res) => {
    const fileUrl = url.parse(req.url);

    let filePath;
    if (fileUrl.href === '/') {
        filePath = `${__dirname}/${systemConfig.path}${fileUrl.href}${systemConfig.initialization}`;
    } else {
        filePath = `${__dirname}/${systemConfig.path}${fileUrl.href}`;
    }

    if (os.platform() === 'win32') {
        filePath = filePath.replace(/\//g, '\\');
    }

    const fileExtension = filePath.split('.')[filePath.split('.').length - 1];
    const fileStream = fs.readFileSync(filePath);

    switch (fileExtension) {
        case 'html':
            res.writeHead(200, { contentType: 'text/html' });
            break;
        case 'css':
            res.writeHead(200, { contentType: 'text/css' });
        case 'js':
            res.writeHead(200, { contentType: 'text/javascript' });
        case 'gif':
            res.writeHead(200, { contentType: 'image/gif' });
            break;
        case 'png':
            res.writeHead(200, { contentType: 'image/png' });
            break;
        case 'jpeg':
        case 'jpg':
            res.writeHead(200, { contentType: 'image/jpeg' });
            break;
        case 'svg':
            res.writeHead(200, { contentType: 'image/svg+xml' });
            break;
        case 'ico':
            res.writeHead(200, { contentType: 'image/x-icon' });
            break;
        default:
            break;
    }
    res.end(fileStream);
}).listen(systemConfig.port);

console.log(`✅  The server is listen on ${systemConfig.port}`);
