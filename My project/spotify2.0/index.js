/*
let BASE_URL=`https://shazam-core.p.rapidapi.com`;
let queryOfMenuSide=`/v1/charts/world`;
let queryOfPopularSong=`/v1/charts/country?country_code=IN`;
let menuSong=document.querySelector('.menu-song');
let popularSongs=document.querySelector('.pop-song');
let search=document.getElementById('search');
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f9f14503cbmsh8eb000d03cc6e1ap12bf91jsn72d664603506',
        'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
};
async function fetchApi(query,callBack){
    let url=BASE_URL+query;
    console.log("loading.....")
    await fetch(url, options)
    .then(response => response.json())
    .then(response => {
        //console.log(response);
        callBack(response);
    })
    .catch(err => console.error(err));
}
//Menu side process
function songMenuSideProcess(data){
    data.forEach((value,idx)=>{
        console.log(value);
        let image="";
        if(value.images===undefined){
            image="";
        }else{
            image=value.images.coverart;
        }
        let src="";
        if(value.hub!==undefined){
            if(value.hub.actions!==undefined){
                src=value.hub.actions[1].uri;
                //console.log("yes")
            }else{
                if(value.hub.options!==undefined){
                    src=value.hub.options[0].actions.uri;
                }
            }
        }else{
            //alert("hello");
        }
        let item=`
        <li class="songItem">
            <span>${idx+1}</span>
            <img src=${image} alt=${value.title+" image"}>
            <h5>${value.title}<br>
                <div class="subtitle">${value.subtitle}</div>
            </h5>
            <i class="bi play-circle bi-play-circle-fill playListPlay" id="menuside-${idx+1}" data-song=${src}></i>
        </li>
        `;
        menuSong.innerHTML+=item;
    })
}
// popular song process
function popularSongProcess(data){
   console.log(data);
   data.forEach((value,idx)=>{
        let image="";
        if(value.images===undefined){
            image="";
        }else{
            image=value.images.coverart;
        }
        let item=`
        <li class="songItem">
            <div class="img-play">
                <img src=${image} alt="${value.title+" image"}">
                <i class="bi play-circle bi-play-circle-fill" id=${idx+1}></i>
            </div>
            <h5>${value.title}<br>
                <div class="subtitle">${value.subtitle}</div>
            </h5>
        </li>
        `
        popularSongs.innerHTML+=item;
   })
}
fetchApi(queryOfMenuSide,songMenuSideProcess);
fetchApi(queryOfPopularSong,popularSongProcess);
function searchThis(e){
    //alert(search.value);
    let searchTerm=search.value;
    if(searchTerm.length>0){
        
    }
}

// play and pause function
document.addEventListener("click", function(e){
    // (https://stackoverflow.com/questions/34896106/attach-event-to-dynamic-elements-in-javascript)
    const target = e.target.closest(`.playListPlay`); // Or any other selector.
    if(target){
      // Do something with `target`.
      let src=target.getAttribute('data-song');
      //console.log(src);
      //playSong(src);
    }
});
const music="";
function playSong(src){
    console.log(src);
    music=new Audio(src);
    playing();
}
// play from menu side
masterPlay.addEventListener('click',playing);
function playing(){
    let masterPlay=document.getElementById('masterPlay');
    let wave=document.getElementById('wave');
    if(music.paused || music.currentTime<=0){
        alert("yes");
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.add('bi-pause-fill');
        masterPlay.classList.remove('bi-play-fill');
    }else{
        alert("no");
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.remove('bi-pause-fill');
        masterPlay.classList.add('bi-play-fill');
    }
}
*/
//=======================================================//

