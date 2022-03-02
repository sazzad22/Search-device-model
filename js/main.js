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
    
    console.log(phones);
    const resultDiv = document.getElementById('result-div');

    //clearing previous results
    resultDiv.textContent = '';

    // limiting search results to 20
    const limitedPhones = phones.slice(0, 20);
    
    // console.log(limitedPhones);
  
  
    

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

//for loading details

const loadDetails = phoneId => {

    // console.log(phoneId);

    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    fetch(url)
        .then(response => response.json())
        .then(datas => displayDetails(datas.data))
    

}

// for displaying details
const displayDetails = phone => {

    console.log(phone);

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
              <span class="text-decoration-underline">Display</span> : is a wider card
              <br>
              <span class="text-decoration-underline">Chipset</span> : is a wider card
              <br>
              <span class="text-decoration-underline">Storage</span> : is a wider card
              <br>
              <span class="text-decoration-underline">Memory</span> : is a wider card
              <br>
              
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
             </p>
            
          </div>
        </div>
    ` ;
    detailsDiv.appendChild(div);

}