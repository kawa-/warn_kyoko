// ==UserScript==
// @name        warn_kyoko
// @namespace   http://
// @description 虚構新聞 (kyoko-np.net) という悪質デマサイトに誤ってアクセスした際に注意するスクリプト
// @version     1
// @include http://kyoko-np.net/*
// ==/UserScript==

alert("虚構新聞 (悪質デマサイト、ネットデブリ) を検知しました！");
document.body.innerHTML = "<p>これは <font color=red>虚構新聞 (悪質デマサイト、ネットデブリ)</font> へのアクセスです！ ブロックしました。 (まれにfooter部分が表示されることがあります。直し方募集中)</p>";