//music.play();
let music=new Audio('audio/1.mp3');
const song=[
    {
        id:1,
        title:"On My walker",
        subtitle:"Alan walker",
        poster:"img/1.jpg"
    },
    {
        id:2,
        title:"take me down",
        subtitle:"King",
        poster:"img/2.jpg"
    },
    {
        id:3,
        title:"On My walker",
        subtitle:"Alan walker",
        poster:"img/3.jpg"
    },
    {
        id:4,
        title:"On My walker",
        subtitle:"Alan walker",
        poster:"img/4.jpg"
    },
    {
        id:5,
        title:"On My walker",
        subtitle:"Alan walker",
        poster:"img/5.jpg"
    },
    {
        id:6,
        title:"On My walker",
        subtitle:"Alan walker",
        poster:"img/6.jpg"
    },
    {
        id:7,
        title:"On My walker",
        subtitle:"Alan walker",
        poster:"img/7.jpg"
    },
    {
        id:8,
        title:"On My walker",
        subtitle:"Alan walker",
        poster:"img/8.jpg"
    },    
    {
        id:9,
        title:"Dilbar",
        subtitle:"Alan walker",
        poster:"img/9.jpg"
    },    
    {
        id:10,
        title:"Lukachupi",
        subtitle:"Alan walker",
        poster:"img/10.jpg"
    },
    {
        id:11,
        title:"On My walker",
        subtitle:"Alan walker",
        poster:"img/11.jpg"
    },
    {
        id:12,
        title:"On My walker",
        subtitle:"Alan walker",
        poster:"img/12.jpg"
    },
    {
        id:13,
        title:"On My walker",
        subtitle:"Alan walker",
        poster:"img/13.jpg"
    },
    {
        id:14,
        title:"On My walker",
        subtitle:"Alan walker",
        poster:"img/14.jpg"
    },    
    {
        id:15,
        title:"On My walker",
        subtitle:"Alan walker",
        poster:"img/15.jpg"
    },
    {
        id:16,
        title:"On My walker",
        subtitle:"Alan walker",
        poster:"img/16.jpg"
    },
    {
        id:17,
        title:"On My walker",
        subtitle:"Alan walker",
        poster:"img/17.jpg"
    },
    {
        id:18,
        title:"On My walker",
        subtitle:"Alan walker",
        poster:"img/18.jpg"
    },
    {
        id:19,
        title:"On My walker",
        subtitle:"Alan walker",
        poster:"img/19.jpg"
    },
    {
        id:20,
        title:"Dunny",
        subtitle:"Alan walker",
        poster:"img/20.jpg"
    },
]
const artist=[
    {
        name: "Akhil",
        image:"akhil",
        quote:"You are the shadow to my light did you feel us another start you fade </br> Away seen afraid our aim is out of sight wanna see us Alive",
    },
    {
        name: "Alan",
        image:"alan",
        quote:"You are the shadow to my light did you feel us another start you fade </br> Away seen afraid our aim is out of sight wanna see us Alive",
    },
    {
        name: "Arijit Singh",
        image:"arjit",
        quote:"You are the shadow to my light did you feel us another start you fade </br> Away seen afraid our aim is out of sight wanna see us Alive",
    },
    {
        name:"Atif Aslam",
        image:"atif",
        quote:"You are the shadow to my light did you feel us another start you fade </br> Away seen afraid our aim is out of sight wanna see us Alive",
    },
    {
        name: "Dhvani",
        image:"dhvani",
        quote:"You are the shadow to my light did you feel us another start you fade </br> Away seen afraid our aim is out of sight wanna see us Alive",
    },
    {
        name: "Diljit",
        image:"Diljit_Dosanjh",
        quote:"You are the shadow to my light did you feel us another start you fade </br> Away seen afraid our aim is out of sight wanna see us Alive",
    },
    {
        name: "Guru",
        image:"guru",
        quote:"You are the shadow to my light did you feel us another start you fade </br> Away seen afraid our aim is out of sight wanna see us Alive",
    },
    {
        name: "Honey",
        image:"honey",
        quote:"You are the shadow to my light did you feel us another start you fade </br> Away seen afraid our aim is out of sight wanna see us Alive",
    },
    {
        name: "Jubin Nautiyal",
        image:"jubin Nautiyal",
        quote:"You are the shadow to my light did you feel us another start you fade </br> Away seen afraid our aim is out of sight wanna see us Alive",
    },
    {
        name: "Justin Bieber Lede",
        image:"justin-bieber-lede",
        quote:"You are the shadow to my light did you feel us another start you fade </br> Away seen afraid our aim is out of sight wanna see us Alive",
    },
    {
        name: "Neha Kakkar",
        image:"neha",
        quote:"You are the shadow to my light did you feel us another start you fade </br> Away seen afraid our aim is out of sight wanna see us Alive",
    },
]

