const btn = document.getElementById("btn");
const output = document.getElementById("output1");
const output2 = document.getElementById("output2");
const output3 = document.getElementById("output3");

const URL1 = "https://dummyjson.com/posts";
const URL2 = "https://dummyjson.com/products";
const URL3 = "https://dummyjson.com/todos";

function PromiseAPI1() {
  return new Promise((resolve, reject) => {

    setTimeout(() => {

      fetch(URL1)
        .then((response) => {
          return response.json();
        })
        .then((data) => {

          let html = "";

          data.posts.forEach((post) => {
            html += `
              <div class="post">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr>
              </div>
            `;
          });

          output.innerHTML = html;

          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });

    }, 1000);

  });
}

function PromiseAPI2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(URL2)
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          let html ='';

          data.products.forEach((product)=>{
            html += `
            <div class="products">
            <h3>${product.title}</h3>
            <p>${[product.description]}</p>
            <hr>
            </div>
            `
          })
          output2.innerHTML = html;
          resolve(data);
        })
        .catch((error) => {
          reject("error in function one");
        });
    }, 2000);
  });
}

function PromiseAPI3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(URL3)
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          let html = '';

          data.todos.forEach((item)=>{
            html += `
            <h3>${item.todo}</h3>
            `
          })
          output3.innerHTML = html;
          resolve(data);
        })
        .catch((error) => {
          reject("error in function one");
        });
    }, 3000);
  });
}


btn.addEventListener("click", () => {

    let p1 = PromiseAPI1();

  p1.then((data) => {
    console.log("Posts fetched successfully from 1");
    console.log(data.posts);
  })
  .catch((error) => {
    console.log(error);
  });

  let p2 = PromiseAPI2();
  p2.then((data) => {
    console.log("Posts fetched successfully from 2");
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });


  let p3 = PromiseAPI3();
  p3.then((data) => {
     console.log("Posts fetched successfully from 3");
    console.log(data);
  });
});


