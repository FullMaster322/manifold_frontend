<script>
export default {
  data() {
    return {
      items: [],
      search: '',
      send: '',
      selectedItemName: null,
      selectedItemId: null,
      id: null,
      previousParagraphs: [],
      paragraphCount: 0,
    };
  },

  mounted() {

  this.id = this.$route.query.cardId;

  if (this.id) {
    this.id = Number(this.id);
  }

  this.fetchAIList().then(() => {
    const matchedItem = this.items.find(item => item.id === this.id);
    if (matchedItem) {
      this.selectItem({
        ...matchedItem,
        highlightedName: matchedItem.title,
        highlightedDescription: matchedItem.description,
      });
    }
  });
    },

  computed: {
    highlightedItems() {
      const keyword = this.search.trim();

      if (!keyword) {
        return this.items.map(item => ({
          ...item,
          highlightedName: item.title,
          highlightedDescription: item.description,
        }));
      }

      const regex = new RegExp(`(${keyword})`, 'gi');

      return this.items
        .filter(item => regex.test(item.title) || regex.test(item.description))
        .map(item => ({
          ...item,
          highlightedName: item.title.replace(regex, '<span style="background: #0078D4; color: white">$1</span>'),
          highlightedDescription: item.description.replace(regex, '<mark>$1</mark>'),
        }));
    },
  },

  methods: {
   async fetchAIList() {
  try {
    const response = await fetch('http://localhost:8000/ai/'); // или твой реальный API URL
    const data = await response.json();
    this.items = data || [];
  } catch (error) {
    console.error('Ошибка загрузки AI с бэкенда:', error);
  }
},

    Search() {
      console.log(this.search);
    },

    selectItem(item) {
      this.selectedItemName = item.highlightedName;
      this.selectedItemId = item.id;
    },

    adjustHeight() {
      const el = this.$refs.textarea;
      const maxHeight = 350;

      if (!el) return;

      const isEmpty = el.value.trim() === '';
      if (isEmpty) {
        el.style.height = '36px';
        el.style.overflowY = 'hidden';
        return;
      }

      el.style.height = 'auto';
      let newHeight = el.scrollHeight;

      if (newHeight > maxHeight) {
        newHeight = maxHeight;
        el.style.overflowY = 'auto';
      } else {
        el.style.overflowY = 'hidden';
      }

      el.style.height = `${newHeight}px`;
    },

    sendMessage() {
      const textareaEl = this.$refs.textarea;
      if (!textareaEl) return;

      const message = textareaEl.value.trim();
      this.send = message;

      if (!message) {
        console.warn('⚠️ Пустое сообщение не отправляется');
        return;
      }

      if (!this.selectedItemName || this.selectedItemName.trim() === '') {
        console.warn('⚠️ Выберите AI перед отправкой сообщения');
        return;
      }

      console.log('%c', 'color: #4f6dfc; font-weight: bold;', message);

      if (this.selectedItemName === 'Copilot') {
        console.log('%cCopilot', 'color: #00ffff; font-weight: bold;');
      }

      textareaEl.value = '';
      this.send = '';

      this.adjustHeight();
    },
  },
};
</script>






<template>
  <div style="display: flex;">
    
    
    <div class="pages">
      <div style="margin-top: 0;" >
        
        
        <div style="z-index: 9999; margin-left: -35%; ">
          <input
            type="text"
            placeholder="Search"
            v-model="search"
            @input="Search"
            style="margin-bottom: 20px; margin-left: -5px; width: 120%; font-size: 16px; padding: 3px; background: rgba(30, 35, 45, 0.9);
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

    <div style="" class="mess">
    <div class="messenger" >
      
      
      <div style="margin: 10px 0 0 -50px; padding-top: 10px; height: 65%; position: fixed; margin-left: 9%;">
        <span style="font-size: 18px;">Chat with&nbsp;</span>
        <span style="font-size: 18px; color: #0078D4; cursor: pointer;">
          {{ selectedItemName || 'choose AI' }}&nbsp;
        </span>
      </div>

      <h3 style="color: red; margin-left: 0%; margin-top: 19px;">&nbsp; {{ this.inpMiss }}</h3>
      <div style="position: fixed; bottom: 0;  width: 66%; margin-left: -1%; overflow: hidden;">
      <div
          class="search-bar"
          style="z-index: 9999; background: none; margin-top: 200px; padding-top: 100px; padding-bottom: 100px; padding-top: 50px; justify-content: center;"
        >
          
