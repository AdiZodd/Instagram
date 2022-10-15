//document.body.style ='overflow:hidden;'
//event.stopPropagation()

let arrayUserImages = ['images/userProfileImg/1.jpg', 'images/userProfileImg/2.jpg', 'images/userProfileImg/3.jpg', 'images/userProfileImg/4.jpg','images/userProfileImg/5.jpg']
let arrayUserName = ['Jane', 'Carlos', 'Markos', 'Iza','Stella']
let suggestedUsersImg = ['images/suggestionImg/1.jpg', 'images/suggestionImg/2.jpg', 'images/suggestionImg/3.jpg', 'images/suggestionImg/4.jpg', 'images/suggestionImg/5.jpg']
let suggestedUsersName = ['missemma', 'getafter.it', 'gordanfreeman', 'mynameis.cat', 'lisa']

let usersPost = [{
    "author": arrayUserName[0],
    "authorProfileImg": arrayUserImages[0],
    "authorImage": "",
    "comments":[{
                "username": "mr_smartass",
                "comment": "I don't like the fact that we can't see your face on instagram."
            },{
                "username": "john.willnik",
                "comment": "I hope you are getting after it💪.",
            }]
}]
function initWebsite(){
    insertImgInStories();
    insertUserImg();
    insertUserImg1();
    insertImgInSuggestions();
    insertPost();
}

function insertImgInStories(){
    document.getElementById('insertImgStoryHere').innerHTML ='';
    for (let i = 0; i < arrayUserImages.length; i++) {
        document.getElementById('insertImgStoryHere').innerHTML +=`
        <div class="userIconAndNameContainer">
            <div class="userStoryIcon" id="userImageStory">
                <img src="${arrayUserImages[i]}" alt="">
            </div>
            <span class="userNameStory">${arrayUserName[i]}</span>
        </div>
    `
        
    };
}

function insertImgInSuggestions(){
    document.getElementById('insertSuggestions').innerHTML ='';
    for (let i = 0; i < suggestedUsersImg.length; i++) {
    document.getElementById('insertSuggestions').innerHTML +=`
        <div class="suggestionsContainer">
            <div class="otherUserWrapper">
                <div class="otherUserSuggestIcon">
                <img src="${suggestedUsersImg[i]}" alt="">
                </div>
                <div class="NameAndBio">
                    <span><b>${suggestedUsersName[i]}</b></span><br>
                    <span class="bio">Insanley popular</span> 
                </div>
            </div>
            <a class="follow">Follow</a>
        </div>
    `;
    }
}

function insertUserImg(){
        document.getElementById('insertUserImg').innerHTML ='';
        document.getElementById('insertUserImg').innerHTML += `<img src="images/mainUserImg/1.jpg" alt="">`;
}

function insertUserImg1(){
    document.getElementById('insertUserImg1').innerHTML ='';
    document.getElementById('insertUserImg1').innerHTML += `<img src="images/mainUserImg/1.jpg" alt="">`;
}


function insertPost(){
    document.getElementById('insertPost').innerHTML ='';
    for (let i = 0; i < arrayUserImages.length; i++) {
        document.getElementById('insertPost').innerHTML +=`
        <div class="post">
            <div>
                <div class="postHeader">
                <div class="otherUserWrapper">
                    <div class="userPostIcon">
                    <img src="${arrayUserImages[i]}" alt="">
                    </div>
                        <div class="NameAndBio">
                        <span><b>${arrayUserName[i]}</b></span>
                        </div>
                    </div>
                    <i class="fas fa-ellipsis-h"></i>
                </div>
                <img src="images/postImg1.jpg" alt="">
                <div class="socialToolsContainerSideSpacing">
                    <div class="socialToolsContainer">
                        <div>
                            <i class="far fa-heart" id="rightPadding"></i>
                            <i class="far fa-comment" id="rightPadding"></i>
                            <i class="far fa-paper-plane" id="rightPadding"></i>
                        </div>
                        <i class="far fa-bookmark"></i>
                    </div>
                    <div id="likes"><b>12,30k likes</b></div>
                            <div class="commentSection" id="insertComment${i}">
                                
                            </div>
                        </div>
                    </div>
                    <div class="commentInputContainer">
                        <i class="far fa-smile"></i>
                        <input type="text" placeholder="Add a comment..." id="commentInput">
                        <button id="postComment">Post</button>
                    </div>
                     
                </div>
        `;
        insertComment(i);
    }
}

function insertComment(ind){
    console.log(`insertComment${ind}`);
    document.getElementById(`insertComment${ind}`).innerHTML= ``;
    for (let i = 0; i < usersPost[ind].comments.length; i++) {
        document.getElementById(`insertComment${ind}`).innerHTML =+ `
        <div class="userComment">
            <span id="userNameComment">${usersPost[ind].comments[i].username}</span> <p>${usersPost[ind].comments[i].comment}</p>
        </div>
    `;
    }
}