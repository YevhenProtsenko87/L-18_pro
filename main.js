// const box = document.querySelector(".box");

// let state = {
//     shiftX: 0,
//     shiftY: 0,
// };

// const draggable = {
//     onDrag({ ofsetX, ofsetY }) {
//         let state = {
//             shiftX: ofsetX,
//             shiftY: ofsetY,
//         }

//         document.addEventListener("mousemove", draggable.onMove);

//         console.log(state, "state");

//     },

//     onDrop() {
//         document.removeEventListener("mousemove", draggable.onMove);
//     },

//     onMove(event) {
//         box.style.left = `${event.clientX}px`;
//         box.style.top = `${event.clientY}px`;

//         setTimeout(() => {
//             box.style.top = `${event.clientY - state.shiftY}px`;

//             setTimeout(() => {
//                 box.styles.left = `${event.clientX - state.clientX}px`
//             },1000);

//         },1000);

//     },

// };

// box.addEventListener("mousedown", draggable.onDrag);
// box.addEventListener("mouseup", draggable.onDrag);

window.onload = function () {
    var range = document.querySelector('[type="range"]');
    var number = document.querySelector('[type="number"]');
    var rangeContainer = document.querySelector('.block');
    var block = document.querySelector('.block2');
    var tax = document.querySelector('.block3');

    range.addEventListener('mousedown',function (event) {
        this.addEventListener('mousemove', move);
    });
    range.addEventListener('mouseup', stop);

    number.addEventListener('click',function (event) {
        range.value = this.value;
        rangeDiagramm(range.value,block);
        taxDiagramm(range.value,tax);
    });

    function move(event) {
        number.value = this.value;
        rangeDiagramm(number.value,block);
        taxDiagramm(number.value,tax);
    }

    function stop(event) {
        range.removeEventListener('mousemove', move);
    }

    function rangeDiagramm(value,elem) {
        elem.style.height = value + 'px';
    }
    
    function taxDiagramm(value, elem) {
        if (value <= 20 ) {
            elem.style.height = 2 + '%';
        } else if (value > 20 && value <= 50) {
            elem.style.height = 4 + '%';
        } else if (value > 50 && value <= 75) {
            elem.style.height = 6 + '%';
        } else if (value > 75 && value <= 100){
            elem.style.height = 8 + '%';
        }
    }

};