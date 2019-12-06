import {
    Component,
    OnInit,
    Input,
    ViewChild,
    ComponentFactoryResolver,
    OnChanges,
    SimpleChanges
} from '@angular/core';
import { SelectRowComponentDirective } from '../../directives/select-row-component/select-row-component.directive';
import { DynamicComponent } from './dynamic-component.component';
import { ETableRowComponent, ITableItem, ITableHeader } from '../../table.component.interfaces';
import { TextComponent } from '../../row-components/text/text.component';
import { ImageComponent } from '../../row-components/image/image.component';
import { AvatarComponent } from '../../row-components/avatar/avatar.component';

@Component({
    selector: 'app-row-component',
    template: `
      <ng-template selectRowComponent></ng-template>
    `
})
export class SelectRowComponent implements OnInit, OnChanges {
    @ViewChild(SelectRowComponentDirective, { static: true })
    selectRowComponentDirective: SelectRowComponentDirective;
    @Input() component: any;
    @Input() item: ITableItem;
    @Input() header: ITableHeader;
    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

    ngOnInit() {}

    ngOnChanges(changes: SimpleChanges): void {
        const item: ITableItem = changes.item
            ? changes.item.currentValue
            : undefined;
        const component: ITableItem = changes.component
            ? changes.item.currentValue
            : undefined;
        if (item || component) { this.loadComponent(); }
    }

    loadComponent() {
        const tableComponent: DynamicComponent = new DynamicComponent(
            this.component
                ? this.component
                : this.selectComponents()[this.header.component],
            this.item,
            this.header
        );
        const componentInstance = this.generateInstance<any>(tableComponent);
        componentInstance.item = tableComponent.item;
        componentInstance.header = tableComponent.header;
    }

    selectComponents() {
        return {
            [ETableRowComponent.text]: TextComponent,
            [ETableRowComponent.image]: ImageComponent,
            [ETableRowComponent.avatar]: AvatarComponent
        };
    }

    private generateInstance<T>(FieldInstanceComponent: DynamicComponent) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
            FieldInstanceComponent.component
        );
        const viewContainerRef = this.selectRowComponentDirective.viewContainerRef;
        viewContainerRef.clear();
        const componentRef = viewContainerRef.createComponent(componentFactory);
        const componentInstance = componentRef.instance as T;
        return componentInstance;
    }
}
