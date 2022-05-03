// 1. filter button handler
const sortBtn = document.querySelectorAll(".sortBtn");
const storeItem = document.querySelectorAll(".store-item");
const searchForm = document.querySelector("form");
const storeName = document.querySelectorAll("#store-item-name");

sortBtn.forEach((filterBtn) => {
    filterBtn.addEventListener('click', function (e) {
        e.preventDefault();
        let currFilter = e.target.dataset.filter;
        handleFilter(currFilter);
    })
})

function handleFilter(currFilter) {
    console.log(currFilter);
    storeItem.forEach((item) => {
        if (currFilter == 'all') {
            item.style.display = 'block';
        } else {
            if (item.dataset.item == currFilter) {
                item.style.display = 'block';
            } else item.style.display = 'none';
        }
    })
}

// 2. search bar handler
searchForm.addEventListener('input', function (e) {
    e.preventDefault();
    let currSearch = e.target.value;
    handleSearch(currSearch);
})

function handleSearch(currSearch) {
    let handleCurrSearch = currSearch.toLowerCase();
    storeItem.forEach((item) => {
        if (item.textContent.includes(handleCurrSearch)) {
            console.log(item);
            item.style.display = 'block';
        } else item.style.display = 'none';
    })
}
