const container = document.querySelector(".container");
function createDivs(num) {
    for (let i = 0; i<num;i++) {
        const dive = document.createElement('div');
        dive.classList.add('box');
        dive.textContent = "yoo";
        dive.addEventListener('mouseover', () => {
            dive.style.cssText = "background-color: black; color: black;";
            
        })
        container.appendChild(dive);
    }
}
createDivs(30);