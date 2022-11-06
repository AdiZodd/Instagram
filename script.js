

let arrayUserImages = ['images/userProfileImg/1.jpg', 'images/userProfileImg/2.jpg', 'images/userProfileImg/3.jpg', 'images/userProfileImg/4.jpg','images/userProfileImg/5.jpg'];
let arrayUserName = ['jane', 'carlos', 'markos', 'iza','stella'];
let currentUser = 'admirkozlica';
let suggestedUsersImg = ['images/suggestionImg/1.jpg', 'images/suggestionImg/2.jpg', 'images/suggestionImg/3.jpg', 'images/suggestionImg/4.jpg', 'images/suggestionImg/5.jpg'];
let suggestedUsersName = ['missemma', 'getafter.it', 'gordanfreeman', 'mynameis.cat', 'lisa'];
let emojiArray =['😀','&#128513','&#128514', '&#128515', '&#128516', '&#128517', '&#128518', '&#128519', '&#128520', '&#128521', '&#128522', '&#128523', '&#128524', '&#128525', '&#128526', '&#128527', '&#128528', '&#128529', '&#128530', '&#128531', '&#128532', '&#128533', '&#128534', '&#128535', '&#128536', '&#128537', '&#128538', '&#128539','&#128540', '&#128541','&#128542','&#128543', '&#128544','&#128545','&#128546', '&#128547','&#128548','&#128549','&#128550','&#128551','&#128552','&#128553','&#128554','&#128555','&#128556','&#128557','&#128558','&#128559','&#128560','&#128561','&#128562','&#128563','&#128564','&#128565','&#128566','&#128567'];
let currentActiceEmoji = '';

let usersPost = [{
    "author": arrayUserName[0],
    "authorProfileImg": arrayUserImages[0],
    "authorImage": "images/postImages/1.jpg",
    "description": "I am flying through the sky",
    "comments":[{
                "username": "mr_smartass",
                "comment": "I don't like the fact that we can't see your face on instagram."
            },{
                "username": "karsten",
                "comment": "Looks good👌",
            }],
    "likedByUser": 0,
        },{
    "author": arrayUserName[1],
    "authorProfileImg": arrayUserImages[1],
    "authorImage": "images/postImages/2.jpg",
    "description": "I have walked a good 10 miles to this place but it was so worth it. Look at this beauty 😍. I would recommend you all to take a break from your office jobs, city life, stressful lifestyle and let nature clense your sould.",
    "comments":[{
                "username": "becky",
                "comment": "This looks beautiful 😍"
            },{
                "username": "john96",
                "comment": "How did you take that picture???",
            }],
    "likedByUser": 0,
        },{
    "author": arrayUserName[2],
    "authorProfileImg": arrayUserImages[2],
    "authorImage": "images/postImages/3.jpg",
    "description": "Tomorrowland is fucking lit!",
    "comments":[{
                "username": "zack",
                "comment": "My man is going ham!!!!!✊✊✊✊✊✊"
            },{
                "username": "gravy_rock76",
                "comment": "Man this looks fun.. gotta be there 👏",
            },{
                
                "username": "gopnik.fromrussia",
                "comment": "parties in my country are better",
            }],
    "likedByUser": 0, 
        },{
    "author": arrayUserName[3],
    "authorProfileImg": arrayUserImages[3],
    "authorImage": "images/postImages/4.jpg",
    "description": "Brazilien ist das Land was jeder einmal besuchen gehen sollte!",
    "comments":[{
                "username": "sarah.spieske",
                "comment": "Das sieht echt schön aus!😍 Scheiße das ich nicht da bin 😭😭😭😭😭😭😭😭😭"
            },{
                "username": "hanz_richter",
                "comment": "Geile Atmosphäre👏! Bald geht's mit meiner Familie ebenfalls nach Brazilien 😉.",
            },{
                "username": "laura.97",
                "comment": "Heyyyyyyy!!! Lange nicht mehr gesehen🤗🤗🤗! Wie geht es dir?😜",
            }],
    "likedByUser": 0, 
        },{
    "author": arrayUserName[4],
    "authorProfileImg": arrayUserImages[4],
    "authorImage": "images/postImages/5.jpg",
    "description": "My job as a photographer is to show our human life to the fullest. This old homeless man lost his wife just a few days ago due to an attack by other homeless people. I am sending out for help. Help this man. Contact me ASAP! DM me.",
    "comments":[{
                "username": "michele_benton",
                "comment": "Freaking hell mate! This is sad. I hope he is fine"
            },{
                "username": "ajay47",
                "comment": "Can somebody tell me what is going on?!",
            },{
                "username": "mr_smartass",
                "comment": "Just look at the descripton man, you're welcome!",
            }],
    "likedByUser": 0, 
        }]

