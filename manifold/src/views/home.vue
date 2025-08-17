<script>
export default {
  methods: {
    toMessenger() {
      this.$router.push({ name: 'messenger' });
    }
  }
}
</script>

<template>
  <div class="main">
    <div class="main_text">
      <h1>NEURAL<br>NETWORKS</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est commodi alias suscipit nisi voluptatum hic nesciunt officia, sunt voluptatem reiciendis quidem doloribus repellat officiis accusantium iure odit. Quia, iusto molestiae.</p>
      <div style="display: flex;" class="buttons">
        <button style="width: 200px;" class="get" @click="toMessenger" id="messenger">Get started</button>
        <button style="margin-left: 20px; width: 200px;" class="learn">Learn more</button>
      </div>
      <div>
        <h1 style="font-size: 35px; margin-top: 120px; text-shadow: none;">USE CASES</h1>
         <div style="display: flex; width: 100%;">
          <div class="card" style="margin-left: 0; display: block; text-align: center;">
            <img class="cardImage" src="/images/heathlcare.png" style="width: 150px; height: 150px; margin-top: 0; position: relative;"/>
            <h2 class="cardMainText" style="margin-top: -20px;">Healthcare</h2>
            <p class="cardText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam maxime at aut voluptas, sit dolorem ea temporibus beatae, illo obcaecati quod facere porro amet, libero quisquam aspernatur consequuntur minima fuga.</p>
          </div>
          <div class="card" style="margin-left: 50px; display: block; text-align: center;">
            <img class="cardImage" src="/images/finances.png" style="width: 150px; height: 150px; margin-top: 0; position: relative;"/>
            <h2 class="cardMainText" style="margin-top: -20px;">Finance</h2>
            <p class="cardText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam maxime at aut voluptas, sit dolorem ea temporibus beatae, illo obcaecati quod facere porro amet, libero quisquam aspernatur consequuntur minima fuga.</p>
          </div>
         <div class="card" style="margin-left: 50px; display: block; text-align: center;">
            <img class="cardImage" src="/images/art.png" style="width: 150px; height: 150px; margin-top: 0; position: relative; z-index: 999;"/>
            <h2 class="cardMainText" style="margin-top: -20px;">Art</h2>
            <p class="cardText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam maxime at aut voluptas, sit dolorem ea temporibus beatae, illo obcaecati quod facere porro amet, libero quisquam aspernatur consequuntur minima fuga.</p>
          </div>
          
        </div>
        
      </div>
    
    </div>
    
    
    <div class="star_system">
      <div class="star">

        <img src="/images/logo.png" style="width: 120px; height: 120px; border: 1px; border-radius: 50%; margin-top: 180px; 
        -webkit-box-shadow: 0px 0px 20px 2px #0078D4; 
        -moz-box-shadow: 0px 0px 20px 2px #0078D4;
        box-shadow: 0px 0px 20px 2px #0078D4;"/>

        <div style="margin-top: -190px;">
        <div style="width: 250px; height: 250px; margin-left: -67px; margin-top: -65px;  animation: rotate 10s linear infinite;" class="orbit">
          <div style="margin-top: -20px;" class="planet">
            <img src="/images/gptLogo.webp" style="width: 50px; height: 50px; border-radius: 50%;"/>
          </div>
          <div style="margin-top: 190px;" class="planet">
            <img src="/images/midjourneyLogo.png" style="width: 50px; height: 50px; border-radius: 50%;"/>
          </div>
          
        </div>
        <div style="width: 370px; height: 370px; margin-top: -310px; margin-left: -125px; animation: backRotate 15s linear infinite;" class="orbit">
          <div style="margin-top: -15px; position: relative; z-index: 999; cursor: pointer;" class="planet">
            <img src="/images/hotpot.jpg" style="width: 50px; height: 50px; border-radius: 50%; position: relative; z-index: 999; z-index: 999;"/>
          </div>
         
          <div style="margin-top: 105px; margin-left: 345px; position: relative; z-index: 999; cursor: pointer;" class="planet">
            <img src="/images/copilotLogo.png" style="width: 50px; height: 50px; border-radius: 50%; position: relative; z-index: 999; z-index: 999;"/>
          </div>
           <div style="margin-top: 10px; margin-left: -20px; position: relative; z-index: 999; cursor: pointer;" class="planet">
            <img src="/images/deepseekLogo.png" style="width: 50px; height: 50px; border-radius: 50%; position: relative; z-index: 999; z-index: 999;"/>
          </div>
        </div>

        <div style="width: 500px; height: 500px; margin-top: -435px; margin-left: -190px; animation: rotate 20s linear infinite; z-index: 1;" class="orbit">
          <div style="margin-top: 10px; animation: rotate 20s linear infinite; position: relative; z-index: 999;" class="planet">
            <img src="/images/gigaGpt.png" style="width: 50px; height: 50px; border-radius: 50%;"/>
          </div>
          <div style="margin-top: 250px; margin-left: -15px; animation: rotate 20s linear infinite; position: relative; z-index: 999;" class="planet">
            <img src="/images/notion.png" style="width: 50px; height: 50px; border-radius: 50%;"/>
          </div>
           <div style="margin-top: 0px; margin-left: 435px; animation: rotate 20s linear infinite; position: relative; z-index: 999;" class="planet">
            <img src="/images/yandexGpt.png" style="width: 50px; height: 50px; border-radius: 50%;"/>
          </div>
          
        </div>
        
        </div>
       
      </div>
    </div>
   
  </div>

    <div class="footer">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, iusto molestiae.</p>
    </div>

  
