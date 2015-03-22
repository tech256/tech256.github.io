---
---
$(document).on("submit", "#invitation_form", function(e) {
  e.preventDefault();

  var form = $(this);
  var success = form.find(".invitation-success");
  var failure = form.find(".invitation-failure");

  success.hide();
  failure.hide();

  data = form.serialize();
  form
    .find("input")
    .prop("disabled", true);

  var request = $.post("http://tech256.herokuapp.com/invitations", data)

  request.done(function(){
    success.show();
  });

  request.fail(function(){
    failure.show();
  });

  request.always(function(){
    form
      .find("input")
      .removeProp("disabled");
  });
});
