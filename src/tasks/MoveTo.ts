import { Log, Task, Wait } from '@serenity-js/core'

import { Square } from '../page-objects/Square'
import { Click, isVisible } from '@serenity-js/web'

export const MoveTo = {
  board: (sq: string[]) =>
    Task.where(
      `#actor move to square on the board`,
      Wait.until(Square.element(sq[0]), isVisible()),
      Click.on(Square.element(sq[0])),
      Click.on(Square.element(sq[1])),
      Click.on(Square.element(sq[2])),
      Click.on(Square.element(sq[3])),
      Click.on(Square.element(sq[4])),
      Click.on(Square.element(sq[5])),
      Click.on(Square.element(sq[6]))
    ),
}




