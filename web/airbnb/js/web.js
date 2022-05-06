
if (matchMedia("screen and (min-width: 769px)").matches) {
    // 769px 이상에서 사용할 스크립트 (web)
    //스크롤 150px 이상 내려가면 메뉴 바뀌게 하기
    onscroll = function () {
        var nVScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (nVScroll > 100) {
            document.querySelector('.whiteHeader').style.display = "block"
            document.querySelector('.blackHeader').style.display = "none"
        } else if (nVScroll < 100) {
            document.querySelector('.whiteHeader').style.display = "none"
            document.querySelector('.blackHeader').style.display = "block"
        };
    };

} 
else {
    // 769px 미만에서 사용할 스크립트 (mob)
    onscroll = function () {
        var nVScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (nVScroll > 200) {
            document.querySelector('.mobQuick').style.display = "none"
        } else if (nVScroll < 200) {
            document.querySelector('.mobQuick').style.display = "block"
        };
    }
}
