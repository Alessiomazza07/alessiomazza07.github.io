let rows=6, cols=7, table=[], g=-1, vittoria=false, tie=false;
for(var r=0;r<rows;r++){
    table[r]=[];
    for(var c=0;c<cols;c++){
        table[r][c]=0;
    }
}
function inserisci(col){
    if(!vittoria && !tie){
        if(g==-1)
            g=1; 
        else
            g=-1;
        for(let r=rows-1;r>-1;r--)
            if(table[r][col]==0){
                table[r][col]=g;
                colora(r,col);
                break;
            }
        let check = checkwin_hori()||checkwin_vert()||checkwin_diag();
        let par = checkparity(check);
        if(check) vittoria = true;
        else if(par) tie=true;
        if(vittoria || tie){
            if(g==1) s="rosso";
            else s="giallo";
            if(vittoria)
                result="<h1>"+"Ha vinto il giocatore "+s+"!"+"</h1>";
            else
                result="<h1>"+"Pareggio"+"</h1>";
            document.getElementById("risultato").innerHTML=result;
        }
    }
}
function checkparity(win){
    for(var i=0;i<cols;i++)
        if(table[0][i]==0) return false;
    if(!win)
        return true;
    return false;
}
function colora(r,c){
    let id=String(r)+String(c);
    if(g==1){
        document.getElementById(id).style.backgroundColor = "red";
    }else{
        document.getElementById(id).style.backgroundColor = "yellow";
    }
}
function checkwin_hori(){
    var len=0;
    for(var i=0;i<rows;i++){
        len=0;
        for(var j=0;j<cols;j++){
            if (table[i][j]==g){
                len++;
                if(len>=4)
                    return true;
            }else
                len=0;
        }
    }
    return false;
}
function checkwin_vert(){
    var len;
    for(var i=0;i<cols;i++){
        len=0;
        for(var j=0;j<rows;j++){
            if (table[j][i]==g){
                len++;
                if(len>=4)
                    return true;
            }else
                len=0;
        }
    }
    return false;
}
function checkwin_diag(){
    for(var dir=-1;dir<2;dir+=2)
        for(var i=0;i<rows-3;i++){
            x=Math.round(1.5*(dir+1))
            for(var j=x;j<4+x;j++)
                for(var w=0;w<4;w++){
                    if(table[i+w][j+(w*(-1)*dir)]!=g)
                        break;
                    if(w==3) return true;
                }
        }
    return false;
}
