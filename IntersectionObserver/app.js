const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
            if(entry.target.classList.contains('images')) {
                console.log('Halloj');
            }
        } else{
            entry.target.classList.remove('show');
        }
    })
});

let hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => {
    observer.observe(element);
})

