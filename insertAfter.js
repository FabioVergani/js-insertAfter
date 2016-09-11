function insertAfter(x,a){
 let n=a;
 const e=x,p=n.parentElement;
 if(p){return (n=n.nextSibling)?p.insertBefore(e,n):p.appendChild(e);};
}
