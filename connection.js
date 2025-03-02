// current date
const newDate = new Date();
const dateString = newDate.toDateString();
const p = document.createElement('p');
p.innerText = dateString;
const dateUpdate = document.getElementById('date-update')
dateUpdate.appendChild(p)

// multiple background colors
const colorArray = ['lightBlue', 'lightGreen', 'violet', 'lightPink', 'lightgray']
let i = 0;
document.getElementById('theme-btn').addEventListener('click', function(){
    

    document.body.style.backgroundColor= colorArray[i];
    i += 1;
    if(i===colorArray.length){
        i = 0; 
    }

})