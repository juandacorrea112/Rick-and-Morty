//se crean las constantes 
for (let i = 1; i < 41; i++) {
    
const URL = "https://rickandmortyapi.com/api/character?page="+i;
// const btn = document.getElementById('busca');
const input = document.getElementById('inputsito');
const main = document.querySelector('main');


//funcion normal para recibir la URL de la appi;

// const render = async () => {
//     const res = await fetchData(URL);
//     const dato = res.results;
//     dato.map( dato => createCards(dato));
// }


//consumimos la API;
const fetchData = async (api) =>{
    main.innerHTML = '';
    const res = await fetch(api);
    const data = await res.json();
    return data;
};

//aqui recibimos la url que envia la API, pero en este caso lo hacemos con un
//eventlistener del input para hacer la busqueda de las cartas
input.addEventListener('keyup', async () => {
    const rez = await fetchData(URL);
    const data = rez.results;
    data.map( dato => createCards(dato));
});


//se reciben por parametros de la funcion
function createCards(dato) {
    //condicional que guarda el valor del input y lo pasa a mayusculas
    const valor = input.value.toUpperCase();

    //condicional
    if (dato.name.toUpperCase().indexOf(valor) !== -1  && valor !== "") {
        
        //creacion de cartas
        const card = document.createElement('div');
        card.classList.add('card');
        card.style.marginTop = "5px"

            const imgPersonaje = document.createElement('div');
            imgPersonaje.classList.add('imgPersonaje');
                let img = document.createElement('img');
                img.setAttribute('src', dato.image);
                img.classList.add('imgfoto');

        
            const info = document.createElement('div');
            info.classList.add('info');
                const contName = document.createElement('div');
                contName.classList.add('name');
                    let nombre = document.createElement('p');
                    nombre.textContent = ("nombre", dato.name);            

                const localization = document.createElement('div');
                localization.classList.add('localization');
                    let locally = document.createElement('p');
                    locally.textContent = ('localizacion: ', dato.location.name);

                const idsPrs = document.createElement('div');
                idsPrs.classList.add('localization');
                    let idsp = document.createElement('p');
                    idsp.textContent = ('id: ', dato.id);

        //y se agragan cada cosa a sus contenedores
        idsPrs.appendChild(idsp);
        localization.appendChild(locally);
        contName.appendChild(nombre);

        info.appendChild(idsPrs);
        info.appendChild(contName);
        info.appendChild(localization);
        
        imgPersonaje.appendChild(img);

        card.appendChild(imgPersonaje);
        card.appendChild(info);

        main.appendChild(card);
    };
};
}
// window.addEventListener('load', render);