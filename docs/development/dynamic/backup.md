简介
生如夏花网站开发之道
欢迎您来到生如夏花网站开发文档！这里记录了生如夏花社区的各项服务背后的实现机制，供开发团队阅读与协作。

开发团队的使命、愿景与价值观
使命：充分发挥技术的力量，为生如夏花社区提供优质的内容与交流平台
愿景：成为中文互联网世界中以各种不同的性体验的探索为主题的最大的线上社区
价值观：支持互联网的言论自由、交流创新与知识共享，反对互联网的资源过度集中化与内容审查
开发的基本原则
从开源中来，到开源中去：尽可能在开源软件的基础上进行二次开发，得到的代码和文档将以 GPLv3 和 CC-BY-SA 协议向世界开放；
如无必要，勿增实体：对于无法用开源软件自建的服务，使用尽可能少的外部供应商；
构建可维护可重用的微服务：把所有的服务拆分成一个个小的组件，每个组件用容器化（Docker）的方式开发及部署；
生如夏花各项服务简介
生如夏花主页
GitHub 仓库：https://github.com/viva-la-vita/viva-la-vita.github.io
部署位置：https://viva-la-vita.org
主页负责引导用户访问社区的各个服务，以及展示社区的整体介绍。

生如夏花知识库
GitHub 仓库：https://github.com/viva-la-vita/wiki
部署位置：https://wiki.viva-la-vita.org
知识库负责拉取内容管理系统中的文档并构建前端页面，并部署在 GitHub Pages 上供社区成员访问。

生如夏花网关
GitHub 仓库：https://github.com/viva-la-vita/gateway
为节省计算资源，目前所有服务均部署在一台服务器上，但可以用不同的域名访问，所以需要用反向代理根据域名来转发到服务器上不同端口的各项服务；网关还同时负责管理由 Let's Encrypt 颁发的 HTTPS SSL 证书，并且在反向代理的同时实现 SSL 加密和解密，这样各项服务就可以只实现 HTTP 的接口。

未来网关可能还会添加负载均衡功能。

生如夏花内容管理系统及 API
GitHub 仓库：https://github.com/viva-la-vita/cms
部署位置：
内容管理系统：https://cms.viva-la-vita.org
API：https://api.viva-la-vita.org
内容管理系统是一个可以供多人协同编辑文档的用户界面，它可以使得不具有技术背景的社区成员也可以参与文档的编辑。该系统中的内容可以通过一个统一的 API 进行访问，用于知识库前端页面的制作，也可以被其他开源项目集成。

生如夏花论坛
GitHub 仓库：https://github.com/viva-la-vita/bbs
部署位置：https://bbs.viva-la-vita.org
论坛用于社区成员的交流与分享。

生如夏花邮箱
GitHub 仓库：https://github.com/viva-la-vita/mail
部署位置：https://mail.viva-la-vita.org
邮箱用于论坛的注册及相关通知，以及供开发者注册各种其他帐号。