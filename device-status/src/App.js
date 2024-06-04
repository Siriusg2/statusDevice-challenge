import style from './App.module.css';
import DeviceTable from './Table/Table';
import SearchBar from './SearchBar/SearchBar';

function App() {
  return (
    <div className={style.AppContainer}>
      <div className={style.container}>
        <h1 className={style.title}>Dispositivos</h1>
        <nav className={style.filter}>
        <select  /*onChange={event => filterCreated(event)} */>
                    <option value="all">ID</option>
                    <option value="created">Creados</option>
                    <option value="exist">Existentes</option>
            </select>
            <select /* onChange={event => handlerHealthScore(event)} */>
                    <option value="all">SOS</option>
                    <option value="ascHs">sos</option>
                    <option value="descHs">OK</option>
            </select>
            <select /* onChange={event => handlerName(event)} */>
                    <option value="all">Modo</option>
                    <option value="ascName">Conectados</option>
                    <option value="descName">Desconectados</option>
            </select>
            <SearchBar />
        </nav>
        <div ><DeviceTable /></div>
      </div>
    </div>

  );
}

export default App;

/* Desafío de Interfaz de Estado de Dispositivos
¡Hola! En este desafío, se te proporcionará un array de objetos que contiene datos sobre el estado de los dispositivos, y debes renderizar sus parámetros en un componente de tabla de estado.

Requisitos
Necesitarás hacer lo siguiente:

Crear una nueva rama de git con la primera letra de tu primer nombre y tu apellido completo como nombre de la rama.
Ejemplo: para el usuario "Carlos Ramirez", el nombre de la rama debe ser cramirez, siempre en minúsculas.

Iniciar un nuevo proyecto utilizando cualquier framework frontend de JavaScript, pero recomendamos las últimas versiones de React/Next o Vue/Nuxt.

Construir un componente que muestre el estado de cada dispositivo, es decir, nivel de batería, estado de conexión, etc., utilizando el array de datos (se encuentra en el archivo ./assets/devicesData.js contenido en este repositorio).

El componente de la tabla debe mostrar un máximo de 5 dispositivos por página.

Es obligatorio usar eslint/prettier para formatear el código.

Está prohibido usar Material UI, Element UI o cualquier biblioteca que te proporcione componentes pre-construidos, aparte de las mencionadas en la sección de sugerencias a continuación.

Hacer commits regularmente en GitHub, evitando hacer un solo commit o pocos commits; los commits deben ser una muestra de tu trabajo.

Una vez que completes el desafío, el último commit debe llamarse "final commit".

Tienes 36 horas para completar este desafío desde que recibes acceso a este repositorio; no te preocupes si no lo completas, el resultado final no es el único criterio para evaluarte, queremos ver tu desempeño en otros aspectos relacionados con el desarrollo de software.

Sugerencias
Te sugerimos usar:

Tailwind CSS para los estilos de la aplicación.

React Icons que describan el título de la columna.

Puntos Extra
Ganarás puntos extra si:

Dockerizas la aplicación usando docker-compose.

Creas un diseño responsivo.

Usas TypeScript en lugar de JavaScript.

Sigues buenas prácticas de codificación, como nombres de variables consistentes y claros, modularización y adherencia al Principio de Responsabilidad Única (SOLID). */