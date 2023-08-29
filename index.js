function showMatchedPhones(){
  let searchText = document.getElementById('search-text').value;
  document.getElementById('search-text').value = '';
fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
  .then(res => res.json())
  .then(apiAllData => showPhones(apiAllData))
  
}

function showPhones(apiAllData) {
  // console.log(apiAllData.data);
  const allData = apiAllData.data;
  const showAllPhones = document.getElementById('show-all-phones');
  showAllPhones.textContent='';
  for (const data of allData) {
    // console.log(data.phone_name);
    const phoneDiv = document.createElement('div');
    phoneDiv.innerHTML = `  <div class="card bg-col-primary shadow-xl">
    <figure class="px-10 pt-10">
      <img src="${data.image}" alt="Shoes" class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">${data.phone_name}</h2>
      <p>There are many variations of passages of available, but the majority have suffered</p>
      <div class="card-actions">
        <button class="btn btn-primary">Show Details</button>
      </div>
    </div>
  </div>
`;
 showAllPhones.appendChild(phoneDiv);
 }
}