// fill the popular song bar inside the song side section
let menuSong=document.querySelector('.menu-song');
let popularSongs=document.querySelector('.pop-song');
let tempMainSong="";
song.forEach((value,idx)=>{
    if(idx<8){
    let item=`
        <li class="songItem cover1">
            <span>${value.id}</span>
            <img src=${value.poster} alt=${value.title+" image"}>
            <h5>${value.title}<br>
                <div class="subtitle">${value.subtitle}</div>
            </h5>
            <i class="bi play-circle bi-play-circle-fill playListPlay" id="${value.id}" 
            data-song="audio/${value.id}.mp3" data-img="img/${value.id}.jpg" data-title="${value.title}" 
            data-subtitle="${value.subtitle}"></i>
        </li>
        `;
        menuSong.innerHTML+=item;
    }else{
        let item=`
        <li class="songItem playListPlay cover2" data-song="audio/${value.id}.mp3" data-img="img/${value.id}.jpg" 
        data-title="${value.title}" data-subtitle="${value.subtitle}" id="${value.id}">
            <div class="img-play">
                <img src=${value.poster} alt="${value.title+" image"}">
                <i class="bi play-circle bi-play-circle-fill" id=${value.id}></i>
            </div>
            <h5>${value.title}<br>
                <div class="subtitle">${value.subtitle}</div>
            </h5>
        </li>
        `
        popularSongs.innerHTML+=item;
    }
})
//end of fill popular song bar

// filling the popular artist dynamically
let artistContent=document.getElementsByClassName('content')[0];
let artistItem=document.getElementsByClassName('item')[0];
artist.forEach((value)=>{
    let item=`
        <li class="artist-list" data-name="${value.name}" data-quote="${value.quote}">
        <img src="img/${value.image}.jpg">
        </li>
    `;
    artistItem.innerHTML+=item;
})
// end of fill the popular artist dynamically

// for access the popular artist song
document.addEventListener("click", function(e){
    // (https://stackoverflow.com/questions/34896106/attach-event-to-dynamic-elements-in-javascript)
    const target = e.target.closest(`.artist-list`); // Or any other selector.
    if(target){
        let name=target.getAttribute('data-name');
        let quote=target.getAttribute('data-quote');
      let item=`
      <h1>${name}</h1>
      <p>${quote}</p>
      <div class="buttons">
          <button>Play</button>
          <button>Follow</button>
      </div>
      `;
      artistContent.innerHTML=item;
      tempMainSong=popularSongs.innerHTML;
      popularSongs.innerHTML="";
      for(let i=9;i<=23;i++){
        let item=`
        <li class="songItem playListPlay cover2" data-song="audio/arjit_audio/${i-8}.mp3" data-img="img/arjit_img/${i-8}.jpg"; 
        data-title="Arijit singh" data-subtitle="song" id="${i}">
            <div class="img-play">
                <img src="img/arjit_img/${i-8}.jpg">
                <i class="bi play-circle bi-play-circle-fill" id=${i}></i>
            </div>
            <h5>Dilbar<br>
                <div class="subtitle">Arijit Singh</div>
            </h5>
        </li>
        `
        popularSongs.innerHTML+=item;
      }
      document.documentElement.style.overflow = 'hidden';  // firefox, chrome
      document.body.scroll = "no"; // ie only
    }
});
// end of access of popular artist 

