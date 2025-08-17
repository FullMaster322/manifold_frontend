<script>
export default {
  data() {
    return {
      activeButton: 'home'
    };
  },
  methods: {
    setActive(name) {
      this.activeButton = name;
    },
    toHome() {
      this.setActive('home');
      this.$router.push({ name: 'home' });
    },
    toAbout() {
      this.setActive('about');
      this.$router.push({ name: 'about' });
    },
    toList() {
      this.setActive('list');
      this.$router.push({ name: 'list' });
    },
     toContacts() {
      this.setActive('contacts');
      this.$router.push({ name: 'contacts' });
    },
     toMessenger() {
      this.setActive('messenger');
      this.$router.push({ name: 'messenger' });
    }
  }
}
</script>



<template>
  <div class="navbar">
    <div class="navbarButtons">
      <span :class="{ active: activeButton === 'home' }" @click="toHome" id="home">Home</span>
      <span :class="{ active: activeButton === 'messenger' }" @click="toMessenger" id="messenger" style="color: #00bfff;">Start messenger</span>
      <span :class="{ active: activeButton === 'list' }" @click="toList" id="list">AI list</span>
      <span :class="{ active: activeButton === 'contacts' }" @click="toContacts" id="contacts">Contacts</span>
      <span :class="{ active: activeButton === 'about' }" @click="toAbout" id="about">About</span>
    </div>
  </div>
  <RouterView />
</template>


<style>
body {
  margin: 0;
  padding: 0;
  background: radial-gradient(circle at top left, #1b2130, #0c0f14);
  background-attachment: fixed;
  font-family: 'Inter', sans-serif;
  color: #e0e0e0;
}

.navbar {
  width: 100%;
  height: 50px;
  background: rgba(20, 25, 35, 0.6);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  margin: 0;
  text-align: center;
  position: fixed;
  z-index: 9999;
  
}
.navbarButtons {
  padding-top: 14px;
}
.navbarButtons span {
  margin-left: 30px;
  cursor: pointer;
  color: rgb(212, 212, 212);
  transition: 0.2s;
  font-size: 16px;
  width: 80px;
  
}
.navbarButtons span:hover {
  color: white;
}
.navbarButtons span.active {
  color: white;
  border-bottom: 1px solid #00bfff;
}


</style>
