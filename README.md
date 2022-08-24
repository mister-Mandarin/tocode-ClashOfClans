# Clash of Clans

Приложение с курса «Vue 3 - Полное руководство» от to code

## Устаовка пакетов

```
npm install
```

### Запуск

```
npm run serve
```

### Библиотека для слайдера

https://ismail9k.github.io/vue3-carousel/

### Лучший вариант редирректа

Комментарий от преподавателя:
У тебя редиректы работают через файлик роутера в хуке beforeEnter.

Это хорошее решение. Но будут ситуации, когда редиректов придётся писать много, тогда файл роутера будет слишком большим
и разобраться, где и какой редирект будет проблемой.

Поэтому логику редиректов лучше разбить по компонентам (не всегда, но на больших проектах это имеет смысл).

Разбивать логику редиректов можно при помощи this.router.push() внутри хука created, который будет добавляться в каждый
компонент, где нужен редирект.

Вот еще более реалистичный пример, если бы данные забирались бы с апи:

```
async created () {
  const alias = this.$route.params.itemAlias
  const item = alias && data.items.find(el => el.alias === alias)

  if (!item) {
    return await this.$router.push({ name: 'NotFound' })
  }

  this.item = JSON.parse(JSON.stringify(item))
  this.isLoading = false
}
```

В примере выше идет редирект, если item не был найден. При этом добавлены async / await чтобы "дожидаться" ответа от
поиска.

Кстати, для таких целей JSON.parse(JSON.stringify(item)) можно создать константу по типу export function jsonParse (val)
=> JSON.parse(JSON.stringify(val)) где-нибудь в /utils/ и импортировать ее отдельно.

_Конец комментария_
