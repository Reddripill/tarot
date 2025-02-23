export interface ICard {
   title: string;
   text: string;
   icon: string;
}

export const actionCards: ICard[] = [
   {
      title: "Отношения",
      text: "Помогу Вам понять как oтнocится к вaм тoт или ной человек, чтo думaет о вас, что чувствует",
      icon: "/svg/actions/relationship.svg",
   },
   {
      title: "Карьера и финансы",
      text: "Помогу узнать все Ваши сильные стороны, понять свои истинные желания и возможности",
      icon: "/svg/actions/money.svg",
   },
   {
      title: "Судьбоносные решения",
      text: "Помогу разобраться, стоит ли вам разводиться, переезжать в другой город, верить человеку или опасаться",
      icon: "/svg/actions/scales.svg",
   },
   {
      title: "Будущее",
      text: "Помогу узнать, что ждёт вас в будущем, как разрешится та или иная ситуация",
      icon: "/svg/actions/future.svg",
   },
];
