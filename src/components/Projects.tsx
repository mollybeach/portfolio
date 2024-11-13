// path: src/components/Projects.tsx
import React from 'react';
import ProjectCard from './ProjectCard';
/*# Dandelion Salon Application

A web application for managing salon appointments and services. Made with Django.

## Features

- Make appointments 
- Create user accounts with email online
- View hair styles and services
- Online payment processing
- Admin dashboard for salon management

## Live Demo

Visit the live application at: https://madeleinecoiffure.herokuapp.com/

## Tech Stack

- Django 3.2.5
- Python 3.9
- PostgreSQL (via Heroku)
- HTML/CSS/JavaScript
- Heroku for deployment

## Setup

1. Clone the repository
```bash
git clone [repository-url]
```

2. Create and activate virtual environment
```bash
python -m venv env

# Activate it (Mac specific)
source env/bin/activate
```

3. Install dependencies
```bash
pip install -r requirements.txt

python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py collectstatic
python3 manage.py createsuperuser
python3 manage.py runserver
```

4. Set up environment variables
```bash
cp .env.example .env

# Edit .env with your configurations
```

=======
psql -v DB_ADMIN_EMAIL=your@email.com -v DB_ADMIN_PASSWORD=yourpassword -v DB_ADMIN_USERNAME=yourusername -f init.sql
# Edit .env with your configurations
```

## Database Setup

### PostgreSQL Schema
To set up the PostgreSQL database for the Madeleine Salon de Coiffure booking system:


# Create the database
````
brew list | grep postgresql
postgres --version
brew install postgresql@14
brew services start postgresql@14
createdb salon_app
createuser -s $(whoami)
createdb salon_app
psql -l
psql salon_app
touch schema.sql
code schema.sql
```
psql salon_app < schema.sql // After adding the below to the schema.sql file run this command

Add the following to the schema.sql file:

```sql
-- Create Users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    is_active BOOLEAN DEFAULT true,
    date_joined TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Services table
CREATE TABLE services (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    duration INTEGER NOT NULL, -- Duration in minutes
    price DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Appointments table
CREATE TABLE appointments (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    service_id INTEGER REFERENCES services(id),
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telephone VARCHAR(20),
    appointment_time TIMESTAMP NOT NULL,
    status VARCHAR(20) DEFAULT 'scheduled', -- scheduled, completed, cancelled
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample services
INSERT INTO services (name, description, duration, price) VALUES
('Haircut', 'Basic haircut and styling', 60, 50.00),
('Color', 'Full hair coloring', 120, 120.00),
('Highlights', 'Partial or full highlights', 90, 100.00),
('Blowout', 'Wash and blowout styling', 45, 40.00),
('Treatment', 'Deep conditioning treatment', 30, 35.00);

-- Insert sample user
INSERT INTO users (username, email, password) VALUES
('madeleine', 'madeleinesalondecoiffure@gmail.com', 'hashed_password_here');

-- Insert sample appointments
INSERT INTO appointments (
    user_id,
    service_id,
    firstname,
    lastname,
    email,
    telephone,
    appointment_time
) VALUES
(1, 1, 'Jane', 'Doe', 'jane@example.com', '123-456-7890', '2024-03-20 10:00:00'),
(1, 2, 'Mary', 'Smith', 'mary@example.com', '123-456-7891', '2024-03-20 14:00:00');
```

### Database Setup Instructions

1. Create the database in PostgreSQL:
```bash
createdb salon_app
```

2. Apply the schema:
```bash
psql salon_app < schema.sql
```

3. Update your Django settings.py DATABASE configuration:
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'salon_app',
        'USER': 'your_username',
        'PASSWORD': 'your_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

Then apply the schema:
````
psql salon_app < schema.sql
```

This schema provides:
- A `users` table for authentication
- A `services` table for different salon services
- An `appointments` table that tracks all bookings

Key features:
- Foreign key relationships between tables
- Timestamp tracking for appointments
- Status tracking for appointment state
- Price and duration tracking for services
- Contact information for clients

# Project Structure

```
dandelionCoiffure/
├── .git/
├── deployment/
├── docs/
│   ├── static/
│   ├── users/
│   │   └── index.html
│   ├── .DS_Store
│   ├── about.html
│   ├── calendar.html
│   ├── clients.html
│   ├── contact.html
│   ├── index.html
│   ├── login.html
│   ├── payment.html
│   ├── profile.html
│   └── register.html
├── env/
├── salonapp/
│   ├── __pycache__/
│   ├── migrations/
│   ├── static/
│   ├── __init__.py
│   ├── .DS_Store
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── tests.py
│   ├── urls.py
│   └── views.py
├── salonproject/
│   ├── __pycache__/
│   ├── __init__.py
│   ├── .DS_Store
│   ├── asgi.py
│   ├── settings.py
│   ├── temp.py
│   ├── urls.py
│   └── wsgi.py
├── staticfiles/
│   ├── admin/
│   │   ├── css/
│   │   │   ├── vendor/
│   │   │   ├── autocomplete.css
│   │   │   ├── base.css
│   │   │   ├── changelists.css
│   │   │   ├── dashboard.css
│   │   │   ├── fonts.css
│   │   │   ├── forms.css
│   │   │   ├── login.css
│   │   │   ├── nav_sidebar.css
│   │   │   ├── responsive_rtl.css
│   │   │   ├── responsive.css
│   │   │   ├── rtl.css
│   │   │   └── widgets.css
│   │   ├── fonts/
│   │   │   ├── LICENSE.txt
│   │   │   ├── README.txt
│   │   │   ├── Roboto-Bold-webfont.woff
│   │   │   ├── Roboto-Light-webfont.woff
│   │   │   └── Roboto-Regular-webfont.woff
│   │   ├── img/
│   │   │   ├── gis/
│   │   │   │   ├── move_vertex_off.svg
│   │   │   │   └── move_vertex_on.svg
│   │   │   ├── calendar-icons.svg
│   │   │   ├── icon-addlink.svg
│   │   │   ├── icon-alert.svg
│   │   │   ├── icon-calendar.svg
│   │   │   ├── icon-changelink.svg
│   │   │   ├── icon-clock.svg
│   │   │   ├── icon-deletelink.svg
│   │   │   ├── icon-no.svg
│   │   │   ├── icon-unknown-alt.svg
│   │   │   ├── icon-unknown.svg
│   │   │   ├── icon-viewlink.svg
│   │   │   ├── icon-yes.svg
│   │   │   ├── inline-delete.svg
│   │   │   ├── LICENSE
│   │   │   ├── README.txt
│   │   │   ├── search.svg
│   │   │   ├── selector-icons.svg
│   │   │   ├── sorting-icons.svg
│   │   │   ├── tooltag-add.svg
│   │   │   └── tooltag-arrowright.svg
│   │   ├── js/
│   │   │   ├── admin/
│   │   │   │   ├── DateTimeShortcuts.js
│   │   │   │   └── RelatedObjectLookups.js
│   │   │   ├── vendor/
│   │   │   ├── actions.js
│   │   │   ├── autocomplete.js
│   │   │   ├── calendar.js
│   │   │   ├── cancel.js
│   │   │   ├── change_form.js
│   │   │   ├── collapse.js
│   │   │   ├── core.js
│   │   │   ├── inlines.js
│   │   │   ├── jquery.init.js
│   │   │   ├── nav_sidebar.js
│   │   │   ├── popup_response.js
│   │   │   ├── prepopulate_init.js
│   │   │   ├── prepopulate.js
│   │   │   ├── SelectBox.js
│   │   │   ├── SelectFilter2.js
│   │   │   └── urlify.js
│   │   └── .DS_Store
│   └── .DS_Store
├── templates/
│   ├── users/
│   │   └── index.html
│   ├── .DS_Store
│   ├── about.html
│   ├── calendar.html
│   ├── clients.html
│   ├── contact.html
│   ├── login.html
│   ├── payment.html
│   ├── profile.html
│   └── register.html
├── venv/
├── .DS_Store
├── .env
├── .env.example
├── .gitignore
├── app.json
├── app.py
├── db.sqlite3
├── init.sql
├── latest.dump
├── LICENSE.txt
├── manage.py
├── Procfile
├── README.md
├── requirements.txt
├── runtime.txt
└── schema.sql

appdirs==1.4.4
asgiref==3.4.1
certifi==2021.5.30
charset-normalizer==2.0.3
click==8.0.1
DateTime==4.3
distlib==0.3.2
dj-database-url==0.5.0
Django==3.2.5
django-deep-serializer==0.1.3
django-heroku==0.3.1
filelock==3.0.12
Flask==2.0.1
gunicorn==20.1.0
heroku==0.1.4
idna==3.2
insultgenerator==1.0.3
itsdangerous==2.0.1
Jinja2==3.0.1
loremipsum==1.0.5
MarkupSafe==2.0.1
numpy==1.21.0
panda==0.3.1
pbr==5.6.0
Pillow==8.3.1
psycopg2==2.9.1
psycopg2-binary==2.9.1
python-dateutil==1.5
pytz==2021.1
python-dotenv==1.0.1
requests==2.26.0
six==1.16.0
sqlparse==0.4.1
stevedore==3.3.0
urllib3==1.26.6
virtualenv==20.4.7
virtualenv-clone==0.5.4
virtualenvwrapper==4.8.4
virtualenvwrapper-win==1.2.6
Werkzeug==2.0.1
White-Noise==0.1.0
whitenoise==5.3.0
zope.interface==5.4.0

```*/
const projects = [
  {title: "Spectra",
    date: "Jan 2024 - Present",
    description: "Integrated React Hooks API to simplify functional components, reducing prop-drilling and improving developer and user experience. Developed TypeScript ReactJS applications using MUI, with a focus on app management, debugging, security, and GraphQL integration. Created API endpoints and implemented backend logic, including SQL stored procedures, tables, models, and services.Developed and maintained scalable backend services using Scala. Built RESTful APIs and integrated third-party services. Collaborated on cloud-based deployments using AWS and GCP",
    technologies: ["ReactJS", "GraphQL", "TypeScript", "ExpressJS", "SCSS", "Heroku", "PostgreSQL", "Scala", "Functional Programming", "RESTful APIs", "AWS", "GCP", "PostgreSQL"],
    link: "https://www.spectra.theater/studios"
  },
  {title: "Memorizwift",
    date: "Aug 2024 - Nov 2024",
    description: "Memory card game app built with SwiftUI, based on Stanford's CS193p iOS Development course. This project demonstrates core iOS development concepts and SwiftUI best practices.",
    technologies: ["SwiftUI", "Swift", "iOS", "Model-View-ViewModel", "TokamakApp", "Carton"],
    link: "https://github.com/mollybeach/memorizwift"
  },
  {title: "genaigraphics",
    date: "Jul 2023 - Oct 2023",
    description: "Application merges WebGL technology with Three.js for 3D rendering and Azure ML for AI chat functionalities, empowers users to interact with realistic 3D models that demonstrate step-by-step procedures. The goal is to provide intuitive visual aids that simplify the setup process reduce user errors, and enhance overall user satisfaction 👾.",
    technologies: ["React", "Python", "Threejs", "Typescript", "Astro", "Azure-ml", "Ai-prompts"],
    link: "https://mollybeach.github.io/genaigraphics/agent/"
  },
  {title: "Python-Django-Appointment-Calendar-Salon",
    date: "Mar 2020 - Dec 2020",
    description: "Django web application for managing salon appointments and services.",
    technologies: ["Django", "Python", "PostgreSQL", "Heroku", "HTML", "CSS", "JavaScript"],
    link: "https://mollybeach.github.io/dandelionCoiffure/"
  },
  {
    title: "ihaehada",
    date: "Mar 2020 - Dec 2020",
    description: "Learn Korean language application. Browse the Ihaehada collection of words and phrases.",
    technologies: ["Vue", "JavaScript", "Firebase"],
    link: "https://ihaehada.firebaseapp.com"
  },
  {
    title: "CryptoGene",
    date: "Mar 2020 - Dec 2020",
    description: "DApp/Web3JS app converting DNA data from Ancestry.com into NFTs.",
    technologies: ["React", "Web3.js", "Solidity", "GLSL", "Firebase"],
    link: "https://chromagenetic.firebaseapp.com"
  },
];

const Projects: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
        />
      ))}
    </div>
  );
};

export default Projects;
