# 📄 EXAMEN FINAL: "Portal de Gestión de Posts"

**Tiempo:** 2 Horas **Entorno:** Angular (Proyecto **NO Standalone**) **Objetivo:** Desarrollar una SPA con consumo de API, gestión de rutas y validación de formularios.

### 🛠️ Ejercicio 1: Configuración y Arquitectura (15 min)
1. Crea un proyecto Angular llamado `examen-final-tunombre` con arquitectura **basada en módulos** (`--no-standalone`).
2. Crea la interfaz (modelo) de datos `IPost` en una carpeta `models/`. Debe coincidir con la API:
    - `userId` (number)
    - `id` (number - opcional en creación)
    - `title` (string)
    - `body` (string)

### 🧭 Ejercicio 2: Enrutamiento y Navegación (15 min)
Implementa una barra de navegación (`NavbarComponent`) visible siempre, con enlaces a:
- `/home`: Componente de Bienvenida (Texto estático).
- `/posts`: Componente que listará los posts.
- `/crear-post`: Componente con el formulario.
- 
_Si el usuario entra a una ruta desconocida (ej: `/asdasd`), debe redirigir a `/home`._
### 📡 Ejercicio 3: Servicio y HTTP (20 min)
1. Crea un servicio `PostsService`.
2. Usa la API pública: `https://jsonplaceholder.typicode.com/posts`
3. Implementa dos métodos:
    - `getAllPosts()`: Devuelve un `Observable` con todos los posts (GET).
    - `createPost(post: IPost)`: Recibe un objeto post y realiza la petición (POST).
    - `deletePost(id: number)`: Petición DELETE.

### 📋 Ejercicio 4: Visualización de Datos (20 min)
En el componente `/posts`:
1. Consume el servicio para traer los datos.
2. Pinta una tabla o lista de tarjetas con el `title` y el `body` de los **primeros 10 resultados**.
3. **Interacción:** Añade un botón "Eliminar" en cada tarjeta. Al pulsarlo, debe simular la eliminación visualmente (quitarlo del array local) y mostrar un `alert` o mensaje de "Post eliminado correctamente".

### 📝 Ejercicio 5: Formulario y Validación (CRUCIAL - 30 min)
En el componente `/crear-post`:
1. Crea un formulario (Template-driven o Reactive, lo que prefieras) con los campos:
    - **Título del Post:** (Input text)
    - **Contenido:** (Textarea)
    - **ID de Usuario:** (Select con opciones 1, 2, 3...)

2. **Validaciones Obligatorias:**
    - El **Título** es obligatorio y debe tener al menos 5 caracteres.
    - El **Contenido** es obligatorio.
    - El **ID de Usuario** debe estar seleccionado.

3. **Feedback Visual:**
    - Si un campo es inválido y ha sido "tocado" (touched), muestra un mensaje en rojo debajo: _"Este campo es obligatorio"_ o _"Mínimo 5 caracteres"_.
    - El botón **"Guardar Post"** debe estar **DESHABILITADO (disabled)** si el formulario no es válido.

4. **Lógica:**
    - Al pulsar "Guardar", llama al servicio `createPost`.
    - Al recibir respuesta de la API (aunque sea fake), muestra un mensaje de éxito y redirige al usuario a la lista de `/posts`.

### 🚀 Ejercicio 6: Despliegue (20 min)
1. Sube el código a un repositorio **público** de GitHub creado por ti (con las credenciales que llevarás anotadas).
2. Despliega la aplicación en **GitHub Pages**.
3. Comprueba que al entrar al enlace generado, la web carga y navega correctamente.
