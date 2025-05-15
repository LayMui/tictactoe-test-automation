import { By, PageElement } from "@serenity-js/web";


export const Square = {
  element: (sq: string) =>
      PageElement.located(By.css(`button[data-testid="${sq}"]`)).describedAs('login button'),

}



