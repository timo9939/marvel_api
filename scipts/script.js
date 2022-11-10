let characterName=document.getElementById("character-name")
let characterNameDisplay=""
let characterDiscription=document.getElementById("character-description")
let characterDiscriptionDisplay=""
let characterPhoto=document.getElementById("character-photo")
let characterPhotoLink=""

let searchBtn=document.getElementById("searchBtn")
let searchBarInput=document.getElementById("searchBarInput");

//const searchBarInput2=searchBarInput.value


console.log("searchBarInput: "+searchBarInput)

alert("js starting point work")
function search(event){
    event.preventDefault()
    console.log("searchBarInput: "+searchBarInput.value)

    fetch("https://gateway.marvel.com/v1/public/characters?nameStartsWith="+searchBarInput.value+"&ts=1&apikey=c6c410f564a7361717294de109f25d9a&hash=bb8d62d7bf94d0ca3c9a989e86a12dda")
.then(function (response){
    return response.json()
} )

.then(function (data)
{   alert("Extracting Data function work")
    
   const name_loop=data.data.count
   console.log(data)
   console.log("name_loop is "+name_loop)
    for(i=0;i<name_loop-1;i++){
       


        console.log("name_for_loop runs normally")
        //console.log(data.data.results[i])
        console.log(data.data.results[i].name)
        console.log(data.data.results[i].thumbnail.path)
        console.log(data.data.results[i].description)

        characterNameDisplay=[]
        characterNameDisplay[i]=document.createElement("h1")
        characterNameDisplay[i]=data.data.results[i].name
        characterName.append(characterNameDisplay)

        // characterPhotoLink=[]
        // characterPhotoLink[0]=document.createElement("p")
        // characterPhotoLink[0]=data.data.results[0].thumbnail.path
        // photo1 =  window.location.href="characterPhotoLink[0]" 
        // characterPhoto.append(characterPhotoLink)
       


        characterDiscriptionDisplay=[]
        characterDiscriptionDisplay[i]=document.createElement("h2")
        characterDiscriptionDisplay[i]=data.data.results[i].description
        characterDiscription.append(characterDiscriptionDisplay)

       

        console.log("characterNameDisplay: "+characterNameDisplay)
        console.log("name_for_loop runs normally")
        
      //   return(
      // <div class="columns pt-6">
      // <div class="column">
      //   <div class="card">
      //   <div class="card-content">
      //     <div class="has-text-centered">
      //       <span class="icon is-size-1 py-6 ny-3">
      //         <i class="fas fa-code"></i>
      //       </span>
      //     </div>
      //     <p class id="characterName[i]" ="title is-4">
      //       Name
      //     </p>
      //     <div class="content">
      //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, provident? Laboriosam nobis nihil mollitia magnam hic velit reprehenderit at, laudantium perferendis veniam aspernatur quam ex consequuntur nemo harum maiores rerum.
      //     </div>
      //   </div>
      //   <footer class="card-footer">
      //     <a href="#" class="card-footer-item">Learn more</a>
      //   </footer>
      //   </div>
      // </div>)
        
        

    }
})      
}      


searchBtn.addEventListener("click",search)