let makeAllBackground=()=>{
    Array.from(document.getElementsByClassName('cover2')).forEach((e)=>{
        e.style.background='rgb(105,105,170,.4)';
    })
    Array.from(document.getElementsByClassName('cover1')).forEach((e)=>{
        e.style.background='rgb(105,105,170,0)';
    })
}
let makeAllPlay=()=>{
    Array.from(document.getElementsByClassName('play-circle')).forEach((e)=>{
        e.classList.remove('bi-pause-circle-fill');
        e.classList.add('bi-play-circle-fill');
    })
}
// search data start
let searchResult=document.getElementsByClassName('search-result')[0];
song.forEach((value,idx)=>{
    const{id,title,subtitle,poster}=value;
    let card=document.createElement('a');
    card.classList.add("card");
    card.href="#"+id;
    card.setAttribute('data-img',`${poster}`);
    card.setAttribute('data-song',`audio/${id}.mp3`);
    card.setAttribute('data-title',`${title}`);
    card.setAttribute('data-subtitle',`${subtitle}`);
    card.onclick=rudra;
    card.innerHTML=`
    <img src="${poster}" alt="">
        <div class="component">
            ${title}
            <div class="subtitle">${subtitle}</div>
        </div>
    `;
    searchResult.appendChild(card);
})
function rudra(e){
    targetByMasterPlay=e.target.closest('.card');
    searchResult.style.display="none";
    musicPlayer(targetByMasterPlay);
}
let input=document.getElementById('search');
input.addEventListener('keyup',()=>{
    let value=input.value.toUpperCase();
    let items=searchResult.getElementsByTagName('a');
    for (let index = 0; index < items.length; index++) {
        let as=items[index].getElementsByClassName('component')[0];
        let text=as.textContent || as.innerHTML;
        if(text.toUpperCase().indexOf(value)>-1){
            items[index].style.display="flex";
        }else{
            items[index].style.display="none";
        }
        if(input.value==0){
            searchResult.style.display="none";
        }else{
            searchResult.style.display="block";
        }
    }

})

// search data end
let masterPlay=document.getElementById('masterPlay');
let src="";
let poster_master_play=document.getElementById('poster-master-play');
let playBox=document.getElementsByClassName('master-play')[0];
let title=document.getElementById('title');
let musicCurrentTime=0;
let targetByMasterPlay=document.getElementsByClassName(`playListPlay`)[0];
let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
let songArtist=document.getElementsByClassName('popular-artist')[0];
let wave=document.getElementById('wave');
if(width<=400)
{
    playBox.style.display="none";
}
window.addEventListener("resize", ()=>{
    width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if(width<=400 && music.currentTime<=0)
    playBox.style.display="none";
    else if(width<=400){
        playBox.style.display="grid";
    }
    else{
        playBox.style.display="flex";
    }
});
function musicPlayer(target){
    if(width<=400){
       playBox.style.display="grid";
    }else{
       playBox.style.display="flex";
    }
    let songSidePlayCircle=target.querySelector("i");
      console.log(songSidePlayCircle);
      // Do something with `target`.
      if(songSidePlayCircle===null){
        songSidePlayCircle=target.querySelector('a');
      }
      let songSrc=target.getAttribute('data-song');
      let imgSrc=target.getAttribute('data-img');
      let title1=target.getAttribute('data-title');
      let subTitle=target.getAttribute('data-subtitle');
      let index=target.getAttribute('id');
      if(index===null){
        index=target.href.slice(33);
        //console.log(index);
      }
      let downloadMusic=document.getElementById('download-music');
      //console.log(index)
      downloadMusic.href=`audio/${index}.mp3`;
      downloadMusic.setAttribute('download',`${title1}`);
      makeAllPlay();
      //console.log(src);
      console.log(target);
        if(Number(index)===song.length){
            next.style.opacity=0.5;
        }else{
            next.style.opacity=1;
        }
        if(Number(index)===1){
            back.style.opacity=0.5;
        }else{
            back.style.opacity=1;
        }

      if(songSrc!==music.src.slice(music.src.indexOf("/audio")+1) || music.paused || music.currentTime<=0){   // for play
        // console.log(music.src);
        console.log(music.src.slice(music.src.indexOf("/audio")+1));
        console.log(songSrc);
        if(songSrc===music.src.slice(music.src.indexOf("/audio")+1)){
        music.currentTime=musicCurrentTime;
        //alert("up"+music.currentTime);
        }
        else{
        music.src = songSrc;
        music.currentTime=0;
        //alert("down"+music.currentTime);
        }
        //alert("up"+music.currentTime);
        music.play();
        poster_master_play.src=imgSrc;
        chadd();
        wave.classList.add('active1');
        masterPlay.classList.add('bi-pause-fill');
        masterPlay.classList.remove('bi-play-fill');
        title.innerHTML=`${title1}<div class="subtitle">${subTitle}</div>`;
        if(songSidePlayCircle!==null){
          songSidePlayCircle.classList.add('bi-pause-circle-fill');
          songSidePlayCircle.classList.remove('bi-play-circle-fill');
        }else{
          target.classList.add('bi-pause-circle-fill');
          target.classList.remove('bi-play-circle-fill');
        }
      }else{      // for paused
        //alert("down"+music.currentTime);
        music.pause();
        // console.log(music.src.slice(music.src.indexOf("/audio")+1));
        // console.log(songSrc);
        musicCurrentTime=music.currentTime;
        chRemove();
        wave.classList.remove('active1');
        masterPlay.classList.remove('bi-pause-fill');
        masterPlay.classList.add('bi-play-fill');
      }
      makeAllBackground();
      Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgba(54, 226, 236,0.6)";
      document.documentElement.style.overflow = 'hidden';  // firefox, chrome
      document.body.scroll = "no"; // ie only
}
document.addEventListener("click", function(e){
    // (https://stackoverflow.com/questions/34896106/attach-event-to-dynamic-elements-in-javascript)
    const target = e.target.closest(`.playListPlay`); // Or any other selector.
    // console.log('target', target)
    if(target){
      console.log(target);
      targetByMasterPlay=target;
      musicPlayer(targetByMasterPlay);
    }
});
function chadd() {
    poster_master_play.classList.add("rotate-img");
}
function chRemove(){
    poster_master_play.classList.remove("rotate-img");
}

