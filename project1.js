var user=prompt("enter your any link");
var a=document.links;
for(var i =0;i<a.length;i++){
    if(a[i].text==user){
        console.log(a[i]);
    }
}

//i created this link......  <a target="_blank" href="https://merakilearn.org/">MERAKI</a>