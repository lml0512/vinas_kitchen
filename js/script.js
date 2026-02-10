gsap.registerPlugin(ScrollTrigger);

// 1. 왼쪽 사진: 아래로 내려가는 효과
gsap.to(".pic_left", {
  y: -100, // 내려가는 거리
  x: 300,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax-section",
    start: "1500px 500px", 
    end: "3000px 500px",
    scrub: 1, 
    markers: false
  }
});

// 2. 오른쪽 사진: 위로 올라가는 효과 (왼쪽과 교차됨)
gsap.to(".pic_right", {
    x: -200,
    y: -100, // 올라가는 거리
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax-section",
    start: "1500px 500px", 
    end: "3050px 500px",
    scrub: 1, 
    markers: false
   
  }
});

// 3. 가운데 사진: 아래에서 위로 올라오며 나타남
gsap.to(".pic_center", 
  {
    y: -300, 
    opacity: 1, 
    scrollTrigger: {
      trigger: ".parallax-section",
    start: "1500px 500px", 
    end: "3050px 500px",
      scrub: 1.5,  // 살짝 더 묵직하게 설정
      markers: false
    }
  }
);


