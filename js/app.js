function newRow(){  //sukuriu nauja row elementa ir itepiu i containeri
    const container = document.getElementById('mainContainer');
    let row = document.createElement('div'); //sukuri nauja div su klase 'row'
    row.className = "row";
    const col =document.createElement('div');
    col.className = 'col-sm-12 galerija';    
    const rodytiMygt = document.createElement('button'); //sukuriu mygtuka "rodyti"
    rodytiMygt.className = 'rodyti';    
    rodytiMygt.textContent = 'Rodyti';
    rodytiMygt.style.background = "#3333FF";
    rodytiMygt.style.color = "white";
    rodytiMygt.style.padding = '11px';
    rodytiMygt.style.margin = '4px';       
    const maisytiMygt = document.createElement('button'); //sukuriu mygtuka "maisyti"
    maisytiMygt.className = 'maisyti';
    maisytiMygt.textContent = 'Maišyti';
    maisytiMygt.style.background = "#3333FF";
    maisytiMygt.style.color = "white";
    maisytiMygt.style.padding = '10px';
    maisytiMygt.style.margin = '4px';
    rodytiMygt.addEventListener('click', function() {     //sukuriau paspaudimo ivyki
        rodytiMygt.style.display = 'none';
        maisytiMygt.style.display = 'inline-block';
        rodytiPaveiksl(); 
    })
    maisytiMygt.addEventListener('click', function(){
        rodytiMygt.style.display = 'none';
        maisytiPaveiksl(); 
    })
    const paveikslai = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg','img/7.jpg','img/8.jpg','img/9.jpg','img/10.jpg'];
    const ul = document.createElement('ul');
    ul.className = 'images';
    for(let i=0; i<paveikslai.length; i++){
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = paveikslai[i];
        img.alt = 'Paveikslas';
        img.className = 'image';
        li.appendChild(img);
        ul.appendChild(li); 
    }
    
    col.appendChild(rodytiMygt);
    col.appendChild(maisytiMygt);
    col.appendChild(ul)
    row.appendChild(col)
    container.appendChild(row) //Iterpu nauja 'row' i 'container'
}
newRow()    //Iskvieciu funkcija, kad sukurciau ir iterpciau row elementa(susikuria diva class='row' i div clas ='container')
//sukuriu funkcija, kuri parodo paveikslelius
function rodytiPaveiksl(){
    const maisytiMygt = document.querySelector('.maisyti');
    const images = document.querySelector('.images');
    maisytiMygt.style.display = 'inline-block';
    images.style.display = 'flex';
}

function maisytiPaveiksl(){
    const images = document.querySelector('.images');
    const liElements = Array.from(images.getElementsByTagName('li'));
    for(let i=liElements.length-1; i>0; i--){
        const j = Math.floor(Math.random()*(i+1));
        [liElements[i].innerHTML, liElements[j].innerHTML] = [liElements[j].innerHTML, liElements[i].innerHTML];
    }

}

const liElements = document.querySelectorAll('li');
let paspaudSkaicius = 0; //pridedu naują kintamąjį, juris saugos paspaudimų skaičių.
liElements.forEach((li, index) => {
    li.addEventListener('click', () => {
        paspaudSkaicius++;              //kas kart1 paspaudus, didiname paspaudimų skaičių.
        if (paspaudSkaicius === 2){     //jeigu paspaudimų skaičius yra 2, tada keičiame paveikslėlį
            const img = li.getElementsByTagName('img')[0];
            img.src = 'img/12.jpg';
            paspaudSkaicius = 0;    //nustatome paspaudimų skaičių atgal į 0.
        
        }
    })
})

