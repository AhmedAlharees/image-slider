const slide = document.querySelector('.slider');
const slideArrowsLeft = document.querySelector('.left-arrow');
const slideArrowsRight = document.querySelector('.right-arrow');

let isDrag = false;
let prevPageX, prevScrollLeft;
const slideWidth = slide.offsetWidth;
const slideStep = 450;


const dragStart = (event) => {
    isDrag = true;
    event.preventDefault();
    prevPageX = event.pageX;
    prevScrollLeft = slide.scrollLeft;
}

const dragging = (event) => {
    if (!isDrag){
        return;
    }
    let posDiffernce = event.pageX - prevPageX;
    slide.scroll({
        left: prevScrollLeft - posDiffernce,
        behavior: 'instant'
    });
}

const dragStop = () => {
    isDrag = false;
}


slide.addEventListener('mousedown', dragStart);
slide.addEventListener('mouseup', dragStop);
slide.addEventListener('mousemove', dragging);

// event listeners for the arrows
slideArrowsLeft.addEventListener('click', () => {
    slide.scroll({
        left: slide.scrollLeft - slideStep,
        behavior: 'smooth'
    })
});
slideArrowsRight.addEventListener('click', () => {
    slide.scroll({
        left: slide.scrollLeft + slideStep,
        behavior: 'smooth'
    })
});

slide.addEventListener('keydown', (event) => {
    slide.scrollLeft = 200;
})
