# 配置 crates.io 镜像

## 单独为一个项目配置镜像

在项目根目录创建 `.cargo/config.toml` 文件

任选其一配置镜像

- 字节跳动
    ``` toml [.cargo/config.toml]
    [source.crates-io]
    replace-with = 'rsproxy-sparse'
    [source.rsproxy]
    registry = "https://rsproxy.cn/crates.io-index"
    [source.rsproxy-sparse]
    registry = "sparse+https://rsproxy.cn/index/"
    ```
- 阿里云
    ``` toml [.cargo/config.toml]
    [source.crates-io]
    replace-with = "aliyun"
    [source.aliyun]
    registry = "https://mirrors.aliyun.com/crates.io-index/"
    ```
- 中国科学技术大学
    ``` toml [.cargo/config.toml]
    [source.crates-io]
    replace-with = "ustc"
    [source.ustc]
    registry = "https://mirrors.ustc.edu.cn/crates.io-index"
    ```
- 华为云
    ``` toml [.cargo/config.toml]
    [source.crates-io]
    replace-with = "huaweicloud"
    [source.huaweicloud]
    registry = "https://mirrors.huaweicloud.com/repository/git/crates.io-index.git"
    ```
