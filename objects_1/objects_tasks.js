let user=new Object();
user.name="john";
user.surname="smith";
user.name="Pete";
delete user.name;

function isEmpty(obj){
    for(key in obj) {
        return false;
    }
    return true;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum=0;
for( key in salaries){
    sum+=salaries[key];
}
// console.log(sum)

function multiplyNumeric(obj){
    for(key in obj){
        if (typeof obj[key] =='number'){
            obj[key]*=2
        }
    }
    console.log(obj)
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
multiplyNumeric(menu);