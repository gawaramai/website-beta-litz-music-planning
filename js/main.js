function include_header(){
    $.ajax({
        url: '../header.html', // リクエストを送信するURLを指定
        async: false, // 非同期リクエストを無効にする
    }).done(function(header_html){ // 通信が成功したら
        document.write(header_html); // herder.htmlを表示する
    });
}

function include_footer(){
    $.ajax({
        url: '../footer.html', // リクエストを送信するURLを指定
        async: false, // 非同期リクエストを無効にする
    }).done(function(footer_html){ // 通信が成功したら
        document.write(footer_html); // herder.htmlを表示する
    });
}