function initWebsite(){
    insertImgInStories();
    insertUserImg();
    insertUserImg1();
    insertImgInSuggestions();
    insertPost();
}

function insertUserImg(){
    document.getElementById('insertUserImg').innerHTML ='';
    document.getElementById('insertUserImg').innerHTML += `<img src="images/mainUserImg/1.jpg" alt="">`;
}

function insertUserImg1(){
    document.getElementById('insertUserImg1').innerHTML ='';
    document.getElementById('insertUserImg1').innerHTML += `<img src="images/mainUserImg/1.jpg" alt="">`;
}

function fillBookMark(i){
    let selectedBookMark = document.getElementById(i);
    ifSelectedBookMarkIsNotFilledFillItElseEmptyTheFilling(selectedBookMark);
}

function ifSelectedBookMarkIsNotFilledFillItElseEmptyTheFilling(selectedBookMark){
    if(selectedBookMark.classList.contains("far")){
        selectedBookMark.classList.remove("far")
        selectedBookMark.classList.add("fas")
    }else{
        selectedBookMark.classList.remove("fas")
        selectedBookMark.classList.add("far")
    }
}

//Checks if the div-container-comment width exceeds the div-post-container width
function checkIfCommentRowIsTooWide(userCommentBox,index, maxWidth){ 
    let desiredWidth = document.getElementById(maxWidth).getBoundingClientRect().width;
    let commentWidth = document.getElementById(userCommentBox).getBoundingClientRect().width;
    
    if(commentWidthIsBiggerThanDesiredWidth(commentWidth, desiredWidth)){
        addNoTextOverFlow(userCommentBox);
        addReadMoreBtn(userCommentBox, index);
    }
}

function commentWidthIsBiggerThanDesiredWidth(commentWidth, desiredWidth){
    return commentWidth > desiredWidth;
}

//No text overflow allows the comment to be in one row
function addNoTextOverFlow(userCommentBox){
    document.getElementById(userCommentBox).classList.add('noTextOverflow');
}

function addReadMoreBtn (userCommentBox, index){
    document.getElementById(userCommentBox).innerHTML +=`<a onclick="readMore('${index}')" id="readMoreBtn${index}">readmore</a>`
}


/*This function is enabled as soon as the user clicks on a readMoreBtn. First it gets every value and ID it needs then it proceeds to check
if the given userComment has overflow enabled. If so then it is most likely a paragraph that has readLess as a button.
One more if statement (function checkIfRowHasReadLessOrNot) examines if that's the case. If it is then it should remove the readLessBtn and
add a readMoreBtn instead.*/
function readMore(id){
    let pUserComment = document.getElementById(`userComment${id}`);
    let currentReadMoreBtn = document.getElementById(`readMoreBtn${id}`);
    let getCSSStyleOverflow = window.getComputedStyle(pUserComment).getPropertyValue('overflow');

    if(ifUserCommentHasOverFlowEnabled(getCSSStyleOverflow)){
        checkIfRowHasReadLessOrNot(currentReadMoreBtn, `userCommentBox${id}`, id)
    }else{
        removeReadMoreAndPutItIntoPTag(currentReadMoreBtn, pUserComment, id);
    }
    toogleOverflowInHTMLElements(id);
}

function ifUserCommentHasOverFlowEnabled(getCSSStyleOverflow){
    return getCSSStyleOverflow === "visible";
}

