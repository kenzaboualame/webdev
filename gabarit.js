/*

let x=3;
let y=2;
console.log(`La somme de ces deux nombre est : 
	           ${x+y}`);*/
/*let rep=prompt(`donnez une note`);
Number.parseInt(rep);
if (rep>14) 
	console.log(`bien `);
 else if (rep==10)
 	console.log(`passable`);
 else if(rep<10)
 	console.log(`échoué `);


console.log(rep);*/
/*function somme(a,b){
	if(Number.isInteger(a) && Number.isInteger(a)){
     

	console.log(a+b);
}
else console.log(0);

}
somme(2,3);
/*let a , b,s;
	
Number.parseInt(a);
Number.parseInt(b);

a=prompt("donner un nomber ");
b=prompt("donner un  nomber ");

s=somme(a,b);
console.log(`la somme de deux nombres est : ${s}`);*/
/*let f=function(a,b){
	console.log(a+b);
}(2,5);*/
/*let personne={
	nom:"el hamidi",
	age:21,
	direbonjour : function(){console.log("bonjour");},
	prenom : "maroua"
};*/

/*class Vecteur{
	constructor(x,y){
		this.x=x;
		this.y=y;
	}
}

*/
/*function vect(x,y){
	this.x=x;
	this.y=y;
};
vect  .prototype.module = function() {
	return Math.sqrt((this.x*this.x)+(this.y*this.y));
}; 
vect .prototype.egale = function(v){
    
    return (this.x==v.x && this.y==v.y);
};


let v1=new vect(2,4);
let v2=new vect(3,4);
console.log(v1.module());
console.log(v2.module());
console.log(v1.egale(v2));
*/


class Vecteur {
constructor(x,y){
	this.x=x;
	this.y=y;
}
   module() {
	return Math.sqrt((this.x*this.x)+(this.y*this.y));
}
 egale(v){
    
    return (this.x==v.x && this.y==v.y);
}

}



let v1=new vect(2,4);
let v2=new vect(3,4);
console.log(v1.module());
console.log(v2.module());
console.log(v1.egale(v2));










































