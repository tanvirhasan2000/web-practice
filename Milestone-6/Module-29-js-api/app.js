

const loadData=()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    // promise of response 
      .then(response => response.json())
      // promise of json Data 
      .then(json => console.log(json))
};
// const loadPost=()=>{
//     const url='https://jsonplaceholder.typicode.com/posts';
//     fetch(url)
//     .then(res=>res.json())
//     .then(data=>displaypost(data));
// }
// const displaypost=(post)=>{
//     post.forEach(posts=>{
//         console.log(posts.title);
//     })
// }
