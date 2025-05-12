# Tripleten web_project_around_express

Resumen de Tecnologías y Herramientas Utilizadas:
Node.js:
Se usó como entorno de ejecución para JavaScript en el servidor. Permite la ejecución del código JavaScript fuera del navegador.

Express.js:
Framework minimalista para crear aplicaciones web en Node.js. Se utilizó para gestionar rutas HTTP y crear una API.

npm (Node Package Manager):
Herramienta utilizada para gestionar dependencias y ejecutar scripts. Se usó para instalar paquetes como ESLint, nodemon, y otras dependencias necesarias.
El comando npm init se utilizó para generar el archivo package.json, el cual contiene la configuración y dependencias del proyecto.

ESLint:
Herramienta de linting que ayuda a detectar errores de código y mantener la consistencia. Se configuró para seguir la Guía de estilo de Airbnb.
Usaste eslint@8.56.0, eslint-config-airbnb-base, y eslint-plugin-import para la configuración.
Configuraste un script npm run lint para ejecutar el linter y asegurarte de que el código siga las reglas establecidas.

EditorConfig:
Herramienta para mantener la coherencia en las configuraciones de editores de texto, como la indentación, saltos de línea y codificación de caracteres.
Se creó un archivo .editorconfig con las reglas para el proyecto, y se instaló la extensión EditorConfig para VS Code para que los ajustes se apliquen automáticamente.

.gitignore:
Se configuró el archivo .gitignore para excluir archivos y carpetas no deseadas de ser versionadas por Git, como node_modules, logs, archivos de caché de npm, y configuraciones específicas del editor.

Nodemon:
Paquete instalado para reiniciar automáticamente el servidor cuando se detectan cambios en el código. Se configuró para que la aplicación pueda iniciarse con el comando npm run dev.

Rutas de la API (Express):
Se crearon tres rutas principales:
GET /users: Devuelve la lista de usuarios en formato JSON.
GET /cards: Devuelve la lista de tarjetas en formato JSON.
GET /users/:id: Devuelve un usuario por su ID (si no se encuentra, devuelve un error 404 con el mensaje ID de usuario no encontrado).
También se configuró el manejo de errores para las rutas no definidas, devolviendo un error 404 con el mensaje adecuado.

Módulos de Node.js:
fs: Módulo para leer y escribir archivos de datos JSON (como users.json y cards.json).
path: Módulo para manipular rutas de archivos y garantizar que sean correctas en diferentes sistemas operativos mediante path.join().

MongoDB es una base de datos NoSQL que almacena datos en documentos JSON, ofreciendo flexibilidad, escalabilidad y rendimiento. Es ideal para manejar grandes volúmenes de datos no estructurados o semi-estructurados.

Estructura Modular del Proyecto:
Se organizó el proyecto en carpetas como routes (para manejar las rutas de la API) y data (para almacenar los archivos de datos JSON).
Esto hace que el proyecto sea más escalable y fácil de mantener.

Flujo de Trabajo:
Inicialización del Proyecto:
Clonaste el repositorio y ejecutaste npm init para generar el archivo package.json.
Instalaste dependencias necesarias como Express, ESLint, nodemon, etc.

Configuración de Herramientas de Desarrollo:
Configuraste ESLint para seguir la Guía de Estilo de Airbnb y asegurarte de que el código siga las mejores prácticas.
Instalaste y configuraste EditorConfig para garantizar una consistencia en la forma de escribir el código.
Configuraste un archivo .gitignore para evitar la inclusión de archivos innecesarios en el control de versiones.

Desarrollo de la API:
Desarrollaste una API básica con Express con rutas para obtener usuarios y tarjetas desde archivos JSON.
Implementaste el manejo de errores, devolviendo respuestas 404 cuando el recurso no se encuentra.

Reiniciado Automático con Nodemon:
Usaste nodemon para habilitar el hot reload, de modo que el servidor se reinicie automáticamente cada vez que cambies el código.

Manejo de Archivos JSON:
Usaste los módulos fs y path para trabajar con archivos JSON, lo que permitió simular una base de datos con datos estáticos de usuarios y tarjetas.

Estructura del Proyecto:
Organizaste tu proyecto en carpetas y módulos (por ejemplo, routes, data) para hacerlo más fácil de mantener y escalar a medida que se agreguen más funcionalidades.

Este proyecto fue desarrollado por:
Andres giraldo gallego.

github pages :
https://github.com/Andres-giraldo-gallego/web_project_around_express.git
