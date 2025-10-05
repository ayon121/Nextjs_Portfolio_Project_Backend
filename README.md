<h1 align="center">⚙️ Personal Portfolio Backend (Node.js + Express + MongoDB)</h1>

<p align="center">
The backend API for the portfolio website. Built with <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong> using <strong>Mongoose</strong>, it provides secure RESTful endpoints for blog, project, and user management.
</p>

<hr />

<h2>🚀 Live API</h2>
<ul>
  <li><strong>API Base URL:</strong> <a href="https://protfoliobackend-teal.vercel.app/" target="_blank">https://protfoliobackend-teal.vercel.app</a></li>
</ul>

<hr />

<h2>📖 Project Overview</h2>
<p>
This backend serves as the core data layer for the portfolio website. It includes secure authentication, file uploads, and REST APIs for managing blogs, projects, and profile information.
</p>

<h3>✨ Core Features</h3>
<ul>
  <li>🔐 <strong>JWT Authentication</strong> for secure login</li>
  <li>🔒 <strong>Password Hashing</strong> using bcrypt</li>
  <li>🧑‍💼 <strong>Admin Authorization</strong> for protected routes</li>
  <li>🗂️ <strong>Modular Architecture</strong> for scalability</li>
  <li>🖼️ <strong>File Uploads</strong> with Multer</li>
  <li>🧾 <strong>RESTful APIs</strong> for blogs, projects, and about sections</li>
  <li>⚙️ <strong>CORS</strong> enabled for frontend communication</li>
</ul>

<hr />

<h2>🧰 Tech Stack</h2>
<ul>
  <li><strong>Runtime:</strong> Node.js</li>
  <li><strong>Framework:</strong> Express.js</li>
  <li><strong>Database:</strong> MongoDB with Mongoose</li>
  <li><strong>Authentication:</strong> JWT + bcrypt</li>
  <li><strong>File Uploads:</strong> Multer</li>
  <li><strong>Language:</strong> TypeScript</li>
  <li><strong>Deployment:</strong> Vercel / Render</li>
</ul>

<hr />

<h2>📂 Folder Structure</h2>

<pre>
backend/
├── src/
│   ├── modules/
│   │   ├── auth/
│   │   ├── blog/
│   │   ├── project/
│   │   └── about/
│   ├── middlewares/
│   ├── utils/
│   ├── app.ts
│   └── server.ts
├── package.json
└── tsconfig.json
</pre>

<hr />

<h2>⚙️ Environment Variables</h2>

<pre>
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
</pre>

<hr />

<h2>🧑‍💻 Setup Instructions</h2>

<ol>
  <li><b>Clone Repository:</b><br>
    <code>git clone https://github.com/ayon121/Nextjs_Portfolio_Project_Backend.git</code>
  </li>
  <li><b>Install Dependencies:</b><br>
    <code>npm install</code>
  </li>
  <li><b>Setup Environment Variables:</b> Create a <code>.env</code> file and add your credentials.</li>
  <li><b>Run Development Server:</b><br>
    <code>npm run dev</code>
  </li>
  <li>Access the API at: <a href="http://localhost:5000/" target="_blank">http://localhost:5000/</a></li>
</ol>

<hr />



<hr />

<h2>🧩 API Endpoints Overview</h2>

<table border="1" cellspacing="0" cellpadding="6">
<thead>
<tr><th>Method</th><th>Endpoint</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>POST</td><td>/api/auth/login</td><td>Login admin user</td></tr>
<tr><td>POST</td><td>/api/blog/add</td><td>Add new blog</td></tr>
<tr><td>GET</td><td>/api/blog/all</td><td>Get all blogs</td></tr>
<tr><td>PUT</td><td>/api/blog/update/:id</td><td>Update blog</td></tr>
<tr><td>DELETE</td><td>/api/blog/delete/:id</td><td>Delete blog</td></tr>
<tr><td>GET</td><td>/api/project/all</td><td>Fetch all projects</td></tr>
<tr><td>POST</td><td>/api/project/add</td><td>Add new project</td></tr>
<tr><td>PUT</td><td>/api/about/update</td><td>Update about information</td></tr>
</tbody>
</table>

<hr />

<h2>👨‍💻 Author</h2>
<p><b>Ayon (Barshon Saha Ayon)</b><br>
Full Stack Developer | MERN | Next.js | TypeScript | SaaS Builder<br>

