window.addEventListener('load', (event) => {
    function makeBlockquoteString() {
        return `<blockquote cite="${location.href}">
<p>${window.getSelection().toString()}</p>
引用元：<cite><a href="${location.href}">${document.title}</a></cite>
</blockquote>`
    }
    function setupCopy() {
        target = document.querySelector("body");
        target.addEventListener('selectstart', function(){
            target.addEventListener('mouseup', function(event) {
                if(window.getSelection().anchorOffset != window.getSelection().focusOffset) {
                    navigator.clipboard.writeText(makeBlockquoteString()).then(e => {
                        alert('引用HTMLをコピーしました');
                    });
                }
            });
            target.addEventListener('touchend', function(event) {
                if(window.getSelection().anchorOffset != window.getSelection().focusOffset) {
                    navigator.clipboard.writeText(makeBlockquoteString()).then(e => {
                        alert('引用HTMLをコピーしました');
                    });
                }
            });
        });
    }
    setupCopy();
});

