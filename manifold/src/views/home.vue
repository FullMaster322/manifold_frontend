<script>

</script>

<template>
  <div class="main">
    <div class="main_text">
      <h1>NEURAL<br>NETWORKS</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est commodi alias suscipit nisi voluptatum hic nesciunt officia, sunt voluptatem reiciendis quidem doloribus repellat officiis accusantium iure odit. Quia, iusto molestiae.</p>
      <div style="display: flex;" class="buttons">
        <button style="width: 200px;" class="get">get started</button>
        <button style="margin-left: 20px; width: 200px;" class="learn">learn more</button>
      </div>
      <div>
        <h1 style="font-size: 40px; margin-top: 120px;">USE CASES</h1>
         <div style="display: flex; width: 100%;">
          <div class="card" style="margin-left: 0; display: block; text-align: center;">
            <img class="cardImage" src="../assets/heathlcare.png" style="width: 150px; height: 150px; margin-top: 0; position: relative;"/>
            <h2 class="cardMainText" style="margin-top: -20px;">Healthcare</h2>
          </div>
          <div class="card" style="margin-left: 50px; display: block; text-align: center;">
            <img class="cardImage" src="../assets/finances.png" style="width: 150px; height: 150px; margin-top: 0; position: relative;"/>
            <h2 class="cardMainText" style="margin-top: -20px;">Finance</h2>
          </div>
         <div class="card" style="margin-left: 50px; display: block; text-align: center;">
            <img class="cardImage" src="../assets/art.png" style="width: 150px; height: 150px; margin-top: 0; position: relative;"/>
            <h2 class="cardMainText" style="margin-top: -20px;">Art</h2>
          </div>
        </div>
      </div>
    </div>
    
    <div class="star_system">
      <div class="star">
        <img src="../assets/logo.png" style="width: 120px; height: 120px; border: 1px; border-radius: 50%; margin-top: 180px;"/>
        <div style="margin-top: -190px;">
        <div style="width: 250px; height: 250px; margin-left: -67px; margin-top: -65px; " class="orbit">
          <div style="margin-top: -20px;" class="planet">
            <img src="../assets/gptLogo.webp" style="width: 50px; height: 50px; border-radius: 50%;"/>
          </div>
          <div style="margin-top: 190px;" class="planet">
            <img src="../assets/midjourneyLogo.png" style="width: 50px; height: 50px; border-radius: 50%;"/>
          </div>
          
        </div>
        <div style="width: 370px; height: 370px; margin-top: -310px; margin-left: -125px; animation: backRotate 15s linear infinite;" class="orbit">
          <div style="margin-top: -15px;" class="planet">
            <img src="../assets/hotpot.jpg" style="width: 50px; height: 50px; border-radius: 50%;"/>
          </div>
        </div>
        <div style="width: 500px; height: 500px; margin-top: -435px; margin-left: -190px; animation: rotate 20s linear infinite;" class="orbit">
          <div style="margin-top: 10px; animation: rotate 20s linear infinite;" class="planet">
            <img src="../assets/exactly.jpg" style="width: 50px; height: 50px; border-radius: 50%;"/>
          </div>
        </div>
        
        </div>
       
      </div>
    </div>
  </div>
  
</template>

<style>
body {
  margin: 0;
  font-family: 'Segoe UI', Roboto, sans-serif;
  background: radial-gradient(circle at center, #0a0f1c, #1a2238);
  color: #ffffff;
  overflow-x: hidden;
}
.main {
  display: flex;
  margin-top: 0px;
  margin-left: 20%;
  margin-right: 15%;
  
  
}
.main_text {
  width: 450px;
}
.main_text h1 {
  font-size: 50px;
  margin-top: 20%;
}
.star_system {
  margin-top: 5%;
  margin-left: 30%;
  
}
.star {
  position: relative;
  

}
.planet {
  width: 50px; 
  height: 50px; 
  border: 1px; 
  margin-left: 90px; 
  border-radius: 50%; 
  background-color: rgb(255, 255, 255); 
  transform: translate(90px, -50%);
  animation: backRotate 30s linear infinite;
}
.orbit {
  border: 2px solid #202a46; 
  border-radius: 50%;
  animation: rotate 10s linear infinite;
  position: relative;
}

.buttons button {
  margin-top: 10px;
  width: 200px;
  height: 50px;
  border: 3px;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s;
}
.get, .learn {
  font-family: 'Segoe UI', sans-serif;
  font-size: 16px;
  text-transform: lowercase;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.get {
  background-color: #0078D4; 
  color: rgb(255, 255, 255);
}

.get:hover {
  background-color: #005A9E;
  color: white;
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0,0,0,0.2);
}
.learn {
  background-color: white;
  color: black;
  border: 2px solid #0078D4;
}

.learn:hover {
  background-color: #E5F1FB;
  color: #0078D4;
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}
.card {
  min-width: 350px;
  height: 200px;
  background-color: #202a46;
  margin-left: 50px;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  color: #DDEAF2;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  z-index: 9999;
}


.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(13, 27, 42, 0.6);
}


@keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
@keyframes backRotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }
</style>
