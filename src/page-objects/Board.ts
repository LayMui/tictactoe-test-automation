import { by, Target } from '@serenity-js/webdriverio'

export const Board = {
  square: (sq: string) =>
    Target.the('square in the board').located(
      by.css(`button[data-testid="${sq}"]`)
    ),

  gameInfo: () => Target.the('game info').located(by.css('.game-info')),
}



