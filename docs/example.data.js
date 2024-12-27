export default {
  async load() {
    // 获取远程数据
    const response = await fetch('https://dummyjson.com/posts');
    const data = await response.json();
    return data.posts.slice(0, 3); // Return the first 5 records
    
  }
}