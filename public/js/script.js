let log = console.log

let trs = document.querySelectorAll('tr')
let input = document.querySelector('input')

input.addEventListener('input', (event)=>{
    
    trs.forEach(tr =>{
        let tds = tr.children
        let esconder = true
        
        for(let i = 0; i < tds.length; i++){
             if(tds[i].textContent.includes(input.value)){
                 esconder = false
                 break;
             }
        }
        
        if(esconder){
            if(tr.classList==''){
                tr.classList.add('invisivel')
            }
            
        } else {
            if(tr.classList=='invisivel'){
                tr.classList.remove('invisivel')
            }
        }
     })


})
