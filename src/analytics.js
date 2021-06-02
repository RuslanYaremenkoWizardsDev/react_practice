function createAnalytics() {
    let counter = 0;
    const isDestroyed = false;
    const hanldeClick = () => counter++;

    document.addEventListener('click', hanldeClick);

    return {
        getClicks() {
            if (isDestroyed) {
                return 'Analytics is not working...';
            }
            return `counter: ${counter}`;
        },
    };
}

window.analytics = createAnalytics();
