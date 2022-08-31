# Itadakimasu Man NFT

## インストール
```sh
yarn install
```
## メタデータ追加作業
1. [スプレッドシート](https://docs.google.com/spreadsheets/d/1kB0rDHXWYxhQBjkQnicgAI-GxsI-TzDIbQa6T8vRW-I/edit?usp=sharing)をCSVでダウンロード
	 - ファイル->ダウンロード->カンマ区切り形式　からダウンロードする。
	 - "data.csv"というファイル名で保存する。
2. CSVをメタデータのJSONに変換
	- 下記コマンドを実行する。
	```sh
	node convert.js
	```
	or
	```sh
	yarn convert
	```
3. JSONをGitHubに上げる
	- 変更内容を確認しGitHubにコミット＆プッシュする
4. ミント用のCSVを作成
	- 追加したトークンIDを確認し下記のようなCSVを手動で作成し、ミントする方に送信する。
	```csv
	tokenId,walletAddress
	858,0x4A7394bBeEC9D5cA3E850F88D2db5e625B760a3c
	```