

if (matchMedia("screen and (min-width: 1024px)").matches) {
    // 1024px 이상에서 사용할 스크립트 (web)

    // 메뉴 클릭시 자동스크롤
    document.querySelector('.menu').addEventListener('click', e => {
        if (e.target.nodeName === 'LI') {
            let id_value = e.target.dataset.link;
            document.querySelector(id_value).scrollIntoView({ behavior: 'smooth' });
        }
    });

    // design 카테고리 슬라이드 구현
    let slides = document.querySelector('.design-wrap'),
        slide = document.querySelectorAll('.design-wrap li'),
        currentIndex = -1,
        slideCount = slide.length,
        slideWidth = 300,
        prevBtn = document.querySelector('.desg-prev'),
        nextBtn = document.querySelector('.desg-next');

    slides.style.width = slideWidth * slideCount + 'px';

    function moveSlide(num) {
        currentIndex = num;
        slides.style.left = -num * slideWidth + 'px';
    }

    moveSlide(0);

    nextBtn.addEventListener('click', function () {
        if (currentIndex < slideCount - 4) {
            moveSlide(currentIndex + 1);
            // console.log(currentIndex);
        } else {
            moveSlide(0);
        };
    });

    prevBtn.addEventListener('click', function () {
        if (currentIndex > 0) {
            moveSlide(currentIndex - 1);
        } else {
            moveSlide(slideCount - 4);
        };
    });

    //자동슬라이드
    setInterval(() => nextBtn.click(), 3000);

    onscroll = function () {
        var nVScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (nVScroll > 400) {
            setTimeout(()=>{
                document.querySelector('.content-spec-center').style.animationName="opacityAnimate";
                document.querySelector('.content-spec-left').style.animationName="opacityAnimate";
                document.querySelector('.content-spec-right').style.animationName="opacityAnimate";
            },1000)
        } else if(nVScroll < 400){
            document.querySelector('.content-spec-center').style.animationName="";
            document.querySelector('.content-spec-left').style.animationName="";
            document.querySelector('.content-spec-right').style.animationName="";
        }
    }
    function closePopup(){
        document.querySelector('#modal').style.display="none";
    }


    //jquery
    $(document).ready(function () {
       
    })








}
else {
    // 1024px 미만에서 사용할 스크립트 (mob)

    // 메뉴 클릭시 자동스크롤
    document.querySelector('.menu').addEventListener('click', e => {
        if (e.target.nodeName === 'LI') {
            let id_value = e.target.dataset.link;
            document.querySelector(id_value).scrollIntoView({ behavior: 'smooth' });
        }
    });

    // mobile web section 슬라이드 구현
    var slides = document.querySelector('#contents1 ul'),
        slide = document.querySelectorAll('#contents1 ul>li'),
        currentIndex = -1,
        slideCount = slide.length,
        slideWidth = 280,
        prevBtn = document.querySelector('.web-prev'),
        nextBtn = document.querySelector('.web-next');

    slides.style.width = slideWidth * slideCount + 'px';

    function moveSlide(num) {
        currentIndex = num;
        slides.style.left = -num * slideWidth + 'px';
    }

    moveSlide(0);

    nextBtn.addEventListener('click', function () {
        if (currentIndex < slideCount - 1) {
            moveSlide(currentIndex + 1);
            // console.log(currentIndex);
        } else {
            moveSlide(0);
        };
    });

    prevBtn.addEventListener('click', function () {
        if (currentIndex > 0) {
            moveSlide(currentIndex - 1);
        } else {
            moveSlide(slideCount - 3);
        };
    });



    // mobile design section 슬라이드 구현
    var design_slides = document.querySelector('#contents2 ul'),
        design_slide = document.querySelectorAll('#contents2 ul>li'),
        design_currentIndex = -1,
        design_slideCount = design_slide.length,
        design_slideWidth = 280,
        design_prevBtn = document.querySelector('.desg-prev'),
        design_nextBtn = document.querySelector('.desg-next');

    design_slides.style.width = design_slideWidth * design_slideCount + 'px';

    function design_moveSlide(num2) {
        design_currentIndex = num2;
        design_slides.style.left = -num2 * design_slideWidth + 'px';
    }

    design_moveSlide(0);

    design_nextBtn.addEventListener('click', function () {
        if (design_currentIndex < design_slideCount - 1) {
            design_moveSlide(design_currentIndex + 1);
            // console.log(design_currentIndex, "design");
        } else {
            design_moveSlide(0);
        }
    });

    design_prevBtn.addEventListener('click', function () {
        if (design_currentIndex > 0) {
            design_moveSlide(design_currentIndex - 1);
        } else {
            design_moveSlide(design_slideCount - 4);
        };
    });

    //자동슬라이드
    setInterval(() => design_nextBtn.click(), 3000);
    //자동슬라이드
    setInterval(() => nextBtn.click(), 3000);
}


