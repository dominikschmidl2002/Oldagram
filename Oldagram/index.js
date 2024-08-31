const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


/* Gogh */

let goghName = document.getElementById("gogh-name")
goghName.textContent = posts[0].name

let goghLocation = document.getElementById("gogh-location")
goghLocation.textContent = posts[0].location

const goghPath = posts[0].avatar;
const goghAvatar = document.getElementById("gogh-avatar");
goghAvatar.src = goghPath;

const goghPathTwo = posts[0].post;
const goghPost = document.getElementById("gogh-post");
goghPost.src = goghPathTwo;

let goghLikes = document.getElementById("gogh-likes")
goghLikes.textContent = posts[0].likes + " likes"

let goghUsername = document.getElementById("gogh-username")
goghUsername.textContent = posts[0].username

let goghComment = document.getElementById("gogh-comment")
goghComment.textContent = posts[0].comment


let goghCount = posts[0].likes
const heartButtonGogh = document.getElementById("heart-button-gogh")
const goghLikesCounter = document.getElementById("gogh-likes")
heartButtonGogh.addEventListener("click", function(){
    goghCount += 1
    goghLikesCounter.textContent = goghCount + " likes"
})

const goghButton = document.getElementById("gogh-post")
goghButton.addEventListener("dblclick", function(){
    goghCount += 1
    goghLikesCounter.textContent = goghCount + " likes"
})


/* Courbet */

let courbetName = document.getElementById("courbet-name")
courbetName.textContent = posts[1].name

let courbetLocation = document.getElementById("courbet-location")
courbetLocation.textContent = posts[1].location

const courbetPath = posts[1].avatar;
const courbetAvatar = document.getElementById("courbet-avatar");
courbetAvatar.src = courbetPath;

const courbetPathTwo = posts[1].post;
const courbetPost = document.getElementById("courbet-post");
courbetPost.src = courbetPathTwo;

let courbetLikes = document.getElementById("courbet-likes")
courbetLikes.textContent = posts[1].likes + " likes"

let courbetUsername = document.getElementById("courbet-username")
courbetUsername.textContent = posts[1].username

let courbetComment = document.getElementById("courbet-comment")
courbetComment.textContent = posts[1].comment


let courbetCount = posts[1].likes
const heartButtonCourbet = document.getElementById("heart-button-courbet")
const courbetLikesCounter = document.getElementById("courbet-likes")
heartButtonCourbet.addEventListener("click", function(){
    courbetCount += 1
    courbetLikesCounter.textContent = courbetCount + " likes"
})

const courbetButton = document.getElementById("courbet-post")
courbetButton.addEventListener("dblclick", function(){
    courbetCount += 1
    courbetLikesCounter.textContent = courbetCount + " likes"
})


/* Ducreux */

let ducreuxName = document.getElementById("ducreux-name")
ducreuxName.textContent = posts[2].name

let ducreuxLocation = document.getElementById("ducreux-location")
ducreuxLocation.textContent = posts[2].location

const ducreuxPath = posts[2].avatar;
const ducreuxAvatar = document.getElementById("ducreux-avatar");
ducreuxAvatar.src = ducreuxPath;

const ducreuxPathTwo = posts[2].post;
const ducreuxPost = document.getElementById("ducreux-post");
ducreuxPost.src = ducreuxPathTwo;

let ducreuxLikes = document.getElementById("ducreux-likes")
ducreuxLikes.textContent = posts[2].likes + " likes"

const htmlContentDucreux = `<p><span class="ducreux-span">${posts[2].username}</span>${posts[2].comment}`
document.getElementById("ducreux-username-comment").innerHTML = htmlContentDucreux


let ducreuxCount = posts[2].likes
const heartButtonDucreux = document.getElementById("heart-button-ducreux")
const ducreuxLikesCounter = document.getElementById("ducreux-likes")
heartButtonDucreux.addEventListener("click", function(){
    ducreuxCount += 1
    ducreuxLikesCounter.textContent = ducreuxCount + " likes"
})

const ducreuxButton = document.getElementById("ducreux-post")
ducreuxButton.addEventListener("dblclick", function(){
    ducreuxCount += 1
    ducreuxLikesCounter.textContent = ducreuxCount + " likes"
})