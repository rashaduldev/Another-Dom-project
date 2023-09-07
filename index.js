const loadCatagory = async () => {
    const rea = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
    const data = await rea.json();
    const catagory = data.data;
    console.log(catagory);
    displayCatagory(catagory);
  
  }

  const displayCatagory=(catagory)=>{
    console.log(catagory);
    const fourButton=document.getElementById("fourButton");
    // fourButton.innerText='';
    catagory.forEach(cat => {
        const div=document.createElement('div')

        div.innerHTML=`
        <button onclick="catagoryId('${cat.category_id}')" class="btn btn-ghost tab tab-active"> ${cat.category}</button>
        `

        fourButton.appendChild(div);

    });
    // defaltid();

  }



  const displayProduct=async()=>{
    const rea = await fetch(`https://openapi.programming-hero.com/api/videos/category/1000`);
    const data = await rea.json();
    const catagory = data.data;
    console.log(catagory);

    const displayProduct=document.getElementById("displayProduct");


    catagory.forEach(catt=>{
        const div=document.createElement('div')
        div.innerHTML= `
        <div class="card bg-base-100 shadow-xl">
  <figure class="">
    <img src="${catt.thumbnail}" alt="Shoes" class="rounded-xl h-64 w-full" />
  </figure>
  <div class="card-body">
   <div class="flex gap-4">
        <div class=""><img src="${catt.authors[0].profile_picture}" alt="Shoes" class="rounded-full h-10 w-10" /></div>
        <div>
        <h2 class="card-title mb-3">${catt.title}</h2>
       <div class="flex items-center gap-5">
       <p>${catt.authors[0].profile_name}</p>
      
       ${catt.authors[0].verified?`<i class="fa-solid fa-circle-check"></i>`:''}
       
       </div>
        <p>${catt.others.views}</p>
        </div>
  
   </div>
  
   
  </div>
</div>
        `
        displayProduct.appendChild(div);
    })
    // displayCatagory(catagory);
  }


  displayProduct();
  loadCatagory();


  const catagoryId=async(catagoryId)=>{
    console.log(catagoryId);
    const rea = await fetch(`https://openapi.programming-hero.com/api/videos/category/${catagoryId}`);
    const data = await rea.json();
    const catagory = data.data;
    // console.log(catagory);

    

  }
  catagoryId();