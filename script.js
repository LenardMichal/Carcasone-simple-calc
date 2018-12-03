function initPlayers(){
    
    
        return players = {
            red: {
                src: document.getElementById('red'),
                points: 0,
        
            },
            yellow: {
                src: document.getElementById('yellow'),
                points: 0
            },
              green: {
                src: document.getElementById('green'),
                points: 0
            },
            blue: {
                src: document.getElementById('blue'),
                points: 0
            },
            black: {
                src: document.getElementById('black'),
                points: 0
            },
            pink:{
                src: document.getElementById('pink'),
                points: 0
            }
        };
        
    }


function loadPlayers(){
    for (let key in players){
        if(localStorage[key]){
            players[key].points = Number(localStorage[key]);
        }
    } 
}

function clearPoints(){
    for (let key in players){
        players[key].points = 0;
        setInitPoints();
       
    }
}



function setInitPoints(){


 
for (let key in players){
    players[key].src.textContent = players[key].points;
    players[key].src.addEventListener('click',()=>{
      players[key].src.classList.toggle('checked');
    });
    
     }
}


function createControls(){
    let controlBlock = document.getElementById('controls');
        for (let i = 1;i < 13; i++){
            let el = document.createElement('div');
            el.textContent =  i;
            controlBlock.appendChild(el);
            el.classList.add('button');
            el.addEventListener('click', count);
        }

    let minus = document.getElementById('minus');
    minus.textContent = '-';
    minus.addEventListener('click', ()=>{
        minus.classList.toggle('checked');
    });

    let clear = document.getElementById('clear');
    clear.textContent = 'Clear';
    clear.addEventListener('dblclick', clearPoints);

}; 

function createMulti(){
    let multi = document.getElementById('multi');
    for(let i=1 ;i < 7 ;i++){
        let el = document.createElement('div');
        el.textContent = 'x' + i;
        multi.appendChild(el);
        if(i === 1) el.classList.add('toggled');
        el.classList.add('button');
        el.classList.add('multiButton');
        
        el.addEventListener('click', ()=>{
            
            for(let i = 0;i < multi.childNodes.length ;i++){
                multi.childNodes[i].classList.remove('toggled');
            }
            
            el.classList.toggle('toggled')
        });
    }
}

function count(){
    for (let key in players){
            if(players[key].src.classList.contains('checked') && !document.getElementById('minus').classList.contains('checked')){
        players[key].points += Number(this.textContent) * Number(document.querySelector('.toggled').innerHTML[1]);
        players[key].src.textContent = players[key].points;
    }
            if( players[key].src.classList.contains('checked') && document.getElementById('minus').classList.contains('checked')){
            players[key].points -= Number(this.textContent) * Number(document.querySelector('.toggled').innerHTML[1]);
            players[key].src.textContent = players[key].points;
                    
        
        }     
    
    }
    
}


//------------------------------------



initPlayers();
loadPlayers();
setInitPoints();
createControls();
createMulti();


window.setInterval(()=>{
   localStorage.setItem('red', players.red.points);
   localStorage.setItem('yellow', players.yellow.points);
   localStorage.setItem('green', players.green.points);
   localStorage.setItem('black', players.black.points);
   localStorage.setItem('blue', players.blue.points);
   localStorage.setItem('pink', players.pink.points);

   
}, 1000);


