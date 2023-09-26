//only want this to show if we click into that input box. That's why the box and NOT the floater itself
const body      = document.body;
const input     = document.querySelector('input[type=text]');
const overlay   = document.querySelector('.overlay');

function showFloater() {
    body.classList.add('show-floater');
}

function closeFloater() {
    if (body.classList.contains('show-floater')) {
        body.classList.remove('show-floater');
    }
    body.classList.remove('show-floater');
}

input.addEventListener('focusin', showFloater);
input.addEventListener('focusout', closeFloater);
overlay.addEventListener('click', closeFloater);

//===================================//  

//This will be saved on the local storage in the browser, no server needed
localStorage.setItem('my_thing', 'something');

const bookmarksList     = document.querySelector('.bookmarks-list');
const bookmarkForm      = document.querySelector('.bookmark-form');
const bookmarkInput     = bookmarkForm.querySelector('input[type=text]');
const bookmarks         = JSON.parse(localStorage.getItem('bookmarks')) || [];

fillBookmarksList(bookmarks);

// "e" is the event object. In practice, just use "e"
function createBookmark(e) {
    e.preventDefault();

    if (!bookmarkInput.value) {
        alert('Please enter text');
    } else {
        const title         = bookmarkInput.value;
        if (bookmarks.length < 5) {
        const bookmark = {
            title: title
        };
        if (title.length > 15) {
            alert('Please enter less than 15 characters');
            return;
        }
        bookmarks.push(bookmark);
        fillBookmarksList(bookmarks);
        storeBookmarks(bookmarks);
        bookmarkForm.reset();
        console.table(bookmarks);
        } else {
            alert('You can only have 5 items on this list');
        }
    }
}

function fillBookmarksList(bookmarks = []) {
    const bookmarksHtml = bookmarks.map((bookmark, i) => {
        return `
        <a href="#" class="bookmark" data-id="$[i]">
        <div class="title">
            <div class="container">
                <label>
                <input type="checkbox">
                <span class="checkmark" onclick=boxChecked()>${bookmark.title}</span>
            </div>
        </div>
            <span class="glyphicon glyphicon-remove"></span>
        </a>
        `;
    }).join('');

    bookmarksList.innerHTML = bookmarksHtml;
}
//----------------------------------------------------------------------*/
function removeBookmark(e) {
    if (!e.target.matches('.glyphicon-remove')) return;
    // Find the index
    const index = e.target.parentNode.dataset.id;
    // remove it from the bookmarks list using splice
    bookmarks.splice(index, 1);
    // fill the list again
    fillBookmarksList(bookmarks);
    // store that new list back to local storage
    storeBookmarks(bookmarks);
}

function storeBookmarks(bookmarks = []) {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

bookmarkForm.addEventListener('submit', createBookmark);
bookmarksList.addEventListener('click', removeBookmark);

//function boxChecked() {
//}
