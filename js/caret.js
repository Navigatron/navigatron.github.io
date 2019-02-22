window.onload = function(){
    let cursor = document.getElementById('cursor');
    let off = function(){
        cursor.innerHTML = "&nbsp;";
        setTimeout(on, 1000);
    };
    let on = function(){
        cursor.innerHTML = "&#9608;";
        setTimeout(off, 1000);
    };
    on();
};
