  for(i=0;i<qnum;i++){
    //...criando cada bola ...
    var x = document.createElement("DIV");
    //...e a caixa dentro das bolas para formatação;;;
    var p = document.createElement("DIV");
    //...e finalmente o texto.
    var t = document.createTextNode(principal[i]);
    
    //estilizando
    x.setAttribute("style", "text-align:center;background-color: #cdcdcd;height:50px;width:50px;border-radius:100%;float:left;margin:10px;");
    p.setAttribute("style", "background-color: #cdcdcd;height:10px;width:10px;border-radius:00%;float:left;position:relative;top:12px;left:18px;vertical-align:+15px;");
    //Montando o conjunto.
    ext.appendChild(x);
    x.appendChild(p);
    p.appendChild(t);
    document.getElementById("ext").appendChild(ext);}
 

}
/******************************************************************************/
function megaSena(){
  //Escolhendo a quantidade de jogos...
  document.getElementById("ext").innerHTML="";
  qjog = document.getElementById("qjog").value;
  for(n=1;n<=qjog;n++){jindividual(60);}
}

/******************************************************************************/
//Reset
function resetar(){
  document.getElementById("ext").innerHTML="";
  document.getElementById("qjog").value="4";
  document.getElementById("qnum").value="6";
  }
