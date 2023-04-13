function areJsonEqual(json1, json2) {
    const sortedJson1 = JSON.stringify(Object.keys(JSON.parse(json1)).sort());
    const sortedJson2 = JSON.stringify(Object.keys(JSON.parse(json2)).sort());
    return sortedJson1 === sortedJson2;
  }
  
  const json1 = '{"name": "John", "age": 30}';
  const json2 = '{"age": 30, "name": "John"}';
  
  console.log(areJsonEqual(json1, json2)); // true
  