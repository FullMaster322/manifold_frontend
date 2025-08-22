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
  <link rel="stylesheet" href="./assets/app.css">
  <div class="overlay-login" :style="{ display: hideStatus }">
    <div class="panel-login">
      <div class="panel-header">
        <span class="btn-close" @click="changeHideStatus">close</span>
      </div>
      <h1>Login</h1>
      <div class="form-login">
        <input placeholder="email" />
        <input placeholder="password" />
        <div>
          <button class="btn-login">Login</button>
        </div>
      </div>
    </div>
  </div>

  <div class="header-navbar">
    <div class="navbar-content">
      <nav>
        <span :class="{ active: activeSection === 'home' }" @click="toHome" class="nav-item" style="margin-left: 150px;">Home</span>
        <span :class="{ active: activeSection === 'messenger' }" @click="toMessenger" class="nav-item" style="color: #00bfff;">Start messenger</span>
        <span :class="{ active: activeSection === 'list' }" @click="toList" class="nav-item">AI list</span>
        <span :class="{ active: activeSection === 'about' }" @click="toAbout" class="nav-item">About</span>
        <span :class="{ active: activeSection === 'contacts' }" @click="toContacts" class="nav-item">Contacts</span>
        <span class="nav-item" style="margin-left: 100px;" @click="changeHideStatus">Login / Registration</span>
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

.form-login {
  background-color: transparent;
  height: 50px;
}

.form-login input {
  width: 65%;
  background-color: #2a2a2a;
  border: 1px solid #2a2a2a;
  box-shadow: 0 0 8px #2a2a2a;
  color: white;
  font-size: 18px;
  border-radius: 10px;
  padding: 12px 25px;
  margin: 10px;
  resize: none;
  outline: none;
}

.form-login input:focus {
  background-color: #333;
}

.form-login input::placeholder {
  color: rgb(221, 221, 221);
  font-size: 18px;
}

.btn-close {
  background: none;
  border: none;
  color: #aaa;
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.2s ease;
}

.btn-close:hover {
  color: #fff;
}

.overlay-login {
  background: rgba(0, 0, 0, 0.81);
  backdrop-filter: blur(8px);
  position: fixed;
  width: 100%;
  height: 100%;
  text-align: center;
  z-index: 9999;
  border: 1px solid rgba(255, 255, 255, 0.066);
  border-radius: 20px;
}

.panel-login {
  margin: 10% auto;
  background-color: #1f1f1f;
  width: 40%;
  border-radius: 16px;
  border: 1px solid #444;

  box-shadow: 0 0 20px rgba(0, 191, 255, 0.2);
  display: flex;
  flex-direction: column;
  padding-top: 0;
  padding-bottom: 250px;
}

.panel-header {
  text-align: right;
  justify-content: end;
  align-items: end;
}

.btn-login {
  background-color: #003d79;
  color: white;
  width: 200px;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 50px;
}

.btn-login:hover {
  background-color: #005b82;
}

.header-navbar {
  width: 100%;
  height: 50px;
  background: rgba(20, 25, 35, 0.6);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  position: fixed;
  z-index: 9999;
  text-align: center;
}

.navbar-content {
  padding-top: 14px;
}

.nav-item {
  margin-left: 30px;
  cursor: pointer;
  color: rgb(212, 212, 212);
  transition: 0.2s;
  font-size: 16px;
  width: 80px;
}

.nav-item:hover {
  color: white;
}

.nav-item.active {
  color: #00bfff;
  border-bottom: 1px solid #00bfff;
}

.active {
  border-bottom: 1px solid #00bfff;
  color: #00bfff;
}

</style>
