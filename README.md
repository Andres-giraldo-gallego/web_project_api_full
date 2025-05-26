# Tripleten web_project_api_full

Proyecto Web: Autenticación, API y Despliegue Full Stack
Este proyecto es una aplicación full stack con autenticación de usuarios, operaciones CRUD y despliegue en un servidor con HTTPS.

🔧 Tecnologías Utilizadas
-Backend: Node.js, Express, MongoDB, Mongoose, JWT
-Frontend: React
-Validación: Joi, Celebrate, Validator
-Manejo de errores: Middleware personalizado
-Despliegue: NGINX, PM2, HTTPS, dominio personalizado

🔐 Funcionalidades Principales
-Autenticación y Usuarios
-Registro con email y contraseña (con hashing)
-Login con JWT (válido por 7 días)
-Middleware de autenticación con tokens
-Rutas protegidas con control de acceso
-Seguridad: el hash de la contraseña no se devuelve en las respuestas
-Endpoint protegido: /users/me devuelve los datos del usuario autenticado

+Validación
-Validación con Celebrate + Joi
-Validaciones personalizadas (URL, email)
-Errores centralizados con middleware
-Permisos y Seguridad
-Solo el propietario puede editar o eliminar sus datos y tarjetas
-Eliminado middleware hardcoded del usuario

🖥️ Despliegue
-Desplegado en un servidor Linux (por ejemplo, Ubuntu en Google Cloud)
-Configurado NGINX para servir frontend y backend desde dominios/subdominios
-Usado HTTPS con certificados SSL
-PM2 para mantener activo el backend incluso tras caídas

🌍 Acceso al Proyecto
-Frontend: https://apifull.chickenkiller.com
-Backend (API): https://api.apifull.chickenkiller.com
