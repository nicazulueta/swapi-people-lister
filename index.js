const asyncFunction = async () => {
  try {
    let response = await fetch('https://swapi.co/api/people/');
    let _response = await response.json();
    let peopleData = _response.results
    console.log(peopleData)

    const peopleList = document.getElementById('people');
    const dataList = document.getElementById('data')

    function populateList () {
      let people = peopleData.map(function (elem, idx) {
        return `<li id='${idx}'>${elem.name}</li>`
      }).join('');
      peopleList.innerHTML = people
    }

    peopleList.addEventListener('click', function () {
      let data = peopleData.map(function (elem, idx) {
        if (event.target.id === String(idx)) {
        peopleList.setAttribute('class', 'unclicked')
        event.target.setAttribute('class', 'clicked')
        return `
        name: ${elem.name}<br />
        height: ${elem.height}<br />
        mass: ${elem.mass}<br />
        hair_color: ${elem.hair_color}<br />
        skin_color: ${elem.skin_color}<br />
        eye_color: ${elem.eye_color}<br />
        birth_year: ${elem.birth_year}<br />
        gender: ${elem.gender}<br />
        homeworld: ${elem.homeworld}<br />
        created: ${elem.created}<br />
        edited: ${elem.created}<br />
        url: ${elem.url}
        `
        }
      }).join('')
      dataList.innerHTML = data;
      })

    populateList();

  }
  catch(error) {
    console.error(error)
  }
}

asyncFunction()






