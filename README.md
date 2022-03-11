# Hook script Teams

stdin -> bin/hook.js -> Teams channel

## Setting
* install
  ```
  npm i
  npx tsc
  ```
* /etc/aliases
  ```
  teams: "|/usr/local/bin/node xxx/bin/hook.js"
  ```
* config/application.yaml
  ```
  hook-url: "https://xxxx.webhook.office.com/webhookb2/xxxxx"
  ```
