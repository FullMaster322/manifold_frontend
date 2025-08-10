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
    }
  }
}
</script>



<template>
  <div class="navbar">
    <div class="navbarButtons">
      <span :class="{ active: activeButton === 'home' }" @click="toHome" id="home">Home</span>
      <span :class="{ active: activeButton === 'list' }" @click="toList" id="list">AI list</span>
      <span :class="{ active: activeButton === 'contacts' }" @click="toContacts" id="contacts">Contacts</span>
      <span :class="{ active: activeButton === 'about' }" @click="toAbout" id="about">About</span>
    </div>
  </div>
  <RouterView />
</template>


<style>
body {
  font-family: 'Segoe UI', sans-serif;
  margin: 0;
}

.navbar {
  width: 100%;
  height: 50px;
  background-color: #0a0c1136;
  margin: 0;
  text-align: center;
  
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
.navbarButtons span:hover,
.navbarButtons span.active {
  color: white;
  border-bottom: 1px solid #00bfff;
}


</style>
