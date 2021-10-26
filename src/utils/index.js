import html2canvas from 'html2canvas';

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

    buildTree(doc.body);
}

export const buildTree = (child) => {
    for (const c of child.children) {
        console.log(c.localName);

        if(c.children.length > 0) return buildTree(c);
    }
}
