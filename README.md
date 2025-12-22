# Portfolio-django
Portfolio personal hecho en django
🚀 Mi Portfolio Personal (Django + React)
Este es mi proyecto de portfolio personal donde demuestro mis habilidades de desarrollo Full Stack. El sistema utiliza Django REST Framework para la gestión de datos y React (Vite) para una interfaz de usuario dinámica.

🛠️ Requisitos Previos
Antes de empezar, asegúrate de tener instalado:

Python 3.x

Node.js (versión LTS recomendada)

Git

📥 Configuración en una Máquina Nueva
Si acabas de clonar el repositorio por primera vez, sigue estos pasos:

## 1. Clonar el proyecto

```bash
git clone https://github.com/TU_USUARIO/TU_REPO.git
cd mi-portfolio
```
## 2. Configuración del Backend (Django)
Entra en la carpeta del servidor e instala las dependencias:
```Bash
cd backend

# Crear entorno virtual
python -m venv venv

# Activar entorno virtual
# En Windows:
venv\Scripts\activate

# En Mac/Linux:
source venv/bin/activate

# Instalar dependencias
pip install django djangorestframework django-cors-headers

# Realizar migraciones de base de datos
python manage.py migrate
```
##  3. Configuración del Frontend (React)
Abre una nueva terminal (sin cerrar la anterior) y configura la interfaz:

```Bash
cd frontend
npm install
```
## 💻 Flujo de Desarrollo Diario
Para trabajar en el proyecto cada día, sigue este orden:

- **Paso 1**: Levantar el Backend
```bash

cd backend
# Activar venv si no está activo
python manage.py runserver
```
El servidor estará en: http://127.0.0.1:8000/

- **Paso 2**: Levantar el Frontend
```Bash

cd frontend
npm run dev
```
La web estará en: http://localhost:5173/ (o la URL que indique Vite).

## 🔄 Sincronización con GitHub
Cuando termines de trabajar en un PC y quieras continuar en otro, no olvides subir tus cambios:

En la PC actual (subir cambios):

```Bash

git add .
git commit -m "Explica brevemente qué has hecho"
git push origin main
```

En la otra PC (bajar cambios):

```Bash
# Antes de empezar a programar siempre haz un pull
git pull origin main
```
## 📂 Estructura del Directorio

backend/: Lógica de Python, modelos de base de datos y API.

frontend/: Código fuente de React, componentes y estilos.

.gitignore: Archivos excluidos de Git (como entornos virtuales y node_modules).