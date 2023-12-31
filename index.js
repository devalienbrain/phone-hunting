const loadingSpinner = document.getElementById('loading-spinner');

function showMatchedPhones(isShowAll){
  const searchText = document.getElementById('search-text').value;

  loadingSpinner.classList.remove('hidden');

fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
  .then(res => res.json())
  .then(apiAllData => showPhones(apiAllData, isShowAll))  
}

function showPhones(apiAllData, isShowAll) {
  // console.log(apiAllData);
  loadingSpinner.classList.add('hidden');
  let allData = apiAllData.data;
  const totalData = allData.length;
  const showAllBtn = document.getElementById('show-all-btn');
  const showAllPhones = document.getElementById('show-all-phones');

  if (totalData === 0){
showAllPhones.textContent='NO DATA FOUND!!!';
document.getElementById('search-text').value = '';
return;
}

  if(totalData>10 && !isShowAll){
    const showTenData = allData.slice(0,10);
    allData = showTenData;
    showAllBtn.parentNode.classList.remove('hidden');
  }
  else{
    showAllBtn.parentNode.classList.add('hidden');
    document.getElementById('search-text').value = '';
  }
  
  showAllPhones.textContent='';
  for (const data of allData) {
    const phoneDiv = document.createElement('div');
    phoneDiv.innerHTML = `  <div class="card bg-col-primary shadow-xl">
    <figure class="px-10 pt-10">
      <img src="${data.image}" alt="Shoes" class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">${data.phone_name}</h2>
      <p>There are many variations of passages</p>
      <div class="card-actions">
        <button onclick="showModals('${data.slug}')" class="btn btn-primary">Show Details</button>
      </div>
    </div>
  </div>
`;
 showAllPhones.appendChild(phoneDiv);
 }
}

function showAllItems(){
showMatchedPhones(true);
}


// show modals
function showModals(id){
 
fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
  .then(res => res.json())
  .then(showModalData => setToShowModalData(showModalData))

  document.getElementById('name').innerText = id;

  const showDetailsModal = document.getElementById('show-details-modal');
 showDetailsModal.showModal();
}

function setToShowModalData(showModalData){

  document.getElementById('modal-image').innerHTML=`<img class="p-5" src="${showModalData.data.image}" alt="" srcset="">`;

  document.getElementById('storage').innerText = showModalData.data.mainFeatures.storage;

  document.getElementById('display-size').innerText = showModalData.data.mainFeatures.displaySize;
  
  document.getElementById('chipset').innerText = showModalData.data.mainFeatures.chipSet;
  
  document.getElementById('memory').innerText = showModalData.data.mainFeatures.memory;
  
  document.getElementById('slug').innerText = showModalData.data.slug;
  
  document.getElementById('release-data').innerText = showModalData.data.releaseDate;
  
  document.getElementById('brand').innerText = showModalData.data.brand;
  
  document.getElementById('gps').innerText = showModalData.data.others.GPS;
}