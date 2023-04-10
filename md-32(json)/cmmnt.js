function loadComment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data))
}

function displayComments(comments){
    const commentsContainer = document.getElementById('comments-container');
    for(const comment of comments){
        // console.log(comment)
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment-style')
        commentDiv.innerHTML = `
        <h2>id: ${comment.id}</h2>
        <h3>name: ${comment.name}</h3>
        <p>email: ${comment.email}</p>
        <p>description: ${comment.body}</p>
        `
        commentsContainer.appendChild(commentDiv)
    }
}
loadComment()