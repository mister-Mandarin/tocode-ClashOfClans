import { images } from '@/assets/img/configImages'

export default [
  {
    id: 1,
    alias: 'barbarian',
    title: images[0].title,
    descr: 'description description description description',
    // Если бы картинки лежали в папке, то делаем так.
    // img: require(' путь то картинки ')
    img: images[0].url,
    lvl: 12
  },
  {
    id: 2,
    alias: 'archer',
    title: images[1].title,
    descr: 'description description description description',
    img: images[1].url,
    lvl: 23
  },
  {
    id: 3,
    alias: 'giant',
    title: images[2].title,
    descr: 'description description description description',
    img: images[2].url,
    lvl: 34
  },
  {
    id: 4,
    alias: 'goblin',
    title: images[3].title,
    descr: 'description description description description',
    img: images[3].url,
    lvl: 45
  },
  {
    id: 5,
    alias: 'wizard',
    title: images[4].title,
    descr: 'description description description description',
    img: images[4].url,
    lvl: 56
  }
]
