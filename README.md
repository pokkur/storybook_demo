# Storybookどうでしょう

## Storybookとは

> Storybookは、React、Vue、Angularを分離してUIコンポーネントを開発するためのオープンソースツールです。  
これにより、見事なUIを整理して効率的に作成できます。

[https://storybook.js.org/のサブタイトルより](https://storybook.js.org/)

巷ではUIカタログとかUIテスト・ツールのように紹介されているかと思いますが、  
とてもシンプルに言い切ると、**コンポーネント集**です。  
コンポーネントを一覧にしてカタログ化したり、各コンポーネントの見た目や振る舞いを容易にテスト、管理できることが特徴です。

---

### Examples

> 公式の[Storybook Examples](https://storybook.js.org/docs/examples/)

```command
# clone
git clone https://github.com/gumgum/gumdrops.git gumgum

cd gumgum

# packageインストール
npm i

# storybook起動
npm run storybook
```

---

### 他の選択肢

Alternative Storybook参考。

- [docz](https://www.docz.site/) ※ギリギリ次点でこれか
- [react-styleguidist](https://react-styleguidist.js.org/examples/basic/) 
- [Typedoc](https://typedoc.org/)
- [Atellier](https://scup.github.io/atellier/)
- [Compodoc](https://compodoc.app/) ※Angular

コンポーネント集/スタイルガイドがあるといいなという前提がありまして、今だとStorybook一択か。

---

### 一昔前は…

5年以上以前のCSSのみでコンポーネント指向でフロント開発していた（Gulpとかの）時代には
StyleDoccoとかHologramとかSC5といったスタイルガイド・ジェネレーターがありました。
古くからあるプロジェクトでは今でも使われているかも……。

---

## モチベーション

どうでしょうの理由など。

1. 改修ありきの規模では、そもそも細かく部品をわけておくのが楽では？
2. データを用意して、画面を立ち上げて、目的のページに進めて……をせずとも、UIを共有・確認してもらえる
3. 割れ窓理論（Broken Windows Theory）としての採用
4. 俯瞰して見ることができ、画面に必要なコンポーネントを見つけられる

---

### 改修ありきの規模だと、そもそも細かく部品をわけておく方が楽では？

最初から完璧なシステムは作れないので、どうせ改修が必要なら小さなスコープで取換え可能な仕組みで開発を進めるべき。  
画面ごとにイレギュラーが多いようなプロジェクトにはスタイルガイドが余計な場合ももちろんある。  
正しくモジュール設計できていると大規模な作り直しやブランド改修などにも耐えうるし、別プロジェクトに展開もできるのでは。  
（※理想は。デザインフレームワークがそうであるように）

### データを用意して、画面を立ち上げて、目的のページに進めて……をせずとも、UIを共有・確認をしてもらえる。

- 要素の横幅をはみ出る文字数を表示した時にどうなるのか
- 値が存在しない時にどうなるのか
- コンテナの幅を変更した場合どういった表示になるのか

……などを簡単にテストできる。※Knobs機能  
プロジェクトに関わるメンバー間で認識を共通化することはプロジェクト進行において非常に重要な意味を持つ。  
早い段階ですり合わせて確認できる。出戻り修正を減らせる。  
もちろん、デプロイできるのでいつでも誰でもに共有してもらえる。

---

### 割れ窓理論（Broken Windows Theory）としての採用

点でバラバラに開発が進む中で、やがて徐々にほころびは生じて拡大していく。  
いくら注意払っていようが仕様の変更や追加を積み重ねるごとに時間で乱雑になるもの。  
軽めのバグやデザイン崩れなどを見過ごさないようなことが、デザイン/機能の両面で統一感を保つ。  
（minden.portalでも）実際に同機能のUI部品なのに画面ごとで微妙に異なったデザインパターン（もちろん意図しない）が存在する。

---

### 俯瞰して見ることができ、画面に必要なコンポーネントを見つけられる。

結果的にコンポーネントの重複を回避できる。  
コンポーネント毎にSnapshotを記録することで意図しない変更（リグレッション）を検出できる。  
※Storyshots機能

---

## 懸念点

運用が疎かになってしまって、あてにならないUIカタログが取り残されるとむしろ逆効果。徹底する覚悟は必要。  
コンポーネントの変更に対してStoryのメンテナンスが追従せず気がついたらStoryが表示できなくなっているという問題は**StoryShots**で防げます。  
**Storyの追加 = カタログの追加 + テストの追加**になるので、Story追加の効果が高まります。

スパゲティ・コンポーネントにならないように、Atomic Designなどのデザインシステムに則るなど工夫が必要。  
minden.portalにおいて、既存のコンポーネントを分解していくのは結構大変そうだけどやるなら早めに。  
割り切って新しく開発する画面から取り組むというのが無難でしょうか……。  

そもそもモジュールを設計するようなUIモデリング作業の段階でUIデザイナーが必要。  
本来は、まずXDなどによるデザイン・ガイドラインはやはりあったほうが良くて、  
それを元にStorybook開発できるとスムースに行くかと思います。

---

## 導入

@storybook/cliを利用するのが手っ取り早いでしょう。

```command
// for React ※プロジェクトフォルダ
npx -p @storybook/cli sb init --type react
```

※StorybookはSPAライブラリ向けだけではない。
[Storybook for HTML](https://storybook.js.org/docs/guides/guide-html/)

### Storybook関連ファイルの構成

Storybookの利用にはコンフィグはを用意した上で、ストーリーファイルを書いていく。

- .storybook/
- stories/

---

### Storybook CSF

元々 `StoriesOf API` による記法だったが、  
v5.2より、新しい `Component Story Format` の記法が推奨されるようになった。

> Storybook 5.2 には、ES6 modulesに基づいてStoriesを作成する新しい方法である **Component Story Format（CSF）** が導入されています。  
Component Storiesはシンプルで読みやすく、Storybookの内部APIから切り離されているため、どこでも使用できます。

[Component Story Format(Medium記事)](https://medium.com/storybookjs/component-story-format-66f4c32366df)

---

### Storybook Docs

以前はinfoアドオンでmd形式のスタイルガイドを用意していたが、Docsはmdxでガイド・ドキュメントを書けるようになった。

---

## Plugins

|npm|用途|
|---|---|
|[@storybook/addon-knobs](https://github.com/storybookjs/storybook/tree/next/addons/knobs)|Storybook上でpropsを動的操作|
|[@storybook/addon-actions](https://github.com/storybookjs/storybook/tree/next/addons/actions)|イベントハンドラのログ|
|[@storybook/addon-a11y](https://github.com/storybookjs/storybook/tree/next/addons/a11y)|アクセシビリティチェック|
|[@storybook/addon-storyshots](https://github.com/storybookjs/storybook/tree/next/addons/storyshots/storyshots-core)|スナップショット|
|[@storybook/theming](https://storybook.js.org/docs/configurations/theming/)|カスタマイズUI|
|[@storybook/addon-graphql](https://github.com/storybookjs/storybook/tree/next/addons/graphql)|GraphiQL|
|[@storybook/addon-info](https://github.com/storybookjs/storybook/tree/release/3.4/addons/info)|~~mdによるガイドを表示~~廃止。今後はDocs|

---

## ハンズオン

1. BlockButtonコンポーネントのStoryを弄ってみよう

```command
git clone https://github.com/kobayashi-minden/storybook_demo.git storybook

cd storybook && npm install

npm run storybook:serve
```

いろいろ弄ってみよう。

```command
npm run serve
```

BlockButton（src/components/BlockButton.vue）コンポーネントの他のPropsをStory knobに追加してみよう。

2. 他のコンポーネントのStoryを書いてみよう。

手始めにHeadLineコンポーネントのStoryを書いてみましょう。
1週間後程度でgitを更新しますので答え合わせしてみてください。

---

## 最も重要なこと

腐らせず運用すること。  
Storybookどうでしょう。

---

## 参考

引用元やお役立ち記事リンク。  

- https://storybook.js.org/
- http://studio-andy.hatenablog.com/entry/storybook-for-vue
- https://tukumemo.com/components/
- https://qiita.com/keik/items/e275394d454b8b136826
- https://www.tam-tam.co.jp/tipsnote/html_css/post17206.html
- https://medium.com/japan/broken-window-2f1e27c2b544#.ebj10znmr
- https://ja.wikipedia.org/wiki/%E5%89%B2%E3%82%8C%E7%AA%93%E7%90%86%E8%AB%96
- https://qiita.com/takeyuichi/items/d21cb0a884e5aaac3a17
- https://medium.com/storybookjs/component-story-format-66f4c32366df
