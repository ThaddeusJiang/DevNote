Cloudflared 是 Cloudflare 提供的一个工具，主要用于连接到 Cloudflare 的 Argo 隧道和其他服务。它的命令比较多，以下是一些常用的 cloudflared 命令和命令选项，供你参考。

你也可以在终端中直接运行：
```bash
cloudflared help
```
来查看最新的命令列表和用法。

---

## cloudflared 全部主要命令

### 1. `cloudflared tunnel`
管理 Argo 隧道

- `cloudflared tunnel create <name>`
  创建一个隧道

- `cloudflared tunnel run <tunnel-id>`
  运行隧道

- `cloudflared tunnel list`
  列出所有隧道

- `cloudflared tunnel delete <tunnel-id>`
  删除隧道

- `cloudflared tunnel route dns <tunnel-id> <hostname>`
  为隧道添加 DNS 记录

- `cloudflared tunnel cleanup`
  清理DNS配置

---

### 2. `cloudflared ingress`
配置入口规则（通常写在配置文件中）

---

### 3. `cloudflared access`
管理 Cloudflare Access 相关配置（访问策略等）

---

### 4. 连接和代理命令

- `cloudflared proxy-dns`
  启动一个 DNS over HTTPS (DoH) 代理服务器

- `cloudflared proxy-dns --address 0.0.0.0 --port 53`
  绑定到指定地址和端口

- `cloudflared access ssh`
  使用 Cloudflare Access 通过 SSH 连接至服务器

---

### 5. 查看版本和帮助

- `cloudflared --version`
  查看版本号

- `cloudflared help`
  列出所有顶级命令和选项

- `cloudflared <command> --help`
  查看某个命令的用法，比如：
  ```bash
  cloudflared tunnel --help
  ```

---

## 官方文档参考

更多详细命令和用法，可以参考官方文档：
https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/installation

---

如果你告诉我你用 cloudflared 做什么，我可以帮你提供更具体的命令示例！
