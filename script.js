let meme = document.getElementById("meme");
let title = document.getElementById("heading");
let getMemeBtn = document.getElementById("generate");
//API URL
let url="https://meme-api.com/gimme/";
//subreddits
let subreddits= ["catmemes","dogmemes","wholesomemes","me_irl"];
//FUNCTION TO GET RANDOM MEME
let getMeme =() =>{
    let randomsubreddit=subreddits[Math.floor(Math.random()*subreddits.length)];

    //FETCH DATA FROM API
    fetch(url+randomsubreddit).then((resp) => resp.json()).then((data)=> {
        let memeImg=new Image();
        //Display meme image and title only after the image loads
        memeImg.onload = () =>{
            meme.src = data.url;
            title.innerHTML = data.title;
        };
        memeImg.src =  data.url;
    });
    
};

getMemeBtn.addEventListener("click",getMeme);
window.addEventListener("load",getMeme);