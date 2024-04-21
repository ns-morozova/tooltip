export default class PopoverTitle {
    constructor() {
        this.popover;
        this.onClick = this.eventClick.bind(this);
    }

    init() {
        this.popover = document.createElement('div');
        this.popover.classList.add('popover', 'hidden-popover');
        this.popover.innerHTML = `
            <div class="popover-title"><span>Popover title</span></div>
            <div class="popover-text"><span>And here's some amazing content. It's very engaging. Right?</span></div>
            <div class="popover__arrow"></div>
        `;

        document.body.append(this.popover);
        
        const btn = document.querySelector('.btn');
        btn.addEventListener('click', this.onClick);
    }

    eventClick(event) {
        event.preventDefault();
        this.togglePopover(event.currentTarget);
    }


    togglePopover(element) {
        this.popover.classList.toggle('hidden-popover');
        if (this.popover.classList.contains('hidden-popover')) {
            return;
        }
        const coordEl = element.getBoundingClientRect();
        console.log(coordEl);
        const coordPop = this.popover.getBoundingClientRect();
        let popoverTopY = coordEl.top - coordPop.height - 8;
        console.log(popoverTopY);
        let popoverTopX = coordEl.left + coordEl.width / 2 - coordPop.width / 2;
        console.log(popoverTopX);
        this.popover.style.left = popoverTopX + 'px';
        this.popover.style.top = popoverTopY + 'px';
    }
}