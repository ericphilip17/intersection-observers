let listItems = [...document.querySelectorAll('li')];

let options = {
    rootMargin: '-20%',
    threshold: 0.0,
    root: null
}

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            let letters = [...entry.target.querySelectorAll('span')];
            letters.forEach((letter, idx) => {
                setTimeout(() => {
                    letter.classList.add('active');
                }, idx*0.70);
            })
            entry.target.children[0].classList.add('active');
        }
    })
}, options);

// function showItem(entries) {
//     entries.forEach(entry => {
//         if(entry.isIntersecting){
//             let letters = [...entry.target.querySelectorAll('span')];
//             letters.forEach((letter, idx) => {
//                 setTimeout(() => {
//                     letter.classList.add('active');
//                 }, idx*70);
//             })
//             entry.target.children[0].classList.add('active');
//         }
//     })
// }

listItems.forEach(item => {
    let newString = '';
    let itemText = item.children[0].innerText.split('');
    itemText.map(letter => (newString += letter == ' ' ? `<span class="gap"></span>` : `<span>${letter}</span>`))
    item.innerHTML = newString;
    observer.observe(item);

})