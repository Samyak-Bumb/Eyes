const eye = document.querySelectorAll('.eye');   
window.addEventListener('mousemove', (eyeball) );

function eyeball(){

    eye.forEach(function (eye){
        const x = eye.getBoundingClientRect() .left + (eye.clientWidth / 2);

        const y = eye.getBoundingClientRect() .top + (eye.clientHeight / 2);

        const radian = Math.atan2(event.pageX - x, event.pageY - y);

        const rot = (radian * (180 / Math.PI) * -1) + 270;

        eye.style.transform = `rotate(${rot}deg)`;
    })
}
