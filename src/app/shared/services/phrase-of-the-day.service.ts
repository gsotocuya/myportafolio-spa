import {Injectable} from '@angular/core';
import {PhraseOfTheDay} from "@core/models/phrase-of-the-day";

@Injectable({
    providedIn: 'root'
})
export class PhraseOfTheDayService {

    phrase: PhraseOfTheDay =
        {
            phrase: 'Trabaja en algo, para que el diablo te encuentre siempre ocupado.',
            author: 'San Jerónimo',
            publish: '(340-420)',
            speciality: 'Traductor latino'
        }


    constructor() {

    }

    get phraseOfTheDay(){
        return this.phrase;
    }


}
