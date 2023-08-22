async function fetchData(){
    const dataJSON = await fetch('https://swapi.dev/api/people');

    const data = await dataJSON.json();
    console.log(data);

    resultDIV = document.querySelector('#results')

    let output = ''

    data.results.forEach(character=>{
        output += `<div class = " text-center card p-3 m-3" style="opacity:.8" style="max-width: 100%">
        <div >
        <img src="./photo/${character.name}.jpeg" 
        class="img-fluid "  />
        </div>
        <button class=" card-title text-center characterName">${character.name}</button>

                    <div class="card-content collapse characterInfo">

                        <span style="text-decoration:underline">Name</span>: ${character.name}<br>

                        <span style="text-decoration:underline">Gender</span>: ${character.gender}<br>

                        <span style="text-decoration:underline">Height</span>: ${character.height}<br>

                        

                    </div>
        </div>`

     
    })

    console.log("image  ",output)
   resultDIV.innerHTML = output; 


   const characterName = document.querySelectorAll('.characterName')
   const characterInfo = document.querySelectorAll('.characterInfo')

   characterName.forEach((name, i)=>{
    name.addEventListener('click', ()=>{
        if(characterInfo[i].classList.contains('collapse')) characterInfo[i].classList.remove('collapse')
       else characterInfo[i].classList.add('collapse')
    })
       
       

   })

}

fetchData();