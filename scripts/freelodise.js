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
  let toggleMenuItems = document.querySelectorAll(".js-toggle-category-selector");
  console.log("toggleMenuItems", toggleMenuItems);

  for(var i = 0; i < toggleMenuItems.length; i++ ) {
    toggleMenuItems[i].addEventListener('click', function() {
      let thisItem = this;
      let element = toggleMenuItems[0];
      console.log('element.tagName', element.tagName);

      while(element) {
        if(element.tagName === 'LI') {
          element.classList.remove('active');
        }
        element = element.nextSibling;
      }
      thisItem.classList.add('active');
    })
  }

})();