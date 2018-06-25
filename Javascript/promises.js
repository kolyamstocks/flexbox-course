/*
let sleepyGreeting = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello....');
    }, 2000);

    setTimeout(() => {
        reject(Error('Too sleepy...'));
    }, 2000);
});

sleepyGreeting
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error(err);
    });
*/

// Doesn't work in here, but works in codepen: REALLY COOL!
/*
console.log("Starting fetch call");
const postsPromise = fetch("https://api.dailysmarty.com/posts");
console.log("After fetch call");
console.log(postsPromise);
console.log("After program has run");

postsPromise
  .then(data => data.json())
  .then(data => {
    data.posts.forEach((item) => {
      console.log(item.url_for_post);
    });
  })
  .catch((err) => {
  console.log(err);
});
*/

const greeting = new Promise((resolve, reject) => {
    resolve('Hi there');
    reject('Oops, bad greeting');
});

const updateAccount = new Promise((resolve, reject) => {
    resolve('Updating login...');
    reject('Error updating account with login');
});

const loginActivities = Promise.all([greeting, updateAccount]);
loginActivities.then(res => {
    res.forEach(activity => {
        console.log(activity);
    })
})