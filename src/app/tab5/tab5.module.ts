import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab5PageRoutingModule } from './tab5-routing.module';

import { Tab5Page } from './tab5.page';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { SwiperModule } from 'swiper/angular';
import { ShortcutsComponent } from './components/shortcuts/shortcuts.component';
import { ShortcutsSlideComponent } from './components/shortcuts-slide/shortcuts-slide.component';
import { OptionsSlideComponent } from './components/options-slide/options-slide.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: Tab5Page }]),
    Tab5PageRoutingModule,
    ComponentsModule,
    SwiperModule,
  ],
  declarations: [
    Tab5Page,
    ShortcutsComponent,
    ShortcutsSlideComponent,
    OptionsSlideComponent,
  ],
})
export class Tab5PageModule {}
