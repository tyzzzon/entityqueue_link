(function ($) {
  Drupal.behaviors.entityqueueLink = {
    attach: function(context) {
      $('.entityqueue-link-wrapper').each(function () {
        $(this).children().once('entityqueue-link-ajax', function () {
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
                var linksWrapper = linkClicked.parents('.entityqueue-links-wrapper');
                linksWrapper.children().toggleClass('inactive');
              }
            });
          });
        });
      });
    }
  };
})(jQuery);
