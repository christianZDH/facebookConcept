import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SocialActionsComponent } from './social-actions/social-actions.component';
import { StoriesComponent } from './stories/stories.component';

import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [ToolbarComponent, SocialActionsComponent, StoriesComponent],
  imports: [CommonModule, IonicModule, SwiperModule],
  exports: [ToolbarComponent, SocialActionsComponent, StoriesComponent],
})
export class ComponentsModule {}
