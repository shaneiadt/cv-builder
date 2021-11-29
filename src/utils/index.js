import html2canvas from 'html2canvas';

export { BLOCK_TYPE } from './Types';

export const capture = (selector) => {
    html2canvas(document.querySelector(selector)).then(canvas => {
        var a = document.createElement('a');

        // a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
        a.href = canvas.toDataURL();
        a.download = 'resume.png';
        a.click();
    });
}

export const stringToHTML = (str) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(str, 'text/html');

    return mapDOMElement(doc.body);
}

const getAttributes = (attributes) => {
    return attributes.map(attribute => ({
        att: attribute.name,
        value: attribute.value
    }));
};

const mapDOMElement = (element) => {
    return [...element.childNodes].map(node => {
        return {
            content: node.childNodes && node.childNodes.length > 0 ? null : node.textContent,
            atts: node.nodeType !== 1 ? [] : getAttributes([...node.attributes]),
            type: node.nodeType === 3 ? 'text' : (node.nodeType === 8 ? 'comment' : node.tagName.toLowerCase()),
            node: node,
            children: mapDOMElement(node)
        };
    });
};