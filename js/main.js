const searchText = () => {

    const searchField = document.getElementById('search-field');
    
    const searchFieldText = searchField.value;

    // clearing search field input
    searchField.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchFieldText}`
    fetch(url)
        .then(response => response.json())
        .then(datas => displayResults(datas.data))
    


}


// for displaying results
const displayResults = (phones) => {
    
    // console.log(phones);
    const resultDiv = document.getElementById('result-div');

    //clearing previous results
    resultDiv.textContent = '';
  
  // clearing previous details

    const detailsDiv = document.getElementById("details-div");
    detailsDiv.textContent = ''; 
 
    // limiting search results to 20
    const limitedPhones = phones.slice(0, 20);
    
    // console.log(limitedPhones);
  
    //no Result div
    const noResultDiv = document.getElementById('no-result');
  
  
  if (phones.length === 0) {
    console.log('No phones found');

    
    
    const div = document.createElement('div');

    div.innerHTML = `
    <h5 class="bg-primary text-center text-white w-50 mx-auto lh-lg p-2 rounded shadow-lg opacity-75">No phones found :(</h5>
    `;

    noResultDiv.appendChild(div);

    }
  else {
    //clearing No result div

    noResultDiv.textContent = '';

    limitedPhones.forEach((phone) => {
        // console.log(phone.phone_name);

        // console.log(phone.slug);

        const div = document.createElement('div');

        // div.classList.add('col');

        div.innerHTML = `
        <div class="col p-3">
          <div class="card p-4 shadow">
            <img src="${phone.image}" class="card-img-top p-5" alt="...">
            <div class="card-body">
              
              <h6 class="card-title"> ${phone.phone_name}</h6>
              
              <p class="card-text"> ${phone.brand}</p>

              <button onclick="loadDetails('${phone.slug}')" type="button" class="btn btn-primary">Details</button>

            </div>
          </div>
        </div>
        `
        resultDiv.appendChild(div);

    })
  }


}

//for loading details

const loadDetails = phoneId => {

    // console.log(phoneId);

    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    fetch(url)
        .then(response => response.json())
        .then(datas => displayDetails(datas))
    

}

// for displaying details
const displayDetails = phoneInfo => {

  console.log(phoneInfo);
  const phone = phoneInfo.data;
  console.log(phone);

  //sensors
  const sensors = phone.mainFeatures.sensors;
  let allSensors = '';
  for (const sensor of sensors) {
    allSensors = allSensors + sensor + ',';
  }
  allSensors = allSensors + ' etc';
  console.log(allSensors);

    const detailsDiv = document.getElementById("details-div");

    const div = document.createElement("div");

    // clearing previous details
    detailsDiv.textContent = ''; 

    div.classList.add('row');
    div.classList.add('g-0')

    // release date
    /* const releaseDate;
    if (phone.hasOwnProperty('releaseDate')) {
         releaseDate = phone.releaseDate;
    }
    else {
         releaseDate = 'No Release date available';
    }
    console.log(releaseDate); */

    div.innerHTML = `
    <div class="col-md-4">
          <img src="${phone.image}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${phone.name}</h5>
            <p class="card-text">
              <span class="text-decoration-underline">Release Date</span> : ${phone.releaseDate ?phone.releaseDate : 'Release Date Not Found'}
              <br>
              <span class="text-decoration-underline">Display</span> : ${phone.mainFeatures.displaySize ?phone.mainFeatures.displaySize : 'No detail'}
              <br>
              <span class="text-decoration-underline">Chipset</span> : ${phone.mainFeatures.chipSet ?phone.mainFeatures.chipSet : 'No detail'}
              <br>
              <span class="text-decoration-underline">Storage</span> : ${phone.mainFeatures.storage ?phone.mainFeatures.storage : 'No detail'}
              <br>
              <span class="text-decoration-underline">Memory</span> : ${phone.mainFeatures.memory ?phone.mainFeatures.memory : 'No detail'}
              <br>
              
              <p class="card-text">More Details</p>
              <span class="text-decoration-underline">Sensors</span> : ${allSensors ?allSensors : 'No detail'}
              <br>
              <br>
              <span class="text-decoration-underline">Others</span>
              <br>
              <br>
              
              <span class="text-decoration-underline">WLAN</span> : ${phone.others?.WLAN ?phone.others.WLAN : 'No detail'}
              <br>
              <span class="text-decoration-underline">Bluetooth</span> : ${phone.others?.Bluetooth ?phone.others.Bluetooth : 'No detail'}
              <br>
              <span class="text-decoration-underline">GPS</span> : ${phone.others?.GPS ?phone.others.GPS : 'No detail'}
              <br>
              <span class="text-decoration-underline">NFC</span> : ${phone.others?.NFC ?phone.others.NFC : 'No detail'}
              <br>
              <span class="text-decoration-underline">Radio</span> : ${phone.others?.Radio ?phone.others.Radio : 'No detail'}
              <br>
              <span class="text-decoration-underline">USB</span> : ${phone.others?.USB ?phone.others.USB : 'No detail'}
              <br>
              


              
              
             </p>
            
          </div>
        </div>
    ` ;
    detailsDiv.appendChild(div);

}