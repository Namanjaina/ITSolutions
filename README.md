# ITSolutions – Full Stack Business Landing Page  
A complete full-stack web application built using **Django, PostgreSQL, React, and Tailwind CSS**.  
This project includes:

- A modern landing page
- Dynamic Projects & Clients from backend
- Contact form (saves data to DB)
- Newsletter subscription system
- Full Admin Panel (Manage Projects, Clients, Contacts, Newsletter)
- Image cropping (450 × 350)
- API-based frontend

---

# 📌 Tech Stack Used

## 🔹 Frontend
- **React.js (CRA)**
- **Tailwind CSS**
- Axios (API calls)
- Responsive UI
- Premium animations + smooth scroll

## 🔹 Backend
- **Django**
- **Django REST Framework**
- Pillow (Image processing)
- CORS Headers
- Gunicorn (for deployment)

## 🔹 Database
- **PostgreSQL**
- Hosted using Railway (or local Postgres)

## 🔹 Deployment
- Backend → Render / Railway  
- Frontend → Netlify / Vercel  
- Database → PostgreSQL (Railway)

---

# 📁 Project Structure
project-root/
│
├── backend/
│ ├── flipr/ # Django settings
│ ├── projects/ # Projects app
│ ├── clients/ # Clients app
│ ├── contact/ # Contact form app
│ ├── newsletter/ # Newsletter app
│ ├── media/ # Uploaded images
│ └── manage.py
│
└── frontend/
├── src/
├── public/
├── package.json
└── tailwind.config.js


---

# 🚀 How to Run This Project on Your PC

## ✅ 1. Clone the Repository



git clone <your-repo-url>
cd <project-folder>


---

# 🔥 BACKEND SETUP (Django + PostgreSQL)

## ✅ 2. Create Virtual Environment



cd backend
python -m venv venv
venv\Scripts\activate (Windows)


---

## ✅ 3. Install Dependencies



pip install -r requirements.txt


If `requirements.txt` not present, install manually:



pip install django
pip install djangorestframework
pip install pillow
pip install django-cors-headers
pip install psycopg2-binary


---

## ✅ 4. Setup Database (PostgreSQL)

### Create a PostgreSQL database  
Example (pgAdmin or psql):



Database name: realtrustdb
User: postgres
Password: yourpassword
Port: 5432


---

## ✅ 5. Update Database Settings  
Open:



backend/flipr/settings.py


Update:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'realtrustdb',
        'USER': 'postgres',
        'PASSWORD': 'yourpassword',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```
✅ 6. Run Migrations
python manage.py migrate

✅ 7. Create Admin User
python manage.py createsuperuser

✅ 8. Run Django Server
python manage.py runserver


Backend running at:

👉 http://localhost:8000/

APIs:

/api/projects/

/api/clients/

/api/contact/

/api/newsletter/

/admin/

🎨 FRONTEND SETUP (React + Tailwind)
✅ 9. Install Node Modules
cd frontend
npm install

✅ 10. Start React Development Server
npm start


Frontend running at:

👉 http://localhost:3000/

🔗 Connect Frontend to Backend

All API URLs are inside:

frontend/src/components/*.js


Example:

axios.get("http://localhost:8000/api/projects/")


Change the URL to your Render backend URL in production.

🖼️ Image Cropping Feature

Pillow library automatically resizes images to 450 × 350 when uploaded.

Inside each model:

def save(self, *args, **kwargs):
    super().save(*args, **kwargs)
    img = Image.open(self.image.path)
    img = img.resize((450, 350))
    img.save(self.image.path)

⭐ Features Included
✔ Dynamic Projects Section

Fetched from backend + image preview + Read More button.

✔ Happy Clients Section

Client name, designation, testimonial + image.

✔ Contact Form

Saves:

Full Name

Email

Mobile

City

To database + shows in admin panel.

✔ Newsletter Subscription

Stores email in DB.

✔ Admin Panel (Professional)

Add Projects

Add Clients

View Contact Submissions

View Newsletter Emails

Search + filtering

Image preview

Ordering

✔ Image Cropping

All uploaded images auto-resized to 450×350.

✔ Modern & Responsive UI

Tailwind animations, smooth scroll, mobile menu.

🎯 How to Use the Project
👉 Landing Page

Users can:

View projects

Read client testimonials

Submit contact form

Subscribe for newsletter

👉 Admin Panel

Admin can:

Add/update/delete projects

Add/update/delete clients

View contact form data

View newsletter subscribers

Upload images (auto-cropped)

👉 Frontend

React uses Axios to fetch data from Django REST API.

