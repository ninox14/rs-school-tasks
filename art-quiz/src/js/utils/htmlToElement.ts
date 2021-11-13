/**
 * @param {String} HTML representing a single element
 * @return {Element}
 */
function htmlToElement(html:string)  {
    let template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}


export default htmlToElement