//var FieldW=0
//var FieldH=0
var AppleKinds=["takane","SSweet","SRed","SGold","SDolce"]
//"SDolce","SPikkoro","SPutti","SHoppe","SLip"]

const picDict={
    "Fuji":"./image/imgFuji.jpg",
    "takane":"./image/imgTakane.jpg",
    "SSweet":"./image/imgSSweet.jpg",
    "SRed":"./image/imgSRed.jpg",
    "SGold":"./image/imgSGold.jpg",
    "SDolce":"./image/imgSDolce.jpg",
    "SPikkoro":"./image/imgSPikkoro.jpg",
    "SPutti":"./image/imgSPutti.jpg",
    "SHoppe":"./image/imgSHoppe.jpg",
    "SLip":"./image/imgSLip.jpg",
}//画像のパスの辞書

AppleDiscribe={
    "Fuji":     '<img src="'+picDict["Fuji"]+'">ふじ<br>',
    "takane":   '<img width=30 src="'+picDict["takane"]+'">高嶺(たかね)<br>\
    育成地（長野県須坂市）では9月下旬から10月上旬に成熟する中生種。<br>\
    果皮は黄緑の地色に、赤く着色し、縞は無い。\
    糖度は14～15％、酸度は0.3％程度、芳香があり、食味は良い。<br>',
    "SSweet":   '<img width=30 src="'+picDict["SSweet"]+'">シナノスイート<br>\
    育成地（長野県須坂市）では、10月上・中旬に成熟する中生種。<br>\
    果皮は黄緑の地色に赤く着色し、縞は明瞭である。\
    糖度は14～15％、酸度は0.3％程度で、甘味が強い。<br>',
    "SRed":     '<img width=30 src="'+picDict["SRed"]+'">シナノレッド<br>\
    育成地（長野県須坂市）では8月上、中旬に成熟する早生種。<br>\
    果皮は黄緑の地色に濃赤色に着色し、縞は明瞭である。\
    糖度は13％程度、酸度は0.4～0.5％で、食味は甘味と酸味のバランスがよく、爽やかな味。<br>',
    "SGold":    '<img width=30 src="'+picDict["SGold"]+'">シナノゴールド<br>\
    育成地（長野県須坂市）では10月中・下旬に成熟する中生種。<br>\
    果皮は黄緑の地色に浅黄色に着色し、縞は無い。\
    糖度は14～15％、酸度は0.5％程度で、食味は甘味と酸味のバランスがよく、濃厚な味。<br>',
    "SDolce":   '<img width=30 src="'+picDict["SDolce"]+'">シナノドルチェ<br>\
    育成地（長野県須坂市）では9月上、中旬に成熟する早生種。<br>\
    果皮は黄緑の地色に赤色に着色し、縞は明瞭である。\
    糖度は14～15％、酸度は0.5％程度で、食味は甘味と酸味のバランスがよく、濃厚な味。<br>',
}
ApplePics=""
AppleKinds.map(apple=>{
    ApplePics+=AppleDiscribe[apple]
    //ApplePics+="<br>"
})
ApplePics+="<br>画像、説明文は長野県公式ページ<br>\
ホーム > 仕事・産業・観光 > 農業 > 試験研究 > 長野県果樹試験場 > 研究成果 > 果樹の品種育成 > りんごの品種育成<br>\
の一部を引用し、抜粋<br>\
<br>\
(c) Yumi-Amahane"


;(function mkfield(){
    W=document.documentElement.clientWidth*0.95
    H=document.documentElement.clientHeight*0.95

    if (W*1.6<H){
        FieldW=W
        FieldH=W*1.6
    }
    else{
        FieldW=H/1.6
        FieldH=H
        //document.getElementById("RuleText").innerHTML='\
        //<a style="position:"></a>\
        //tes\
        //'
    }
    document.getElementById("Field").innerHTML='<canvas id="CField" width='+FieldW+' height='+FieldH+'></canvas>'
    document.getElementById("ApplePics").innerHTML=ApplePics;
})()
//console.log(W)
//console.log(FieldW)

MasuW=10
MasuH=10
Masu=[]
for (let i=0; i<10;i+=1){
    for (let j=0; j<10;j+=1){
        if (i%2==1)Masu.push([FieldW/10.5*(j+0.5),FieldW/10.5*(i)])
        else Masu.push([FieldW/10.5*j,FieldW/10.5*i])
    }
}

AppleLot=Math.floor(Math.random()*AppleKinds.length)
console.log(AppleLot)
ShotApple=[AppleKinds[AppleLot],[FieldW/2,FieldH*0.95]]
console.log(ShotApple)
//console.log(Masu)
