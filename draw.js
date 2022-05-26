const Field=document.getElementById("CField")
const ctx = Field.getContext("2d")


Images=[]
Apples=[]

function draw(){
    ctx.clearRect(0,0,FieldW,FieldH)
    //(FieldW/2,0)//砲台
    //(X,Y)//砲弾
    Apples.map(Apple=>{//りんご
        ctx.drawImage(Images[Apple[1]],Masu[Apple[1]][0],Masu[Apple[1]][1],FieldW/10.5,FieldW/10.5)
    })

    //if (ShotFrg==1){
    ctx.drawImage(ShotAppleImg,ShotApple[1][0],ShotApple[1][1],FieldW/10.5,FieldW/10.5)
    //}
}

function AppleAdd(){
    Apples.map(Apple=>{//りんご
        //console.log([Apple])
        Images[Apple[1]]=new Image()
        Images[Apple[1]].src=picDict[Apple[0]]
        Images[Apple[1]].onload=function(){
            //pass
            ctx.drawImage(Images[Apple[1]],Masu[Apple[1]][0],Masu[Apple[1]][1],FieldW/10.5,FieldW/10.5)
        }
    })
    ShotAppleImg=new Image()
    ShotAppleImg.src=picDict[ShotApple[0]]
    ShotAppleImg.onload=function(){
        //pass
        ctx.drawImage(ShotAppleImg,ShotApple[1][0],ShotApple[1][1],FieldW/10.5,FieldW/10.5)
    }
}

AppleAdd()
draw()