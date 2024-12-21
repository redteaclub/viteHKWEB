---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "HKWEB Online"
  text: "精華網站"
  tagline: Bookmark Collections
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<script setup>
import { data } from './example.data.js'
</script>

<script setup>
import { ref, onMounted } from 'vue';
const githubProjects = ref([]);
onMounted(async () => {
  const response = await fetch('https://api.github.com/users/redteaclub/repos');
  githubProjects.value = await response.json();
});
</script>

<pre>{{ data }}</pre>

<template>
    <ul>
      <li v-for="project in githubProjects" :key="project.id">
        <a :href="project.html_url">{{ project.name }}</a>
      </li>
    </ul>
</template>   