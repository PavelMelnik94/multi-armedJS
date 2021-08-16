# методы дисплея

### .show() - display: '';
#### никаких аргументов

### .hide() - display: none;
#### никаких аргументов

### .toggle() - '' -> none, none -> '';
#### никаких аргументов

<hr>

# методы классов

### .addClass(...classNames) - добавить класс\ы
#### $('.active').addClass('hello', 'world');

### .removeClass(...classNames) - удалить класс\ы
#### $('.active').removeClass('hello', 'world');

### .toggleClass(...classNames) - переключить класс.
#### $('.active').toggleClass('hello'); //один аргемент 


<hr>

# хендлеры

### .on('eventName', колбэк) - добавить обработчик
#### сокращение addEventListener('eventName', cb);

### .off('eventName', колбэк) - удалить обработчик
#### сокращение removeEventListener('eventName', cb);

### .click(handler) - события клика
#### уже написанное событие блика, которое принимает отдельно написанную функцию-handler


