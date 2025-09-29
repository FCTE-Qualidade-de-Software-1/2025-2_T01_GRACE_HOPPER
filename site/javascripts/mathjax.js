// MathJax Configuration
window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|.*",
    processHtmlClass: "arithmatex"
  }
};

document$.subscribe(() => { 
  MathJax.typesetPromise()
});

// CSS Load Monitor
(function() {
  'use strict';
  
  function checkCSSLoaded() {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    var extraCSSLoaded = false;
    
    for (var i = 0; i < links.length; i++) {
      if (links[i].href.indexOf('extra.css') !== -1) {
        try {
          if (links[i].sheet && links[i].sheet.cssRules) {
            extraCSSLoaded = true;
            break;
          }
        } catch (e) {
          // Cross-origin or not loaded
        }
      }
    }
    
    if (!extraCSSLoaded) {
      console.warn('Custom CSS not loaded, attempting reload...');
      // Force reload custom CSS
      var timestamp = new Date().getTime();
      var newLink = document.createElement('link');
      newLink.rel = 'stylesheet';
      newLink.href = 'stylesheets/extra.css?v=' + timestamp;
      document.head.appendChild(newLink);
    }
  }
  
  // Check on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(checkCSSLoaded, 1000);
    });
  } else {
    setTimeout(checkCSSLoaded, 1000);
  }
  
  // Check periodically (fallback for intermittent issues)
  setInterval(function() {
    var computedStyle = window.getComputedStyle(document.documentElement);
    var primaryColor = computedStyle.getPropertyValue('--md-primary-fg-color');
    
    if (!primaryColor || primaryColor.indexOf('#1976d2') === -1) {
      console.warn('Theme variables not loaded properly, checking CSS...');
      checkCSSLoaded();
    }
  }, 30000); // Check every 30 seconds
  
})();