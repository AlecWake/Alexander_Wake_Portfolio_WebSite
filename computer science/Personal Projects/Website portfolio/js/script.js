/* Function adds functionality to Read more button in About me Section */
document.getElementById('read-more-btn').addEventListener('click', function(){
    const shortBio = document.getElementById('short-bio');
    const longBio = document.getElementById('long-bio');
    const btn = document.getElementById('read-more-btn');

    // Toggle visibility of short and long bio
    if(shortBio.style.display === "none"){
        shortBio.style.display = "block";
        longBio.style.display = "none";
        btn.innerText = "Read More";
    }
    else{
        shortBio.style.display = "none";
        longBio.style.display = "block";
        btn.innerText = "Show Less";
    }
});