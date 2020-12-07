var obj = {"1":5,"2":7,"3":23,"4":4,"5":12,"6":45,"7":32,"8":56,"9":78,"10":98,"11":45,"12":32}
var result = Object.keys(obj).map((key) => [Number(key), obj[key]]);

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
}

const myObj = {}
var size = Object.size(obj);

var options = '';

//create options 
for(let i = 0; i < size; i++){
    console.log(Object.values(obj)[i]);
    options += '<option value="' + Object.values(obj)[i] + '"/>';
}


$("#browsers").append(options);
//insert options
//var my_list=document.getElementById("browsers");
//my_list.innerHTML = options;