<div style="background-color: none; display: flex; padding-top: 35px; border: 1px; border-radius: 20px; padding-top: 2px; justify-content: center;">
    <div class="textarea-wrapper" style="width: 100%;" >
    
    <textarea
      v-model="text"
      ref="textarea"
      class="grow-up"
      @input="adjustHeight"
      placeholder="Send message..."
      style="width: 65%; max-height: 350px; padding-top: 10px; height: 36px; padding-bottom: 0;  font-size: 18px; padding-right: 5%;"
    />
    
    <button class="sendBtn" style="position: absolute; bottom: 1%; right: -22%;" v-on:click="sendMessage">➤</button>
    </div>

          
        </div>
   </div>     
      </div>
      
    </div>
    </div>
  </div>
</template>





<style scoped>
.mess {
  position: fixed; width: 100%; height: 100%; 
  background: radial-gradient(circle at top left, #141720, #0a0c10);
}

.textarea-wrapper {
  position: absolute;
  left: -35%;
  height: 200px;
  width: 100%;
  bottom: 7%;
  
}
.grow-up {
 position: absolute;
  bottom: 0;
  width: 100%;
  min-height: 20px;
  max-height: 200px;
  background-color: rgba(40, 45, 60, 0.9);
  color: #e0eaff;
  font-size: 16px;
  line-height: 1.5;

  border-radius: 12px;
  
  resize: none;
  outline: none;
  overflow-y: auto;
  transition: height 0.2s ease;
}

.grow-up::placeholder {
  color: #a0a0b0;
  font-style: italic;
}

.grow-up:focus {
  background-color: rgba(50, 55, 75, 0.95);
  box-shadow: 0 0 12px rgba(79, 109, 252, 0.3);
}

.grow-up::-webkit-scrollbar {
  width: 8px;
}

.grow-up::-webkit-scrollbar-track {
  background: #f0f0f0;
  border-radius: 4px;
}

.grow-up::-webkit-scrollbar-thumb {
  background-color: #999;
  border-radius: 4px;
}

.grow-up::-webkit-scrollbar-thumb:hover {
  background-color: #777;
}
.sendBtn {
  width: 45px;
  height: 45px;
  border: none;
  border-radius: 50%;
  margin-left: 5px;
  background: rgba(40, 45, 60, 0);
color: #fff;
border: none;
border-radius: 10px;

cursor: pointer;
transition: transform 0.2s ease;
  color: white;
  font-size: 22px;
  cursor: pointer;

  margin-right: 10px;
}
.sendBtn:hover {
font-size: 26px;
}

.aiCard.selected {
  color: #ffffff;
  transition: all 0.3s ease;
  background: linear-gradient(145deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.05));
  border: 1px solid rgba(0, 255, 255, 0.3);
  box-shadow:
    0 0 8px rgba(0, 255, 255, 0.3),
    0 0 24px rgba(255, 0, 255, 0.2),
    inset 0 0 12px rgba(0, 255, 255, 0.1);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(0, 255, 255, 0.3);
}


.messenger {
  margin-top: 50px;
  width: 65%;
  position: fixed;
  top: 0;
  height: 100vh;
  background: radial-gradient(circle at top left, #1a1f2b, #0d0f14);
  text-align: center;
  margin-left: 25%;
}

.pages {
  position: fixed;
  width: 155px;
  padding-top: 150px;
  background: rgba(20, 25, 35, 0.6);
  backdrop-filter: blur(12px);
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  min-height: 35px;
  margin-left: 10%;
  z-index: 1;
  height: 100vh;
  padding: 70px;
  border-left: none;
  border-bottom: none;
  border-top: none;
}


.cardWrapper {
  position: relative;
  width: 197%;
  padding-left: 140px;
  padding-right: 120px;
  margin-left: -80px;
  max-height: calc(100vh - 160px); /* адаптивная высота */
  overflow-y: scroll;
  overflow-x: hidden;
  
  box-sizing: border-box;


}

.cardWrapper::-webkit-scrollbar {
  width: 6px;
}

.cardWrapper::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.37);
}

.cardWrapper::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.37);


}



.aiCard {
  color: #b0c4ff;
  padding: 0px 12px;
  width: 255px;
  margin-left: -130px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  
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
  margin-left: 5px;
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
.search-bar textarea {
  width: 100%;
  background-color: #2A2F3A;
  border: 1px solid #2A2F3A;
  font-size: 18px;
  padding: 0px;
  border-radius: 10px;
  padding-left: 25px;
  color: white;
  resize: none;
  outline: none;
  font-size: 16px; 
  padding-bottom: 20px;
  
  height: 10px;
}
.search-bar textarea::placeholder {
  color: rgb(221, 221, 221);
  font-size: 18px;
}

.search-bar-mega {
  background-color: #2A2F3A;
  border: 1px solid #2A2F3A;
  border-radius: 10px;
}
.search-bar-mega:focus-within textarea {
  outline: none;
  color: rgb(255, 255, 255);
}
.search-bar-mega:focus-within .search-results {
  display: block;
}

</style>
