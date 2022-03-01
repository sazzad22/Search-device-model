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

    // limiting search results to 20
    const limitedPhones = phones.slice(0, 20);
    
    // console.log(limitedPhones);

    limitedPhones.forEach((phone) => {
        // console.log(phone.phone_name);

        // console.log(phone.slug);

        const div = document.createElement('div');

        div.classList.add('col');

        div.innerHTML = `
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              
              <h5 class="card-title">${phone.phone_name}</h5>
              
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

              <button onclick="loadDetails('${phone.slug}')" type="button" class="btn btn-primary">Primary</button>

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
        .then(data => console.log(data))
    

}

