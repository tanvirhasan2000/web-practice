const loadPost=()=>{
    const url='https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        displayPosts(data);
    })

};
// const displayPosts=(posts)=>{
//     // for(let i =0; i<posts.length;i++){
//     //     console.log(posts[i]);
//     // }
//     // for(let post of posts){
//     //     console.log(post);
//     // }
    

//     // 1. get the container 
//     const postContainer= document.getElementById('post-container');
//     postContainer.innerHTML="";
//     posts.forEach((post)=>{
      
//         // step-2: create element html 
//         const li=document.createElement('li');
//         li.innerText=post.title;
//         // step-3: add li inthe list 
//         postContainer.appendChild(li);
//     })
// }



/* ---- re doing --*/
const displayPosts=(posts)=>{
    // get the container and empty the container 
    const postContainer =document.getElementById('post-container');
    postContainer.innerHTML='';
    posts.forEach(post=>{
        // 2. create element 
        const postCard= document.createElement('div');
        postCard.innerHTML=`<div class="post-card">
            <h2>${post.title} </h2>
            <p>${post.body}</p>
        </div>`;
        //3. add to the container 
        postContainer.append(postCard);
    })
    

}