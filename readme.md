# Portfolio Personal (Django + React)

Este proyecto es un portfolio profesional desarrollado con un backend en **Django (REST Framework)** y un frontend en **React (Vite)**.

## 🚀 Estructura del Proyecto

El repositorio utiliza una estructura de monorepo:
- `/backend`: Lógica de la API, modelos de base de datos y administración.
- `/frontend`: Interfaz de usuario, componentes de React y consumo de API.

---

## 🛠️ Configuración Inicial (Local)

### 1. Clonar o Inicializar el Repositorio
Si estás en una máquina nueva:
```bash
git clone <URL_DE_TU_REPO_GITHUB>
cd mi-portfolio
```
### 2. Configurar el Backend (Django)

```bash
cd backend
python -m venv venv
# Activar entorno (Windows):
venv\Scripts\activate
# Activar entorno (Mac/Linux):
source venv/bin/activate

pip install django djangorestframework django-cors-headers
```
### 3. Configurar el Frontend (React)

```bash
cd ../frontend
npm install
```

### 4. Sincronización con GitHub

