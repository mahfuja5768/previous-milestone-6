const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries =>{
     const countriesContainer = document.getElementById('countries-container');
    //  for(const country of countries){
    //     const countryDiv = document.createElement('div')
    //  }
    countries.forEach(country =>{
        console.log(country)
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML= `
          
          <h2>Name: ${country.name.common}</h2>
          <p>Name: ${country.capital? country.capital[0] : 'No Capital'}</p>
          <p>Independent: ${country.independent}</p>
          <button onclick="loadCountryDetail('${country.cca2}')">Details</button> 
        `;
        countriesContainer .appendChild(countryDiv)
    })
}
const loadCountryDetail = (code) => {
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = country =>{
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
    <h3>Country Detail</h3>
    <h2>Name: ${country.name.common}</h2>
    <h3>CCA2: '${country.cca2}'</h3>
    <img src ="${country.flags.png}">
    `
}

loadCountries()