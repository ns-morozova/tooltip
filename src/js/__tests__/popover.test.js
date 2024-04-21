import { JSDOM } from 'jsdom';
import PopoverTitle from "../PopoverTitle";

describe('test', () => {
    beforeEach(() => {
        const dom = new JSDOM(`<div class="container">
        <button type="button" class="btn btn-lg btn-danger">Click to toggle popover</button>
    </div>`);
        global.window = dom.window;
        global.document = dom.window.document;
    });

    test('Проверка всплывающей подсказки', () => {
        const popover = new PopoverTitle();
        popover.init();
        const element = document.querySelector('.btn');
        element.click();
        const hide = document.querySelector('.hidden-popover');
        expect(hide).toBeNull();

        element.click();
        expect(hide).toBe(null);
    })
})

