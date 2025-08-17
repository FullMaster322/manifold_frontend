<script>
export default {
  data() {
    return {
      activeSection: null
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
  <div class="navbar">
    <div class="navbarButtons">

    <nav>
      <span :class="{ active: activeSection === 'home' }" @click="toHome">Home</span>
      <span :class="{ active: activeSection === 'messenger' }" @click="toMessenger" style="color: #00bfff;">Messenger</span>
      <span :class="{ active: activeSection === 'list' }" @click="toList">AI list</span>
      <span :class="{ active: activeSection === 'about' }" @click="toAbout">About</span>
      <span :class="{ active: activeSection === 'contacts' }" @click="toContacts">Contacts</span>
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
  color: #00bfff;
  border-bottom: 1px solid #00bfff;
}
.active {
  border-bottom: 1px solid #00bfff;
  color: #00bfff;
}

</style>
