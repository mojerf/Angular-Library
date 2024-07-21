const liElements = document.querySelectorAll('#container .child');
const container = document.querySelector('#container');

liElements.forEach((li,index)=>{
    if(index % 2 == 0){
        const aTag = document.createElement('a');
        aTag.style.color = 'red'
        aTag.innerText = 'link'
        console.log(index);
        li.append(aTag)
        li.className = 'child'
    }else{
        container.removeChild(li)
    }
})