function checkIfRowHasReadLessOrNot(currentReadMoreBtn, userCommentBox, id){
    if(rowHasReadLess(currentReadMoreBtn)){
        removeReadLessAndAddReadMore(currentReadMoreBtn, userCommentBox, id);
    }else{
        currentReadMoreBtn.innerHTML = "readmore";
    }
}

function rowHasReadLess(currentReadMoreBtn){
    return currentReadMoreBtn.classList.contains('inParagraph')
}

function removeReadLessAndAddReadMore(currentReadMoreBtn, userCommentBox, id){
    currentReadMoreBtn.remove();
    addReadMoreBtn(userCommentBox, id);
}

function removeReadMoreAndPutItIntoPTag(currentReadMoreBtn, pUserComment, id){
    currentReadMoreBtn.remove();
    pUserComment.innerHTML +=`<a onclick="readMore('${id}')" id="readMoreBtn${id}" class="inParagraph"><b> read less</b></a>`;
}

function toogleOverflowInHTMLElements(id){
    document.getElementById(`userComment${id}`).classList.toggle('enableOverflow');
    document.getElementById(`userCommentBox${id}`).classList.toggle('noTextOverflow');
}

function submitComment(i){
    let newComment = document.getElementById(`commentInput${i}`).value;
        usersPost[OnlyUsesNumbersFromTheIndex(i)].comments.push({ username: currentUser, comment: newComment });
        document.getElementById(`commentInput${i}`).value='';
        insertComment(OnlyUsesNumbersFromTheIndex(i));
        checksIfThereIsAnOpenedComment(OnlyUsesNumbersFromTheIndex(i));
        setLastChildInArrayCSSElement(i);
}

function OnlyUsesNumbersFromTheIndex(i){

    let requirements = /\d+/g;
    let result = i.match(requirements);

    i = result;
    return i;

}

function checksIfThereIsAnOpenedComment(indexOfComment){
    if(document.getElementById('openedCommentSection')){
        insertCommentsInOpenComment(indexOfComment);
    }
}

//Gets the index of the last and second last element in the json array userPost.comments and adds to the last element the CSS class 'newPost' and removes it from the last element
function setLastChildInArrayCSSElement(ind){
    let lastCommentIndex = usersPost[OnlyUsesNumbersFromTheIndex(ind)].comments.length - 1;
    let secondLastCommentIndex = lastCommentIndex - 1;

    let lastUserComment = document.getElementById(`maxWidth${ind}${lastCommentIndex}`);
    let secondLastUserComment = document.getElementById(`maxWidth${ind}${secondLastCommentIndex}`);

    secondLastUserComment.classList.remove('newPost');
    lastUserComment.classList.add('newPost');
}

function tooglesActiveOnSearchInputWhenClicked(searchInputID){
    let searchInput = document.getElementById(searchInputID);
    if (searchInput.value){
        searchInput.classList.add('active');
    }else if(searchInput.value && searchInput.classList.contains('active')){
        searchInput.classList.add('active');
    }else{
        searchInput.classList.remove('active');
    }
    
}

function removeSearchInput(searchInputID){
    document.getElementById(searchInputID).value = "";
    tooglesActiveOnSearchInputWhenClicked(searchInputID);
}


// Inserts the index to find the correct id for the input field and the button. Then the function checks if the input is filled and disables or enables it accrodingly.
function checkIfCommentInputIsFilled(i){
    let input = document.getElementById(`commentInput${i}`);
    let btnPost = document.getElementById(`postComment${i}`);

    if(input.value === ""){
        btnPost.disabled = true;
    }else{
        btnPost.disabled = false;
    }
}

// Sets the correct emojiContainer to active
function openEmojiPicker(emojiIndex, i){
    displayEmoji(emojiIndex, i);
    savesTheCurrentDisplayedEmojiInAVariable(emojiIndex);

    let emojiContainer = document.getElementById(emojiIndex);
    emojiContainer.classList.toggle('active');
}

