// connection main page to seccond page
document.getElementById('next-page').addEventListener('click', function(){
    window.location.href='second.html'
})

// first box
document.getElementById('fix-btn1').addEventListener('click', function(){
    alert('Board updated successfully');
    this.style.backgroundColor = "lightGray"; 
    this.disabled = true;
    addInt('task-add')
    minusInt('task-minus');
    const newTime = new Date();
    const timeString = newTime.toLocaleTimeString();
    const heading = document.getElementById('heading1').innerText;
    const p = document.createElement('p')
    p.style.backgroundColor='lightblue'

    p.innerText = `You have completed the task ${heading} at ${timeString}`
    const hisCollection = document.getElementById('history');
    hisCollection.appendChild(p);
       
})
// second box
document.getElementById('fix-btn2').addEventListener('click', function(){
    alert('Board updated successfully');
    this.style.backgroundColor = "lightGray"; 
    this.disabled = true;
    addInt('task-add')
    minusInt('task-minus');
    const newTime = new Date();
    const timeString = newTime.toLocaleTimeString();
    const heading = document.getElementById('heading2').innerText;
    const p = document.createElement('p')
    p.style.backgroundColor='lightblue'

    p.innerText = `You have completed the task ${heading} at ${timeString}`
    const hisCollection = document.getElementById('history');
    hisCollection.appendChild(p);
       
})
// third box
document.getElementById('fix-btn3').addEventListener('click', function(){
    alert('Board updated successfully');
    this.style.backgroundColor = "lightGray"; 
    this.disabled = true;
    addInt('task-add')
    minusInt('task-minus');
    const newTime = new Date();
    const timeString = newTime.toLocaleTimeString();
    const heading = document.getElementById('heading3').innerText;
    const p = document.createElement('p')
    p.style.backgroundColor='lightblue'

    p.innerText = `You have completed the task ${heading} at ${timeString}`
    const hisCollection = document.getElementById('history');
    hisCollection.appendChild(p);
       
})
// fourth box
document.getElementById('fix-btn4').addEventListener('click', function(){
    alert('Board updated successfully');
    this.style.backgroundColor = "lightGray"; 
    this.disabled = true;
    addInt('task-add')
    minusInt('task-minus');
    const newTime = new Date();
    const timeString = newTime.toLocaleTimeString();
    const heading = document.getElementById('heading4').innerText;
    const p = document.createElement('p')
    p.style.backgroundColor='lightblue'

    p.innerText = `You have completed the task ${heading} at ${timeString}`
    const hisCollection = document.getElementById('history');
    hisCollection.appendChild(p);
       
})
// 5th box
document.getElementById('fix-btn5').addEventListener('click', function(){
    alert('Board updated successfully');
    this.style.backgroundColor = "lightGray"; 
    this.disabled = true;
    addInt('task-add')
    minusInt('task-minus');
    const newTime = new Date();
    const timeString = newTime.toLocaleTimeString();
    const heading = document.getElementById('heading5').innerText;
    const p = document.createElement('p')
    p.style.backgroundColor='lightblue'

    p.innerText = `You have completed the task ${heading} at ${timeString}`
    const hisCollection = document.getElementById('history');
    hisCollection.appendChild(p);
       
})
// 6th box
document.getElementById('fix-btn6').addEventListener('click', function(){
    alert('Board updated successfully');
    this.style.backgroundColor = "lightGray"; 
    this.disabled = true;
    addInt('task-add');
    minusInt('task-minus');
    const newTime = new Date();
    const timeString = newTime.toLocaleTimeString();
    const heading = document.getElementById('heading6').innerText;
    const p = document.createElement('p')
    p.style.backgroundColor='lightblue'

    p.innerText = `You have completed the task ${heading} at ${timeString}`
    const hisCollection = document.getElementById('history');
    hisCollection.appendChild(p);
    
       
})
document.getElementById('clear-btn').addEventListener('click', function(){
    const clearAll = document.getElementById('history');
    clearAll.innerText = '' ;
})


