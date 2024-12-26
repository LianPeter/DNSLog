# DNSLog Web

这是一个简单的 DNS 查询记录和展示 Web 应用。你可以输入域名，记录 DNS 查询请求，并通过浏览器查看相关信息。

## 项目结构

```
.
├── app.py             # Flask 后端服务器，处理 DNS 查询和记录
├── index.html         # 前端页面，展示 DNS 查询表单和结果
├── login.html         # 登录页面，允许用户进行身份验证
├── dnslog.js          # JavaScript 文件，处理前端表单提交和星星动画
└── dnslog.log         # 记录所有 DNS 查询请求的日志文件
```

## 功能

- 用户访问 Web 应用后，可以输入域名并记录 DNS 查询。
- 后端使用 Flask 提供一个简单的 API，接收查询并记录日志。
- 记录的 DNS 查询会以日志形式存储在 `dnslog.log` 文件中。
- 页面会展示 DNS 查询结果。
- 页面上有漂浮的星星动画，增加视觉效果。

## 技术栈

- **前端**：HTML, CSS, JavaScript
- **后端**：Flask (Python)
- **DNS 解析**：`dns.resolver` 库用于查询 DNS 记录
- **日志记录**：使用 Python 的 `logging` 模块将 DNS 查询记录到文件 `dnslog.log`

## 安装与运行

### 1. 安装 Python 依赖

在运行项目之前，您需要确保已安装所需的 Python 包。

```bash
pip install -r requirements.txt
```

`requirements.txt` 文件内容：

```
Flask==2.3.0
dnspython==2.2.1
```

### 2. 运行 Flask 应用

在项目目录下，启动 Flask 后端：

```bash
python app.py
```

Flask 服务器将会在 `http://127.0.0.1:5000/` 运行。

### 3. 访问 Web 页面

1. cd进项目文件夹
2. 启动本地服务器

```shell
  python3 -m http.server
```



服务器启动后，你会看到类似以下的输出：

  ```
Serving HTTP on :: port 8000 (http://[::]:8000/) ...
  ```

- 打开浏览器，访问 [http://localhost:8000](http://localhost:8000)，就可以看到你项目文件夹中的文件列表。

- 访问 [http://localhost:8000/login.html](http://localhost:8000/login.html)就可以查看 HTML 页面了。




3. 输入 `admin` 作为用户名，`123456` 作为密码进行登录。
4. 登录后，您可以在 DNS 查询框中输入域名并提交，查看查询结果。

### 4. 查看日志文件

所有记录的 DNS 查询将被保存在项目根目录下的 `dnslog.log` 文件中。每次有新的 DNS 查询时，都会将查询记录写入该文件。

## 注意事项

- 该项目仅为学习和实验使用，不推荐用于生产环境。
- 本地运行时，`app.py` 默认监听 `127.0.0.1` 和端口 `5000`。您可以根据需要调整这些设置。
- 在 `login.html` 页面中，只有用户名为 `admin` 且密码为 `123456` 才能成功登录。
