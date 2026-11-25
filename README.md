# Ajay Kumar | Developer Portfolio

A responsive dark-theme portfolio built with **React + Vite** and a **Python + Django REST Framework** backend.

## Project structure

```text
ajay-kumar-portfolio/
├── frontend/       # React + Vite portfolio (deploy on Vercel)
└── backend/        # Django REST API (deploy separately, e.g. Render)
```

## 1. Run the React frontend

```bash
cd frontend
npm install
npm run dev
```

Create `frontend/.env` if you want to connect a deployed Django API:

```env
VITE_API_BASE_URL=http://127.0.0.1:8000/api
```

For Vercel, set `VITE_API_BASE_URL` to your deployed Django API URL, e.g. `https://your-api.onrender.com/api`.

## 2. Run the Django backend

```bash
cd backend
python -m venv .venv
# Windows:
.venv\\Scripts\\activate
# macOS/Linux:
source .venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

The contact endpoint is `POST /api/contact/` and accepts:

```json
{
  "name": "Visitor Name",
  "email": "visitor@example.com",
  "message": "Hello!"
}
```

Contact submissions are saved in the Django database. Configure `CORS_ALLOWED_ORIGINS` and `DJANGO_SECRET_KEY` using environment variables before production deployment.

## 3. Deployment

- **Frontend:** Import the `frontend` directory/repository into Vercel. Set the Root Directory to `frontend`.
- **Backend:** Deploy the `backend` directory to a Python-compatible host such as Render. Set `DJANGO_SECRET_KEY`, `DEBUG=False`, and `CORS_ALLOWED_ORIGINS`.
- After backend deployment, set `VITE_API_BASE_URL` in Vercel to `https://YOUR-BACKEND-DOMAIN/api`, then redeploy the frontend.

## Personalize before publishing

- Replace the LinkedIn URL in `frontend/src/data.js` with your actual profile URL.
- Confirm project repository URLs before publishing; the project links are intentionally marked as placeholders.
- Add screenshots and working demo URLs only after the projects are deployed.
- Keep project descriptions accurate to your actual implementation.

## Notes

This starter includes a functional Django contact API, but it does not create live project demos automatically. Each project needs its own source code and deployment before a real demo link can be shown.
