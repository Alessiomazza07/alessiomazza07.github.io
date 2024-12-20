var created=false;
function apri(input){
  if(!created){
    created=true;
    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    let m=[];
    reader.onload = function(){
    let content=reader.result;
    let v=content.split("\n");
    for(let i=0;i<v.length;i++){
      m[i]=v[i].split(",");
    }
    let container=document.getElementById("container");
    let table=document.createElement("table");
    table.className="table";
    for(let r=0;r<m.length;r++){
      let tableRow=document.createElement("tr");
      for(let c=0;c<m[0].length;c++){
        if(r==0){
          tableCol=document.createElement("th");
          if(c==0)
            tableCol.className="top-left";
          else if(c==m[0].length-1)
            tableCol.className="top-right";
        }else{
          tableCol=document.createElement("td");
          if(r==m.length-1)
            if(c==0)
              tableCol.className="bottom-left";
            else if(c==m[0].length-1)
              tableCol.className="bottom-right";
        }
        let data=m[r][c].substring(1,m[r][c].length-1);
        tableCol.innerText=data;
        tableRow.append(tableCol);
      }
      table.append(tableRow);
    }
    container.append(table);
    const xValues = [];
    const yValues = [];
    for(let i=1;i<m.length;i++){
        xValues[i-1]=parseInt(m[i][0].substring(1,m[i][0].length-1));
        yValues[i-1]=parseInt(m[i][1].substring(1,m[i][1].length-1));
    }
    let grafico = document.getElementById("myChart");
    new Chart(grafico, {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            pointRadius: 2,
            label: 'MIGRANTI ANNUI',
            fill: false,
            backgroundColor:"rgba(0,0,255,1.0)",
            borderColor: "rgba(0,0,255,0.5)",
            data: yValues
        }]
    },
    options: {}
    });
    }
  }else{
    let table=document.querySelector("table.table");
    table.remove();
    created=false;
    apri(input);
  }
}
