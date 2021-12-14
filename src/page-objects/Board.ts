import { includes } from '@serenity-js/assertions'
import { equals } from '@serenity-js/assertions'
import { Question } from '@serenity-js/core'
import { by, Target, Text } from '@serenity-js/webdriverio'
import { Element } from 'webdriverio'

export class Board {
   static gameInfo =  (includedText: string): Question<Promise<Element<'async'>>> => {
    return Target.all('game info')
       .located(by.css('.game-info'))
       .where(Text, includes(includedText))
       .first()
  }
}
