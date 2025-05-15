import { Task, Wait, WaitUntil } from '@serenity-js/core'

import { Board } from '../page-objects/Board'
import { Game } from '../page-objects/Game'
import { isVisible } from '@serenity-js/web'

export const VerifyWinner = {
  ontheBoard: () =>
    Task.where(
      `#actor can see who is the winner on the board`,
     Wait.until(Game.winner('Winner: X'), isVisible()),
     
    ),
}
