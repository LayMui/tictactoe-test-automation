import { by, Target } from '@serenity-js/webdriverio'

export const Square = {
  element: (sq: string) =>
    Target.the('square in the board').located(by.css(`button[data-testid="${sq}"]`))

}



