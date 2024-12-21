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
import { data } from './data.js'
</script>

<pre>{{ data }}</pre>