import { Component } from '@angular/core';
import {PhraseOfTheDayService} from "@shared/services/phrase-of-the-day.service";
import {PhraseOfTheDay} from "@core/models/phrase-of-the-day";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent {
  phrase: PhraseOfTheDay;

  constructor(phraseOfTheDay:PhraseOfTheDayService) {
    this.phrase = phraseOfTheDay.phraseOfTheDay;
  }
}
