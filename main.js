const alternarVisiblidade = () => {
    const priceElement = document.querySelectorAll('.price')
    const accessContentElement = document.querySelectorAll('.access')
    const buttonAnchorTag = document.querySelectorAll('button a')

    accessContentElement.forEach(el => {   
    if(el.style.display === "inline") {
        el.style.display = "none"
        priceElement.forEach(el => el.style.display = "inline")
        buttonAnchorTag.forEach(el => el.style.setProperty('--display', 'none'))
    } else {
        el.style.display = "inline"
        priceElement.forEach(el => el.style.display = "none")
        buttonAnchorTag.forEach(el => el.style.setProperty('--display', 'inline-block'))
    }
})    
}

setInterval(alternarVisiblidade, 3000)