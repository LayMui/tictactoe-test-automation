import { Task } from '@serenity-js/core'
import { isVisible, Wait } from '@serenity-js/webdriverio'
import { Board } from '../page-objects/Board'
import { Game } from '../page-objects/Game'

export const VerifyWinner = {
  ontheBoard: () =>
    Task.where(
      `#actor can see who is the winner on the board`,
    //  Wait.until(Game.winner('Winner: X'), isVisible()),
      Wait.until(Board.gameInfo('Winner: X'), isVisible())
    ),
}
