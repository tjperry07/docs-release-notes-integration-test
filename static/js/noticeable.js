!function(){'use strict';const e=['debug','destroy','do','help','identify','is','off','on','ready','render','reset','safe','set'];if(window.noticeable)console.warn('Noticeable SDK code snippet loaded more than once');else{const n=window.noticeable=window.noticeable||[];function t(e){return function(){const t=Array.prototype.slice.call(arguments);return t.unshift(e),n.push(t),n}}function o(){for(let o=0;o<e.length;o++){const c=e[o];n[c]=t(c)}}function c(){const e=document.createElement('script');e.async=!0,e.src='https://sdk.noticeable.io/l.js';const n=document.head;n.insertBefore(e,n.firstChild)}o(),c()}}();


noticeable.render('widget', 'G8HdqEvxxeKDNxG2VZHx');
