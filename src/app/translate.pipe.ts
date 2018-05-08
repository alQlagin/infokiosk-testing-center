import {Pipe, PipeTransform} from '@angular/core';
import {Languages} from './models/Languages';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  transform(value: any, language: Languages = Languages.RU): any {
    const l = translations[language];
    return l && l[value] || value;
  }
}

const translations = {};

translations[Languages.RU] = {
  welcome: 'Добро пожаловать!',
  instruction1: 'Приложите паспорт, чтобы получить талон посетителя',
  instruction2: 'С этим талоном вы сможете воспользоваться услугами, а также оставить отзыв',
  first_name: 'Имя',
  last_name: 'Фамилия',
  passport_series: 'Серия и номер паспорта',
  date_of_birth: 'Дата рождения',
  next: 'Дальше',
  cancel: 'Закрыть',
  number: 'Номер в очереди',
  getTalon: 'Возьмите ваш талон'
};

translations[Languages.UZ] = {
  welcome: 'Добро пожаловать!',
  instruction1: 'Приложите паспорт, чтобы получить талон посетителя',
  instruction2: 'С этим талоном вы сможете воспользоваться услугами, а также оставить отзыв',
  first_name: 'Имя',
  last_name: 'Фамилия',
  passport_series: 'Серия и номер паспорта',
  date_of_birth: 'Дата рождения',
  next: 'Дальше',
  cancel: 'Закрыть',
  number: 'Номер в очереди',
  getTalon: 'Возьмите ваш талон'
};
