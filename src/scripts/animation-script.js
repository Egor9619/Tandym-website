function animation(entry){
    entry.forEach(change =>{
        if(change.isIntersecting){
            change.target.classList.add('show');
        }
    });
}

let option = {threshold: [0.5]};
let observes = new IntersectionObserver(animation, option);
let elementor = document.querySelectorAll('.anim');
for(let elm of elementor){
    observes.observe(elm);
}