// example.data.js
export default {
    async load() {
      return (await fetch('https://api.github.com/users/redteaclub/repos')).json()
    }
  }