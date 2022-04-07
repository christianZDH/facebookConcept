import { Component, OnInit } from '@angular/core';
import { UserI } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';
import { ShortcutSlideI } from './components/shortcuts-slide/interfaces/shortcutslide.interface';
import { OptionSlideI } from './components/options-slide/interfaces/optionslide.interface';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  user: UserI;
  shortcuts: ShortcutSlideI[] = [
    {
      photoUrl:
        'https://hbxtrrlccditbwhytiit.supabase.co/storage/v1/object/public/facebookconcept/publicationuser.png',
      date: 'Hace 3 años',
      icon: 'assets/icon/back-arrow.svg',
    },
    {
      photoUrl:
        'https://hbxtrrlccditbwhytiit.supabase.co/storage/v1/object/public/facebookconcept/grupo covid.png',
    },
  ];

  optionSlide: OptionSlideI[] = [
    { icon: 'help', description: 'Ayuda y soporte' },
    { icon: 'settings', description: 'Configuración y privacidad' },
    { icon: 'camera', description: 'Configuración y privacidad' },
  ];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUser().subscribe((user: UserI) => {
      this.user = user;
    });
  }

  toggleDarkmode(ev: any) {
    const value = ev.detail.checked;
    document.body.classList.toggle('dark', value);
  }
}
