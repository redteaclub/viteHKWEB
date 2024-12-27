---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "HKWEB Online"
  text: "精華網站 2025"
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

<script>
async function fetchLatestRepos() {
  const response = await fetch('https://api.github.com/users/redteaclub/repos?sort=updated');
  const repos = await response.json();
  return repos.slice(0, 5); // Change the number to show more or fewer repos
}

async function displayRepos() {
  const repos = await fetchLatestRepos();
  const repoList = document.getElementById('repo-list');
  
  repos.forEach(repo => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a><p>${repo.description || 'No description'}</p>`;
    repoList.appendChild(listItem);
  });
}

document.addEventListener('DOMContentLoaded', displayRepos);
</script>

<h2>Latest Repositories</h2>
<ul id="repo-list"></ul>