(function() {
    'use strict';
    
    var $filterContainer = document.getElementById('product-filters');
    var $filters = [].slice.call($filterContainer.querySelectorAll('input'));

    $filters.forEach(function(filter) {
        filter.addEventListener('click', filterProducts);
    });

    function filterProducts(event) {
        var filterType = event.currentTarget.name;
        var filterStatus = event.currentTarget.checked;
        var $filteredProducts = [].slice.call(document.querySelectorAll('[data-product-category=' + filterType + ']'));

        $filteredProducts.forEach(function(product){
            product.dataset.hidden = !filterStatus;
        });
    }
})();