</template>

<style>
body {
  margin: 0;
  font-family: 'Segoe UI', Roboto, sans-serif;
  background: radial-gradient(circle at center, #0a0f1c, #1a2238);
  color: #ffffff;
  overflow-x: hidden;
  align-items: center;
  justify-content: center;
}
.main {
  display: flex;
  margin-top: 0px;
  margin-left: -30%;
  align-items: center;
  justify-content: center;
  
}

.footer {
  display: flex;
  margin-top: 50px;
  margin-left: -25%;
  align-items: center;
  justify-content: center;
  background-color: #0a0c11;
  text-align: center;
}

.main_text {
  width: 450px;
  margin-top: 50px;
}
.main_text h1 {
  text-align: left;
  font-size: 64px;
  font-weight: 700;
  color: #ffffff;
  text-shadow: 0 0 12px #4000ff;
  margin-top: 80px;
  letter-spacing: 2px;
}
.star_system {
  position: absolute;
  margin-top: -650px;
  margin-left: 1050px;
  
    height: 0px;
    width: 0px;

  
}
.star {
  position: relative;

}
.planet {
  width: 50px; 
  height: 50px; 
  border: 5px; 
  margin-left: 90px; 
  border-radius: 50%; 
  background-color: rgb(255, 255, 255); 
  transform: translate(90px, -50%);
  animation: backRotate 30s linear infinite;
}

.orbit {
  border: 2px solid #202a46; 
  border-radius: 50%;
  z-index: 0;
}

.buttons button {
  text-transform: none;
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
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2px;
  min-width: 320px;
  text-align: left;
  color: #e0e0ff;
  backdrop-filter: blur(6px);
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.05);
  transition: transform 0.3s ease;
  z-index: 999;
  cursor: pointer;
}

.card:hover .cardImage {
  transition: 0.3s;
  display: none;
}
.card:hover .cardMainText {
  transition: 0.3s;
  display: none;
}
.cardText {
  transition: 0.3s;
  display: none;
  width: 260px;
  text-align: left;
  margin-left: 30px;
}
.card:hover .cardText
{
  display: block;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 0 12px rgba(110, 63, 207, 0.3);
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
