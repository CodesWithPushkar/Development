async function loadData() {
    console.log("I am here")
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log("data")
    const post = await data.json();
    const arr = post.data;
    arr.forEach(element => {
        console.log(element);
    });
}

loadData();

