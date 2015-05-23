$(document).ready(function() {
  $('div').safeReplace('commits', 'revisions');
  $(".only-with-full-nav").prepend ( '                \
  \
  <div id="gmSomeID" style="width:100%"><h3 style="margin-bottom: 1em;"><span class="text-emphasized">Download</span> options</h3><a href="http://www.onlineagenten.de/" class="btn btn-sm sidebar-button" aria-label="Download the contents of stefanibus/stefanibus.github.io as a zip file" title="Download the contents of stefanibus/stefanibus.github.io as a zip file" rel="nofollow"><span class="octicon octicon-cloud-download"></span> Download PDF</a><a href="http://www.onlineagenten.de/" class="btn btn-sm sidebar-button" aria-label="Download the contents of stefanibus/stefanibus.github.io as a zip file" title="Download the contents of stefanibus/stefanibus.github.io as a WORD file" rel="nofollow"><span class="octicon octicon-cloud-download"></span> Download WORD</a><a href="http://www.onlineagenten.de/" class="btn btn-sm sidebar-button" aria-label="Download the contents of stefanibus/stefanibus.github.io as a PDF file" title="Download the contents of stefanibus/stefanibus.github.io as a PDF file" rel="nofollow"><span class="octicon octicon-cloud-download"></span> Download TXT</a></p>       \
  \
      </div>                          \
  ' );
  $(".commit-title").append ( '                \
  <a style="float:right; height:27px; top:-5px; right: -5px;" href="http://www.onlineagenten.de/" class="btn btn-sm sidebar-button" aria-label="Download the contents of stefanibus/stefanibus.github.io as a zip file" title="Download the contents of stefanibus/stefanibus.github.io as a zip file" rel="nofollow"><span class="octicon octicon-cloud-download"></span> Download PDF</a> \
                                     \
  ' );
});