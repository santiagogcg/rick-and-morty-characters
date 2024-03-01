
const ulDOM=document.getElementById('character-list');
const botonPre=document.getElementById('prev-page');
const botonNext=document.getElementById('next-page');

let i=0;
                
    
function navegar(i){

        fetch(' https://rickandmortyapi.com/api/character/?page='+i)
        .then(res=>{
            return res.json();
        })
        .then((data)=> {
        
            data.forEach((element) => {
                const li1DOM=document.createElement("li")
                const li2DOM=document.createElement("li")
                const li3DOM=document.createElement("li")
                
        
                li1DOM.innerText(`$(element.name)`)
                li2Dom.innerText(`$(element.species)`)
                li3Dom.innerText(`$(element.image)`)
        
                ulDOM.appendChild(li1DOM)
                ulDOM.appendChild(li2DOM)
                ulDOM.appendChild(li3DOM)
                
            });
                
                
            })
        
        
}
        


botonNext.addEventListener('click',(navegar)=>{

})

