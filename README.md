# myworld-frontend
一个集导航、博客、商城等功能的平台。

## 技术栈

+ ant design pro by umi4 https://pro.ant.design/zh-CN/docs/getting-started/
+ ant design https://ant-design.antgroup.com/components/overview-cn

## 运行项目

1.查看node版本

```bash
node -v
#16.19.0
```

2.安装
```bash
npm install
```

3.运行后端

4.启动

```bash
npm run dev
```

5.打开网站

```bash
 >   Local: http://localhost:8000          
```

## 目录结构

- config 配置
  - config.ts 配置设置，如openAPI，可以设置后端接口的路径，用于生成接口
  - defaultSettings.ts 默认配置，如界面的布局
  - router.ts 配置路由
- src 资源
  - components 组件
    - Footer 底部样式组件
  - pages 界面
    - User 用户页面
  - services 接口
  - app.tsx 全局配置，如request的配置，全局函数getInitialState
  - requestConfig.ts 配置路由请求，如响应数据格式，请求拦截器，响应拦截器。用于完善request的配置
- package.json 查看项目介绍，如运行脚本，项目依赖等信息

## 引入tailwind

中文文档：https://www.tailwindcss.cn/docs/installation

## 生成api

npm run openapi

配置在config包下的config.ts,对应后端的接口文档

```ts
  openAPI: [
    {
      requestLibPath: "import { request } from '@umijs/max'",
      schemaPath: 'http://localhost:8101/api/v2/api-docs',
      projectName: 'backend',
    },
```

## 打包

npm run build 

## nginx部署

0.安装 nginx

1.上传dist到html

2.编辑nginx.conf

```xml

server {

        listen       80;
        server_name  localhost1;

        location / {
            root   html/dist;
            index  index.html index.htm;
			      try_files $uri $uri/ /index.html;
        }
}

```

3.重新加载conf

./nginx -s reload

## bi模块

```bash
npm install echarts-for-react
```

