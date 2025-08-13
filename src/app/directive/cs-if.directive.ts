import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[csIf]',
    standalone: false,
})
export class csIfDirective implements OnInit 
{
    csif: boolean | undefined;
    
    constructor(private container:ViewContainerRef, private template:TemplateRef<any>)
     {
        // Constructor logic if needed
    }   

    ngOnInit(): void {
        // Logic to execute when the directive is initialized
    }


    updateView() {    
      if (this.csif) {
            this.container.createEmbeddedView(this.template);
        } else {
            this.container.clear();
        }
    }

    @Input()
    set csIf(condition: boolean) {
        this.csif = condition;
        this.updateView();
    }


    

    
}