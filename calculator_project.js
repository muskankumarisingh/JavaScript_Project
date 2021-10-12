function display(a){
    document.getElementById("screen").value+=a;
}
function solve(){
    let x=document.getElementById("screen").value;
    let y=eval(x);
    document.getElementById("screen").value=y;
}
function remove(){
    document.getElementById("screen").value="";

}