chinese-share-links
===================

Chinese share links is a plugin for Discourse to add share links for Weibo & Renren.

为 Discourse 添加分享到微博和人人的支持。

## Installation / 安装

在 `app.yml` 的

    hooks:
      after_code:
        - exec:
            cd: $home/plugins
            cmd:
              - mkdir -p plugins
              - git clone https://github.com/discourse/docker_manager.git

最后一行 `- git clone https://github.com/discourse/docker_manager.git` 后添加：

    - git clone https://github.com/fantasticfears/chinese-share-links.git

## Usage / 使用

Go to Site Settings's basic category, add services in the share_links.

进入站点设置的基本设置分类，在share_links中添加服务。

## Changelog

Current version: 0.1.0

<img src="https://meta.discourse.org/uploads/default/37011/5ca80fe8f9fbd487.png" width="390" height="197">
