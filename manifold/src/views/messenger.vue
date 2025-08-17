<script>
export default {
  data() {
    return {
      items: [],
      search: '',
      send: '',
      selectedItemName: null,
      selectedItemId: null,
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
          const highlightedDescription = item.description.replace(regex, '<mark>$1</mark>');
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
    selectItem(item) {
      this.selectedItemName = item.highlightedName;
      this.selectedItemId = item.id;
    },
  }
};
</script>





<template>
  <div style="display: flex;">
    
    
    <div class="pages">
      <div style="margin-top: 0;" >
        
        
        <div style="z-index: 9999; margin-left: -35%;">
          <input
            type="text"
            placeholder="Search"
            v-model="search"
            @input="Search"
            style="margin-bottom: 40px; margin-left: -5px; width: 210px; font-size: 16px; padding: 3px; background: rgba(30, 35, 45, 0.8);
color: #e0e0e0;
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 10px;
padding: 10px 14px; border: 1px; color: white; border-radius: 10px; outline: none; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;"
          />
         
        </div>

        
        <div class="cardWrapper">
          <div
            v-if="highlightedItems.length === 0"
            style="color: #ccc; text-align: center; padding: 40px; margin-left: -120px;"
          >
            Unfortunately nothing found
          </div>

          <div
            v-else
            v-for="item in highlightedItems"
            :key="item.id"
            class="aiCard"
            @click="selectItem(item)"
            :class="{ selected: item.id === selectedItemId }"
          >
            <img :src="item.src" />
            <div>
              <h2 v-html="item.highlightedName"></h2>
            </div>
          </div>
        </div>

        
        
      </div>
    </div>

    
    <div class="messenger" >
      
      
      <div style="margin: 10px 0 0 -50px; padding-top: 10px; height: 65%; position: fixed; margin-left: 120px;">
        <span style="font-size: 24px;">{{ activeTabTitle }} &nbsp;</span>
        <span style="font-size: 24px;">Chat with </span>
        <span style="font-size: 24px; color: #0078D4; cursor: pointer;">
          {{ selectedItemName || 'choose AI' }}
        </span>
      </div>


      <div style="position: fixed; bottom: 0; margin-left: 0; width: 71%; overflow: hidden;">
      <div
          class="search-bar"
          style="z-index: 9999; background: none; margin: 20px 0 0 -160px; padding-left: 160px; padding-top: 10px; padding-bottom: 10px; margin-bottom: 20px;"
        >
          

          <div class="search-bar-mega">
            <input
              type="text"
              placeholder="Send message"
              v-model="send"
              @input="Send"
              style="font-size: 16px; padding: 10px;"
            />
            <button class="sendBtn">➤</button>
          </div>

          
        </div>

      
      
    </div>
    </div>
  </div>
</template>





<style scoped>
body {
  margin: 0;
  font-family: 'Segoe UI', Roboto, sans-serif;
  background: radial-gradient(circle at top left, #1a1f2b, #0d0f14);
  background-attachment: fixed;
  color: #e0e0e0;
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
  align-items: center;
  justify-content: center;
}

.sendBtn {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  margin-left: 5px;
  background: linear-gradient(135deg, #4f6dfc, #8f9eff);
color: #fff;
border: none;
border-radius: 10px;

cursor: pointer;
transition: transform 0.2s ease;
  color: white;
  font-size: 20px;
  cursor: pointer;
  margin-top: 2px;
  margin-right: 5px;
}
.sendBtn:hover {

box-shadow: 0 0 10px rgba(79, 109, 252, 0.4);
}

.aiCard.selected {
  color: #0078D4;
  transition: all 0.3s ease;
}

.messenger {
  margin-top: 50px;
  width: 71%;
  padding-left: 0;
  height: 100vh;
  background: radial-gradient(circle at top left, #1a1f2b, #0d0f14);
  text-align: center;
  margin-left: 20%;
}

.pages {
  position: fixed;
  width: 7%;
  padding-top: 50px;
  background: rgba(20, 25, 35, 0.6);
  backdrop-filter: blur(12px);
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  min-height: 35px;
  overflow: hidden;
  margin-left: 10%;
  z-index: 1;
  height: 100vh;
  padding: 70px;
  border-left: none;
  border-bottom: none;
  border-top: none;
}

.cardWrapper {
  flex-direction: row;
  padding-left: 180px;
  margin-left: -120px;
  width: 95%;
}

.aiCard {
  color: #b0c4ff;
  padding: 12px 16px;
  border-radius: 8px;
  width: 250px;
  margin-left: -130px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: -40px;
  
}
.aiCard:hover {
  color: white;
}
.aiCard img {
  width: 30px;
  height: 30px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 24px;
  margin-left: 10px;
}
.aiCard h2 {
  margin-left: 4px;
  font-size: 16px;
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
  background-color: #07080a;
  margin-left: -10%;
  padding-right: 25%;
  padding-left: 10%;

  height: 50px;
}
.search-bar input {
  width: 460px;
  background-color: #2A2F3A;
  border: 1px solid #2A2F3A;
  font-size: 18px;
  padding: 5px;
  border-radius: 10px;
  padding-left: 10px;
  color: white;
}
.search-bar input::placeholder {
  color: rgb(221, 221, 221);
  font-size: 18px;
}

.search-bar-mega {
  background-color: #2A2F3A;
  border: 1px solid #2A2F3A;
  border-radius: 10px;
}
.search-bar-mega:focus-within input {
  outline: none;
  color: rgb(255, 255, 255);
}
.search-bar-mega:focus-within .search-results {
  display: block;
}

</style>