function savesTheCurrentDisplayedEmojiInAVariable(emojiIndex){
    currentActiceEmoji ='';
    currentActiceEmoji = emojiIndex;
}

// 'indexofInputField' is being passed over by the function displayEmoji. First the function inserts the emoji into the correct input field and then it checks if the input is filled
function getEmoji(selectedEmoji, indexofInputField){
    document.getElementById(`commentInput${indexofInputField}`).value += `${selectedEmoji}`;
    checkIfCommentInputIsFilled(indexofInputField);
}
//Closes the current active emojiBox when clicked on the body by  finding out its ID and removes the active
//currentActiceEmoji is a variable that is being saved by the savesTheCurrentDisplayedEmojiInAVariable() function to determine the ID
function closeEmojiBoxWhenClickedOutsideOfDiv(){
    let emojiContainer = document.getElementById(currentActiceEmoji);
    if(emojiContainer == null){

    }else{
        emojiContainer.classList.remove('active');
    }
}

//If clicked on the desired div container it prevents any other functions from intervening
function preventsClosing(event){
    event.stopPropagation();
}


function likesOrUnlikesTheSelectedComment(indexOfHeart, indexOfHeartNumber){
    
    if (valueOfLikedByUserIsZero(indexOfHeartNumber)){
        incrementsLikedByUserByOne(indexOfHeartNumber);
        fillLikeBtn(indexOfHeart);
        addHeartAnimation(indexOfHeartNumber);
    }else if(valueOfLikedByUserIsNotZero(indexOfHeartNumber)){
        subtractLikedByUserByOne(indexOfHeartNumber);
        unfillLikeBtn(indexOfHeart);
        removeHeartAnimation(indexOfHeartNumber);
    }
    
}
function valueOfLikedByUserIsZero(indexOfHeartNumber){
    return usersPost[indexOfHeartNumber].likedByUser == 0;
}
function incrementsLikedByUserByOne(indexOfHeartNumber){
    usersPost[indexOfHeartNumber].likedByUser++;
}
function valueOfLikedByUserIsNotZero(indexOfHeartNumber){
    return usersPost[indexOfHeartNumber].likedByUser !== 0
}
function subtractLikedByUserByOne(indexOfHeartNumber){
    usersPost[indexOfHeartNumber].likedByUser--;
}

// function fillorUnfillLikeBtn(index, i){
//     let filled = "<i class=\"fas fa-heart\" id=\"rightPadding\" aria-hidden=\"true\"></i>";
//     let id = document.getElementById(index);

//     if (filled != id.innerHTML){
//         fillLikeBtn(index);
//         addHeartAnimation(i);
//     }else{
//         unfillLikeBtn(index);
//         removeHeartAnimation(i);
//     }
// }

function addHeartAnimation(i){
    let classHeartStroke = document.getElementById(`heartStroke${i}`);
    classHeartStroke.classList.add('active');
}

function toggleHeartAnimation(i){
    let classHeartStroke = document.getElementById(`heartStroke${i}`);
    classHeartStroke.classList.toggle('active');
}

function removeHeartAnimation(i){
    let classHeartStroke = document.getElementById(`heartStroke${i}`);
    classHeartStroke.classList.remove('active');
}

function fillLikeBtn(index){
    var heart = document.getElementById(`${index}`);
    var heartOnlyUseNumberFromIndex = document.getElementById(`heart${OnlyUsesNumbersFromTheIndex(index)}`);

    if (heartAndHeartOnlyUseNumberFromIndexAreTheSame(heart, heartOnlyUseNumberFromIndex)){
        heart.innerHTML = '<i class="fas fa-heart" id="rightPadding"></i>';
    }else if (heartAndHeartOnlyUseNumberFromIndexAreNotTheSame(heart, heartOnlyUseNumberFromIndex)){
        heart.innerHTML = '<i class="fas fa-heart" id="rightPadding"></i>';
        heartOnlyUseNumberFromIndex.innerHTML = '<i class="fas fa-heart" id="rightPadding"></i>';
    }
}