// play from menu side
masterPlay.addEventListener('click',playing);
function playing(){
    console.log('hello');
    makeAllPlay();
    let index=targetByMasterPlay.getAttribute('id');
    if(music.paused || music.currentTime<=0){
        //alert("up"+music.currentTime);
        music.play();
        //console.log(targetByMasterPlay)
        let songSidePlayCircle=targetByMasterPlay.querySelector("i");
        wave.classList.add('active1');
        masterPlay.classList.add('bi-pause-fill');
        masterPlay.classList.remove('bi-play-fill');
        chadd();
        if(songSidePlayCircle!==null){
            songSidePlayCircle.classList.add('bi-pause-circle-fill');
            songSidePlayCircle.classList.remove('bi-play-circle-fill');
        }else{
            targetByMasterPlay.classList.add('bi-pause-circle-fill');
            targetByMasterPlay.classList.remove('bi-play-circle-fill');
        }
    }else{
        //alert("down"+music.currentTime);
        music.pause();
        musicCurrentTime=music.currentTime;
        wave.classList.remove('active1');
        masterPlay.classList.remove('bi-pause-fill');
        masterPlay.classList.add('bi-play-fill');
        chRemove();
    }
    makeAllBackground();
      Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgba(54, 226, 236,0.6)";
      document.documentElement.style.overflow = 'hidden';  // firefox, chrome
      document.body.scroll = "no"; // ie only
}

let currentStart=document.getElementById('current-start');
let currentEnd=document.getElementById('current-end');
let seek=document.getElementById('seek');
let bar2=document.getElementById('bar2');
let dot=document.getElementsByClassName('dot')[0];
music.addEventListener('timeupdate',(e)=>{
    let music_curr=music.currentTime;
    let music_dur=music.duration;// duration of music

    let min1=Math.floor(music_dur/60);
    let sec1=Math.floor(music_dur%60);
    if(sec1<10){
        sec1=`0${sec1}`;
    }
    currentEnd.innerText=min1+":"+sec1;
    let min2=Math.floor(music_curr/60);
    let sec2=Math.floor(music_curr%60);
    if(sec2<10){
        sec2=`0${sec2}`;
    }
    currentStart.innerText=min2+":"+sec2;
    let progressBar=0;
    if(music.currentTime>0)
    progressBar=parseInt((music_curr/music_dur)*100);
    seek.value=progressBar;
    let seekBar=seek.value;
    bar2.style.width=`${seekBar}%`;
    dot.style.left=`${seekBar}%`;
})
seek.addEventListener('change',()=>{
    music.currentTime=(seek.value*music.duration)/100;
    console.log(music.currentTime);
})
let volIcon=document.getElementById('vol-icon');
let vol=document.getElementById('vol');
let volBar=document.getElementsByClassName('vol-bar')[0];
let volDot=document.getElementsByClassName('vol-dot')[0];
vol.addEventListener('change',()=>{
    if(vol.value==0){
        volIcon.classList.remove('bi-volume-up');
        volIcon.classList.remove('bi-volume-down');
        volIcon.classList.add('bi-volume-mute');
    }
    if(vol.value>0){
        volIcon.classList.remove('bi-volume-up');
        volIcon.classList.add('bi-volume-down');
        volIcon.classList.remove('bi-volume-mute');
    }
    if(vol.value>50){
        volIcon.classList.add('bi-volume-up');
        volIcon.classList.remove('bi-volume-down');
        volIcon.classList.remove('bi-volume-mute');
    }
    let vol_a=vol.value;
    volBar.style.width=`${vol_a}%`;
    volDot.style.left=`${vol_a}%`;
    music.volume=vol_a/100;
})

