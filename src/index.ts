import { api } from "./services/api";
import "./components/export"
import Card, { Attribute } from "./components/Card/Card";


class AppContainer extends HTMLElement {
    mortys: Card[] = [];
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });   
    }
    
    async connectedCallback() {
        
        const data = await api()
        console.log(api)
        
        data?.forEach((user:any) => {
            const mortyCard = this.ownerDocument.createElement(
                "my-card"
                ) as Card;
                mortyCard .setAttribute(Attribute.uid, user.id);
                mortyCard .setAttribute(Attribute.url, user.image);
                mortyCard .setAttribute(Attribute.name, user.name); 
                mortyCard .setAttribute(Attribute.status, user.status);
                
                this.mortys.push(mortyCard );
            });
            
            this.render(this.mortys);
        }
        
        render(mortys:any){
            
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = ``;
                
                this.mortys.forEach((morty) => {
                    this.shadowRoot?.appendChild(morty); 

              

                });
                
     
                
                                    const container = this.ownerDocument.createElement("section")



                this.shadowRoot?.appendChild(container)



                   
                    
                }
            }
        }
    
    
    customElements.define("app-container", AppContainer);