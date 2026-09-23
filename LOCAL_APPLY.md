# 手元で確認してから反映する手順

Cloud Agent が先にリモートへ載せた変更を一旦戻し、同じ差分をパッチにしたものです。
**手元で適用 → localhost 確認 → 問題なければ commit / push** してください。

## 1. 手元の未コミット変更を退避（必要な場合）

```bash
git stash push -u -m "before applying site patch"
```

不要なら破棄:

```bash
git reset --hard HEAD
git clean -fd
```

## 2. このブランチを最新取得

```bash
git fetch origin
git checkout cursor/ga4-measurement-id
git reset --hard origin/cursor/ga4-measurement-id
```

## 3. パッチを適用

```bash
git apply site-reposition-and-seo.patch
```

## 4. ローカル確認

```bash
python3 -m http.server 8080
```

http://localhost:8080/ を開き、特に相談ボタンが「仕事のお困りごとを相談する」になっているか確認。

## 5. 問題なければ commit / push

```bash
git add -A
git status
git commit -m "キャッチ刷新とSEO反映、相談CTA文言を更新する。"
git push -u origin cursor/ga4-measurement-id
```

適用後、このパッチファイルと本手順は削除して構いません。
