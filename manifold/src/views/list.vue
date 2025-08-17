<script>
export default {
  data() {
    return {
      items: []
    };
  },
  mounted() {
   this.fetchLocalJson();
  },
  methods: 
  {
    async fetchLocalJson() 
    {
      try {
        const response = await fetch('/src/assets/list.json', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const data = await response.json();
        this.items = data || [];
        console.log('Данные из list.json:', data);
        console.log(data[0]?.src);
      } catch (error) {
        console.error('Ошибка при чтении JSON:', error);
      }
    }

  }
};
</script>

<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
<div style="background: #0a0c1136; width: 80%; margin-left: 10%; padding-top: 80px;">
  <div class="search-bar" style="z-index: 9999;">
    <div class="search-bar-mega">
      <input type="text" placeholder="search" v-model="search" v-on:input="logSearch">
      <button class="fas fa-search"></button>
    </div>
  </div>
<div class="cardWrapper">
  <div class="aiCard" v-for="item in items" :key="item.id">
   <img :src="item.src"/>
    <div>
      <h2>{{ item.name }}</h2>
      <p>{{ item.description }}</p>
    </div>
  </div>
</div>

  
</div>
</template>

<style scoped>
.cardWrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: -40px;
  padding-bottom: 50px;

}

.aiCard {
  box-sizing: border-box;
  width: 45%;
  background-color: #202a46;
  margin-left: 0px;
  display: flex;
  margin-left: 40px;
  margin-top: 35px;
  cursor: pointer;
  transition: 0.3s;
}
.aiCard:hover {
  background-color: #ffffff;
  color: black;
}
.aiCard:hover img {
  background-color: #202a46;
}
.aiCard img {
  width: 150px;
  height: 150px;
  padding-left: 35px;
  padding-top: 50px;
  border: 1px;
 
  padding: 20px;
  background-color: #ffffff;
  margin-left: -5px;
  border-right: none;
}
.aiCard h2 {
  margin-left: 30px;
}
.aiCard p {
  margin-left: 30px;
  margin-right: 20px;
}
.search-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 72px;
  margin-right: 0;
  margin-left: 5px;
  
}
.search-bar input {
  width: 380px;
  padding: 8px 0 8px 16px;
  background-color: #2A2F3A;
  border: 0.1px solid #2A2F3A;
  font-size: 16px;
  border: 1px solid #2A2F3A;
  padding: 12px;
  
}
.search-bar input::placeholder {
color: rgb(221, 221, 221);
}

.search-bar button {
  padding-top: 5px;
  height: 30px;
  background-color: #2A2F3A;
  border: 3px solid #2A2F3A;
  color: rgb(221, 221, 221);
  cursor: pointer;
  margin: 0;
  z-index: 9999;
  font-size: 16px;
  border: 1px solid #2A2F3A;

}

.search-bar-mega {
  background-color: #2A2F3A;
  border: 1px solid #2A2F3A;

  
}

.search-bar-mega:focus-within {
  background-color: white;
  
}

.search-bar-mega:focus-within input,
.search-bar-mega:focus-within button {
  background-color: white;
  outline: none;
  border-color: transparent;
  
}

.search-bar-mega:focus-within .search-results {
  display: block;
}

.search-dropdown {
  position: fixed;
  top: 60px;
  width: 350px;
  background-color: white;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.2s ease, opacity 0.2s ease;
}

.search-bar-mega:focus-within + .search-dropdown {
  visibility: visible;
  opacity: 1;
}
</style>
