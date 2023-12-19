
/**
 * Returns the element height including margins
 * @param element - element
 * @returns {number}
*/
function outerHeight(element) {
    const height = element.offsetHeight,
        style = window.getComputedStyle(element)

    return ['top', 'bottom']
        .map(side => parseInt(style[`margin-${side}`]))
        .reduce((total, side) => total + side, height)
}


// this will ensure section ".content" always appear below menu
document.addEventListener('DOMContentLoaded', function () {
    let menuElement = document.querySelector('header');
    document.querySelector('.content').style.marginTop = outerHeight(menuElement) + 'px';
});