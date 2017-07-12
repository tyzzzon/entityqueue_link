(function ($) {
  Drupal.behaviors.mgtEntityqueueLink = {
    attach: function(context) {
      $('.mgt-entityqueue-link-wrapper').each(function () {
        $(this).children().once('mgt-entityqueue-link-ajax', function () {
          $(this).click(function (e) {
            e.preventDefault();
            var linkClicked = $(this);
            var linkWrapper = linkClicked.parent();
            linkWrapper.addClass('loader');
            var url = linkClicked.attr('href');
            $.ajax({
              type: "POST",
              url: url,
              success: function(data) {
                var linksWrapper = linkClicked.parents('.mgt-entityqueue-links-wrapper');
                linksWrapper.children().toggleClass('inactive');
              }
            });
          });
        });
      });
    }
  };
})(jQuery);
