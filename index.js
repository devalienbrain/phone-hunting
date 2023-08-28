fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
  .then(res => res.json())
  .then(apiAllData => {
    // console.log(apiData);
    showPhones(apiAllData);
  });

function showPhones(apiAllData) {
  // console.log(apiAllData.data);
  const allData = apiAllData.data;
  const showAllPhones = document.getElementById('show-all-phones');
  for (const data of allData) {
    // console.log(data.phone_name);
    const phoneDiv = document.createElement('div');
    phoneDiv.innerHTML = `  <div class="card w-96 bg-col-primary shadow-xl">
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

