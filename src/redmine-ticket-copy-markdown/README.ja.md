# Redmine ticket copy for Slack

[English](README.en.md) - [日本語](README.ja.md) - [Tiếng Việt](README.md)

Bookmarklet Name: **RedmineSlack**

これは、現在開いているRedmineチケットページでRedmineチケットの基本情報（トラッカー情報、チケットID、タイトル、チケットURL）をコピーするためのブックマークレットです。

結果はMarkdown形式でフォーマットされ、クリップボードに保存され、SlackなどのMarkdownテキスト形式をサポートするソフトウェアに貼り付けるために使用されます。
```
[Feature #21814: Test - ticket - với - hyphen -](https://detomo.cloud.redmine.jp/issues/21814)
```

コードは[bookmarklet.js](bookmarklet.js)ファイルに保存されています。

ブックマークレットのインストールと使用方法については、[こちら](../../README.ja.md)で詳細をご覧ください。

### SlackでMarkdownサポートを有効にする方法

Slack でMarkdownサポート（特にハイパーリンクを作成する`[text](url)`構文）を有効にするには、設定で**Format messages with markup**を有効にする必要があります。以下は、この機能を有効にするための詳細なステップバイステップガイドです：

#### Slack Desktop（Windows/Mac）の場合
1. **Slackを開く**: コンピューターでSlackアプリケーションを開くか、`app.slack.com`でブラウザ経由でアクセスします。
2. **Preferencesに移動**:
   - **Windows/Linux**: 左上角のワークスペース名をクリックし、メニューから**Preferences**を選択します。
   - **Mac**: 画面上部のメニューバーで**Slack**をクリックし、**Preferences**を選択します。
   - キーボードショートカット: `Ctrl + ,`（Windows/Linux）または`Cmd + ,`（Mac）を押してPreferencesを素早く開きます。
3. **Advancedタブに移動**:
   - Preferencesウィンドウで、**Advanced**タブをクリックします（通常、タブリストの最後にあります）。
4. **Format messages with markupを有効にする**:
   - **Format messages with markup**オプションを見つけます。
   - このボックスにチェックを入れて、WYSIWYGエディターの代わりにMarkdownモードを有効にします。
5. **保存してテスト**:
   - Preferencesウィンドウを閉じます（変更は自動的に保存されます）。
   - SlackでチャンネルまたはDMを開き、`[Defect #21682](https://detomo.cloud.redmine.jp/issues/21682)`のようなMarkdown構文を入力してメッセージを送信してみてください。
   - 正常に有効になっていれば、Slackはそれをハイパーリンクとしてレンダリングします：[Defect #21682](https://detomo.cloud.redmine.jp/issues/21682)。

### 注意事項
- **Markdownの効果**: **Format messages with markup**が有効になると、Slackはリンクを作成する`[text](url)`や他のフォーマット（`*太字*`、`_斜体_`など）などの標準Markdown構文をサポートします。ただし、WYSIWYG インターフェース（フォーマットツールバー）は非表示になり、構文を手動で入力する必要があります。
- **ワークスペースの制限**: 管理者が管理する一部のワークスペースでは、このオプションがロックされている場合があります。**Format messages with markup**オプションが表示されない場合は、ワークスペース管理者に確認してもらってください。
- **Slackバージョンの確認**: `[text](url)`サポートはクライアントバージョンに依存する可能性があるため、最新バージョンのSlackを使用していることを確認してください。
- **レンダリングの確認**: 送信後に`[text](url)`がリンクとしてレンダリングされない場合は、以下を試してください：
  - 正しい構文であることを確認します（余分なスペースがない、例：`[text](url)`であって`[ text ]( url )`ではない）。
  - Markupモードを再度オフ/オンにするか、Slackからログアウト/ログインし直します。
- SlackでMarkdownを使用できない場合は、代替として[redmine-ticket-copy](../redmine-ticket-copy)ブックマークレットを使用できます。
