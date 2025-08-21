<script>
export default {
  data() {
    return {
      activeSection: null,
      hideStatus: 'none',
    };
  },
  methods: {
    setActive(section) {
      this.activeSection = section;
    },
    updateActiveFromRoute(route) {
      const path = route.path;

      if (path.includes('/messenger')) {
        this.setActive('messenger');
      } else if (path.includes('/contacts')) {
        this.setActive('contacts');
      } else if (path.includes('/list')) {
        this.setActive('list');
      } else if (path.includes('/about')) {
        this.setActive('about');
      } else if (path === '/' || path.includes('/home')) {
        this.setActive('home');
      } else {
        this.setActive(null);
      }
    },
    toHome() {
      this.$router.push({ name: 'home' });
    },
    toAbout() {
      this.$router.push({ name: 'about' });
    },
    toList() {
      this.$router.push({ name: 'list' });
    },
    toContacts() {
      this.$router.push({ name: 'contacts' });
    },
    toMessenger() {
      this.$router.push({ name: 'messenger' });
    },
    changeHideStatus() {
      if(this.hideStatus === 'block') {
        this.hideStatus = 'none'
      } else {
        this.hideStatus = 'block'
      }
    }
  },
  watch: {
    $route(to) {
      this.updateActiveFromRoute(to);
    }
  },
  mounted() {
    this.updateActiveFromRoute(this.$route);
  }
};
</script>




<template>

  <div class="loginPanelBack" :style="{ display: hideStatus }">
    <div class="loginPanel">
      <h1>Login</h1>
      <input />
    </div>
  </div>
  <div class="navbar">
    <div class="navbarButtons">

    <nav>
      <span :class="{ active: activeSection === 'home' }" @click="toHome" style="margin-left: 150px;">Home</span>
      <span :class="{ active: activeSection === 'messenger' }" @click="toMessenger" style="color: #00bfff;">Start messenger</span>
      <span :class="{ active: activeSection === 'list' }" @click="toList">AI list</span>
      <span :class="{ active: activeSection === 'about' }" @click="toAbout">About</span>
      <span :class="{ active: activeSection === 'contacts' }" @click="toContacts">Contacts</span>
      <span style="margin-left: 100px;" @click="changeHideStatus">Login / Registration</span>
        
    </nav>

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
  overflow-y: auto;
}
.loginPanelBack {
  background: rgba(255, 255, 255, 0.066);
  backdrop-filter: blur(8px);
  position: absolute; width: 100%;  height: 100%; text-align: center; z-index: 9999;
  border: 1px solid rgba(255, 255, 255, 0.066);
  border-radius: 20px;
}
.loginPanel {
  margin-top: 10%;
  background: rgb(20, 25, 35); 
  margin-left: 35%; 
  margin-right: 35%;
  border: 1px;
  border-radius: 10px;
}
.navbar {
  width: 100%;
  height: 50px;
  background: rgba(20, 25, 35, 0.6);
  backdrop-filter: blur(14px);
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
  color: #00bfff;
  border-bottom: 1px solid #00bfff;
}
.active {
  border-bottom: 1px solid #00bfff;
  color: #00bfff;
}

</style>
