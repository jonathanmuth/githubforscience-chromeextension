$(document).ready(function() {
  $('div').safeReplace('commits', 'revisions');
});

$(document).bind("DOMSubtreeModified", function() {
  $('div').safeReplace('commits', 'revisions');
});