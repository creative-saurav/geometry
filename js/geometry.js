
function inputFieldId(elementId){
    const inputField = document.getElementById(elementId);
    const inputString = inputField.value ;
    const input = parseFloat(inputString);
    return input;
}
function setValue(element , newValue){
    const value = document.getElementById(element);
    value.innerText = newValue;
}

function calculateTriangle(){
  const base = inputFieldId('triangle-base');
  const height = inputFieldId('triangle-height');
  if(isNaN(base)|| isNaN(height)){
    alert("Please enter a number");
    return;
  }
  const logic = 0.5 * base * height;
  setValue('result', logic);
}
function calculateRectangle(){
  const width = inputFieldId('rectangle-width');
  const length = inputFieldId('rectangle-length');

  if(isNaN(width)|| isNaN(length)){
    alert("Please enter a number");
    return;
  }
  const area = width *  length;
  setValue('resultRectangle', area);
  addTocalculationEntry('Rectangle' ,area);
}
 function addTocalculationEntry(areaType, area){
      const entryAdd = document.getElementById('calculationEntry');
      const p = document.createElement('p');
      const count = entryAdd.childElementCount;
      p.classList.add('py-2');
      p.innerHTML = `${count + 1} ${areaType} ${area} cm <sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;
      entryAdd.appendChild(p);
     

 }