gsap.from(".content h1,.content p,.content input",{
    y:200,
    duration:2,
    delay:1,
    scale:0,
    stagger:"true"
})


gsap.to(".box-outer arrow-left",{
    x:25,
    duration:0.7,
    repeat:-1,
    yoyo:true

})