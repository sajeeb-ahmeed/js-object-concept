const photosPlacHolder = async () => {
    const api_url = 'https://jsonplaceholder.typicode.com/photos';
    const res = await fetch(api_url);
    const data = await res.json();
    photos(data);
}
photosPlacHolder();

const photos = datas => {
    // console.log(datas);
    const photosContainer = document.getElementById('photos-container');
    for (const data of datas) {
        // console.log(data);
        const div = document.createElement('div')
        div.className = 'col'
        div.innerHTML = `       
            <div onclick="photDetails('${data.id}')" class="card">
              <img src="${data.url}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${data.title}</h5>
              </div>
            </div>
        `
        photosContainer.appendChild(div)
    }
}
const photDetails = async details => {
    const url = `https://jsonplaceholder.typicode.com/photos/${details}`;
    const res = await fetch(url);
    const data = await res.json();
    singelphotos(data);
}
const singelphotos = singleData => {

    const singelphotosID = document.getElementById('singel-photos');
    console.log(singleData);
    const div = document.createElement('div')
    div.className = 'col'
    div.innerHTML = `
          <img src="${singleData.url}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${singleData.title}</h5>
          </div>
        </div>
    `
    singelphotosID.appendChild(div)
}