# 使用镜像源安装Rust

## 1. 下载Rust安装程序

前往[官网](https://www.rust-lang.org/learn/get-started)下载适合你系统的Rust安装程序

## 2. 配置镜像并安装

在`rustup-init.exe`所在目录下打开 PowerShell

任选下方其一镜像进行安装**（设置的环境变量仅当前会话有效）**

- 字节跳动
    ```powershell
    $env:RUSTUP_DIST_SERVER="https://rsproxy.cn"
    $env:RUSTUP_UPDATE_ROOT="https://rsproxy.cn/rustup"
    .\rustup-init.exe
    ```
- 阿里云
    ``` powershell
    $env:RUSTUP_DIST_SERVER="https://mirrors.aliyun.com/rustup"
    $env:RUSTUP_UPDATE_ROOT="https://mirrors.aliyun.com/rustup/rustup"
    .\rustup-init.exe
    ```
- 中国科学技术大学
    ``` powershell
    $env:RUSTUP_DIST_SERVER="https://mirrors.ustc.edu.cn/rust-static"
    $env:RUSTUP_UPDATE_ROOT="https://mirrors.ustc.edu.cn/rust-static/rustup"
    .\rustup-init.exe
    ```
- 清华大学
    ``` powershell
    $env:RUSTUP_DIST_SERVER="https://mirrors.tuna.tsinghua.edu.cn/rust-static"
    $env:RUSTUP_UPDATE_ROOT="https://mirrors.tuna.tsinghua.edu.cn/rust-static/rustup"
    .\rustup-init.exe
    ```

## 3. 验证安装

``` powershell
rustc --version
cargo --version
```
