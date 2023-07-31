const images=[
    {
        image:"./images/desktop/image-deep-earth.jpg",
        title:"Deep Earth"

    },
    
    {
        image:"./images/desktop/image-night-arcade.jpg",
        title:"Arcade Night"

    },
    {
        image:"./images/desktop/image-soccer-team.jpg",
        title:"Soccer Team"

    },
    {
        image:"./images/desktop/image-grid.jpg",
        title:"The Grid"

    },
    {
        image:"./images/desktop/image-from-above.jpg",
        title:"From UP About Vr"

    },
    {
        image:"./images/desktop/image-pocket-borealis.jpg",
        title:"pocket borealis"

    },
    {
        image:"./images/desktop/image-curiosity.jpg",
        title:"THE CURISITY"

    },
    {
        image:"./images/desktop/image-fisheye.jpg",
        title:"Make it fishey"

    },
]

const images_mobile=[
    {
        image:"./images/mobile/image-deep-earth.jpg",
        title:"Deep Earth"

    },
    
    {
        image:"./images/mobile/image-night-arcade.jpg",
        title:"Arcade Night"

    },
    {
        image:"./images/mobile/image-soccer-team.jpg",
        title:"Soccer Team"

    },
    {
        image:"./images/mobile/image-grid.jpg",
        title:"The Grid"

    },
    {
        image:"./images/mobile/image-from-above.jpg",
        title:"From UP About Vr"

    },
    {
        image:"./images/mobile/image-pocket-borealis.jpg",
        title:"pocket borealis"

    },
    {
        image:"./images/mobile/image-curiosity.jpg",
        title:"THE CURISITY"

    },
    {
        image:"./images/mobile/image-fisheye.jpg",
        title:"Make it fishey"

    },
]



const sidebar_con=document.querySelector('.sidebar-container')



const creation_main=document.querySelector('.creation-main')
if (window.innerWidth>786){
    creation_main.innerHTML=""
            images.map((img) => {
                const div_con = document.createElement('div');
                div_con.classList.add('image-container');
                div_con.style.background = `url(${img.image})`;
            
                const div_title = document.createElement('div');
                div_title.classList.add('title-image');
                div_title.innerHTML = img.title;
            
                div_con.appendChild(div_title);
                creation_main.appendChild(div_con);
            });
}else{
    creation_main.innerHTML=""
    images_mobile.map((img) => {
        const div_con = document.createElement('div');
        div_con.classList.add('image-container');
        div_con.style.backgroundImage = `url(${img.image})`;
    
        const div_title = document.createElement('div');
        div_title.classList.add('title-image');
        div_title.innerHTML = img.title;
    
        div_con.appendChild(div_title);
        creation_main.appendChild(div_con);
    });
}
// Function to log window size whenever it changes
function logWindowSize() {
if (window.innerWidth>786){
    creation_main.innerHTML=""
            images.map((img) => {
                const div_con = document.createElement('div');
                div_con.classList.add('image-container');
                div_con.style.backgroundImage = `url(${img.image})`;
            
                const div_title = document.createElement('div');
                div_title.classList.add('title-image');
                div_title.innerHTML = img.title;
            
                div_con.appendChild(div_title);
                creation_main.appendChild(div_con);
            });
}else{
    creation_main.innerHTML=""
    images_mobile.map((img) => {
        const div_con = document.createElement('div');
        div_con.classList.add('image-container');
        div_con.style.backgroundImage = `url(${img.image})`;
    
        const div_title = document.createElement('div');
        div_title.classList.add('title-image');
        div_title.innerHTML = img.title;
    
        div_con.appendChild(div_title);
        creation_main.appendChild(div_con);
    });
}
if(window.innerWidth>770){
    sidebar_con.style.display="none" 
}
}



function show_sidebar(){
    sidebar_con.style.display = "block"; 
}

function close_sidebar(){
    console.log('hello wolrd')
    sidebar_con.style.display="none" 
}


  
// Add an event listener to the "resize" event
window.addEventListener("resize", logWindowSize);

