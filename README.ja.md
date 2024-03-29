[en](./README.md)

# MakeQuoteHtml

　選択範囲したテキストから引用HTMLを生成してクリップボードにコピーする。

　それをペーストするだけで簡単に引用できる。

# デモ

* [デモ](https://ytyaru.github.io/JS.MakeQuoteHtml.20210925110941/)

# 特徴

* 引用を簡単にさせることで転載されることを避ける

# 開発環境

* <time datetime="2021-09-25T11:09:16+0900">2021-09-25</time>
* [Raspbierry Pi](https://ja.wikipedia.org/wiki/Raspberry_Pi) 4 Model B Rev 1.2
* [Raspberry Pi OS](https://ja.wikipedia.org/wiki/Raspbian) buster 10.0 2020-08-20 <small>[setup](http://ytyaru.hatenablog.com/entry/2020/10/06/111111)</small>
* bash 5.0.3(1)-release
* Chromium 88.0.4324.187

```sh
$ uname -a
Linux raspberrypi 5.10.52-v7l+ #1441 SMP Tue Aug 3 18:11:56 BST 2021 armv7l GNU/Linux
```

# インストール

```sh
git clone https://github.com/ytyaru/JS.MakeQuoteHtml.20210925110941
```

# 使い方

1. ターミナルを起動する
    1. カレントディレクトリを移動する。index.htmlがあるパスへ。`cd JS.MakeQuoteHtml.20210925110941/src`
    2. `python3 -m http.server 8000`
2. ブラウザを起動する
    1. `http://0.0.0.0:8000/` をURL欄に入力する

# 注意

* 通知したいとき、その方法によっては外部ライブラリを使用する

# 著者

　ytyaru

* [![github](http://www.google.com/s2/favicons?domain=github.com)](https://github.com/ytyaru "github")
* [![hatena](http://www.google.com/s2/favicons?domain=www.hatena.ne.jp)](http://ytyaru.hatenablog.com/ytyaru "hatena")
* [![mastodon](http://www.google.com/s2/favicons?domain=mstdn.jp)](https://mstdn.jp/web/accounts/233143 "mastdon")

# ライセンス

　このソフトウェアはCC0ライセンスである。

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png "CC0")](http://creativecommons.org/publicdomain/zero/1.0/deed.ja)

