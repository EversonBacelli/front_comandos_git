let log = console.log

let trs = document.querySelectorAll('tr')
let input = document.querySelector('input')

input.addEventListener('input', (event)=>{
    
    for (let index = 1; index < trs.length; index++) {
        const tr = trs[index];
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
    }
})
