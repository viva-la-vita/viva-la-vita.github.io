---
id: api
title: 知识共享
sidebar_label: 知识共享
sidebar_position: 5
description: 生如夏花社区的知识共享、SDK和API
---

# 知识共享

为了促进知识的传播和共享，用于生成生如夏花社区网站的原始内容也可以通过软件开发工具集（SDK）或者应用程序编程接口（API）获取，并集成在您的任何网站、应用和服务中。

## 生如夏花 SDK

SDK 以 NPM 包的形式发布，您需要在 Node.js 环境中安装该包：

```bash
npm install viva-la-vita
````

然后使用一行代码就可以将所有文档按树状结构下载到给定的文件夹中（其中 `test` 是指定的文件夹的名称）：

```javascript
require('viva-la-vita').downloadWiki('test');
```

## 生如夏花 API

如您需要掌握更多数据处理的细节，也可以直接使用 REST API 来访问。下面是两个例子：

```javascript
const axios = require('axios');

// 示例 1: 获取整个知识库的树状结构
axios.get(`https://api.viva-la-vita.org/api/navigation/render/1`, {
  headers: { "Accept-Encoding": "gzip" },
  params: {
    type: 'TREE'
  }
}).then(({ data }) => {
  console.log(data);
});

// 示例 2: 获取单篇文章内容 (ID 为 10)
axios.get(`https://api.viva-la-vita.org/api/articles/10`, {
  headers: { "Accept-Encoding": "gzip" }
}).then(({ data }) => {
  console.log(data);
});
```

第一个例子是以树状结构获取整个知识库网站的内容，第二个例子是按给定的文章 ID 获取一篇文章的内容。

:::info 许可协议
使用这些内容时请注意遵守 **CC-BY-SA 4.0** 协议。
:::

```
