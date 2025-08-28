# venv

在 Python 开发中，使用虚拟环境（virtual environment）是一个最佳实践。它可以帮助你为每个项目隔离依赖，避免不同项目之间的包版本冲突。Python 自带的 venv 模块提供了一个轻量级的方式来创建和管理虚拟环境。

## 创建虚拟环境

进入你的项目目录，然后运行以下命令创建一个虚拟环境：

``` bash
python -m venv .venv
```

::: tip 提示
如果你的项目使用 git 进行管理，你最好将虚拟环境目录（`.venv/`）添加到 `.gitignore` 文件中
:::

## 激活虚拟环境

在 Windows 上：
``` bash
.venv\Scripts\activate
```

在 macOS / Linux 上：
``` bash
source .venv/bin/activate
```

激活成功后，你会在命令行提示符前看到 `(.venv)`，表示当前处于该虚拟环境中。

## 退出虚拟环境

``` bash
deactivate
```