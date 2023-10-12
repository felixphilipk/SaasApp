

## 🎛 Tech Stack 
#### Frontend:
React, Nextjs, Styled Components, AntD, Firebase Auth. 

#### Server: 
Nodejs, Express, Docker, Jest, Postgres or Mongodb.  
<br />

> *Pro version also includes Stripe, Nodemailer, AWS CDK and more. 

## ⚙️ Installation

<strong>node version >= 14 recommended.</strong>
<br />
<strong>npm version >= 7 is recommended.</strong> 

Using an older node version may lead to unexpected errors.

This Project Requires Firebase credentials and either Postgres or MongoDB credentials. 
Simply substitute the credentials into the appropriate env variables in both the client and server. 

How to obtain the credentials from Firebase can be found in the Saas Starter Kit docs. Postgres and MongoDB credentials are user set. 

Required Environment Variables

#### Client:

| Variable  | Description |
| ------------- | ------------- |
| NEXT_PUBLIC_SERVER_URL | URL of the nodejs Server. Will be localhost during dev. |
| NEXT_PUBLIC_FIREBASE_API_KEY | The Firebase API key, found in the Firebase console |
| NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN  | Firebase Auth Domain, found in the Firebase console  |


#### Server:

| Variable  | Description |
| ------------- | ------------- |
| FIREBASE_DATABASE_URL | Found in Firebase Service Account Key JSON file. See docs for more info. |
| FIREBASE_PROJECT_ID | Found in Firebase Service Account Key JSON file. See docs for more info. |
| FIREBASE_CLIENT_EMAIL | Found in Firebase Service Account Key JSON file. See docs for more info. |
| FIREBASE_PRIVATE_KEY | Found in Firebase Service Account Key JSON file. See docs for more info. |
| AUTH_SECRET | User set, can be anything |
| DB_PASSWORD | Postgres Password, user set |
| DB_USER | Postgres username |
| DB_HOST | Postgres host, localhost in dev |
| DB_NAME | Name of Postgres database |
| DB_PORT | Postgres Port, default is 5432 |
| MONGO_URL | MongoDB URL is optional, if already using Postgres. Required if not. |
<br />
Once the Environment Variables are defined and node modules installed the boilerplate is ready to go. 

## ✨ Features
-  ✅  Admin Dashboard
-  ✅  Full Authentication, with Google Social Login and Password Reset
-  ✅  User Profile Management with Email and Username change
-  ✅  User Dashboard
-  ✅  Checkout Pages
-  ✅  Landing and Pricing Page template
-  ✅  Decoupled Nodejs server
-  ✅  Testing Setup with Cypress and Jest
-  ✅  CRUD operations





#### Additional Features: 
-  ✅  Stripe subscription payments
-  ✅  Roles and permissions
-  ✅  Multi user apps and multi tenancy
-  ✅  Machine learning and AI
-  ✅  AWS infrastructure as code
-  ✅  Fully Featured Blog and Docs
-  ✅  Event Based Google Analytics





## 🤝 Contributing

Pull requests are welcome.

Also If you like this project please ⭐️ the repo to show your support.  



