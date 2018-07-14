#configure and install

- Clone project
- Exectute 'npm install'

#observations

Se han tomado un par de decisiones que aquí vienen explicadas:

Se ha decidido que, por la simpleza de las pantallas, los componentes sean los que directamente obtienen los datos, si las pantallas hubieran sido más complejas y los componentes interactuaran más entre ellos, se hubiera obtenido los datos desde el padre y se hubiera utilizando @input y @output

La aplicación tiene que hacer una llamada cada 3min.
 Se ha decidido que esta llamada recuerrente solo se efectue la primera vez que se carga el componente que la hace. Si se navega por la aplicación, aunque se vuelva a cargar el componente que hace la llamada, se guarda la lectura del momento que se vuelve a cargar el componente pero se mantiene la llamada recurrente de la primera vez que se ha cargado el componente. Así evitamos que se ejecuten varias llamadas recuerrentes en paralelo y guarde información en el storage que no queremos. 
La única vez que se reinicia la llamada recurrente es cuando se recarga la página.
Ejemplo:
Se entra en la página de temperaturas actuales a las 11:10:30 segungos. Se guardaran el storage a las 11:10:30, 11:13:30, 11:16:30.
Si se va al historial, y a las 11:10:50 se vuelve a la pantalla de temperaturas actuales. Se guardará en el storage a las 11:10:30, 11:10:50, 11:13:30, 11:16:30. (Se ha pensado que aunque haya llamadas fuera del intervalo, había que guardarla si se había visualizado).
Si se recarga la página a las 11:16:50, se guardaráría en el storage 11:10:30, 11:10:50, 11:13:30, 11:16:30, 11:16:50, 11:19:50...

Si se está en la página del historial, aunque se estén guardando nuevos registros en el storage, habrá que salir de esa página y volver a entrar para poder verlos.

Se dudaba si había que guardar en el storage la última lectura o todo el historial. Se ha decidido guardar todo el historial, y para acceder a la última lectura habría que leer la primera posición del array del historial de la ciudad. Se entiende que no podría quedar así, ya que acabaría guardando demasiados datos en el storage, pero cómo es un ejemplo se ha considerado que no es importante. Se ha decidio así ya que, al tratarse de una ejemplo técnico, se muestra con más profundidad el uso del storage.

Hay que tener en cuenta que la misma api ofrece un servicio con el historial, pero como he comentado, se ha querido utilizar el historial del storage para ver con más profundidas el uso de éste.

Sobre los tests:

Se ha decidido no testear la aplicación completa dado el coste en tiempo que se necesita. Aún así se han efectuado algunos tests para mostrarlos a modo de ejemplo. En concreto, en los unit test, se ejecutan todos los specs con éxito, pero sólo se han realizado más tests en el spec de TemperatureService y, en los e2e, se ha programado un pequeño script que realiza 3 tests.

# WeatherProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
