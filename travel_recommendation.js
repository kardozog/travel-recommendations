
function searchCondition() {
  const input = document.getElementById('btnSearch').value.toLowerCase();
  
 

  fetch('travel_recommendation_api.json')
  .then(response => response.json())
  .then(data => 
    let condition = data.find(item => item.name.toLowerCase() === input);

    if (condition === input) {
      console.log(data);
    } 
    
    
    else {
      resultDiv.innerHTML = 'Destination not found.';
    });


  .catch(error => {
    console.error('Error:', error);
    }); 
}
btnSearch.addEventListener('click', searchCondition); 