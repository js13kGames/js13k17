a=()=>{var m=0,n=()=>{scene.style.transform="translateX(-"+E[D]*C+"vh)translateY(-"+F[D]*C+"vh)translateZ(40vh)rotateX(40deg)rotateZ("+m+"rad)"},o=localStorage,q="lossst_",v=0,A=+o[q+"son"]||0,C=7,D=0,E=[],F=[],G=[],H=[],I=o[q+"snakelength"]=+o[q+"snakelength"]||5,J=0,K=1,M=0,N=r=d=l=s=c=B=0,O=0,Q=[],R=[],S=[],T=[],U=[],V=[],W=null,X="e",Y=[],Z=[],$=0,_=0,aa=0,ba=0,ca=0,da=0,ea=0,fa=+o[q+"totalsolved"]||0,ga=0,ha=0,ia=0,ja="",ka=h=0,la=()=>{if(b.className=ja,A&&!J&&(snake.innerHTML=""),"hub"==ja){for(ka=40,h=20,Q=[[13,9,0],[6,13,0],[35,8,0]],R=[[11,11,0,0,0],[2,12,0,6,0],[38,10,0,7,0]],S=[[41,10,Math.PI/2,8,0,"1-1",1,0,10,0,0],[20,-2,0,14,0,"2-1",1,10,19,0,0],[-2,11,-Math.PI/2,6,0,"3-1",1,20,20,1,1],[28,21,Math.PI,14,0,"1-4",1,22,1,0,0],[5,21,Math.PI,5,0,"2-5",1,36,1,0,1]],V=[],T=[],pa=9;15>pa;pa++)for(ra=0;5>ra;ra++)if(2==ra&&14==pa||2==ra&&13==pa||3==ra&&13==pa||3==ra&&12==pa||2==ra&&12==pa);else T.push([ra,pa]);U=[["Move with arrow keys or WASD/ZQSD",19,5,0,13],["Backtrack with Alt or \u27F5",2,5,0,13],["You can open red doors when you reach the length written on them",30,5,0,13],["2D puzzle editor<br>\u2193",19,9,14,0],["\u2191<br>More puzzles",22,2,14,0]]}else if("1-1"==ja)ka=40,h=20,Q=[[35,13,0]],R=[[33,14,0,0,6],[34,15,0,0,6],[37,13,0,0,6]],T=[],S=[[-2,10,-Math.PI/2,8,0,"hub",0,39,11,0,0],[35,21,Math.PI,11,0,"1-3",1,35,1,0,0]],V=[[6,8,0,,"000000001000001110001110001000000000",2,3],[6,8,0,,"000000011000011100010000011000000000",14,3],[6,8,0,,"000000000100001100011000011100000000",26,3],[5,8,0,,"0000001110011100110000000",2,13],[6,8,0,,"000000011000011000001100001100000000",14,13],[6,8,0,,"000000000100001100001110001100000000",26,13]],U=[["You get new apples when all the puzzles in the room are solved",9,9,1,0]];else if("1-3"==ja)ka=40,h=20,Q=[[4,7,0]],R=[[2,8,0,0,12],[3,9,0,0,12]],S=[[35,-2,0,8,0,"1-1",0,35,19,0,0],[-2,10,-Math.PI/2,13,0,"1-4",1,39,10,0,0]],V=[[6,11,0,,"000000011110011010011110000000000000",8,2],[7,11,0,,"0000000001110000111000001100000110000010000000000",18,2],[6,11,0,,"000000011000011110001010001110000000",28,2],[6,11,0,,"000000011100001110001110001100000000",8,11],[6,11,0,,"000000001110001110001110001010000000",18,11],[6,11,0,,"000000011110011110001100001000000000",28,11]],U=[["Your progress is saved automatically",35,9,1,0]],T=[[11,4],[21,15]];else if("1-4"==ja)ka=40,h=20,Q=[[35,8,0]],R=[[34,11,0,0,18]],S=[[41,10,Math.PI/2,8,0,"1-3",0,1,10,0,0],[22,-2,0,14,0,"hub",1,28,19,0,0]],V=[[7,13,0,,"0000000000000001111000111100001111000100000000000",2,2],[7,13,0,,"0000000001110000101000011100001110000110000000000",14,2],[6,13,0,,"000000001110011110011010001110000000",26,2],[7,13,0,,"0000000001100000111000011100001110000110000000000",2,11],[7,13,0,,"0000000000000001111100101010011111000000000000000",14,11],[6,13,0,,"000000011000011100011110011110000000",26,11]],U=[["This is just a training. Head to the north to try a new kind of puzzles!",34,3,13,1,0]],T=[[17,4],[18,7],[29,5],[27,3],[27,6],[29,12],[30,12],[30,13],[18,14],[16,14],[6,12],[6,16],[7,7],[6,7],[5,7],[3,6],[3,7],[7,5],[7,4]];else if("2-1"==ja)for(ka=20,h=20,Q=[[10,2,0]],R=[[8,2,0,0,19]],S=[[10,21,Math.PI,14,0,"hub",0,20,0,0,0],[-2,5,-Math.PI/2,15,0,"2-2",1,79,5,0,0]],V=[[7,14,1,,"0100010011111000000000000000000000001111100100010",7,7]],U=[["Now you're thinking with wraps!",2,2,0,14,0]],T=[],pa=0;20>pa;pa++)T.push([pa,10]);else"2-2"==ja?(ka=80,h=20,Q=[[35,10,0]],R=[[38,11,0,0,31]],S=[[81,5,Math.PI/2,15,0,"2-1",0,0,5,0,0],[-2,15,-Math.PI/2,16,0,"2-3",1,19,5,0,0]],V=[[5,5,1,,"0111101001010110100011111",59,13],[5,5,1,,"1111011000111100001011110",48,13],[5,5,1,,"1111101000011110111001100",37,13],[5,5,1,,"1111110000111001000011111",26,13],[5,5,1,,"1100101101001110011101101",15,13],[5,5,1,,"1111100001110010000111111",59,2],[5,5,1,,"1000110111100011000111111",48,2],[5,5,1,,"1000110101101011111110001",37,2],[5,5,1,,"1111110001000110000111111",26,2],[5,5,1,,"0111101100011100011011110",15,2],[5,5,1,,"1111101111001110001100001",4,8],[5,5,1,,"1010100101111010000111111",71,8]],U=[["To exit a wrap puzzle, you can either solve it, backtrack, or press R.",72,2,0,15,0]],T=[]):"2-3"==ja?(ka=20,h=30,Q=[[5,25,0]],R=[[4,24,0,0,33],[7,25,0,0,33],[2,26,0,0,33],[3,28,0,0,33]],S=[[10,31,Math.PI,20,0,"2-4",1,10,1,0,0],[21,5,Math.PI/2,20,0,"2-2",0,1,15,0,0]],V=[[6,16,1,,"001000011000011100111111001110001000",7,7],[6,16,1,,"110001100001000111000111100001110001",7,17]],U=[],T=[]):"2-4"==ja?(ka=20,h=30,Q=[[16,22]],R=[[18,22,0,0,35]],S=[[10,-2,0,20,0,"2-3",0,10,29,0,0],[21,25,Math.PI/2,21,0,"2-5",1,1,10,0,0]],V=[[6,16,1,,"001000011110111111011110011110001000",7,7],[6,16,1,,"110001100001000011000111001111111111",7,17]],U=[],T=[]):"2-5"==ja?(ka=40,h=20,Q=[],R=[[38,2,0,5,0]],S=[[-2,10,-Math.PI/2,1,0,"2-4",0,19,25,0,0],[36,-2,0,6,0,"hub",1,5,19,0,1]],V=[],U=[["Lil'snake can move up and down with Shift and Ctrl keys, and open black doors",30,9,1,0]],T=[[33,0],[33,1],[33,2],[33,3],[33,4],[34,4],[35,4],[36,4],[37,4],[38,4],[39,4]]):"3-1"==ja?(ka=20,h=30,Q=[],R=[],S=[],V=[[5,5,0,"0000000000000000000001110",,12,2],[4,5,0,"0000000001000110",,12,12],[5,5,0,"0000000000000000101001110",,12,22],[5,5,0,"0000000000000000111001000",,2,2],[4,5,0,"0000001001100100",,2,12],[5,5,0,"0000000000000000111000100",,2,22]],U=[],T=[]):"3-2"==ja?(ka=20,h=30,Q=[],R=[],S=[],V=[[4,5,0,"0000000001100110","0000011001100000",12,2],[4,5,0,"0000010001100100","0000011001100000",12,13],[4,5,0,"0000011001000100","0000010001100000",12,24],[5,5,0,"0000000000000000111001010","0000000000011000011000000",2,2],[4,5,0,"0000000001100110","0100011000100000",2,13],[5,5,0,"0000000000000000010001110","0000000000001100110000000",2,24]],U=[],T=[]):"3-3"==ja?(ka=20,h=30,Q=[],R=[],S=[],V=[[6,5,0,"000000000000000000000000011110010010",,12,2],[5,5,0,"0000000000010000110001110",,12,13],[6,5,0,"000000000000000000000100001110011000",,12,24],[5,5,0,"0000000000011000111000100",,2,2],[5,5,0,"0000000000010000111001000",,2,13],[5,5,0,"0000000000001000111001010",,2,24]],U=[],T=[]):"3-4"==ja?(ka=20,h=30,Q=[],R=[],S=[],V=[[4,5,0,"0000000001100110","0000011001100000",12,2],[4,5,0,"0000001001100110","0000001001100000",12,13],[5,5,0,"0000000000000000010001110","0000000100001100110000000",12,24],[4,5,0,"0000011001000100","0000011001100000",2,2],[5,5,0,"0000000000000000101001110","0000001110010100000000000",2,13],[5,5,0,"0000000000000000011001100","0000001110011000010000000",2,24]],U=[],T=[]):"3-5"==ja?(ka=20,h=30,Q=[],R=[],S=[],V=[[4,5,1,"0110011001100110","0110000000000110",12,2],[4,5,1,"1001000000001001","1001000000001001",12,13],[4,5,1,"0000010011110010","0000111101100000",12,24],[4,5,1,"0100010001000100","0100010000000100",2,2],[4,5,1,"0110010000000011","0000011100110000",2,13],[4,5,1,"1101000000000001","1101000000010001",2,24]],U=[],T=[]):"3-6"==ja?(ka=20,h=30,Q=[],R=[],S=[],V=[[5,5,0,"0000000000001001111100100",,12,2],[4,5,0,"0000010001100000",,12,13],[5,5,0,"0000000110000110111000010",,12,24],[5,5,0,"0000000000001000111011111","0000000000111001111100000",2,2],[4,5,0,"1000110011101111","0000001111110000",2,13],[4,5,0,"0000100011001110","1110110010000000",2,24],[4,5,1,"1000100110010001","0000100110010000",2,24],[4,5,1,"1001100110011001","1001100110011001",2,24],[5,5,1,"1101110001000001000011000","1100010000000001000111011",2,24]],U=[],T=[]):"3-7"==ja?(ka=20,h=30,Q=[],R=[],S=[],V=[[5,5,0,"1101101010011100010000000",,12,13],[5,5,0,"0000100011001100110011000","0000100011001100110011000",12,2],[5,5,1,"1100010001000011000111000","0000011000110010000000000",12,24]],U=[],T=[]):"3-8"==ja&&(ka=20,h=30,Q=[],R=[],S=[],V=[[5,5,1,"1111110000110111000011111","1011110111100001011110111",12,13],[5,5,1,"1000011100110011001110000","1110010001001111000111100",12,13],[5,5,1,"0011110011110001001100111","1111010100100011101100000",12,13],[5,5,1,"1000011110111101111010000","1111110000101101011010000",12,13]],U=[],T=[]);for(var pa in scene.style.width=ka*C+"vh",scene.style.height=h*C+"vh",objects.innerHTML="",puzzle.innerHTML="",Q)objects.innerHTML+=`<div id=tree${pa} class="emoji tree" style="left:${Q[pa][0]*C}vh;transform:translateX(-8vh)translateY(${Q[pa][1]*C+4}vh)rotateX(-75deg)">🌳</div><div id=treeshadow${pa} class="emojishadow treeshadow" style="left:${Q[pa][0]*C}vh;transform:translateX(-8vh)translateY(${Q[pa][1]*C+4}vh)rotateZ(144deg)scaleY(1.5)">🌳`;for(pa in R)o[q+"appleeaten"+ja+pa]?delete R[pa]:objects.innerHTML+=`<div id=apple${pa} class="emoji apple ${o[q+"appleappeared"+ja+pa]?"":"hidden"}" style="left:${R[pa][0]*C}vh;transform:translateY(${R[pa][1]*C+4}vh) rotateX(-65deg)">🍎</div><div id=appleshadow${pa} class="emojishadow appleshadow ${o[q+"appleappeared"+ja+pa]?"":"hidden"}" style="left:${R[pa][0]*C}vh;transform:translateY(${R[pa][1]*C+3}vh)rotateZ(144deg)">🍎`;for(pa in S)objects.innerHTML+=`<div id=door${""+ja+pa} class="door${o[q+"door"+ja+pa]?" open":""}" style="left:${(S[pa][0]+.5)*C}vh;top:${(S[pa][1]+.5)*C}vh;transform:rotateZ(${S[pa][2]}rad)translateZ(${S[pa][9]*C}vh)"><div class="realdoor door${S[pa][10]}" ${S[pa][6]?"":"hidden"}>${S[pa][3]}</div><div class=path>`;for(var qa in V)for(var ra in T)o[q+"puzzle"+ja+qa]&&T[ra][0]>=V[qa][5]&&T[ra][0]<V[qa][5]+V[qa][0]&&T[ra][1]>=V[qa][6]&&T[ra][1]<V[qa][6]+V[qa][0]&&delete T[ra];for(pa in T)objects.innerHTML+=`<div id=cube${pa} class="cube rock" style="left:${T[pa][0]*C}vh;top:${T[pa][1]*C}vh;width:7.2vh;height:7.2vh"><div class=front></div><div class=up style="background-position:${-300-T[pa][0]*C}vh ${-140-T[pa][1]*C}vh"></div><div class=right></div><div class=left>`;for(pa in U)U[pa][3]&&U[pa][3]<=I||U[pa][4]&&U[pa][4]>=I?(U[pa][4]=1,objects.innerHTML+=`<div id=hint${""+ja+pa} class="hint" style="left:${U[pa][1]*C}vh;transform:translateY(${U[pa][2]*C+4}vh)rotateX(-70deg)translateY(-4vh)">${U[pa][0]}`):U[pa][4]=0;for(var qa in V){ea=V[qa][0];var sa="",ta="",ua=`<div id=puzzle${qa} class="cube wrap visible ${V[qa][2]&&!o[q+"puzzle"+ja+qa]?"wrapvisible":""}" style="left:${V[qa][5]*C}vh;top:${V[qa][6]*C}vh;width:${V[qa][0]*C}vh;height:${ea*C}vh">${V[qa][2]?"<div class=left></div><div class=right></div>":""}<div id=down${qa} class=down></div><div id=back${qa} class=back></div>${V[qa][2]?"<div class=front>":""}`;puzzle.innerHTML+=ua;var va="000",wa="fff";for(o[q+"puzzle"+ja+qa]&&(va="44c",wa="fd0"),pa=0;pa<ea;pa++)for(ra=0;ra<ea;ra++)V[qa][3]&&(sa+=`<div class=cell id=w${qa}-${pa}-${ra} style='width:${C}vh;height:${C}vh;background:#${"1"==V[qa][3][pa*ea+ra]?va:wa}'></div>`),V[qa][4]&&(ta+=`<div class=cell id=g${qa}-${pa}-${ra} style='width:${C}vh;height:${C}vh;background:#${"1"==V[qa][4][pa*ea+ra]?va:wa}'></div>`);self["down"+qa]&&(self["down"+qa].innerHTML+=ta),self["back"+qa]&&(self["back"+qa].innerHTML+=sa)}"hub"!=ja||o[q+"snakex"]?(scene.style.transition="transform .8s, transform-origin .8s linear",ma()):debug?(scene.style.transition="transform .8s linear, transform-origin .8s linear",ma(),movesnake(),E.push(E[D]),F.push(F[D]),G.push(0),H.push(H[D]),D++,movesnake()):(O=1,setTimeout("resetsnake();movesnake();snakecubemove0.style.transition=\"transform .5s\"",2e3),setTimeout("snakex.push(snakex[head]);snakey.push(snakey[head]);snakez.push(0);snakeangle.push(snakeangle[head]);head++;movesnake()",4500),setTimeout("snakecubemove0.style.transition='';snakeshadow0.style.transition=snakecuberotate0.style.transition='transform .2s';snakeshadow0.style.transform=snakecuberotate0.style.transform='rotateZ("+-Math.PI/4+"rad)'",5e3),setTimeout("snakeshadow0.style.transform=snakecuberotate0.style.transform='rotateZ("+Math.PI/4+"rad)'",5500),setTimeout("snakeshadow0.style.transform=snakecuberotate0.style.transform='';",6e3),setTimeout("scene.style.transition='transform .8s, transform-origin .8s linear';snakeshadow0.style.transition=snakecuberotate0.style.transition='';lock=0",9e3)),movesnake()},ma=pa=>{var qa=snake;if(A&&!J&&(qa=snake2),qa.innerHTML="",pa||(E=[],F=[],G=[],H=[]),J&&(C=32/ea),D=I-1,!pa)if(J)for(i=0;i<I;i++)E[D-i]=-i-1,F[D-i]=~~(ea/2),G[D-i]=0,H[D-i]=-Math.PI/2;else if(o[q+"snakex"]){var ra=+o[q+"snakex"],sa=+o[q+"snakey"],ta=+o[q+"snakez"];if("2-5"==ja&&v&&1==A)for(i=0;i<I;i++)E[D-i]=20,F[D-i]=10,G[D-i]=-i-1,H[D-i]=0;else if(2>ra)for(i=0;i<I;i++)E[D-i]=ra-i,F[D-i]=sa,G[D-i]=ta,H[D-i]=-Math.PI/2;else if(ra>ka-2)for(i=0;i<I;i++)E[D-i]=ra+i,F[D-i]=sa,G[D-i]=ta,H[D-i]=Math.PI/2;else if(2>sa)for(i=0;i<I;i++)E[D-i]=ra,F[D-i]=sa-i,G[D-i]=ta,H[D-i]=0;else if(sa>h-2)for(i=0;i<I;i++)E[D-i]=ra,F[D-i]=sa+i,G[D-i]=ta,H[D-i]=0;else for(i=0;i<I;i++)E[D-i]=20,F[D-i]=10,G[D-i]=-i,H[D-i]=0}else if("hub"==b.className)for(i=0;i<I;i++)E[D-i]=20,F[D-i]=10,G[D-i]=-i-1,H[D-i]=0;for(i=0;i<Math.max(I+4,16);i++)qa.innerHTML+=`<div id=snakecubemove${i} class=snakecubemove style="transform:translateX(50vh)translateY(50vh)translateZ(-30vh);width:${C-1}vh;height:${C-1}vh"><div class=snakeshadow id=snakeshadow${i}></div><div id=snakecuberotate${i} class=snakecuberotate><div class="cube snake" id=snakecube${i}>${1>i?"<div class=tongue>Y</div>":""}<div class=front>${1>i?"\u203F":""}</div><div class=up style="font-size:${.5*C}vh;line-height:${.8*C}vh">${1>i?"\uD83D\uDC40":""}</div><div class=right></div><div class=left></div><div class=back>`};movesnake=pa=>{for(va=0;va<I;va++){if(!pa){var qa=oldx=oldy=oldz=newx=newy=newz=0;if(aa&&ea&&(E[D-va-1]==ca&&E[D-va]==ca+ea-1?(qa=1,oldx=ca-1,newx=ca+ea,oldy=newy=F[D-va],oldz=newz=G[D-va]):E[D-va-1]==ca+ea-1&&E[D-va]==ca?(qa=1,oldx=ca+ea,newx=ca-1,oldy=newy=F[D-va],oldz=newz=G[D-va]):F[D-va-1]==da&&F[D-va]==da+ea-1?(qa=1,oldy=da-1,newy=da+ea,oldx=newx=E[D-va],oldz=newz=G[D-va]):F[D-va-1]==da+ea-1&&F[D-va]==da?(qa=1,oldy=da+ea,newy=da-1,oldx=newx=E[D-va],oldz=newz=G[D-va]):0==G[D-va-1]&&G[D-va]==ea-1?(qa=1,oldz=-1,newz=ea,oldx=newx=E[D-va],oldy=newy=F[D-va]):G[D-va-1]==ea-1&&0==G[D-va]&&(qa=1,oldz=ea,newz=-1,oldx=newx=E[D-va],oldy=newy=F[D-va])),qa)self["snakecuberotate"+va].style.transform=`rotateZ(${H[D-va]}rad)`,self["snakecubemove"+va].style.transform=`translateX(${oldx*C+.5}vh)translateY(${oldy*C+.5}vh)translateZ(${oldz*C+.5}vh)scale(.01)scaleZ(.01)`,setTimeout("snakecubemove"+va+".style.transition='none'",150),setTimeout("snakecubemove"+va+".style.transform=`translateX(${"+newx+"*sidesize+.5}vh)translateY(${"+newy+"*sidesize+.5}vh)translateZ(${"+newz+"*sidesize+.5}vh)scale(.01)`",175),setTimeout("snakecubemove"+va+".style.transition='';snakecubemove"+va+".style.transform=`translateX(${snakex["+(D-va)+"]*sidesize+.5}vh)translateY(${snakey["+(D-va)+"]*sidesize+.5}vh)translateZ(${snakez["+(D-va)+"]*sidesize+.5}vh)`",200);else try{self["snakecubemove"+va].style.transform=`translateX(${E[D-va]*C+.5}vh)translateY(${F[D-va]*C+.5}vh)translateZ(${G[D-va]*C+.9}vh)`,self["snakecuberotate"+va].style.transform=`rotateZ(${H[D-va]}rad)`}catch(wa){}try{self["snakeshadow"+va].style.display=0==G[D-va]?"":"none"}catch(wa){}}J||(null===W||o[q+"puzzle"+ja+W]?(scene.style.transform="translateX("+-E[D]*C+"vh)translateY("+-F[D]*C+"vh)translateZ(15vh)rotateX(40deg)",scene.style.transformOrigin=""+E[D]*C+"vh "+F[D]*C+"vh"):(scene.style.transform="translateX("+(-(ca+V[W][0]/2)*C+5)+"vh)translateY("+(-(da+V[W][0]/2)*C+8)+"vh)translateZ("+(60-V[W][0]*(C+3))+"vh)rotateX(30deg)",scene.style.transformOrigin=""+((ca+V[W][0]/2)*C+5)+"vh "+((da+V[W][0]/2-1)*C+8)+"vh"))}var ra=1;for(va=0;va<I;va++){if(0>=G[D-va]){ra=0;break}for(j in T)T[j][0]==E[D-va]&&T[j][1]==F[D-va]&&1==G[D-va]&&(ra=0)}if(ra){for(va=0;va<I;va++)G[D-va]--;movesnake()}var sa=E[D],ta=F[D],ua=G[D];for(var va in S)self["door"+ja+va]&&0<S[va][3]&&I>=S[va][3]&&4>Math.hypot(sa-S[va][0],ta-S[va][1])&&(self["door"+ja+va].className="door open",o[q+"door"+ja+va]=1),self["door"+ja+va]&&"door open"==self["door"+ja+va].className&&2>Math.hypot(sa-S[va][0],ta-S[va][1])&&(o[q+"page"]=ja=S[va][5],setTimeout(la,600),o[q+"snakex"]=S[va][7],o[q+"snakey"]=S[va][8],o[q+"snakez"]=0,o[q+"snakeangle"]=H[D]);if(!J)for(p in checkgrid(),M=0,W=null,Y=[],Z=[],V)if(sa>=V[p][5]&&sa<V[p][5]+V[p][0]&&ta>=V[p][6]&&ta<V[p][6]+V[p][0]){for(W=+p,ba=0,o[q+"puzzle"+ja+p]?ba=1:M=1,X=p,$=!!V[p][4],_=!!V[p][3],aa=!!V[p][2],ca=V[p][5],da=V[p][6],ea=V[p][0],va=0;va<ea;va++)for(Y[va]=[],Z[va]=[],j=0;j<ea;j++)V[p][3]&&(Z[va][j]=+V[p][3][va*V[p][0]+j]),V[p][4]&&(Y[va][j]=+V[p][4][va*V[p][0]+j]);checkgrid()}},checkmove=(pa,qa,ra)=>{for(var sa in ia=0,J&&K?(-5>pa||pa>ea+3||-2>qa||qa>ea)&&(ia=1):(0>pa||pa>=ka||0>qa||qa>=h)&&(ia=1),Q)pa>=Q[sa][0]-1&&pa<=Q[sa][0]+1&&qa==Q[sa][1]&&(ia=1);for(var sa in U)U[sa][4]&&pa>=U[sa][1]&&pa<=U[sa][1]+2&&qa==U[sa][2]&&(ia=1);for(var sa in R)o[q+"appleappeared"+ja+sa]&&pa==R[sa][0]&&qa==R[sa][1]&&(delete R[sa],self["apple"+sa].remove(),self["appleshadow"+sa].remove(),I++,o[q+"snakelength"]=I,o[q+"appleeaten"+ja+sa]=1,"2-2"==ja&&16==I&&(O=1,v=1,scene.style.transition="5s",scene.style.transform="translateX(-256vh)translateY(-95vh)translateZ(-400vh)rotateX(0deg)rotateZ(180deg)",setTimeout("scene.style.transition='.8s';lock=easteregg=0;movesnake()",1e4)));for(var sa in T)pa==T[sa][0]&&qa==T[sa][1]&&0==ra&&(ia=1);for(var sa in S)self["door"+ja+sa]&&"door open"==self["door"+ja+sa].className&&2>=Math.hypot(pa-S[sa][0],qa-S[sa][1])&&(ia=0);for(sa=I-2;0<sa;sa--)E[D-sa]==pa&&F[D-sa]==qa&&G[D-sa]==ra&&(ia=1);for(p in V)console.log(V[p][3],!V[p][2],pa>=V[p][5],pa<V[p][5]+ea),V[p][3]&&!V[p][2]&&pa>=V[p][5]&&pa<V[p][5]+ea&&(qa==V[p][6]-1&&F[D]==V[p][6]||qa==V[p][6]&&F[D]==V[p][6]-1)&&(ia=1);if("2-5"==ja&&18==pa&&!A){for(ia=1,O=1,v=A=1,o[q+"son"]=1,o[q+"snakelength"]=I=5,sa=0;21>sa;sa++)T.push([E[D-sa],F[D-sa]]),self["snakecubemove"+sa].id="",self["snakecuberotate"+sa].id="",self["snakeshadow"+sa].id="",self["snakecube"+sa].id="";scene.style.transition="2s",ma(),movesnake(),scene.style.transform="translateX(-142vh)translateY(-70vh)translateZ(80vh)rotateX(45deg)",scene.style.transformOrigin="140vh 70vh",setTimeout("snakex.push(snakex[head]);snakey.push(snakey[head]);snakez.push(0);snakeangle.push(snakeangle[head]);head++;movesnake()",3e3),setTimeout("text.innerHTML='Daddy!'",4e3),setTimeout("text.innerHTML=''",6e3),setTimeout("text.innerHTML='I lossst my basketball!'",7e3),setTimeout("text.innerHTML=''",9e3),setTimeout("text.innerHTML='But I found new moves!'",1e4),setTimeout("text.innerHTML='';easteregg=lock=0;scene.style.transition='.8s';movesnake();checkapple()",13000)}},checkgrid=()=>{if(!ba&&null!==W){for(solved=1,i=0;i<ea;i++)for(ra=0;ra<ea;ra++)self[`g${X}-${i}-${ra}`]&&(self[`g${X}-${i}-${ra}`].style.background=Y[i][ra]?"#000":"#fff"),self[`w${X}-${i}-${ra}`]&&(self[`w${X}-${i}-${ra}`].style.background=Z[i][ra]?"#000":"#fff");if(!(E[D]<ca||E[D]>ca+ea-1||F[D]<da||F[D]>da+ea-1||0>G[D]||G[D]>ea-1)){for(i=0;i<I;i++)self[`g${X}-${F[D-i]-da}-${E[D-i]-ca}`]&&(self[`g${X}-${F[D-i]-da}-${E[D-i]-ca}`].style.background=Y[F[D-i]-da][E[D-i]-ca]?"#080":"#f00"),self[`w${X}-${ea-1-G[D-i]}-${E[D-i]-ca}`]&&(self[`w${X}-${ea-1-G[D-i]}-${E[D-i]-ca}`].style.background=Z[ea-1-G[D-i]][E[D-i]-ca]?"#080":"#f00"),(E[D-i]<ca||E[D-i]>ca+ea-1||F[D-i]<da||F[D-i]>da+ea-1||0>G[D-i]||G[D-i]>ea-1)&&(solved=0),$&&Y[F[D-i]-da]&&!Y[F[D-i]-da][E[D-i]-ca]&&(solved=0),_&&Z[ea-1-G[D-i]]&&!Z[ea-1-G[D-i]][E[D-i]-ca]&&(solved=0);for(i=0;i<ea;i++)for(ra=0;ra<ea;ra++)try{$&&3==self[`g${X}-${i}-${ra}`].style.backgroundColor.match(/0/g).length&&(solved=0),_&&3==self[`w${X}-${i}-${ra}`].style.backgroundColor.match(/0/g).length&&(solved=0)}catch(sa){}if(solved){for(ba=1,self["puzzle"+W].classList.remove("wrapvisible"),o[q+"puzzle"+ja+W]=1,i=0;i<ea;i++)for(ra=0;ra<ea;ra++)self[`g${X}-${i}-${ra}`]&&(self[`g${X}-${i}-${ra}`].style.background=Y[i][ra]?"#44c":"#fd0"),self[`w${X}-${i}-${ra}`]&&(self[`w${X}-${i}-${ra}`].style.background=Z[i][ra]?"#44c":"#fd0");fa++,o[q+"totalsolved"]=fa;var qa=1;for(var ra in T)T[ra][0]>=V[W][5]&&T[ra][0]<V[W][5]+V[W][0]&&T[ra][1]>=V[W][6]&&T[ra][1]<V[W][6]+V[W][0]&&(delete T[ra],qa++,setTimeout("self[\"cube"+ra+"\"].remove()",200*qa))}}}},checkapple=()=>{for(var qa in R)!o[q+"appleappeared"+ja+qa]&&(0<R[qa][3]&&R[qa][3]==I||0<R[qa][4]&&R[qa][4]==fa)&&(O=1,setTimeout(`scene.style.transform="translateX("+(-apples[`+qa+`][0]*sidesize)+"vh)translateY("+(-apples[`+qa+`][1]*sidesize)+"vh)translateZ(-5vh)rotateX(30deg)";
      
      L[P + "appleappeared"+pagename+"`+qa+`"] = 1;
      
      scene.style.transformOrigin=""+(apples[`+qa+`][0]*sidesize)+"vh "+(apples[`+qa+`][1]*sidesize)+"vh";

      // Show apple falling
      self["apple"+`+qa+`].className = "emoji apple";
      self["appleshadow"+`+qa+`].className = "emojishadow appleshadow";`,250),setTimeout("movesnake();lock=0",2e3))},onkeydown=pa=>{if(self["lurd************************l**r************l*d***u**u"[pa.which-37]]=1,(8==pa.which||18==pa.which)&&(B=1),16==pa.which&&(s=1),17==pa.which&&(c=1),ha=0,K&&M&&E[D]>=ca&&E[D]<ca+V[W][1]&&F[D]>=da&&F[D]<da+V[W][1]&&0<=G[D]&&G[D]<ea?(ha=1,!ga&&(ga=D-1)):ga=0,82==pa.which&&ha){if(ga<=D)for(var qa=ga;qa<=D;qa++)E.pop(),F.pop(),G.pop(),H.pop();return D=ga-1,ga=0,void movesnake()}if(116!=pa.keyCode&&82!=pa.keyCode&&17!=pa.keyCode&&123!=pa.keyCode&&pa.preventDefault(),K&&!O){if(ia=0,l)aa&&ha&&E[D]==ca?(checkmove(ca+ea-1,F[D],G[D]),!ia&&(E.push(ca+ea-1),F.push(F[D]),G.push(G[D]),H.push(Math.PI/2),D++)):(checkmove(E[D]-1,F[D],G[D]),!ia&&(E.push(E[D]-1),F.push(F[D]),G.push(G[D]),H.push(Math.PI/2),D++));else if(r)aa&&ha&&E[D]==ca+ea-1?(checkmove(ca,F[D],G[D]),!ia&&(E.push(ca),F.push(F[D]),G.push(G[D]),H.push(-Math.PI/2),D++)):(checkmove(E[D]+1,F[D],G[D]),!ia&&(E.push(E[D]+1),F.push(F[D]),G.push(G[D]),H.push(-Math.PI/2),D++));else if(N)aa&&ha&&F[D]==da?(checkmove(E[D],da+ea-1,G[D]),!ia&&(E.push(E[D]),F.push(da+ea-1),G.push(G[D]),H.push(Math.PI),D++)):(checkmove(E[D],F[D]-1,G[D]),!ia&&(E.push(E[D]),F.push(F[D]-1),G.push(G[D]),H.push(Math.PI),D++));else if(d)aa&&ha&&F[D]==da+ea-1?(checkmove(E[D],da,G[D]),!ia&&(E.push(E[D]),F.push(da),G.push(G[D]),H.push(0),D++)):(checkmove(E[D],F[D]+1,G[D]),!ia&&(E.push(E[D]),F.push(F[D]+1),G.push(G[D]),H.push(0),D++));else if((A||_)&&s){if(!ha){var ra=I-1;for(var qa in T)T[qa][0]==E[D]&&T[qa][1]==F[D]&&ra++;if(G[D]==ra)return}aa&&ha&&G[D]==ea-1?(checkmove(E[D],F[D],0),!ia&&(E.push(E[D]),F.push(F[D]),G.push(0),H.push(H[D]),D++)):(checkmove(E[D],F[D],G[D]+1),!ia&&(E.push(E[D]),F.push(F[D]),G.push(G[D]+1),H.push(H[D]),D++))}else(A||_)&&c?aa&&ha&&0==G[D]?(checkmove(E[D],F[D],ea-1),!ia&&(E.push(E[D]),F.push(F[D]),G.push(ea-1),H.push(H[D]),D++)):0==G[D]?ia=1:(checkmove(E[D],F[D],G[D]-1),!ia&&(E.push(E[D]),F.push(F[D]),G.push(G[D]-1),H.push(H[D]),D++)):B&&D>I&&(H.pop(),E.pop(),F.pop(),G.pop(),D--);if(!ia&&!v&&(N||r||d||l||s||c||B)&&(movesnake(),J&&K&&checkgrid(),movesnake(1),checkapple(),O||(O=1,setTimeout("lock=0",150)),"hub"==ja&&14<=I&&20==E[D]&&10==F[D])){O=1;var sa=0;for(qa=0;qa<I;qa++)sa--,setTimeout("snakex.push(snakex[head]);snakey.push(snakey[head]);snakez.push("+sa+");snakeangle.push(snakeangle[head]);head++;movesnake()",150*qa);setTimeout("location='editor.html'",100*qa),o[q+"snakex"]=20,o[q+"snakey"]=10}}},onkeyup=()=>{N=r=d=l=s=c=B=0}};