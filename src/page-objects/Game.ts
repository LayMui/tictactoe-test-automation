import { equals } from '@serenity-js/assertions'
import { QuestionAdapter } from '@serenity-js/core'
import { By, PageElement, PageElements } from '@serenity-js/web'
import { Text } from '@serenity-js/web'


export class Game {
  static info = () =>
   PageElements.located(By.css('div div')).describedAs('winner')


  static winner = (name: string): QuestionAdapter<PageElement<unknown>> =>
   Game.info().where(Text, equals(name)).first()
}
