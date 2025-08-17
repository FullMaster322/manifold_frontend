<script>
export default {
  data() {
    return {
      items: [],
      search: '',
    };
  },
  mounted() {
    this.fetchLocalJson();
  },
 computed: {
  highlightedItems() {
    const keyword = this.search.trim();
    if (!keyword) {
      return this.items.map(item => ({
        ...item,
        highlightedName: item.name,
        highlightedDescription: item.description
      }));
    }

    const regex = new RegExp(`(${keyword})`, 'gi');

    return this.items
      .filter(item => regex.test(item.name) || regex.test(item.description))
      .map(item => {
        const highlightedName = item.name.replace(regex, '<span style="background: #0078D4; color: white">$1</span>');
        const highlightedDescription = item.description.replace(regex, '<span style="background: #0078D4; color: white">$1</span>');
        return {
          ...item,
          highlightedName,
          highlightedDescription
        };
      });
  }
},


  methods: {
    async fetchLocalJson() {
      try {
        const response = await fetch('/src/assets/list.json');
        const data = await response.json();
        this.items = data || [];
        console.log('list.json:', data);
      } catch (error) {
        console.error('ERROR LIST JSON:', error);
      }
    },
    Search() {
      console.log(this.search);
    },
    toMessenger(id) {
      this.$router.push({ name: 'messenger', query: { cardId: id } });
    }
  }
};
</script>


<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

  

<div style="background: #0a0c1136; width: 80%; margin-left: 10%; padding-top: 80px;">
  <div class="search-bar" style="z-index: 9999;">
    <div class="search-bar-mega">
      <input type="text" placeholder="Search" v-model="search" v-on:input="Search">
      <button class="fas fa-search"></button>
    </div>
  </div>

  <div class="cardWrapper">
    <div v-if="highlightedItems.length === 0" style="color: #ccc; text-align: center; padding: 40px;">
      Unfortunately nothing found
    </div>

    <div
      class="aiCard"
      v-else
      v-for="item in highlightedItems"
      :key="item.id"
    >
      <img :src="item.src" />
      <div>
        <h2 v-html="item.highlightedName"></h2>
        <p v-html="item.highlightedDescription"></p>
        
        <button @click="toMessenger(item.id)">Get {{ item.name }}</button>
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
  margin-top: 45px;
}

.aiCard {
  box-sizing: border-box;
  width: 45%;
  background: rgba(25, 30, 45, 0.7);
  border-radius: 16px;
  margin-left: 0px;
  display: flex;
  margin-left: 40px;
  margin-top: 35px;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  
}
.aiCard:hover {
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.6);
}
.aiCard img {
  width: 140px;
  height: 140px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 24px;

}


.aiCard h2 {
  margin-left: 30px;
}
.aiCard p {
  margin-left: 30px;
  margin-right: 20px;
}
.aiCard button {
  margin-top: 20px;
  margin-left: 30px;
  padding: 10px 18px;
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, #6a7dff, #aab4ff);
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.aiCard button:hover{
  box-shadow: 0 0 10px rgba(120, 140, 255, 0.4);
}
.search-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 72px;
  margin-right: 0;
  margin-left: 0%;
  position: fixed;
  margin-top: -30px;
  background: rgb(22, 28, 38);
  margin-left: -10%;
  border: 1px;
}
.search-bar input {
  width: 420px;
  padding: 8px 0 8px 16px;
  background-color: #2A2F3A;
  border: 0.1px solid #2A2F3A;
  font-size: 16px;
  border: 1px solid #2A2F3A;
  padding: 9px;
  border-radius: 12px;
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
  border-radius: 12px;

}

.search-bar-mega {
  background-color: #2A2F3A;
  border: 1px solid #2A2F3A;
  border-radius: 12px;

  
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
