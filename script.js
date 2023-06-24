function areJsonEqual(obj1, obj2) {
    let sortedobj1 = JSON.stringify(Object.keys(JSON.parse(obj1)).sort());
    let sortedobj2 = JSON.stringify(Object.keys(JSON.parse(obj2)).sort());
    return sortedobj1 === sortedobj2;
  }
  
  let obj1 = '{"name":"person1", "age": 5}';
  let obj2 = '{"age": 5, "name": "person1"}';
  
  console.log(areJsonEqual(obj1, obj2)); 
  


  var request=new XMLHttpRequest();
  request.open("GET","https://restcountries.com/v2/all");
  request.send();
  request.onload=function(){
      var result=JSON.parse(request.response);
      console.log(result);
     for (var i=0;i<result.length;i++){
         console.log(result[i].flag);
          console.log(result[i].name);
          console.log(result[i].region);
          console.log(result[i].subregion);
          console.log(result[i].population);
      }
  }
