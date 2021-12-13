import { equals } from '@serenity-js/assertions'
import { Question } from '@serenity-js/core'
import { by, Target, Text } from '@serenity-js/webdriverio'
import { Element } from 'webdriverio'

export class Game {
  static info = () =>
    Target.all('winner').located(by.css('div div'))

  static winner = (name: string): Question<Promise<Element<'async'>>> =>
   Game.info().where(Text, equals(name)).first()
}