function unfillLikeBtn(index){
    var heart = document.getElementById(`${index}`);
    var heartOnlyUseNumberFromIndex = document.getElementById(`heart${OnlyUsesNumbersFromTheIndex(index)}`);

    if (heartAndHeartOnlyUseNumberFromIndexAreTheSame(heart, heartOnlyUseNumberFromIndex)){
        heart.innerHTML = '<i class="far fa-heart" id="rightPadding"></i>';
    }else if (heartAndHeartOnlyUseNumberFromIndexAreNotTheSame(heart, heartOnlyUseNumberFromIndex)){
        heart.innerHTML = '<i class="far fa-heart" id="rightPadding"></i>';
        heartOnlyUseNumberFromIndex.innerHTML = '<i class="far fa-heart" id="rightPadding"></i>';
    }
    
}

function heartAndHeartOnlyUseNumberFromIndexAreTheSame(heart, heartOnlyUseNumberFromIndex){
    return heart == heartOnlyUseNumberFromIndex;
}

function heartAndHeartOnlyUseNumberFromIndexAreNotTheSame(heart, heartOnlyUseNumberFromIndex){
    return heart !== heartOnlyUseNumberFromIndex;
}


function checkIfDoubleClickOnPostImg(i){
    let indexHeart = `heart${i}`;
    toggleHeartAnimation(i);
    likesOrUnlikesTheSelectedComment(indexHeart, OnlyUsesNumbersFromTheIndex(i));
}

function openComment(indexOfComment){
    drawContainerWhenACommentHasBeenOpened(indexOfComment);
    insertUsersPostIconInOpenComment(indexOfComment);
    insertCommentsInOpenComment(indexOfComment);
    insertSocialToolsInOpenComment(indexOfComment);
    insertInputFieldInOpenComment(indexOfComment);
}

function closesComment(){
    let section = document.getElementById('openedCommentSection');
    section.remove();
}

function focusOnCommentInputWhenCommentHasBeenOpenend(index){
    document.getElementById(`commentInputOpenedComment${index}`).focus();
}

// ------------------------Below are .innerHTML code blocks--------------------------------- \\

function insertCommentsInOpenComment(indexOfComment){
    checkIfCommentInputIsFilled(indexOfComment);
    document.getElementById(`insertOnlyComments`).innerHTML =``;
    for (let i = 0; i < usersPost[indexOfComment].comments.length; i++) {
        let comment = usersPost[indexOfComment].comments[i];
        
        document.getElementById(`insertOnlyComments`).innerHTML += `
        <div class="userComment marginLeftAndRight" id="maxWidthOpenedComment${indexOfComment}${i}">
            <div id="userCommentBoxOpenedComment${indexOfComment}${i}" class="row"><span id="userNameComment">${usersPost[indexOfComment].comments[i].username}</span> <p class="userCommentText"id="userCommentOpenedComment${indexOfComment}${i}">${usersPost[indexOfComment].comments[i].comment}</p></div>
            
        </div>
    `;
    checkIfCommentRowIsTooWide(`userCommentBoxOpenedComment${indexOfComment}${i}`,`OpenedComment${indexOfComment}${i}`, `insertCommentsInOpenComment`);
    }
}

function insertSocialToolsInOpenComment(indexOfComment){
    document.getElementById(`insertCommentsInOpenCommentLowerHalf`).innerHTML='';
    document.getElementById(`insertCommentsInOpenCommentLowerHalf`).innerHTML+=`

    <div class="socialToolsContainer marginLeftAndRight">
        <div>
            ${heartSymbolForOpenedComment(indexOfComment)}
            <a onclick="focusOnCommentInputWhenCommentHasBeenOpenend(${indexOfComment})"><i class="far fa-comment rightPadding" id="focusOnComment${indexOfComment}" ></i></a>
            <i class="far fa-paper-plane" id="rightPadding"></i>
        </div>
        <a onclick="fillBookMark('bookmMark${indexOfComment}')"><i class="far fa-bookmark" id="bookmMark${indexOfComment}"></i></a>
    </div>`
}
//This function is there for if the user has liked a comment before that it stays filled if the requirments match the criteria
function heartSymbolForOpenedComment(i){
    if(usersPost[i].likedByUser == 0){
        return innerHTML = `<a class="heart${i}" onclick="likesOrUnlikesTheSelectedComment('heartOpenedComment${i}', '${i}')" id="heartOpenedComment${i}"><i class="far fa-heart" id="rightPadding"></i></a>`
    }else if(usersPost[i].likedByUser > 0){
        return innerHTML = `<a class="heart${i}" onclick="likesOrUnlikesTheSelectedComment('heartOpenedComment${i}', '${i}')" id="heartOpenedComment${i}"><i class="fas fa-heart" id="rightPadding"></i></a>`
    }
}

