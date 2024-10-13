let totalWealth = 0;
// show all data in table
const showAllData = async (apiLink)=>{
   try {
    const datas = await apiFetch(apiLink);
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = " ";
    datas.forEach(data => {
        // create table row
        const tableRow = document.createElement("tr");
        tableRow.innerHTML = `
            <td>
                <div class="flex items-center gap-3">
                    <div class="avatar">
                    <div class="mask mask-squircle h-12 w-12">
                        <img
                        src=${data.person.squareImage}
                        alt="Avatar" />
                    </div>
                    </div>
                    <div>
                    <div class="font-bold">${data.personName}</div>
                    </div>
                </div>
                </td>
                <td>${data.countryOfCitizenship}</td>
                <td>${data.industries}</td>
                <td>${data.rank}</td>
                <td>$${data.finalWorth}</td>
                <th>
                <button class="details-btn btn btn-ghost btn-xs border border-slate-700">Details</button>
                </th>
        `
        tableBody.appendChild(tableRow);
       
        // details show in modal
        const details = tableRow.querySelector(".details-btn");
        details.addEventListener("click", function (){
            showModal(data);
        })


        // calculate entire wealth
        totalWealth = totalWealth + data.finalWorth;
        
    });
   } catch (error) {
    console.log("There is an error in loading table data: ", error);
   }    
}

// show details of a individuals in a modal
const showModal = (data)=>{
    const modal = document.getElementById("modal");
    // show modal
    modal.classList.remove("hidden");

    // get bois
    const bios = data.bios.map(b => b);

    // get the birthdate
    const birthDate = new Date(data.birthDate);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = birthDate.toLocaleDateString('en-US', options);

    // exchanges
    const exchanges = data.financialAssets.map(e => e.exchange)
    
    // ticker
    const ticker = data.financialAssets.map(e => e.ticker);

    // totalShare
    const totalShareArray = data.financialAssets.map(e => e.numberOfShares);
    let totalShare = 0;
    totalShareArray.forEach(share => {totalShare= totalShare+share} )

    // shareprice
    const sharePriceArray = data.financialAssets.map(price => price.sharePrice);
    let sharePrice =0;
    sharePriceArray.forEach(p => { sharePrice = sharePrice + p})
    

    modal.innerHTML = `
        <h1 class="font-bold text-3xl text-blue-950 p-6">${data.personName}</h1>
        <p class="py-6 text-start">${bios.join(" ")}</p>
        <div class="flex justify-center items-center gap-6">
            <div class="overflow-hidden"><img src=${data.person.squareImage} alt="person-image"></div>
            <div class="text-start">
                <h2 class="mt-8 font-bold">General Information</h2>
                <div class="divider"></div>
                <h2>Citizenship: ${data.countryOfCitizenship}</h2>
                <h2>State: ${data.state}</h2>
                <h2>City: ${data.city}</h2>
                <h2>Birth-Date: ${formattedDate}</h2>
                <h2>Gender: ${data.gender}</h2>
                <h2 class="mt-8 font-bold">Financial Information</h2>
                <div class="divider"></div>
                <h2>Exchange: ${exchanges.join(", ")}</h2>
                <h2>Ticker: ${ticker.join(", ")}</h2>
                <h2>Total Shares: ${totalShare}</h2>
                <h2>Share Price: $${sharePrice}</h2>
            </div>
        </div>

        <button id="modal-close-btn" class="w-full py-4 bg-blue-950 rounded-full text-center text-slate-300 mt-10">Close</button>
    `


    // to close the modal
    const close = modal.querySelector("#modal-close-btn");
    close.addEventListener("click", function(){
        modal.classList.add("hidden");
    })
    // modal.innerHTML = " ";
}

const states = new Set();
const industries = new Set();

// show card of all billionaire
const showCard = async (apiData)=> {
    try {
        const datas = await apiFetch(apiData);

        const cardDiv = document.getElementById("card-of-all-billionaire");
        cardDiv.classList.remove("hidden");
        cardDiv.classList.add("grid");
        cardDiv.innerHTML = " ";


        datas.forEach(data => {
            // totalShare
            let totalShareArray = data.financialAssets?.map(e => e.numberOfShares);
            // console.log(totalShareArray);
            
            let totalShare = 0;
            totalShareArray?.forEach(share => {totalShare= totalShare+share} )

            // shareprice
            const sharePriceArray = data.financialAssets?.map(price => price.sharePrice);
            let sharePrice =0;
            sharePriceArray?.forEach(p => { sharePrice = sharePrice + p})

            // create a card
            const card = document.createElement("div");
            card.classList.add("bg-base-100","w-full", "shadow-xl", "p-4", "cursor-pointer");
            card.innerHTML =`
                <h2 class="text-2xl font-bold text-center my-6">${data.personName}</h2>
                <div class="flex justify-center items-center gap-2">
                    <div class="w-1/3 h-1/3"> 
                        <img src=${data.squareImage} alt="avatar">
                    </div>
                    <div class="divider divider-horizontal p-0 m-0"></div>
                    <div>
                    <p>Citizenship: ${data.countryOfCitizenship}</p>
                    <p>State: ${data.state}</p>
                    <p>City: ${data.city}</p>
                    <p>Total Share: ${totalShare}</p>
                    <p>Share Price: $${sharePrice}</p>
                    </div>  
        
                </div>
            `

            cardDiv.appendChild(card);

            // add event listener
            card.addEventListener("click", ()=>{
                showModal(data);
            })

            totalShareArray = [];

            // find total states
            // console.log(data.state);
            
            (data.state!==undefined) ? states.add(data.state): console.log("state not found");
            ;

            // total industries
            const industry = data.industries.map(e => e.split(/[\s&]+/));
            // console.log(industry);
            // industries.add(ind.trim())
            
            industry.forEach(inds => inds.forEach(ind => industries.add(ind.trim())));
            
        })
        
    } catch (error) {
        console.log("There is a error in loading the card api: ", error);
        
    }
}

// state dropdown element creating
const stateDropDownElement = (ul, sets )=> {
    
    sets.forEach(set => {
        const li = document.createElement("li");
        li.classList.add("w-full", "text-slate-300", "bg-blue-950", "hover:text-blue-950", "hover:bg-slate-300", "p-2", "border", "border-slate-300", "cursor-pointer", "rounded-xl", "mt-2");
        li.innerText = set;
        ul.appendChild(li);
        li.addEventListener("click", ()=>{
            showCard(`https://forbes400.onrender.com/api/forbes400/states/${set}`);
        })
    })
}

// industries drop down element creating
const industriesDropDownElement =  (ul, sets )=> {
    
    sets.forEach(set => {
        const li = document.createElement("li");
        li.classList.add("w-full", "text-slate-300", "bg-blue-950", "hover:text-blue-950", "hover:bg-slate-300", "p-2", "border", "border-slate-300", "cursor-pointer", "rounded-xl", "mt-2");
        li.innerText = set;
        ul.appendChild(li);
        li.addEventListener("click", ()=>{
            showCard(`https://forbes400.onrender.com/api/forbes400/industries/${set}`);
        })
    })
}


// active css
const activeCSS = (navBar)=>{
    const allNav = document.querySelectorAll(".side-nav")
    allNav.forEach(nav => {
        nav.classList.remove("text-blue-950", "bg-slate-300");
        nav.classList.add("text-slate-300", "bg-blue-950");
    })

    navBar.classList.remove("text-slate-300", "bg-blue-950")
    navBar.classList.add("text-blue-950", "bg-slate-300")
}