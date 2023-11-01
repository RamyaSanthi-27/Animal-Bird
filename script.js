const apiUrl = "https://emojihub.yurace.pro/api/all/group/animal-bird";

// Create a function to fetch data from the API using a promise
function fetchData() {
    return new Promise((resolve, reject) => {
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    reject("Failed to fetch data");
                    return;
                }
                return response.json();
            })
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

// Call the fetchData function and handle the response
fetchData()
    .then((data) => {

    var container = document.createElement("div");
    container.setAttribute("class", "container");

    var row = document.createElement("div");
    row.setAttribute("class", "row");

    for (var i = 0; i < data.length; i++) {
        
        console.log(data[i].name);
        var col = document.createElement("div");
        col.setAttribute("class", "col-lg-4 col-sm-12");

        col.innerHTML = `
        <div class="card" style="width: 18rem;">
          <h5 class="card-title">${data[i].name}</h5>
          <h1>${data[i].htmlCode}</h1>
          <p class="card-text">${data[i].category}</p>          
          <p class="card-text">${data[i].group}</p>
          <p class="card-text">${data[i].unicode}</p>
          <a href="https://getemoji.com/" class="btn btn-primary">Go somewhere</a>          
          
        </div> `;

        row.append(col);
        container.append(row);
        document.body.append(container);
    }
})

.catch((error) => {
    console.log("Error:", error);
});