function insertInputFieldInOpenComment(indexOfComment){
    document.getElementById(`insertCommentsInOpenCommentLowerHalf`).innerHTML+=`
    <div class="commentInputContainer">
        <div class="posRelative">
            <div class="emojiPosAbsolute">
                <div class="emojiWrapper">
                    <div class="emojiContainer" id="enterEmojiOpenendComment${indexOfComment}">
                    </div>
                </div>
            </div>                        
            <a onclick="openEmojiPicker('enterEmojiOpenendComment${indexOfComment}','OpenedComment${indexOfComment}'), preventsClosing(event)"><i class="far fa-smile"></i></a>
        </div>
        <input type="text" oninput="checkIfCommentInputIsFilled('OpenedComment${indexOfComment}')" placeholder="Add a comment..." id="commentInputOpenedComment${indexOfComment}" class="commentInput">
        <button class="postComment" id="postCommentOpenedComment${indexOfComment}" onclick="submitComment('OpenedComment${indexOfComment}')" disabled>Post</button>
    </div>`
}

function drawContainerWhenACommentHasBeenOpened(indexOfComment){
    console.log(indexOfComment);
    document.body.innerHTML +=`
    <section class="blackBackground" id="openedCommentSection">
        <a onclick="closesComment()" class="closesSection"> X </a>
        <div class="openedComment">
            <div class="openedCommentImgContainer">
                    <a ondblclick="checkIfDoubleClickOnPostImg('OpenedComment${indexOfComment}')" id="imgOpenedComment${indexOfComment}"><img src="${usersPost[indexOfComment].authorImage}" alt=""></a>
                    <svg class="heartStrokeOpenedComment" id="heartStrokeOpenedComment${indexOfComment}" viewBox="0 0 512 512" width="100" title="heart">
                            <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
                        </svg>
                        <svg class="heartFadeOut" viewBox="0 0 512 512" width="100" title="heart">
                            <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
                        </svg>
    
            </div>
            <div class="openCommentWrapper">
                <div class="openedCommentCommentContainer" id="insertCommentsInOpenComment">
                </div>
                <div class="openedCommentCommentContainer" id="insertCommentsInOpenCommentLowerHalf">
                </div>
            </div>
        </div>
    </section>`
}

function insertUsersPostIconInOpenComment(indexOfComment){
    document.getElementById(`insertCommentsInOpenComment`).innerHTML =``;
    document.getElementById(`insertCommentsInOpenComment`).innerHTML +=`
    <div class="postHeaderOpenedCommentWrapper">
        <div class="postHeaderOpenedComment">
            <div class="otherUserWrapper">
                <div class="userPostIcon">
                    <img src="${arrayUserImages[indexOfComment]}" alt="">
                </div>
                    <div class="NameAndBio">
                        <span><b>${arrayUserName[indexOfComment]}</b></span>
                    </div>
                </div>
                <i class="fas fa-ellipsis-h"></i>
            </div> 
        </div>
    </div>
    <div id="insertOnlyComments">
    </div>
    `;
}

