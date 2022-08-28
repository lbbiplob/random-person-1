

const  clicked = () => {
    fetch('https://randomuser.me/api/?results=1')
    .then(res => res.json())
    .then(data => desplayPerson(data.results))
}


function desplayPerson(persons){
 const divContainer = document.getElementById('person-container');
 divContainer.innerHTML= '';
 
    persons.forEach( person => {
        console.log(person);
        const div = document.createElement('div');
        div.innerHTML= `
           <h1 class="text-xl "></h1>
            <img class="mx-auto rounded-full" src="${person.picture.large}" alt="">
            <p>Hi , My Name is</p>
            <h3 class="text-2xl"> ${person.name.title} ${person.name.first} ${person.name.last}</h3>
            <h3>Email :${person.email}</h3>
            <h4>Phone : ${person.phone}</h4>
        `
        divContainer.appendChild(div);
    });
 }