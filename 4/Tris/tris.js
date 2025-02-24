var dim=3;
for(var r=0;r<dim;r++){
    for(var c=0;c<dim;c++){
        let id=String(r)+String(c);
        let cella=document.getElementById(id).parentElement;
        if(r==0) cella.style.borderTop="none";
        if(r==dim-1) cella.style.borderBottom="none";
        if(c==0) cella.style.borderLeft="none";
        if(c==dim-1) cella.style.borderRight="none";
    }
}
var table=[];
let g=-1;
let win=false, tie=false;
for(var r=0;r<dim;r++){
    table[r]=[];
    for(var c=0;c<dim;c++){
        table[r][c]=0;
    }
}
function inserisci(row,col){
    if(!win && !tie){
        if(g==-1) g=1; 
        else g=-1;
        if(table[row][col]==0){
            table[row][col]=g;
            disegna(row,col);
        }else return;
        if(check()) win=true;
        else if(checkparity()) tie=true;
        if(win || tie){
            if(g==1) s="O";
            else s="X";
            if(win)
                result="<h1>"+"Ha vinto il giocatore "+s+"!"+"</h1>";
            else
                result="<h1>"+"Pareggio"+"</h1>";
            document.getElementById("risultato").innerHTML=result;
        }
    }
}
function check(){
    return checkwin_hori()||checkwin_vert()||checkwin_diag();
}
function disegna(r,c){
    let id=String(r)+String(c);
    if(g==1){
        document.getElementById(id).innerHTML = "O";
        document.getElementById(id).style.color = "aliceblue";
    }else{
        document.getElementById(id).innerHTML = "X";
        document.getElementById(id).style.color = "aliceblue";
    }
}
function checkparity(win){
    for(var r=0;r<dim;r++)
        for(var c=0;c<dim;c++){
            if(table[r][c]==0) return false;
        }
    return true;
}
function checkwin_hori(){
    var len;
    for(var i=0;i<dim;i++){
        len=0;
        for(var j=0;j<dim;j++){
            if (table[i][j]==g){
                len++;
                if(len==3) return true;
            }else
                len=0;
        }
    }
    return false;
}
function checkwin_vert(){
    var len;
    for(var i=0;i<dim;i++){
        len=0;
        for(var j=0;j<dim;j++){
            if(table[j][i]==g){
                len++;
                if(len==3) return true;
            }else
                len=0;
        }
    }
    return false;
}
function checkwin_diag(){
    var len1=0,len2=0;
    for(var i=0;i<dim;i++){
        if(table[i][i]==g){
            len1++;
            if(len1==3) return true;
        }else
            len1=0;
        if(table[i][dim-1-i]==g){
            len2++;
            if(len2==3) return true;
        }else
            len2=0;
    }
    return false;
}
