const loadProduct=async()=>{
  const rest=  fetch(`https://openapi.programming-hero.com/api/videos/categories`)
     const data=await (await rest).json();
     const singleData=data.data;
    //  console.log(singleData);
     displayButton(singleData);
     catagoryId(singleData)
}
const displayButton=(button)=>{
    // console.log(button);
    const fourButton=document.getElementById('fourButton');
    button.forEach((element) => {
        const div=document.createElement('div');
        div.innerHTML=`
        <button onclick="catagoryId('idd')" class="btn btn-ghost tab tab-active">${element.category} </button>
        `
        fourButton.appendChild(div)
    });
}
const catagoryId = async (idd) => {
    console.log(idd);
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${idd}`);
    const data = await response.json();
    const singleData = data.data;
    console.log(singleData);
  
    const displayProduct = document.getElementById('displayProduct');
    // displayProduct.innerText='';    
  
    singleData.forEach((product) => {
      const div = document.createElement('div');
      div.innerHTML = `
      <div>
      <div class="relative">
        <div>
          <figure><img class="h-80 w-full rounded-md" src="${product.thumbnail}" alt="" /></figure>
        </div>
        <div class="absolute bottom-0 right-0 text-white bg-black">
          <p>fgbdfgbf</p>
        </div>
      </div>
      <div class="flex">
        <div>
          <img class="w-10 h-10 rounded-full mt-7 ml-3" src="" alt="">
        </div>
        <div>
          <div class="card-body text-left">
            <h2 class="card-title">ok</h2>
            <div class="flex items-center gap-3">
              <p>nhgnfghn</p>
            //   
            </div>
            <p>cdswdv views</p>
          </div>
        </div>
      </div>
    </div>
      `;
      displayProduct.appendChild(div);
    });
  }
  const loadProducts = async () => {
    const rea = await fetch(`https://openapi.programming-hero.com/api/videos/category/1000`);
    const data = await rea.json();
    const product = data.data;
  }
  
loadProduct();
catagoryId(1000)
