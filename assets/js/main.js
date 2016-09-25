jQuery(document).ready(function($) {
    /*======= Skillset *=======*/
    $('.level-bar-inner').css('width', '0');

    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {

            var itemWidth = $(this).data('level');

            $(this).animate({
                width: itemWidth
            }, 800);

        });

    });

    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();


    /* jQuery RSS - https://github.com/sdepold/jquery-rss */

    $('#contact_form').submit(function(e) {
      $.ajax({
        type: "POST",
        url: "../php/contactMe.php", //process to mail
        data: $('#contact-form').serialize(),
        success: function(msg){
          $("#thanks").html(msg); //hide button and show thank you
          $("#form-content").modal('hide'); //hide popup
        },
        error: function(){
          alert("failure");
        }
      });
    });
    //    .done(function(response) {
    //      $('#name').val('');
    //      $('#email').val('');
    //      $('#phone').val('');
    //      $('#message').val('');
    //      $('#contactModal').modal('hide');
    //      console.log("Sent");
    //
    //    })
    //    .fail(function(response) {
    //      console.log("Message Fail", "I'm sorry, Please try again.", "error");
    //    });
    // });

    /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
    GitHubActivity.feed({ username: "tonytran1", selector: "#ghfeed" });


});
