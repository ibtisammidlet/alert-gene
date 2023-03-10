$(document).ready(function() {
  if ($.cookie('cookies') == null)
    $('#cookies').show();
});

$('.cookies-button').click(function() {
  $.cookie(
    'cookies',
    'ok', {
      expires: 365,
      path: '/'
    }
  );
  $('#cookies').hide();
});
