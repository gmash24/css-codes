    const buy = document.querySelector('.buy');
    const back = document.querySelector('.back-button');

    let t1 = gsap.timeline({ paused:true, reversed:true });
    let t2 = gsap.timeline({ paused:true, reversed:     true });


    buy.addEventListener("click", () => {
            t2.play();
        });


    back.addEventListener("click", () => {
            t2.reversed();
        });

    t1.play();

    
    t1.to(".menu", 
    {
        ease: "elastic.out(1,.8)",
      left:30,
        rotate: 60,
        duration: 1.0,
    },0.3);