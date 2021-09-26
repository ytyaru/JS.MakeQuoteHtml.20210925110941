class Toast {
    constructor() {
        this.setup()
    }
    setup() {
        iziToast.settings({
            displayMode: 1, 
            timeout: 5000,
            resetOnHover: true,
            transitionIn: 'flipInX',
            transitionOut: 'flipOutX',
            position: 'bottomRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
        });
    }
}

function setupToast() {
}
