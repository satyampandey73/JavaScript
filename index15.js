// promises

const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task Is Completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise Consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async 2 task is completed");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "satyam", email: "satyam@s.com" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let errors = false;
    if (!errors) {
      resolve({ username: "noerror", pass: "123" });
    } else {
      reject("ERROR:");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("error is either resolve or reject"));


fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// promise using async await (try , catch)

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let er = false;
    if (!er) {
      resolve({ username: "js", pass: "456" });
    } else {
      reject("js is not working");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

consumePromiseFive();

async function getAllUsers() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
    console.log(data.title);
  } catch (error) {
    console.log("e:", error);
  }
}

getAllUsers();
