function areJsonEqual(json1, json2) {
    const sortedJson1 = JSON.stringify(Object.keys(JSON.parse(json1)).sort());
    const sortedJson2 = JSON.stringify(Object.keys(JSON.parse(json2)).sort());
    return sortedJson1 === sortedJson2;
  }
  
  const json1 = '{"name":"person1", "age": 5}';
  const json2 = '{"age": 5, "name": "person1"}';
  
  console.log(areJsonEqual(json1, json2)); 
  
