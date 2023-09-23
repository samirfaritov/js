let boxes = document.querySelectorAll(".item")
boxes.forEach((item) => {
    item.onmouseenter = () => {
        item.classList.add("active")
        
    }
})