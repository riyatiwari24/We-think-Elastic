    var tl = gsap.timeline();
  
    tl.to("body", {
      overflow: "hidden",
    });
  
    tl.to(".st_img1", {
      display: "block",
      duration: 0.0001,
    });
  
    tl.to(".st_img1", {
      display: "none",
    });
    tl.to(".st_img2", {
      display: "block",
      duration: 0.0001,
    });
  
    tl.to(".st_img2", {
      display: "none",
    });
    tl.to(".st_img3", {
      display: "block",
      duration: 0.0001,
    });
  
    tl.to(".st_img3", {
      display: "none",
    });
    tl.to(".st_img4", {
      display: "block",
      duration: 0.0001,
    });
  
    tl.to(".st_img4", {
      display: "none",
    });
    tl.to(".st_img5", {
      display: "block",
      duration: 0.0001,
    });
  
    tl.to(".st_img5", {
      display: "none",
    });
    tl.to(".st_img6", {
      display: "block",
      duration: 0.0001,
    });
  
    tl.to(".st_img6", {
      display: "none",
    });

   
     tl.to(".st_img7", {
        display: "block",
        duration: 0.0001,
      });
    tl.to(".st_img7", {
        display: "none",
      });
    
    tl.to(".st_img8", {
        display: "block",
        duration: 0.0001,
      });

      tl.to(".st_img8", {
        display: "none",
      });
     
      tl.to(".st_img9", {
        display: "block",
        duration: 0.0001,
      });
    
      tl.to(".st_img9", {
        display: "none",
      });

    
      tl.to(".st_img10", {
        display: "block",
        duration: 0.0001,
      });
      tl.to(".st_img10", {
        display: "none",
      });

      tl.to(".st_img11", {
        display: "block",
        duration: 0.0001,
      });
    
      tl.to(".st_img11", {
        display: "none",
      });


    tl.to(".st_img1", {
      display: "block",
      duration: 0.0001,
    });
  
    tl.to(".st_img1", {
      display: "none",
    });
    tl.to(".st_img2", {
      display: "block",
      duration: 0.0001,
    });
  
    tl.to(".st_img2", {
      display: "none",
    });
    tl.to(".st_img3", {
      display: "block",
      duration: 0.0001,
    });
  
    tl.to("#page1", {
      transform: "translateY(0)",
    });
  
    tl.to("nav", {
      zIndex: 999,
    });
  
    tl.from("#page1 h1", {
      transform: "translateY(80%)",
      stagger: 0.1,
      duration: 1,
    });
  
    tl.to("body", {
      overflow: "auto",
    });

  
    gsap.from("#page2 video", {
      transform: "scaleX(.3)",
      scrollTrigger: {
        trigger: "#page2 video",
        scroller: "body",
        // markers:true,
        end: "top 1%",
        scrub: true,
      },
    });
  
 
    gsap.from("#page3 h2", {
      transform: "translateY(50%)",
      opacity: 0,
      stagger: 0.5,
      duration: 1,
      scrollTrigger: {
        trigger: "#page3 h2",
        scroller: "body",
        // markers:true,
        start: "top 90%",
      },
    });
 
    var circle = document.querySelectorAll(".circle");
    document.addEventListener("mousemove", (e) => {
      gsap.to("#cursor", {
        top: e.y,
        left: e.x,
      });
    });
  
    circle.forEach((circle) => {
      circle.addEventListener("mouseenter", () => {
        gsap.to("#cursor", {
          transform: "scale(1)",
          duration: 0.3,
        });
      });
  
      circle.addEventListener("mouseleave", () => {
        gsap.to("#cursor", {
          transform: "scale(0)",
          duration: 0.3,
        });
      });
    });
  
  
  
    gsap.to("#page6 h1", {
      transform: "translateX(-50%)",
      duration: 3,
      scrollTrigger: {
        trigger: "#page6",
        scroller: "body",
        scrub: true,
        start: "top 0",
        end: "top -100%",
        pin: true,
      },
    });
  
    gsap.to("#page6 img", {
      transform: "translateX(-100vw)",
      duration: 3,
      scrollTrigger: {
        trigger: "#page6",
        scroller: "body",
        scrub: true,
        start: "top 0",
        end: "top -100%",
        // pin:true
      },
    });

  
  
    gsap.from("#page9 h2", {
      transform: "translateY(50%)",
      opacity: 0,
      stagger: 0.5,
      duration: 1,
      scrollTrigger: {
        trigger: "#page9 h2",
        scroller: "body",
        // markers:true,
        start: "top 90%",
      },
    });
 
  
  function navAnimation() {
    gsap.to("nav", {
      y: -100,
      duration: 1,
      scrollTrigger: {
        trigger: "nav",
        scroller: "body",
        start: "top 0",
        end: "top -10%",
        scrub: true,
      },
    });
  }
  navAnimation();
  
  
  
  const text = document.querySelector("#circular_text");
  const spans = document.querySelectorAll("#circular_text span");
  spans.forEach((span, index) => {
    span.style.transform = `rotate(${index * 9}deg)`;
  });