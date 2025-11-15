const p = document.getElementById('status')

function checkSize() {
    const width = window.innerHeight
    let sizeText = ''

    if (width <= 600) {
        sizeText = 'small'
    }
    else if (width <= 1024) {
        sizeText = 'middle'
    }
    else {
        sizeText = 'large'
    }

    document.body.className = sizeText;
    p.textContent = `Size of window: ${sizeText.toLowerCase()} (${width}px)`
}

window.addEventListener('resize', checkSize)
window.addEventListener('load', checkSize)