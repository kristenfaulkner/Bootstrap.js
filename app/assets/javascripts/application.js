// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require_tree .

$(function() {
  $("#contactSubmitButton").on("click", function(event){
    event.preventDefault();
    
    if ($("#nameinput").val() === undefined || $("#nameinput").val() === "") {
      $("#full-name-input").addClass("has-error").removeClass("has-success");
    } else {
      $("#full-name-input").addClass("has-success").removeClass("has-error");
    }
    if ($("#emailinput").val() === undefined || $("#emailinput").val() === "") {
      $("#email-input").addClass("has-error").removeClass("has-success");
    } else {
      $("#email-input").addClass("has-success").removeClass("has-error");
    }
    if ($("#messageinput").val() === undefined || $("#messageinput").val() === "") {
      $("#message-input").addClass("has-error").removeClass("has-success");
    } else {
      $("#message-input").addClass("has-success").removeClass("has-error");
    }
    $("#contactSubmitButton").removeAttr('disabled');
  });
  
  $('.tooltiplink').tooltip();
});