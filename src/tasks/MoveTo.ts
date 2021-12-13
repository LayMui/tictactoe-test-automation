import { Log, Task } from '@serenity-js/core'
import { Click, isVisible, Wait } from '@serenity-js/webdriverio'
import { Board } from '../page-objects/Board'

export const MoveTo = {
  board: (sq: string[]) =>
    Task.where(
      `#actor move to square on the board`,
      Wait.until(Board.square(sq[0]), isVisible()),
      Click.on(Board.square(sq[0])),
      Click.on(Board.square(sq[1])),
      Click.on(Board.square(sq[2])),
      Click.on(Board.square(sq[3])),
      Click.on(Board.square(sq[4])),
      Click.on(Board.square(sq[5])),
      Click.on(Board.square(sq[6]))
    ),
}




