let img = 1;

function image_loop(element) {
    setTimeout(() => {
        if (img === 1) {
            element.style.opacity = '0'
            element.style.visibility = 'collapse'
            element.src = "images/banner/2.png"
            img = 2
            console.log(img)
            element.style.visibility = 'visible'
            element.style.opacity = '1'
        } else if (img === 2) {
            element.style.opacity = '0'
            element.style.visibility = 'collapse'
            element.src = "images/banner/3.png"
            img = 3
            console.log(img)
            element.style.visibility = 'visible'
            element.style.opacity = '1'
        }else if (img === 3) {
            element.style.opacity = '0'
            element.style.visibility = 'collapse'
            element.src = "images/banner/1.png"
            img = 1
            console.log(img)
            element.style.visibility = 'visible'
            element.style.opacity = '1'
        } else {
            console.log("loop failed.")
        }
        return 0;
    }, 2000)
}
