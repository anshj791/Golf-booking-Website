var crser = document.querySelector("#cursur")
var crserb = document.querySelector("#cursurblur")

document.addEventListener("mousemove",function(dets){
         crser.style.left =  dets.x +"px";
         crser.style.top = dets.y + "px"
         crserb.style.left = dets.x-200 + "px"
         crserb.style.top = dets.y-200 + "px"
})

var elems = document.querySelector(".elem")
var h4all = document.querySelectorAll("#nav h4")
var h4 = document.querySelectorAll("h4")
h4all.forEach(function(elem){

    elem.addEventListener("mouseenter", function(){
             crser.style.scale = 4;
             crser.style.border = "1px solid #FFFFFF";
             crser.style.backgroundColor = "transparent"
             h4.style.color = "black"
             crser.style.backgroundColor = "all ease 0.6s"
             crser.style.mixBlendMode = "diffrent"

    
    })
    elem.addEventListener("mouseleave", function(){
             crser.style.scale = 1;
             crser.style.border = "#95C11E";
             crser.style.backgroundColor = "#95C11E"

    })
})

document.getElementById("arrow").addEventListener("click", function() {
    // Scroll to the specific div with ID 'targetDiv'
    var targetDiv = document.getElementById('targetDiv');
    if (targetDiv) {
        targetDiv.scrollIntoView({ behavior: 'smooth' });
    }
});

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    //delay:1,
    height:"120px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:3
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from("#aboutus,#aboutin", {
    y: 90,
    opacity: 0,
    duration: 3,
    scrollTrigger: {
      trigger: "#aboutus",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    }
})

gsap.from(".card", {
    scale:0.8,
    opacity: 0,
    duration: 3,
    scrollTrigger: {
      trigger: ".card",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    }
})

gsap.from("#colon1", {
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body", 
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#colon2", {
    y:70,
    x:70,
    duration: 3,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body", 
        start:"top 55%",
        end:"top 45%",
        scrub:4
        
    }
})

gsap.from("#page4 h1", {
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body", 
        start:"top 75%",
        end:"top 70%",
        scrub:2
    }
})