import {Component, OnInit} from '@angular/core';
import {PhraseService} from "@shared/services/phrase.service";
import {Observable} from "rxjs";
import {Phrase} from "@core/models/phrase";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit{
  phrase:Array<any> = [];
  phrase$:Observable<Phrase> = this.phraseService.getPhrase();
  constructor(private phraseService:PhraseService) {

  }

  ngOnInit(): void {
    this.phraseService.getPhrase().subscribe(
      (response) => {
      this.phrase = response;
    })
  }

  protected readonly JSON = JSON;
}
