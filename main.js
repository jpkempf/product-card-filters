// find filter container
var $filterContainer = document.getElementById('product-filters');

// find filters, cast NodeList to Array
var $filters = [].slice.call($filterContainer.querySelectorAll('input'));

// bind click events to filters
$filters.forEach(function(filter) {
    filter.addEventListener('click', function(event) {
        
        // get filter type and status
        var filterType = event.currentTarget.name;
        var filterStatus = event.currentTarget.checked;
        
        // find products for the clicked filter...
        var $filteredProducts = [].slice.call(document.querySelectorAll(`[data-product-category=${filterType}]`));

        // ...and toggle them by setting or removing [data-hidden] attribute
        $filteredProducts.forEach(function(product) {
            if (!filterStatus) {
                product.dataset.hidden = true;
            } else {
                delete product.dataset.hidden;
            }
        })
    })
});