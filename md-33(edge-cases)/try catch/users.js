const url = `https://randomuser.me/api/?gender=female`;
// const loadFetch = () =>{
//     // const url = `https://randomuser.me/apis/?gender=female`;
//     fetch(url)
//     .then(res => res.json())
//     .then(data => displayUsers(data.results[0]))
//     .catch(error => console.log(error))
// }


const loadUserAsync = async() =>{
    try{
        const res = await fetch(url);
        const data = await res.json();
        displayUsers(data.results[0])
    }
    catch(error){
        console.log(error)
    }
}
const displayUsers = (users) =>{
    console.log(users)
}