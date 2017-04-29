//first template
var dropTemplate = document.querySelector('#dropTemplate');
var temp = Handlebars.compile(dropTemplate.innerHTML);
var display = document.querySelector('#display')

//second template
var viewTemplate = document.querySelector('#viewTemplate');
var viewTem = Handlebars.compile(viewTemplate.innerHTML);
var output = document.querySelector('#output');
var button = document.querySelector('#view')

//add button
var addButton = document.getElementById('add')

var areaList = [
  {
  street : 'Wellington',
  number  : 15854,
  area : 'Bloekombos'
},
{
  street : 'Masoka',
  number : 16402,
  area : 'Bloekombos'
},

{
  street : 'Zanele',
  number : 18564,
  area : 'Walacdene'
},
{
  street : 'Juda',
  number : 20165,
  area : 'Walacdene'
},
];

var streets = [];
function street(){
var streetMap = {};
for(var i = 0; i < areaList.length; i++){
  var area = areaList[i]
  if(streetMap[area.street] === undefined){
    streetMap[area.street] = area.street
    streets.push(area.street);
  }
}
return streets;
};

//------function that calls its self------//
// (function (){
//   var streetList = street();
//
//   var result = temp ({streetKey:streets});
//   display.innerHTML = result;
//
// }) ();

function streetDrop(){
  var streetList = street();

  streets.sort(function(a,b){
  return a - b;
    });
    var result = temp ({streetKey:streets});
    display.innerHTML = result;
}
streetDrop();


button.addEventListener('click', function(){

var results = viewTem ({areaList : areaList});
output.innerHTML = results;

});

//filtering
function myFunction(){
var streetValue = document.querySelector('#myStreet')
streetValue.value
streetFilter = [];

for (var i =0; i < areaList.length; i++){
  var areaLi = areaList[i]
  if(areaLi.street === streetValue.value){
    streetFilter.push(areaLi)
  }
}
var results = viewTem ({areaList : streetFilter});
output.innerHTML = results;

}

areaMap = {};
addButton.addEventListener('click', function(){
var street = document.getElementById('street');
var area = document.getElementById('area');
var number = document.getElementById('number');

var streetName = street.value
var areaName = area.value
var numberName = number.value

name ={
  area : areaName,
  street : streetName,
  number : numberName
};
areaList.push(name);

console.log(areaList)
if(!streetName == ''){
  var name = areaMap[streetName]
  if(name = undefined){
    name ={
      area : areaName,
      street : streetName,
      number : numberName
    };

    areaMap[streetName] = name;
  }
  else {

  }
}

var results = viewTem ({areaList : areaList});
output.innerHTML = results;

// var result = temp ({streetKey:streets});
// display.innerHTML = result;
streetDrop();
});
