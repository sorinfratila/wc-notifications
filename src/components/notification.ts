import { css, html, LitElement, TemplateResult } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('wc-notification')
export class Notification extends LitElement {
    static styles = css`
        li {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }
    `

    render(): TemplateResult {
        return html` <li>Notification Item</li> `
    }
}
