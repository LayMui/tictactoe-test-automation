import { equals } from '@serenity-js/assertions';
import {  QuestionAdapter } from '@serenity-js/core';
import { By, PageElement, PageElements, Text } from '@serenity-js/web';



export class Board {
   static info = () =>
       PageElements.located(By.css('.game-info')).describedAs('game info')

   /**
    * Note how I pick an element which text matches `name` without having to use XPath
    * See: https://janmolak.com/xpath-is-dead-advanced-web-element-locators-with-serenity-js-2-25-0-66145ad248d4
    *
    * @param name
    */
   static gameInfo = (name: string): QuestionAdapter<PageElement<unknown>> =>
       Board.info()
           .where(Text, equals(name))
           .first()
}