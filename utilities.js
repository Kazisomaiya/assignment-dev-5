function addInt(id){
   const string = document.getElementById(id).innerText;
   const integer = parseInt(string);
    taskAdd = integer + 1;
   document.getElementById('task-add').innerText= taskAdd;
}
function minusInt(id){
   const string = document.getElementById(id).innerText;
   const integer = parseInt(string);
    taskMin = integer - 1;
   document.getElementById('task-minus').innerText= taskMin;
   if(taskMin === 0){
      alert('Board updated successfully')
      alert('Congrates!!!! You have completed all the current task ')
   }
}
function test(){
   console.log('Bismillah')
}

