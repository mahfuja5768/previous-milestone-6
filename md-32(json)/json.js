////JSON ::: parse && stringify::::-------
const shop = {
    name: 'x',
    isNew: false,
    id: 323
}
// console.log(shop)
const shopJSON = JSON.stringify(shop);
// console.log(shopJSON)
const shopObj = JSON.parse(shopJSON);
// console.log(shopObj)

const url = 'https://jsonplaceholder.typicode.com/todos/1'
function loadData(){
    fetch(url)
      .then(res => res.json())
      .then(data => console.log(data))
}

const url2 = 'https://jsonplaceholder.typicode.com/users';
function loadData2(){
    fetch(url2)
      .then(res => res.json())
      .then(data => displayData(data))
}

function displayData(data){
    for(const user of data){
        console.log(user)
        // console.log(user.name)
    }
}

// function displayData(data){
//     const ul = document.getElementById('user-list');
//     for(const user of data){
//         console.log(user.name);
//         const li = document.createElement('li');
//         li.innerText = user.name;
//         ul.appendChild(li);
//     }
// }

const url3 = 'https://jsonplaceholder.typicode.com/users';
function loadData3(){
    fetch (url3)
      .then(res => res.json())
      .then(data => displayData3(data))
}
function displayData3(data){
    const ul2 = document.getElementById("user-list-2");
    for(const user of data){
      const li = document.createElement('li');
      li.innerText = user.id;
      ul2.appendChild(li)
    }
}

/* post data */
function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => displayPosts(data))
}
function displayPosts(posts){
    const postsContainer = document.getElementById("post-container")
    for(const post of posts){
        console.log(posts)
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
            <h4>User-${post.userId}</h4>
            <h5>Posr:${post.title} </h5>
            <p>Post Description: ${post.body}</p>
        `;
        postsContainer.appendChild(div)
    }
}
loadPosts()