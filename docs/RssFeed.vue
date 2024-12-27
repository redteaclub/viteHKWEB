<script setup>
import { data as posts } from './example.data.js'
</script>
<template>
    <h1>All Blog Posts</h1>
    <div v-for="post in posts" :key="post.id" class="post">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
        <p><strong>Tags:</strong> {{ post.tags.join(', ') }}</p>
        <p><strong>Likes:</strong> {{ post.reactions.likes }} | <strong>Dislikes:</strong> {{ post.reactions.dislikes }}</p>
        <p><strong>Views:</strong> {{ post.views }}</p>
    </div>
</template>