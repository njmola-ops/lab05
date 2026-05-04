let lifeCount = 0;
let rockCount = 0;

$(document).ready(function () {

  // LIFE BUTTON
  $("#lifebutton").click(function () {
    lifeCount++;
    $(this).html(`Scanned for life ${lifeCount} times`);

    let lifeforms = lifeCount + 2;
    let index = lifeCount % mainEntity.mood.length;
    let currentMood = mainEntity.mood[index];

    $("#output").html(`
      <p class="scan-text1">${lifeforms} lifeforms have been identified.</p>
      <p class="scan-text1">The signal is ${currentMood}.</p>
    `);
  });

  // ROCK BUTTON
  $("#rockbutton").click(function () {
    rockCount++;
    $(this).html(`Scanned for astroids ${rockCount} times`);

    let astroids = rockCount + 3;
    let index = rockCount % duoEntity.mood.length;
    let currentMood = duoEntity.mood[index];

    $("#output").html(`
      <p class="scan-text2">${astroids} astroids have been identified.</p>
      <p class="scan-text2">Collision risk is ${currentMood}.</p>
    `);
  });

  // SOUND BUTTON
  $("#playBtn").click(function () {
    let audio = $("#sound")[0];

    if (audio.paused) {
      audio.play();
      $(this).text("Pause Sound");
    } else {
      audio.pause();
      $(this).text("Play Sound");
    }
  });

  // GOOD BUTTON
  $("#good-button").click(function () {
    askThing();
  });

});


function askThing() {
  let userThing = prompt("Type aliens, galaxies, stars, black holes, or planets.");

  if (!userThing) return;

  userThing = userThing.toLowerCase().trim();

  const images = document.querySelectorAll(".shipz img");

  let newSources = [];


   if (userThing === "galaxies") {
    images.forEach(img => img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZIAP8pa-6kjuX-ftcwipj_ON59Wq0rv-r5A&s");
   newSources = [
      "https://i.pinimg.com/originals/4f/97/75/4f9775b0635d7663bd7c376c6356e59e.gif",
      "https://i.pinimg.com/originals/86/93/a8/8693a8c9082b66e51db1a8f73fb1265f.gif",
      "https://i.pinimg.com/originals/d3/a0/cb/d3a0cb8cbf619abe28c80e4d643d0343.gif",
      "https://giffiles.alphacoders.com/211/211255.gif"
    ];
  
  } 

   else if (userThing === "stars") {
    images.forEach(img => img.src = "https://media1.giphy.com/media/v1.Y2lkPTZjMDliOTUyejgzYjh6dm91b3hkbGF2NW9qcWdsZnd5d3FiOTI5N3psNGEzemdmZyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/C4b6GwFKbYxK8/200w.gif");
   newSources = [
      "https://i.redd.it/mlo5t8m023c91.gif",
      "https://i.pinimg.com/originals/dd/a7/bf/dda7bfed184e278cd7983581e9195c38.gif",
      "https://64.media.tumblr.com/e2ffb47ddaeb8a7859faa979c4ef90b4/147bfebdf112f180-66/s400x600/1d84aa576f1e32d0ab1f18d99f7392e34b74b557.gifv",
      "https://64.media.tumblr.com/cd549094a4be234f8ee97e47c6976fd7/tumblr_pulgd2YHTT1uxrf48o1_640.gif"
    ];
  
  } 
   else if (userThing === "black holes") {
    images.forEach(img => img.src = "https://media1.giphy.com/media/v1.Y2lkPTZjMDliOTUyejgzYjh6dm91b3hkbGF2NW9qcWdsZnd5d3FiOTI5N3psNGEzemdmZyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/C4b6GwFKbYxK8/200w.gif");
   newSources = [
      "https://i.redd.it/va53krqkabs41.gif",
      "https://i.redd.it/vfyedfr5busa1.gif",
      "https://media.tenor.com/PF2dlQO0mqwAAAAM/blackhole-black.gif",
      "https://i.pinimg.com/originals/72/51/dd/7251ddbd6e3be6064331943b0a1cdd46.gif"
    ];
  
  } 
  else if (userThing === "planets") {
    images.forEach(img => img.src = "https://media.tenor.com/ITDQK8Hw8ogAAAAj/planet-jupiter.gif");
 newSources = [
      "https://media4.giphy.com/media/v1.Y2lkPTZjMDliOTUybHZud2Rsczk1MDhiMGdlOTVncm1jcmh5aGRwemk1NGdlODUyamE4ZCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/e6l0YRVArTH8I/source.gif",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/805d3cf6-7d6e-49e8-94eb-7308079bc696/dldfuin-83669423-9406-4c5f-8bdc-f0b8bc92d43e.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi84MDVkM2NmNi03ZDZlLTQ5ZTgtOTRlYi03MzA4MDc5YmM2OTYvZGxkZnVpbi04MzY2OTQyMy05NDA2LTRjNWYtOGJkYy1mMGI4YmM5MmQ0M2UuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jR5_A78-9Eyakz0F9_u2iLnJ_cCp31UXJ0JSexb_4zg",
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Rotating_earth_%28large%29_transparent.gif",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/805d3cf6-7d6e-49e8-94eb-7308079bc696/dldfuin-ce83f33d-ff8c-475c-ac73-c3a7bca45e11.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi84MDVkM2NmNi03ZDZlLTQ5ZTgtOTRlYi03MzA4MDc5YmM2OTYvZGxkZnVpbi1jZTgzZjMzZC1mZjhjLTQ3NWMtYWM3My1jM2E3YmNhNDVlMTEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LLNsFdPcIzyfaCUe_DW_VvPyxJvp7jULv2ph9oKnW8A"
    ];
  }  
  else  if (userThing === "aliens") {
    newSources = [
      "https://cdnb.artstation.com/p/assets/images/images/006/503/705/original/william-robinson-blob-alien-passive.gif?1499109020",
      "https://i.pinimg.com/originals/13/02/69/130269370d0fed4aa711fdf74b6b7d78.gif",
      "https://cdnb.artstation.com/p/assets/images/images/006/503/737/original/william-robinson-boss-passive.gif?1499109339",
      "https://i.redd.it/y4lnvq3qe7751.gif"
    ];
  } 
  else {
    $("#output").html("No Dice");
  }
images.forEach((img, index) => {
    if (newSources[index]) {
      img.src = newSources[index];
    }
  });
}




