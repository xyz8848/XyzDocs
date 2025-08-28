# 配置 Git 代理

## 查看当前代理设置

``` bash
git config --global --get http.proxy
git config --global --get https.proxy
```

如果有输出，说明已配置代理；
若无输出，则未设置。

## 配置 HTTP/HTTPS 代理

``` bash
git config --global http.proxy http://127.0.0.1:7899
git config --global https.proxy https://127.0.0.1:7899
```

## 取消代理设置

``` bash
git config --global --unset http.proxy
git config --global --unset https.proxy
```
