# 助かるワーク - リニューアルサイト

オフィスの便利屋「助かるワーク」のリニューアル版Webサイトです。

## サイト構成

```
taskallwork/
├── index.html          # トップページ
├── excel/index.html    # エクセル資料作成
├── word/index.html     # ワード文書作成
├── services/index.html # サービス一覧
├── flow/index.html     # ご依頼の流れ
├── contact/index.html  # お問い合わせ
├── about/index.html    # 運営会社
├── css/style.css       # スタイルシート
├── js/main.js          # JavaScript
├── sitemap.xml         # サイトマップ
└── robots.txt          # クローラー設定
```

## デプロイ方法

`taskallwork/` ディレクトリの内容を、サーバーの `/taskallwork/` にアップロードしてください。

## ローカル確認

簡易HTTPサーバーで確認できます。

```bash
cd taskallwork
python3 -m http.server 8080
```

ブラウザで http://localhost:8080/taskallwork/ を開いてください。

## ブラッシュアップのポイント（2026-07）

### ロゴ
- 新ロゴマーク `image/logo-mark.svg`：吹き出し（お客様の「助かった！」の声）× チェックマーク（あらゆる作業を完了 = Task All）の2つの意味を表現
- 横長ロゴ `image/logo.svg` / `image/logo-white.svg`、ファビコン `favicon.svg` も同デザインで統一
- ワードマークは「助か**る**ワーク / TASK **ALL** WORK」の「る」「ALL」をオレンジで強調

### デザイン
- Google Fonts（Noto Sans JP / Zen Maru Gothic / Montserrat）を導入
- 絵文字アイコンをSVGラインアイコンに置き換え
- ヒーロー・CTAをディープブルーのグラデーション + ドットパターンに刷新
- スクロール連動のフェードイン、ヘッダーの影、FAQ・カードのマイクロインタラクション
- ピル型ボタン・角丸カードなどモダンなUIに統一

### SEO
- FAQPage / HowTo / BreadcrumbList のJSON-LD構造化データを追加
- 全ページに og:image・og:locale・favicon を追加
- title / description を検索意図に合わせて書き直し（数字・ベネフィット入り）
- sitemap.xml に lastmod を追加

### 集客（コピーライティング）
- ヒーローを「面倒なエクセル・ワードは丸ごとプロに任せて、本業に集中。」に変更
- ヒーロー直下に信頼バッジ（見積もり無料・1件からOK・全国対応・機密保持）
- お悩みセクションを「時間の損失」訴求に強化し、サービスへの橋渡し文を追加
- ブランドストーリー節（名前とロゴの2つの意味）をトップページに新設
- CTAに「見積もり後のキャンセル可・しつこい営業なし」の不安解消コピーを追加

## 今後の改善案

- [ ] お問い合わせフォームのバックエンド連携（Formspree, Google Forms等）
- [ ] Google Analytics / Search Console の設定
- [ ] OGP用の画像作成（1200x630px）
- [ ] ブログ・コラムページの追加（SEO強化）
- [ ] 料金ページの具体化
- [ ] お客様の声・実績セクションの追加
