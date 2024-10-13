
// show all data in table
// showAllData("https://forbes400.onrender.com/api/forbes400?limit=10");
// showAllData("https://forbes400.onrender.com/api/forbes400/getAllBillionaires");

// show cards of billionaires
showCard("https://forbes400.onrender.com/api/forbes400/");
    
// all billionaire navbar
const table = document.getElementById("table-of-all-biilionaire");
const navBar = document.getElementById("all-billionaire");
activeCSS(navBar);
navBar.addEventListener("click", function (e){
    e.preventDefault();
    activeCSS(navBar);
    
    // hidden the table
    table.classList.add("hidden");

    // show cards of billionaires
    showCard("https://forbes400.onrender.com/api/forbes400/");
    
})


//richest-by-industries navbar
const richesByIndustries = document.getElementById("richest-by-industries");
let industryDropDown =1;
richesByIndustries.addEventListener("click", function (){
    activeCSS(richesByIndustries);

    // show the dropdown btn
    const dropdown = document.getElementById("industries-dropdown");
    const ul = document.getElementById("industries-ul");
    if(industryDropDown){
        dropdown.classList.remove("hidden");
        // console.log(industries);
        
        industriesDropDownElement(ul, industries);
        industryDropDown = 0;
    }else{
        dropdown.classList.add("hidden");
        industryDropDown = 1;
        ul.innerHTML = " ";
    }
})


//richest-by-state navbar
const richestByState = document.getElementById("richest-by-state");
let stateDropDown = 1;
richestByState.addEventListener("click", function (){
    activeCSS(richestByState);

    // show the dropdown btn
    const dropdown = document.getElementById("state-dropdown");
    const ul = document.getElementById("state-ul");
    if(stateDropDown){
        dropdown.classList.remove("hidden");
        stateDropDownElement(ul, states);
        stateDropDown = 0;
    }else{
        dropdown.classList.add("hidden");
        stateDropDown = 1;
        ul.innerHTML = " ";
    }
})


//sort-by-rank navbar
const sortByRank = document.getElementById("sort-by-rank");
sortByRank.addEventListener("click", function (){
    activeCSS(sortByRank);

    // show data in table by rank
    table.classList.remove("hidden");
    const cardDiv = document.getElementById("card-of-all-billionaire");
    cardDiv.classList.remove("grid");
    cardDiv.classList.add("hidden")
    // api call
    showAllData("https://forbes400.onrender.com/api/forbes400/");
})


//calculate-entire-wealth navbar
const entireWealth = document.getElementById("calculate-entire-wealth");
entireWealth.addEventListener("click", function (){
    activeCSS(entireWealth);

    // show the table footer
    const tFoot = document.getElementById("t-foot");
    tFoot.classList.remove("hidden");

    // show data in table by rank
    table.classList.remove("hidden");
    const cardDiv = document.getElementById("card-of-all-billionaire");
    cardDiv.classList.remove("grid");
    cardDiv.classList.add("hidden")
    // api call
    showAllData("https://forbes400.onrender.com/api/forbes400/");


    // show total wealth
    document.getElementById("total-wealth-th").innerText = `$ ${totalWealth.toFixed(2)}`
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    }); 
})