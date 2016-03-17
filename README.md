chinese-share-links
===================

<strong>将随 Discourse 1.5 正式版被[集合插件](https://meta.discoursecn.org/localization-pack#迁移至-05-版本) 取代。Discourse 1.6 正式版后该插件会被删除。</strong>

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

Current version: 0.2.0

0.1.1：增加了微信支持（弹出窗口）
0.2.0：支持 Discourse 1.3

<img src="https://meta.discourse.org/uploads/default/37011/5ca80fe8f9fbd487.png" width="390" height="197">