let back=document.getElementById('back');
let next=document.getElementById('next');

back.addEventListener('click',()=>{
    let index=targetByMasterPlay.getAttribute('id');
    let selectPrev=document.getElementById(`${Number(index)-1}`);
    console.log(selectPrev);
    if(selectPrev!=null){
       targetByMasterPlay=selectPrev;
       musicPlayer(targetByMasterPlay);
    }
})
next.addEventListener('click',()=>{
    let index=targetByMasterPlay.getAttribute('id');
    let selectNext=document.getElementById(`${Number(index)+1}`);
    console.log(selectNext)
    if(selectNext!=null){
        targetByMasterPlay=selectNext;
        musicPlayer(targetByMasterPlay);
    }
})
let shuffle=document.getElementsByClassName('shuffle')[0];
let shuffleInfo="next";
shuffle.addEventListener('click',()=>{
    let a=shuffle.innerHTML;
    switch (a) {
        case "next":
            shuffle.classList.add('bi-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML="repeat";
            shuffleInfo="repeat";
            break;
        case "repeat":
            shuffle.classList.remove('bi-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML="random";
            shuffleInfo="random";
            break;
        case "random":
            shuffle.classList.remove('bi-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML="next";
            shuffleInfo="next";
            break;
    }
})
music.addEventListener('ended',()=>{
    let index=targetByMasterPlay.id;
    if(shuffleInfo==="next"){
        if(Number(index)===song.length){
        index=0;
        }
        index++;
    }else if(shuffleInfo==="repeat"){
        index=index;        
    }else{
        index=Math.floor((Math.random()*song.length)+1);
    }
    let selectNext=document.getElementById(`${Number(index)}`);
    targetByMasterPlay=selectNext;
    musicPlayer(targetByMasterPlay);
})









// select list
let languageList=document.querySelectorAll('header .song-side nav .dropdown .option div');
let dropdown=document.querySelector('.dropdown');
dropdown.addEventListener('click',(e)=>{
    e.stopPropagation();
    dropdown.classList.toggle('active');
})
document.addEventListener('click',()=>{
    dropdown.classList.remove('active');
})
languageList.forEach((list)=>{
    list.addEventListener('click',(e)=>{
        document.querySelector('.textBox').value=e.target.innerText;
    })
})

// scrolling part
let popSongLeft=document.getElementById('pop-song-left');
let popSongRight=document.getElementById('pop-song-right');
let popSong=document.getElementsByClassName('pop-song')[0];

popSongRight.addEventListener('click',()=>{
    popSong.scrollLeft+=180;
})
popSongLeft.addEventListener('click',()=>{
    popSong.scrollLeft-=180;
})
let popArtLeft=document.getElementById('pop-art-left');
let popArtRight=document.getElementById('pop-art-right');
let popArtist=document.getElementsByClassName('item')[0];
popArtLeft.addEventListener('click',()=>{
    popArtist.scrollLeft=-250;
})
popArtRight.addEventListener('click',()=>{
    popArtist.scrollLeft=+250;
})

// menubar handle
let songSide=document.getElementsByClassName('song-side')[0];
let menuListBtn=document.getElementById('menu-list-active-button');
let menuSide=document.getElementsByClassName('menu-side')[0];
menuListBtn.addEventListener('click',(e)=>{
    e.stopPropagation();
    menuSide.style.transform="unset";
})
songSide.addEventListener('click',(e)=>{
    if(width>250 && width<=1300)
    menuSide.style.transform="translateX(-100%)";
})