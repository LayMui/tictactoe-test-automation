import { Log, Task } from '@serenity-js/core'
import { Click, isVisible, Wait } from '@serenity-js/webdriverio'
import { Board } from '../page-objects/Board'
import { contain, Ensure, includes } from '@serenity-js/assertions'

export const VerifyWinner = {
  ontheBoard: () =>
    Task.where(
      `#actor can see who is the winner on the board`,
      Wait.until(Board.gameInfo(), isVisible()),
      
    ),
}
