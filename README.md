<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blogging Website</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            color: #333;
            background-color: #f4f4f4;
        }
        .container {
            width: 80%;
            margin: auto;
            overflow: hidden;
            padding: 20px;
        }
        header {
            background: #333;
            color: #fff;
            padding: 10px 0;
            text-align: center;
        }
        h1, h2, h3 {
            color: #333;
        }
        a {
            color: #333;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        .feature-list, .tech-stack, .installation-steps, .contributing, .license, .acknowledgements {
            background: #fff;
            padding: 20px;
            margin: 20px 0;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        ul {
            list-style: none;
            padding: 0;
        }
        li {
            margin-bottom: 10px;
        }
        code {
            background: #f4f4f4;
            padding: 2px 4px;
            border-radius: 4px;
            font-size: 90%;
        }
    </style>
</head>
<body>
    <header>
        <h1>Blogging Website</h1>
    </header>

    <div class="container">
        <section class="feature-list">
            <h2>Features</h2>
            <ul>
                <li><strong>User Authentication:</strong> Secure login and registration with JWT.</li>
                <li><strong>Create & Edit Posts:</strong> Write, edit, and format blog posts using TinyMCE.</li>
                <li><strong>Responsive Design:</strong> Mobile-friendly layout using Tailwind CSS.</li>
                <li><strong>Post Management:</strong> Manage your blog posts with an intuitive interface.</li>
                <li><strong>Comments Section:</strong> Allow readers to comment on posts.</li>
            </ul>
        </section>

        <section class="tech-stack">
            <h2>Tech Stack</h2>
            <ul>
                <li><strong>Frontend:</strong> React, Tailwind CSS</li>
                <li><strong>State Management:</strong> React Hook Form, Redux</li>
                <li><strong>Editor:</strong> TinyMCE</li>
                <li><strong>Authentication:</strong> Appwrite (or your preferred authentication service)</li>
            </ul>
        </section>

        <section class="installation-steps">
            <h2>Installation</h2>
            <ol>
                <li><strong>Clone the repository:</strong>
                    <pre><code>git clone https://github.com/your-username/blogging-website.git</code></pre>
                </li>
                <li><strong>Navigate to the project directory:</strong>
                    <pre><code>cd blogging-website</code></pre>
                </li>
                <li><strong>Install dependencies:</strong>
                    <pre><code>npm install</code></pre>
                </li>
                <li><strong>Start the development server:</strong>
                    <pre><code>npm start</code></pre>
                    <p>Your application will be running on <a href="http://localhost:3000">http://localhost:3000</a>.</p>
                </li>
            </ol>
        </section>

        <section class="usage">
            <h2>Usage</h2>
            <ul>
                <li><strong>Registration & Login:</strong> Access the authentication pages to create an account or log in.</li>
                <li><strong>Create a New Post:</strong> Navigate to the "Create Post" page to start writing.</li>
                <li><strong>Edit Posts:</strong> Go to your post list to make changes.</li>
                <li><strong>View Posts:</strong> Browse and read posts on the homepage.</li>
            </ul>
        </section>

        <section class="contributing">
            <h2>Contributing</h2>
            <p>Contributions are welcome! Please follow these steps:</p>
            <ol>
                <li><strong>Fork the repository.</strong></li>
                <li><strong>Create a new branch:</strong>
                    <pre><code>git checkout -b feature/your-feature</code></pre>
                </li>
                <li><strong>Commit your changes:</strong>
                    <pre><code>git commit -am 'Add new feature'</code></pre>
                </li>
                <li><strong>Push to the branch:</strong>
                    <pre><code>git push origin feature/your-feature</code></pre>
                </li>
                <li><strong>Submit a pull request.</strong></li>
            </ol>
        </section>

        <section class="license">
            <h2>License</h2>
            <p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for details.</p>
        </section>

        <section class="acknowledgements">
            <h2>Acknowledgements</h2>
            <ul>
                <li><a href="https://reactjs.org/">React</a> - A JavaScript library for building user interfaces</li>
                <li><a href="https://tailwindcss.com/">Tailwind CSS</a> - A utility-first CSS framework</li>
                <li><a href="https://www.tiny.cloud/">TinyMCE</a> - A powerful WYSIWYG editor</li>
                <li><a href="https://appwrite.io/">Appwrite</a> - Self-hosted backend server</li>
            </ul>
        </section>
    </div>
</body>
</html>
