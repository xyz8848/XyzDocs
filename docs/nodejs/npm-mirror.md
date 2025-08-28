# npm 镜像

## 镜像源地址

|镜像源|地址|
|-|-|
|淘宝镜像|`https://registry.npmmirror.com`|
|腾讯云镜像|`https://mirrors.cloud.tencent.com/npm/`|
|华为云镜像|`https://mirrors.huaweicloud.com/repository/npm/`|

## 单次使用

直接在`npm`命令后添加`--registry`参数

``` bash
npm install [<package>] [--registry <url>]
```

::: details 示例

使用淘宝镜像源安装`vue`

``` bash
npm install vue --registry https://registry.npmmirror.com
```

:::

## 全局永久修改

``` bash
npm config set registry <url>
```

::: details 示例

全局修改镜像源为淘宝镜像

``` bash
npm config set registry https://registry.npmmirror.com
```

:::

## 为单个项目单独设置镜像源

在你的项目根目录（与 `package.json` 同级）创建一个 `.npmrc` 文件，内容如下：

``` ini
registry=https://registry.npmmirror.com
```

示例目录结构：

``` text {3}
my-project/
├── package.json
├── .npmrc          ← 新增的配置文件
├── src/
└── node_modules/
```