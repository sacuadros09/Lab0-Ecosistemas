import styles from "./card.css"

export enum Attribute {
    "uid" = "uid",
    "url" = "url",
    "name" = "name",
    "status" = "status",
}

class Card extends HTMLElement{
    uid?: number;
    url?: string
    name?: string
    status?: string

    static get observedAttributes() {
        const attrs: Record<Attribute, null> = {
            uid: null,
            url:null,
            name: null,
            status: null,
        };
        return Object.keys(attrs);
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }
    
    attributeChangedCallback(
        propName: Attribute,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propName) {
                case Attribute.uid:
                    this.uid = newValue ? Number (newValue):undefined;
                    break;

                default:
                this[propName] = newValue;
                break;
            }

            this.render();
        }
        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = ``

                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);

                this.shadowRoot.innerHTML += ``
                
                const container = this.ownerDocument.createElement("section")

                const Rickyid = this.ownerDocument.createElement("h1")
                Rickyid.innerText = String(this.uid)
                container.appendChild(Rickyid)

                const Rickyimg = this.ownerDocument.createElement("img")
                Rickyimg.src = String(this.url)
                container.appendChild(Rickyimg)

                const RickyName = this.ownerDocument.createElement("h2")
                RickyName.innerText = String(this.name)
                container.appendChild(RickyName)

                const RickyStatus = this.ownerDocument.createElement("h2")
                RickyStatus.innerText = String(this.status)
                container.appendChild(RickyStatus)
                
                const ElementToFav = [this.uid, this.url, this.name, this.status];


               const AddToFav = () => {

                 console.log('Añadiendo elementos a favoritos:', ElementToFav);
                };

                const favbtn = this.ownerDocument.createElement("button")
                favbtn.innerText = "add Fav"
                favbtn.addEventListener("click",(AddToFav)
                    
                )
                container.appendChild(favbtn)

                this.shadowRoot?.appendChild(container)

                
            
            }
        }
    }

customElements.define("my-card", Card);
export default Card;
