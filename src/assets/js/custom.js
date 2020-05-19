
  document.addEventListener('scroll',() => {
        console.log('oui')
        let  navbar = document.querySelector('#navbar')
        
        let lastScrollValue = 0;
        let top = window.pageYOffset;

        if(lastScrollValue < top) {
            navbar.classList.add("hide");
        } 
        else {
            navbar.classList.remove("hide");
        }
        lastScrollValue = top;
    } );


    