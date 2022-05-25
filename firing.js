var mousex=0
var mousey=0

document.addEventListener("mousemove",e=>{
    mousex=e.offsetX;
    mousey=e.offsetY;

    //console.log(mousex)
    //console.log(mousey)
})

ShotFrg=0
verocity=[]
document.addEventListener("keydown",e=>{
    //console.log(e.key)
    if (e.key==" " && ShotFrg==0){
        console.log("Shot"+mousex+","+mousey)

        velD=((mousex-FieldW*0.5)**2+(mousey-FieldH)**2)**0.5/3
        velx=mousex-FieldW*0.5
        vely=mousey-FieldH
        velocity=[velx/velD,vely/velD]
        console.log(velocity)
        ShotFrg=1
    }
})

document.addEventListener("mouseup",e=>{
    //console.log(e.key)
    if (e.button==0 && ShotFrg==0){
        console.log("Shot"+mousex+","+mousey)

        velD=((mousex-FieldW*0.5)**2+(mousey-FieldH)**2)**0.5/3
        velx=mousex-FieldW*0.5
        vely=mousey-FieldH
        velocity=[velx/velD,vely/velD]
        console.log(velocity)
        ShotFrg=1
    }
})



