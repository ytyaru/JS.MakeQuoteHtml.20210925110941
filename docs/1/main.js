window.addEventListener('load', (event) => {
    function makeBlockquoteString() {
        return `<blockquote cite="${location.href}">
<p>${window.getSelection().toString()}</p>
引用元：<cite><a href="${location.href}">${document.title}</a></cite>
</blockquote>`
    }
    function setupToast() {
        iziToast.settings({
            displayMode: 1, 
            timeout: 5000,
            resetOnHover: true,
            transitionIn: 'flipInX',
            transitionOut: 'flipOutX',
            position: 'bottomRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
        });
    }
    function setupCopy() {
        target = document.querySelector("body");
        target.addEventListener('selectstart', function(){
            target.addEventListener('mouseup', function(event) {
                if(window.getSelection().anchorOffset != window.getSelection().focusOffset) {
                    navigator.clipboard.writeText(makeBlockquoteString()).then(e => {
                        iziToast.success({title: '引用HTMLをコピーしました', message: 'あなたのサイトにペーストしてください'});
                    });
                }
            });
            target.addEventListener('touchend', function(event) {
                if(window.getSelection().anchorOffset != window.getSelection().focusOffset) {
                    navigator.clipboard.writeText(makeBlockquoteString()).then(e => {
                        iziToast.success({title: '引用HTMLをコピーしました', message: 'あなたのサイトにペーストしてください'});
                    });
                }
            });
        });
    }
    setupToast();
    setupCopy();
});

