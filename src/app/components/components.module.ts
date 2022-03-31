import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SocialActionsComponent } from './social-actions/social-actions.component';

@NgModule({
  declarations: [ToolbarComponent, SocialActionsComponent],
  imports: [CommonModule, IonicModule],
  exports: [ToolbarComponent, SocialActionsComponent],
})
export class ComponentsModule {}
