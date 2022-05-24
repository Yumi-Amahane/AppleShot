//var FieldW=0
//var FieldH=0
(function mkfield(){
    W=document.documentElement.clientWidth*0.95
    H=document.documentElement.clientHeight*0.95

    if (W*1.6<H){
        FieldW=W
        FieldH=W*1.6
    }
    else{
        FieldW=H/1.6
        FieldH=H
    }
    document.getElementById("Field").innerHTML='<canvas id="CField" width='+FieldW+' height='+FieldH+'></canvas>'
}())
//console.log(W)
//console.log(FieldW)


Masu=[]
for (let i=0; i<10;i+=1){
    for (let j=0; j<10;j+=1){
        if (i%2==1)Masu.push([FieldW/10.5*(j+0.5),FieldW/10.5*(i)])
        else Masu.push([FieldW/10.5*j*(1/2*1.7),FieldW/10.5*i])
    }
}

ShotApple=["Fuji",[FieldW/2,FieldH*0.95]]
//console.log(Masu)
