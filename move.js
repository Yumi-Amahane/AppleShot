setInterval(moving,10)

function Iti(position){
    distd=[FieldW**2,0]
    c=0
    Masu.map(pos =>{
        dist=(pos[0]-position[0])**2+(pos[1]-position[1])**2
        if (dist<distd[0]){
            distd[0]=dist
            distd[1]=c
        }
        c+=1
        //console.log(c)
    })
    //console.log(distd[1])
    return (distd)
}

function searchShuhen(iti){
    Shuhen=[]
    
    if (iti%10!=0)Shuhen.push(iti-1)
    if (iti%10!=9)Shuhen.push(iti+1)
    if (9<iti){
        Shuhen.push(iti-10)

        //console.log(parseInt(iti)%2)
        if (parseInt(iti/10)%2==0){
            if (iti%10!=0)Shuhen.push(iti-11)
        }
        else{
            if(iti%10!=9)Shuhen.push(iti-9)
        }
    }

    if (iti<MasuW*(MasuH-1)-1){
        Shuhen.push(iti+10)
        //console.log(parseInt(iti)%2)
        if (parseInt(iti/10)%2==0){
            if (iti%10!=0)Shuhen.push(iti+9)
        }
        else{
            if(iti%10!=9)Shuhen.push(iti+11)
        }
    }
    return(Shuhen)
}

function moving(){
    if(ShotFrg==1){
        ShotApple[1][0]+=velocity[0]
        ShotApple[1][1]+=velocity[1]
        //console.log(ShotApple)

        atari=[ShotApple[1][0]+FieldW*(1/10.5/2),ShotApple[1][1]+FieldW*(1/10.5/2)]
        if (atari[0]<FieldW*(1/10.5/2) || FieldW-FieldW*(1/10.5/2)<atari[0]){
            //ShotApple[1][0]
            velocity[0]*=-1
        }
        if (atari[1]<+FieldW*(1/10.5/2)|| FieldH+FieldW*(1/10.5/2)<atari[1]){
            //ShotApple[1][1]*=-1
            velocity[1]*=-1
        }
        //console.log(ShotApple[1][0])
        State=Iti(ShotApple[1])
        //console.log(State)
        //あたりはんていをする
        if (State[0]<(FieldW/10.5/2)**2){
            Suhen=searchShuhen(State[1])

            if(State[1]<10){
                whenHit()
            }
            //console.log(Shuhen)
            else{
                for (let i=0 ; i<(Apples).length;i+=1){
                    //console.log(Apples[i])
                    if (Shuhen.includes(Apples[i][1])){
                        whenHit()
                        break
                    }
                }
            }
        }
        
        draw()
        //console.log("drawed")
    }
}

function whenHit(){//HIT時の処理
    console.log("hit")
    //console.log(State[1])
    //console.log(Shuhen)

    Apples.push([ShotApple[0],State[1]])

    Group=[ShotApple[0],[State[1]]]
    mkGroup(State[1])
    //console.log(Group)
    if (4<=Group[1].length){
        delApple(Group)
        delDrop()//重力でおちていくやつ
    }

    AppleLot=Math.floor(Math.random()*AppleKinds.length)
    ShotApple=[AppleKinds[AppleLot],[FieldW/2,FieldH*0.95]]

    ShotFrg=0

    AppleAdd()
}

function mkGroup(CheckIti){
    Shuhen =searchShuhen(CheckIti)
    Shuhen.map(iti=>{
        Apples.map(apple=>{
            if(apple[1]==iti && Group[1].includes(iti)==false && apple[0]==Group[0]){
                //Group[2]+=1
                Group[1].push(iti)
                mkGroup(iti)
            }
        })
    })
}

function delApple(delGr){
    for (let i=0; i<Apples.length; i+=1){
        //console.log(Apples[i][1])
        if (delGr[1].includes(Apples[i][1])){
            Apples.splice(i,1)
            i-=1
        }
    }
}

function mkDropGroup(CheckIti){
    Shuhen =searchShuhen(CheckIti)
    Shuhen.map(iti=>{
        Apples.map(apple=>{
            if(apple[1]==iti && Group[1].includes(iti)==false){
                //Group[2]+=1
                Group[1].push(iti)
                mkDropGroup(iti)
            }
        })
    })
}
function delDrop(){
    for (let i=0; i<Apples.length; i+=1){
        Group=["*",[Apples[i][1]]]
        mkDropGroup(Apples[i][1])
        //console.log(Group)

        DelFrg=true
        for (let j=0; j<10; j+=1){
            if (Group[1].includes(j)){
                DelFrg=false
                //console.log("FALSE")
            }
        }
        //console.log(DelFrg)
        if (DelFrg==true){
            i=0//Group[1].length
            delApple(Group)
        }
    }
}