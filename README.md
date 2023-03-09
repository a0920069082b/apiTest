## 簡易型Api測試專案

* 複製.env.example
``` shell
cp .env.example .env
```

* 修改.env內容
```
PORT=8000 // Web Server Port
PATH=www/ // Web Server導入的初始化路徑
INITIALIZATION=index.html // Web Server的初始文件
```

* 安裝套件
``` shell=
npm install
```

* 專案啟動
``` shell=
npm start
```