<script setup>
import axios from "axios";
import { ref } from "vue";

let searchQuery = ref();
let searchResults = ref([]);
let isLoading = ref(false);
let isDarkTheme = ref(false);
let error = ref(null);

const getTheResults = async (query) => {
  let encodedQuery = encodeURI(query);
  let endPoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${encodedQuery}`;

  try {
    isLoading.value = true;
    let response = await axios.get(endPoint);
    if (response.data.query && response.data.query.search) {
      searchResults.value = response.data.query.search;
      error.value = null;
    } else {
      searchResults.value = [];
      error.value = "No results found";
    }
  } catch (err) {
    console.log(err);
    searchResults.value = [];
    error.value = "An error occured in fetching";
  } finally {
    isLoading.value = false;
  }
};

const toggleDarkTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
};

const submitQuery = () => {
  if (searchQuery.value.trim() !== "") {
    getTheResults(searchQuery.value);
  } else {
    searchResults.value = [];
    error.value = "Please enter the valid query..";
  }
};
</script>

<template>
  <div :class="{ darkTheme: isDarkTheme }">
    <div class="container">
      <div class="header-container">
        <h1>Search Wikipedia</h1>
        <span id="theme-toggler" @click="toggleDarkTheme">{{
          isDarkTheme ? "Light" : "Dark"
        }}</span>
      </div>

      <form @submit.prevent="submitQuery">
        <input type="text" placeholder="Enter the query" v-model="searchQuery" id="search-input" />
        <button type="submit">Search</button>
      </form>

      <div id="search-results">
        <div v-if="isLoading" class="spinner">Loading...</div>
        <div class="error" v-if="error"></div>
        <div v-if="searchResults.length">
          <div v-for="result in searchResults" :key="result.pageid">
            <h3 class="result-title">
              <a
                :href="`https://en.wikipedia.org/?curid=${result.pageid}`"
                target="_blank"
                rel="noopener"
                >{{ result.title }}</a
              >
            </h3>
            <a :href="`https://en.wikipedia.org/?curid=${result.pageid}`" class="result-link">{{
              result.pageid
            }}</a>
            <p class="result-snippet" v-html="result.snippet"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  font-size: 3rem;
  margin-bottom: 2rem;
}

#search-form {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}

#search-input {
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  border: 2px solid #ccc;
  border-radius: 0.25rem;
  flex-grow: 1;
}

#search-input:focus {
  outline: none;
  border-color: #0074d9;
}

button[type='submit'] {
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  background-color: #0074d9;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

button[type='submit']:hover {
  background-color: #0063ad;
}

#search-results {
  margin-bottom: 2rem;
}

.result-item {
  margin-bottom: 1rem;
}

.result-title {
  font-size: 1.5rem;
  margin-top: 0;
}

.result-link {
  display: block;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #0074d9;
}

.result-link:hover {
  text-decoration: underline;
}

.result-snippet {
  margin-top: 0;
}

.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  height: 10rem;
}

/* Dark theme */
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#theme-toggler {
  border: none;
  background: transparent;
  cursor: pointer;
  background: #e2e2e2;
  padding: 10px 20px;
  border-radius: 100px;
}

.darkTheme {
  background-color: #282c34;
  color: #fff;
}

.darkTheme #search-input {
  background-color: #454545;
  color: #fff;
  border-color: #fff;
}

.darkTheme #search-input:focus {
  border-color: #0074d9;
}

.darkTheme input[type='submit'] {
  background-color: #0074d9;
}

.darkTheme .result-link,
.darkTheme .result-link:hover {
  color: #90caf9;
}
</style>
