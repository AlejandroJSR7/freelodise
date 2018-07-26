// scripts/freelodise.js

(function customDropdown() {
  function DropDown(el) {
    this.dd = el;
    this.initEvents();
  }
  DropDown.prototype = {
    initEvents : function() {
      var obj = this;

      obj.dd.on('click', function(event){
        $(this).toggleClass('active');
        event.stopPropagation();
      });	
    }
  }
  $(function() {
    var dd = new DropDown( $('#js-header__user-nav-dropdown') );
    $(document).click(function() {
      // all dropdowns
      $('.wrapper-dropdown-5').removeClass('active'); // Cerrar los otros dropdown
    });
  });
})();

(function showCitySelector() {
  let toggleSelector = document.querySelector('.js-toggle-region-selector');
  let citySelector = document.querySelector('#js-regions-selector-list');

  toggleSelector.onclick = function() {
    citySelector.classList.toggle("active");
    validateSelectorIcon();
  };

  function validateSelectorIcon() {
    let toggleArrow = document.querySelector('.js-toggle-region-selector > i');
    if(toggleArrow.classList.contains('icon--arrow-down')) {
      toggleArrow.classList.remove('icon--arrow-down');
      toggleArrow.classList.add('icon--arrow-up');
    } else {
      toggleArrow.classList.remove('icon--arrow-up');
      toggleArrow.classList.add('icon--arrow-down');
    }
  }

})();

(function showCategorySelector() {
  let toggleMenuItems = document.querySelectorAll("[class^='js-categories-nav__item--']");
  let categoriesNavs = document.querySelectorAll("[class^='js-nav-categories--'");
  for(var i = 0; i < toggleMenuItems.length; i++ ) {
    toggleMenuItems[i].addEventListener('click', function() {
      let thisItem = this;
      let element = toggleMenuItems[0];
      console.log('toggleMenuItems', toggleMenuItems);
      removeSiblingsActiveClass(element);

      let dataAttrCategories = thisItem.getAttribute('data-open-categories');
      let jsCategoriesSelector = document.querySelector('.js-categories-selector-list');
      let elementThatWeShouldShow = '.js-nav-categories--' + dataAttrCategories;
      jsCategoriesSelector.classList.add('active');

      let categorieElement = categoriesNavs[0];
      removeSiblingsActiveClass(categorieElement);

      document.querySelector(elementThatWeShouldShow).classList.add('active');
      thisItem.classList.add('active');
    })
  }

})();

function removeSiblingsActiveClass(element) {
  while(element) {
    if(element.nodeType === 1) {
      element.classList.remove('active');
    }
    element = element.nextSibling;
  }
}

$(document).ready(function () {
  $( "#accordion-entertainment" ).accordion({
    heightStyle: "content" 
  });
});