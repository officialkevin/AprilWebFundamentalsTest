
var geeksterlist = ['geek', 'geeky','geekster'];
for(let i=0;i<geeksterlist.length;i++){
    if(geeksterlist[i]=='geekster')
    {   
      
        for( let p=i;p<geeksterlist.length-1;p++){
            geeksterlist[p]=geeksterlist[p+1];
        }
    }
}
geeksterlist.pop();
console.log("therefore geekster list is removed "+geeksterlist);