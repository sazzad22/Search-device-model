const searchText = () => {

    const searchField = document.getElementById('search-field');
    
    const searchFieldText = searchField.value;

    // clearing search field input
    searchField.value = '';

    fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(response => response.json())
        .then(datas => displayResults(datas.data))
    


}


// for displaying results
const displayResults = (phones) => {
    
    console.log(phones);
    const resultDiv = document.getElementById('result-div');

    

    


}