import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SocialActionsComponent } from './social-actions/social-actions.component';
import { StoriesComponent } from './stories/stories.component';

import { SwiperModule } from 'swiper/angular';
import { PublicationComponent } from './publication/publication.component';
import { CardHeaderComponent } from './publication/components/card-header/card-header.component';
import { CardContentComponent } from './publication/components/card-content/card-content.component';
import { CardCommentsComponent } from './publication/components/card-comments/card-comments.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    SocialActionsComponent,
    StoriesComponent,
    PublicationComponent,
    CardHeaderComponent,
    CardContentComponent,
    CardCommentsComponent,
  ],
  imports: [CommonModule, IonicModule, SwiperModule],
  exports: [
    ToolbarComponent,
    SocialActionsComponent,
    StoriesComponent,
    PublicationComponent,
  ],
})
export class ComponentsModule {}
