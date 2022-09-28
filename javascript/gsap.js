
//declared the constructors
const buy = document.querySelector(".buy");
const back = document.querySelector('.back-button');

//declared the variable
let t1 = gsap.timeline({ paused: true, reversed: true });
let t2 = gsap.timeline({ paused: true, reversed: true });


buy.addEventListener("click", (e) => {
    t2.play();
});


back.addEventListener("click", (e) => {
    t2.reversed();
});

t1.play();


// menu icon moves left
t1.to(".menu",
    {
        ease: "elastic.out(1, .8)",
        left: 30,
        duration: 1.5,
    },0.3);

// image moves up 
    t1.to(".image-1",
    {
        ease: "elastic.out(1, .8)",
        top: '10%',
       rotate:0,
        duration: 1.5,
    }, 0.3);

    // pprofile icon moves to right
    t1.to(".profile",
    {
        ease: "elastic.out(1,.8)",
        right: 30,
        duration: 1.5,
    },0.3);


//heading go down
    t1.to(".container h1",
    {
        ease: "elastic.out(1,.8)",
        bottom: "50%",
        duration: 1.5,
    },0.3);

    //paragraph moves lower
    t1.to(".container p",
    {
        ease: "elastic.out(1,.8)",
        bottom: "20%",
        duration: 1.5,
    },0.4);

    t1.from(
        '.buy',{
            ease:'elastic.out(1,.8)',
            scale:0,
            duration:1.5
        },0.6
    );




//
//          SECOND PART OF THE TRANSITION PHASE
  //  
    // on clicking
    // makes sprite go up and disappear
    t2.to('.image1',{
        ease:'elastic.out(1, .8)',
        top:'-60%',
        duration:2,
    }
    );

     // makes menu go left and disappear again
     t2.to('.menu',{
        ease:'elastic.out(1,.8)',
        left:-30,
        duration:1.5,
    }
    );

// makes profile go left and disappear again
    t2.to('.profile',{
        ease:'elastic.out(1,.8)',
        right:-30,
        duration:1.5,
    }
    );
    

    //heading go down
    t2.to(".container h1",
    {
        ease: "elastic.out(.5,.8)",
        bottom: "-25%",
    },0);

    //paragraph moves lower and disaapers
    t2.to(".container p",
    {
        ease: "elastic.out(1, .8)",
        bottom: '-20%',
    },0);


    // makes the icon pop
    t2.to(".buy i",{
        ease:"power1.inOut",
        scale:0,
        duration:0.3,  
    },0);

    // transforms the black buy to fit half the screen on click
    t2.to(".buy ",{
        ease:"power1.inOut",
        scaleY:16,
        width:378,
        duration:0.3,  
    },0);
    
    // back button goes down
    t2.to(".back-button ",{
        ease:"elastic.out(1, .8)",
      bottom:"5%",
        duration:1.5,  
    },0.7);

    // second image slides in 
    t2.to(".image-2",{
        ease:"elastic.out(1, .8)",
     left:"50%",
        duration:1.5,  
    },0.7);

    // title slides in
    t2.to(".container h2",{
        ease:"elastic.out(1, .8)",
     left:"60%",
        duration:1.5,  
    },0.7);

    //first paragragh slides in
    t2.to(".summary",{
        ease:"elastic.out(1, .8)",
     left:"52%",
        duration:1.5,  
    },0.6);

    //second paragraph slides in
    t2.to(".summary-2",{
        ease:"elastic.out(1, .8)",
     left:"52%",
        duration:1.5,  
    },0.6);