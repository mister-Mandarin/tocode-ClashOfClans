import { images } from '@/assets/img/configImages';

export default [
  {
    id: 1,
    alias: 'barbarian',
    title: images[0].title,
    descr:
      'Варвар — одетый в килт шотландский воин с сердитым,' +
      ' готовым к бою выражением лица, жаждущим разрушения. У него убийственно желтые подковообразные усы.',
    // Если бы картинки лежали в папке, то делаем так.
    // img: require(' путь то картинки ')
    img: images[0].url,
    lvl: 12,
    info: [
      {title: 'Обучение', value: '20 с'},
      {title: 'Скорость', value: '16'},
      {title: 'Цена', value: '150'}
    ]
  },
  {
    id: 2,
    alias: 'archer',
    title: images[1].title,
    descr:
      'Лучница — женщина-воин с острым взглядом. ' +
      'На ней короткое светло-зеленое платье, накидка с капюшоном, кожаный ремень и небольшой мешочек.',
    img: images[1].url,
    lvl: 23,
    info: [
      {title: 'Обучение', value: '25 с'},
      {title: 'Скорость', value: '24'},
      {title: 'Цена', value: '300'}
    ]
  },
  {
    id: 3,
    alias: 'giant',
    title: images[2].title,
    descr:
      'Медленные, устойчивые и мощные Гиганты — массивные воины, ' +
      'которые поглощают огромное количество урона. Покажите им башню или пушку, и вы увидите, как вырвется их ярость!',
    img: images[2].url,
    lvl: 34,
    info: [
      {title: 'Обучение', value: '2 с'},
      {title: 'Скорость', value: '12'},
      {title: 'Цена', value: '2250'}
    ]
  },
  {
    id: 4,
    alias: 'goblin',
    title: images[3].title,
    descr:
      'Эти надоедливые маленькие существа видят только одно: ДОБЫЧА! ' +
      'Они быстрее пружинной ловушки, а их жажда ресурсов безгранична.',
    img: images[3].url,
    lvl: 45,
    info: [
      {title: 'Обучение', value: '30 с'},
      {title: 'Скорость', value: '32'},
      {title: 'Цена', value: '100'}
    ]
  },
  {
    id: 5,
    alias: 'wizard',
    title: images[4].title,
    descr:
      'Волшебник ужасен на поле боя. Объедините его с некоторыми из его ' +
      'товарищей и обрушьте концентрированные разрушительные взрывы на что угодно, землю или небо!',
    img: images[4].url,
    lvl: 56,
    info: [
      {title: 'Обучение', value: '5 м'},
      {title: 'Скорость', value: '16'},
      {title: 'Цена', value: '3800'}
    ]
  }
];
