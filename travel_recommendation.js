const resetButton = document.getElementById("btnReset")


function searchCondition() {
    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultDiv = document.getElementById("resultDiv");

    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            let matchedCategory = null;

            if (input.includes("beach") || input.includes("beaches")) { 
                matchedCategory = "beaches";
            } else if (input.includes("temple")|| input.includes("temples")) {
                matchedCategory = "temples";
            } else if (input.includes("country") || input.includes("countries")) {
                matchedCategory = "countries";
            }

            

            let places = data[matchedCategory] || [];
            if (places.length === 0) {
                resultDiv.style.display = "block";
            setTimeout(() => {
                resultDiv.style.opacity = "1";
            }, 10); // Smooth fade-in effect
            resultDiv.innerHTML = `<h4>No results found.</h4>`;
                return;
            }
            
            
                resultDiv.style.display = "block";
            setTimeout(() => {
                resultDiv.style.opacity = "1";
            }, 10); // Smooth fade-in effect
            resultDiv.innerHTML = `<h2>Recommended ${matchedCategory}</h2>`;

            places.forEach(place => {
                resultDiv.innerHTML += `
                    <div>
                        <h3>${place.name}</h3>
                        <img src="${place.imageUrl}" alt="${place.name}" width="200">
                        <p>${place.description}</p>
                    </div> `;
                
            }); 
        
        })

        .catch(error => {
            console.error("Error fetching JSON:", error);
            resultDiv.innerHTML = "<p>Failed to load data. Please try again later.</p>"; });

         };
       
        

function cleanSearch (){
    resultDiv.innerHTML = ""
    resultDiv.style.display = "none"

};

btnSearch.addEventListener('click', searchCondition); 
resetButton.addEventListener('click', cleanSearch); 
