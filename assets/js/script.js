function run(){
    document.querySelectorAll('header > .links > span').forEach(span => {
        span.addEventListener('click', function(e){
            e.preventDefault();
            alert('coming soon');
        });
    });

}

window.addEventListener('load', run);