const assert            = require('assert');
const designerPdfViewer = require('.');

const alphabet1 = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
const alphabet2 = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7];

it('should return the area highlighted', () => {
    assert.equal(designerPdfViewer(alphabet1, 'a'), 1);
    assert.equal(designerPdfViewer(alphabet1, 'ab'), 6);
    assert.equal(designerPdfViewer(alphabet1, 'aaafaa'), 24);
    assert.equal(designerPdfViewer(alphabet2, 'zaba'), 28);
});