// Loops through the emojiArray to display the emojies in the emoji container
function displayEmoji(emojiIndex, indexOfSelectedPost){
    document.getElementById(emojiIndex).innerHTML ='';
    for (let i = 0; i < emojiArray.length; i++) {
        const element = emojiArray[i];
        document.getElementById(emojiIndex).innerHTML += `
        <a class="emojiSize" onclick="getEmoji('${element}','${indexOfSelectedPost}'), preventsClosing(event)">${element}</a>
    `
    }
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
                <div class="likeIconAndImage">
                    <a ondblclick="checkIfDoubleClickOnPostImg('${i}')" id="img${i}"><img src="${usersPost[i].authorImage}" alt=""></a>
                    <svg class="heartStroke" id="heartStroke${i}" viewBox="0 0 512 512" width="100" title="heart">
                        <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
                    </svg>
                    <svg class="heartFadeOut" viewBox="0 0 512 512" width="100" title="heart">
                        <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
                    </svg>
                </div>
                <div class="socialToolsContainerSideSpacing">
                    <div class="socialToolsContainer">
                        <div>
                            ${heartSymbol(i)}
                            <a><i class="far fa-comment rightPadding"></i></a>
                            <i class="far fa-paper-plane" id="rightPadding"></i>
                        </div>
                        <a onclick="fillBookMark('bookmMark${i}')"><i class="far fa-bookmark" id="bookmMark${i}"></i></a>
                    </div>
                    <div id="likes"><b>12,30k likes</b></div>
                            <div class="descriptionSection" id="insertDescription${i}"></div>
                            <div class="commentSection" id="insertComment${i}">
                            <a onclick="openComment('${i}')" id="openComment${i}">view all ${usersPost[i].comments.length} comments</a>
                            </div>
                        </div>
                    </div>
                    <div class="commentInputContainer">
                        <div class="posRelative">
                            <div class="emojiPosAbsolute">
                                <div class="emojiWrapper">
                                    <div class="emojiContainer" id="enterEmoji${i}">
                                    </div>
                                </div>
                            </div>                        
                            <a onclick="openEmojiPicker('enterEmoji${i}','${i}'), preventsClosing(event)"><i class="far fa-smile"></i></a>
                        </div>
                        <input type="text" oninput="checkIfCommentInputIsFilled('${i}')" placeholder="Add a comment..." id="commentInput${i}" class="commentInput">
                        <button class="postComment" id="postComment${i}" onclick="submitComment('${i}')" disabled>Post</button>
                    </div>
                     
                </div>
        `;
        insertDescription(i);
    }
}
//This function is there for if the user has liked a comment before that it stays filled if the requirments match the criteria
function heartSymbol(i){
    if(usersPost[i].likedByUser == 0){
        return innerHTML = `<a class="heart${i}" onclick="likesOrUnlikesTheSelectedComment('heart${i}', '${i}')" id="heart${i}"><i class="far fa-heart" id="rightPadding"></i></a>`
    }else if(usersPost[i].likedByUser > 0){
        return innerHTML = `<a class="heart${i}" onclick="likesOrUnlikesTheSelectedComment('heart${i}', '${i}')" id="heart${i}"><i class="fas fa-heart" id="rightPadding"></i></a>`
    }
}

function insertDescription(ind){
    document.getElementById(`insertDescription${ind}`).innerHTML= ``;
    document.getElementById(`insertDescription${ind}`).innerHTML += `
        ${usersPost[ind].description}
    `;
}

// Loops through the JSON userPost Array and inserts the comment in the correct user post index
function insertComment(ind){
    document.getElementById(`insertComment${ind}`).innerHTML= ``;
    checkIfCommentInputIsFilled(ind);
    for (let i = 0; i < usersPost[ind].comments.length; i++) {
        let comment = usersPost[ind].comments[i];
        
        document.getElementById(`insertComment${ind}`).innerHTML += `
        <div class="userComment" id="maxWidth${ind}${i}">
            <div id="userCommentBox${ind}${i}" class="row"><span id="userNameComment">${usersPost[ind].comments[i].username}</span> <p class="userCommentText"id="userComment${ind}${i}">${usersPost[ind].comments[i].comment}</p></div>
            
        </div>
    `;
    checkIfCommentRowIsTooWide(`userCommentBox${ind}${i}`,`${ind}${i}`, `maxWidth${ind}${i}`);
    }
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
