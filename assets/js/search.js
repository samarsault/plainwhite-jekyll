---
---

window.onload = function () {
    var sjs = SimpleJekyllSearch({
        searchInput: document.getElementById('searchbar'),
        resultsContainer: document.getElementById('search-results'),
        json: '{{ "/search.json" | relative_url }}',
        searchResultTemplate: '<a href="{url}" target="_blank">{title}</a>',
        noResultsText: ''
    });

    /* hack ios safari unfocus */
    if (/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent))
        document.body.firstElementChild.tabIndex = 1;

    var $labelGroup = document.querySelector(".posts-labelgroup");
    var $searchbar = document.getElementById("searchbar");
    var $searchContainer = document.querySelector(".search-container");
    var $postLabel = document.getElementById("posts-label");
    var $searchResults = document.querySelector(".search-results");
    var labelWidth = $postLabel.scrollWidth;
    $postLabel.style.width = labelWidth + "px";

    // $searchbar.addEventListener("click", searchFocus, false);
    $searchContainer.addEventListener("focusin", searchFocus, false);
    document.body.addEventListener("focusin", searchCollapse, false);

    var searchHasFocus = false;

    function searchFocus(e) {
        if (!searchHasFocus) {
            $searchResults.style.display = null;
            $postLabel.style.width = "0";
            $labelGroup.setAttribute("class", "posts-labelgroup focus-within");
            $searchbar.focus();
            searchHasFocus = true;
        }
        e.stopPropagation();
    }

    function searchCollapse(e) {
        $searchResults.style.display = "none";
        $labelGroup.setAttribute("class", "posts-labelgroup");
        $postLabel.style.width = labelWidth + "px";
        searchHasFocus = false;
    }
}
