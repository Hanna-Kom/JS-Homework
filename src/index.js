
var playList = [

  {
  
   author: "LED ZEPPELIN",
  
   song:"STAIRWAY TO HEAVEN"
  
  },
  
  {
  
   author: "QUEEN",
  
   song:"BOHEMIAN RHAPSODY"
  
  },
  
  {
  
   author: "LYNYRD SKYNYRD",
  
   song:"FREE BIRD"
  
  },
  
  {
  
   author: "DEEP PURPLE",
  
   song:"SMOKE ON THE WATER"
  
  },
  
  {
  
   author: "JIMI HENDRIX",
  
   song:"ALL ALONG THE WATCHTOWER"
  
  },
  
  {
  
   author: "AC/DC",
  
   song:"BACK IN BLACK"
  
  },
  
  {
  
   author: "QUEEN",
  
   song:"WE WILL ROCK YOU"
  
  },
  
  {
  
   author: "METALLICA",
  
   song:"ENTER SANDMAN"
  
  }
  
];

const list = document.getElementById('list');
document.write('<h3>List of Songs</h3>');
for(let i = 0; i < playList.length; i++) {
    document.write(`<li><span>${i+1}</span> ${playList[i].song}</li>`);
};


    const modal = document.getElementById('myModal');
    const btn = document.getElementById('myBtn');
    const span = document.getElementsByClassName('close')[0];
    
    
    btn.onclick = function() {
        modal.style.display = "block";
    }
    
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
    
    
	let a = -1;
	function trafficLight() {
		a++;
		let arr = ['red','yellow','green'],
			round = document.querySelectorAll('.round');
		if(round[a-1]) {
       round[a-1].style.backgroundColor = ''; 
      }
	  if (a == arr.length) { 
      a = 0;
    }
		round[a].style.backgroundColor = arr[a];
	};
    
  
  
 
