# 旧URLリダイレクト（ricom-techno.com → taskall.work）

`https://ricom-techno.com/taskallwork/` から `https://taskall.work/` へ恒久リダイレクト（301）するためのファイルです。

## 設置場所

旧サーバーの **`/taskallwork/`** ディレクトリに、このフォルダ内のファイルをすべてアップロードしてください。

## ファイル一覧

| ファイル | 用途 |
|---|---|
| `.htaccess` | Apache で 301 リダイレクト（推奨） |
| `index.html` | トップページ用フォールバック |
| `redirect.js` | `index.html` からのパス変換 |
| `service.html` など | 旧ページ名ごとのフォールバック |

## 旧URL → 新URL の対応

| 旧URL | 新URL |
|---|---|
| `/taskallwork/` | `https://taskall.work/` |
| `/taskallwork/service.html` | `https://taskall.work/services/index.html` |
| `/taskallwork/inquiry.html` | `https://taskall.work/contact/index.html` |
| `/taskallwork/flow.html` | `https://taskall.work/flow/index.html` |
| `/taskallwork/sitemap.html` | `https://taskall.work/sitemap.xml` |
| `/taskallwork/search.html` | `https://taskall.work/services/index.html` |
| `/taskallwork/about.html` | `https://taskall.work/about/index.html` |
| その他 | パスを維持して `https://taskall.work/` へ |

## 設置後の確認

```bash
curl -I https://ricom-techno.com/taskallwork/
curl -I https://ricom-techno.com/taskallwork/service.html
```

`HTTP/1.1 301` と `Location: https://taskall.work/...` が返れば成功です。

## 補足

- `.htaccess` が使えないサーバーの場合、各 HTML ファイルの meta refresh がフォールバックとして動作します。
- Google Search Console で `taskall.work` を登録し、旧サイトのURL検査でリダイレクトを確認してください。
