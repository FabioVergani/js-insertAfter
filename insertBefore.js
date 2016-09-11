function insertBefore(x,a){
	const n=a,p=n.parentElement;
	if(p){return p.insertBefore(x,n);};
}
