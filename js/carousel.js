(function() {

    const slides = [
        '<div class="sweet__cards"><img class="sweet__photo" src="images/weeding.jpg" alt="weeding cake"><h3 class="cards__title">Weeding cakes</h3><div class="button__sweet"><a href="#" class="sweet__button">See all</a></div></div>',
        '<div class="sweet__cards"><img class="sweet__photo" src="images/birthday.jpg" alt="birthday cake"><h3 class="cards__title">Birthday cakes</h3><div class="button__sweet"><a href="#" class="sweet__button">See all</a></div></div>',
        '<div class="sweet__cards"><img class="sweet__photo" src="images/cupcakes.jpg" alt="Cupcake"><h3 class="cards__title">Cupcakes</h3><div class="button__sweet"><a href="#" class="sweet__button">See all</a></div></div>',
        '<div class="sweet__cards"><img class="sweet__photo" src="images/cheesecakes.jpg" alt="cheescakes"><h3 class="cards__title">Cheescakes</h3><div class="button__sweet"><a href="#" class="sweet__button">See all</a></div></div>',
        '<div class="sweet__cards"><img class="sweet__photo" src="images/candy.jpg" alt="candy"><h3 class="cards__title">Candy bar</h3><div class="button__sweet"><a href="#" class="sweet__button">See all</a></div></div>',
        '<div class="sweet__cards"><img class="sweet__photo" src="images/other.jpg" alt="other cakes"><h3 class="cards__title">Other occasions</h3><div class="button__sweet"><a href="#" class="sweet__button">See all</a></div></div>'
    ];
  
    let currentSlide = 0;

    function renderSlides(slides) {
        const slidesContainer = document.querySelector('.sweet__card-carousel');
        slidesContainer.innerHTML = slides[currentSlide];  
        if (window.innerWidth > 767) {
            const secondSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
            slidesContainer.innerHTML += slides[secondSlide];
            if (window.innerWidth > 900) {
                const thirdSlide = secondSlide + 1 >= slides.length ? 0 : secondSlide + 1;
                slidesContainer.innerHTML += slides[thirdSlide];                        
          }  
        }    
    }

    function nextSlides() {
        currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        renderSlides(slides);
    }

    function prevSlide() {
        currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
        renderSlides(slides);
    }
    
    renderSlides(slides);

       const nextButton = document.querySelector('.card__next');
       nextButton.addEventListener('click', nextSlides);
   
       const prevButton = document.querySelector('.card__prev');
       prevButton.addEventListener('click', prevSlide);
   
       window.addEventListener('resize', () => {
          renderSlides(slides);
        });
})();