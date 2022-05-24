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
        Shuhen=[]
        if (State[1]%10!=0)Shuhen.push(State[1]-1)
        if (State[1]%10!=9)Shuhen.push(State[1]+1)
        if (9<State[1]){
            if (parseInt(State/10)%2==0){
                Shuhen.push(State[1]-10)
                if (State[1]%10!=9)Shuhen.push(State[1]-9)
            }
            else{
                Shuhen.push(State[1]-10)
                if(State[1]%10!=0)Shuhen.push(State[1]-11)
            }
            
        }

        if(State[1]<10){
            Apples.push(["Fuji",State[1]])
            AppleAdd()

            ShotApple=["Fuji",[FieldW/2,FieldH*0.95]]
            ShotFrg=0
        }
        //console.log(Shuhen)
        else{
            for (let i=0 ; i<(Apples).length;i+=1){
                //console.log(Apples[i])
                if (Shuhen.includes(Apples[i][1])){
                    console.log("hit")
                    console.log(State[1])
                    console.log(Shuhen)
                    console.log(Apples[i][1])
                    Apples.push(["Fuji",State[1]])
                    AppleAdd()

                    ShotApple=["Fuji",[FieldW/2,FieldH*0.95]]
                    ShotFrg=0
                    break
                }
            }
        }
        draw()
    }
}