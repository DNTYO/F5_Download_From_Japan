var count = 0;
var elements = document.getElementsByClassName('tblProduct');
while( count < elements.length ) {
    let linkurl_0 = getLinkURL(count);
    console.log(linkurl_0);

    let linkurl_2 = getJapanLinkURL(linkurl_0);
    console.log(linkurl_2);

    let li = document.getElementsByClassName("tblProduct")[count];

    // リンクテキストを差し込み
    li.innerHTML += ' / <a href="' + linkurl_2 + '">Japan</a>';

    count++;
}

/**
 * Linkをページから取り出す。
 */
function getLinkURL(count) {
    // Linkをページから取出し
    let tblProduct_link_0;
    tblProduct_link_0 = document.getElementsByClassName("tblProduct")[count].getElementsByTagName("a")[0].getAttribute("href");
//    console.log(tblProduct_link_0);
    return tblProduct_link_0;
}

/**
 * Japanの Linkをページから取り出す。
 */
function getJapanLinkURL(url){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send();
    var response = xhr.response;
    var tblDescription = document.createElement('div');
    tblDescription.style.display = 'none';
    tblDescription.innerHTML = response; //html要素に変換
    tblDescription_link_2 = tblDescription.getElementsByClassName("tblDescription")[2].getElementsByTagName("a")[0].getAttribute("href");
    return tblDescription_link_2;
}
