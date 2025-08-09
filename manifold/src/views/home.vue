<script>

</script>

<template>
    <div class="footer">
    <p>все права защищены и меня нельзя засудить 2025</p>
  </div>
  <div class="main">
    <div class="overlay"></div>
    <h1>The power of neural networks<br> is in our hands!</h1>
    <p>Our project will help you in a variety of situations:</p>
    <div class="list-container">
      <ul class="transfer">
        <li>Image Recognition & Classification</li>
        <li>Natural Language Processing</li>
        <li>Speech Recognition & Generation</li>
        <li>Predictive Analytics</li>
      </ul>
      <ul class="transfer">
        <li>Medical Diagnosis</li>
        <li>Autonomous Vehicles</li>
        <li>Recommendation Systems</li>
        <li>Fraud Detection</li>
      </ul>
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
  position: relative;
  padding: 80px 10%;
  z-index: 1;
  height: 100%;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 95vh;
  background-image: url('../assets/homePhoto.png');
  background-size: cover;
  background-position: center;
  opacity: 0.15;
  z-index: 0;
}

h1 {
  font-size: 48px;
  margin: 0;
  padding-bottom: 20px;
  z-index: 2;
  position: relative;
}

p {
  font-size: 20px;
  margin-bottom: 30px;
  z-index: 2;
  position: relative;
}

.list-container {
  display: flex;
  gap: 40px;
  z-index: 2;
  position: relative;
}

.transfer {
  list-style: none;
  padding: 0;
  margin-top: -5px;
}

.transfer li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 12px;
  font-size: 16px;
  color: #ffffff;
  transition: color 0.3s ease;
  cursor: pointer;
}

.transfer li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 8px;
  height: 8px;
  background-color: #00bfff;
  border-radius: 50%;
}

.transfer li:hover {
  color: #00bfff;
}
.footer {
    width: 100%;
    height: 100px;
    background-color: black;
    position: absolute;
    margin-top: 45%;
    text-align: center;
}
</style>
