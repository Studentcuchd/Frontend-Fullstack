export const skillsData = {
  javascript: {
    title: "JavaScript",
    icon: "⚡",
    category: "programming",
    level: "beginner",
    description: "Master the language of the web. Learn modern JavaScript, ES6+, and build interactive applications.",
    duration: "8-12 weeks",
    popularity: "⭐⭐⭐⭐⭐",
    roadmap: {
      flowchart: [
        ["Basics & Syntax", "Variables & Data Types", "Functions & Scope"],
        ["DOM Manipulation", "Event Handling", "Async Programming"],
        ["ES6+ Features", "Modules & Classes", "Error Handling"],
        ["APIs & Fetch", "Local Storage", "Modern Frameworks"]
      ],
      steps: [{
        title: "JavaScript Fundamentals",
        duration: "2-3 weeks",
        description: "Learn the core concepts of JavaScript programming including variables, data types, functions, and control structures.",
        checklist: [
          "Understand variables (let, const, var)",
          "Master all data types (string, number, boolean, etc.)",
          "Write and call functions",
          "Use conditional statements (if/else, switch)",
          "Create loops (for, while, forEach)",
          "Work with arrays and objects",
          "Understand scope and hoisting"
        ],
        resources: [{
          title: "MDN JavaScript Guide",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
          type: "📖 Documentation"
        }, {
          title: "JavaScript.info Tutorial",
          url: "https://javascript.info/",
          type: "🎓 Course"
        }, {
          title: "freeCodeCamp JS Basics",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
          type: "💻 Practice"
        }]
      }, {
        title: "DOM Manipulation & Events",
        duration: "2-3 weeks",
        description: "Learn how to interact with web pages, manipulate HTML elements, and handle user interactions.",
        checklist: [
          "Select elements with querySelector",
          "Modify element content and attributes",
          "Add and remove CSS classes",
          "Handle click and form events",
          "Create dynamic content",
          "Understand event delegation",
          "Build interactive forms"
        ],
        resources: [{
          title: "DOM Manipulation Course",
          url: "https://www.youtube.com/watch?v=5fb2aPlgoys",
          type: "🎥 Video"
        }, {
          title: "Interactive DOM Tutorial",
          url: "https://www.w3schools.com/js/js_htmldom.asp",
          type: "💻 Practice"
        }, {
          title: "Event Handling Guide",
          url: "https://javascript.info/introduction-browser-events",
          type: "📖 Documentation"
        }]
      }, {
        title: "Asynchronous JavaScript",
        duration: "2-3 weeks",
        description: "Master promises, async/await, and API interactions for modern web development.",
        checklist: [
          "Understand callbacks and callback hell",
          "Work with Promises",
          "Use async/await syntax",
          "Fetch data from APIs",
          "Handle errors in async code",
          "Understand the event loop",
          "Build apps with real data"
        ],
        resources: [{
          title: "Promises & Async/Await",
          url: "https://javascript.info/async",
          type: "📖 Documentation"
        }, {
          title: "Fetch API Tutorial",
          url: "https://www.youtube.com/watch?v=cuEtnrL9-H0",
          type: "🎥 Video"
        }, {
          title: "JSON & APIs Course",
          url: "https://www.freecodecamp.org/news/how-to-use-fetch-api/",
          type: "🎓 Course"
        }]
      }, {
        title: "Modern JavaScript (ES6+)",
        duration: "2-3 weeks",
        description: "Learn the latest JavaScript features that make code cleaner and more efficient.",
        checklist: [
          "Use arrow functions effectively",
          "Master template literals",
          "Destructure arrays and objects",
          "Use spread and rest operators",
          "Work with modules (import/export)",
          "Understand classes and inheritance",
          "Use map, filter, reduce methods"
        ],
        resources: [{
          title: "ES6 Features Guide",
          url: "https://www.freecodecamp.org/news/write-less-do-more-with-javascript-es6/",
          type: "📖 Documentation"
        }, {
          title: "Modern JS Course",
          url: "https://www.youtube.com/watch?v=NCwa_xi0Uuc",
          type: "🎥 Video"
        }, {
          title: "ES6 Practice Exercises",
          url: "https://www.codewars.com/",
          type: "💻 Practice"
        }]
      }]
    }
  },

  python: {
    title: "Python",
    icon: "🐍",
    category: "programming",
    level: "beginner",
    description: "Learn the most versatile programming language. Perfect for web development, data science, and automation.",
    duration: "10-14 weeks",
    popularity: "⭐⭐⭐⭐⭐",
    roadmap: {
      flowchart: [
        ["Python Basics", "Data Types", "Control Flow"],
        ["Functions & Modules", "File Handling", "Error Handling"],
        ["OOP Concepts", "Libraries & Packages", "Virtual Environments"],
        ["Web Frameworks", "Data Analysis", "Real Projects"]
      ],
      steps: [{
        title: "Python Fundamentals",
        duration: "3-4 weeks",
        description: "Master Python syntax, data types, and basic programming concepts.",
        checklist: [
          "Install Python and set up development environment",
          "Understand variables and naming conventions",
          "Work with all data types (int, float, string, bool)",
          "Use lists, tuples, dictionaries, and sets",
          "Master string methods and formatting",
          "Write conditional statements",
          "Create and use loops effectively"
        ],
        resources: [{
          title: "Python.org Tutorial",
          url: "https://docs.python.org/3/tutorial/",
          type: "📖 Documentation"
        }, {
          title: "Python for Beginners",
          url: "https://www.youtube.com/watch?v=rfscVS0vtbw",
          type: "🎥 Video"
        }, {
          title: "Python Basics on Codecademy",
          url: "https://www.codecademy.com/learn/learn-python-3",
          type: "🎓 Course"
        }]
      }, {
        title: "Functions & Modules",
        duration: "2-3 weeks",
        description: "Learn to write reusable code with functions and organize code with modules.",
        checklist: [
          "Define and call functions",
          "Use parameters and return values",
          "Understand scope and global variables",
          "Work with lambda functions",
          "Import and use built-in modules",
          "Create your own modules",
          "Use pip to install packages"
        ],
        resources: [{
          title: "Functions in Python",
          url: "https://realpython.com/defining-your-own-python-function/",
          type: "📖 Documentation"
        }, {
          title: "Python Modules Tutorial",
          url: "https://www.youtube.com/watch?v=CqvZ3vGoGs0",
          type: "🎥 Video"
        }, {
          title: "Python Package Index",
          url: "https://pypi.org/",
          type: "🔧 Tool"
        }]
      }, {
        title: "Object-Oriented Programming",
        duration: "3-4 weeks",
        description: "Learn OOP concepts to write more organized and maintainable code.",
        checklist: [
          "Understand classes and objects",
          "Define attributes and methods",
          "Use constructors (__init__)",
          "Implement inheritance",
          "Understand polymorphism",
          "Use encapsulation and private methods",
          "Work with special methods (__str__, __len__, etc.)"
        ],
        resources: [{
          title: "OOP in Python",
          url: "https://realpython.com/python3-object-oriented-programming/",
          type: "📖 Documentation"
        }, {
          title: "Python Classes Tutorial",
          url: "https://www.youtube.com/watch?v=ZDa-Z5JzLYM",
          type: "🎥 Video"
        }, {
          title: "OOP Practice Problems",
          url: "https://www.w3resource.com/python-exercises/class-exercises/",
          type: "💻 Practice"
        }]
      }, {
        title: "Python for Applications",
        duration: "2-3 weeks",
        description: "Apply Python skills to real-world projects and learn popular frameworks.",
        checklist: [
          "Build a web app with Flask",
          "Work with databases using SQLite",
          "Create data visualizations with matplotlib",
          "Automate tasks with scripts",
          "Handle CSV and JSON data",
          "Use requests library for APIs",
          "Deploy a Python application"
        ],
        resources: [{
          title: "Flask Web Development",
          url: "https://flask.palletsprojects.com/",
          type: "📖 Documentation"
        }, {
          title: "Automate the Boring Stuff",
          url: "https://automatetheboringstuff.com/",
          type: "📚 Book"
        }, {
          title: "Python Project Ideas",
          url: "https://realpython.com/tutorials/projects/",
          type: "💡 Projects"
        }]
      }]
    }
  },

  react: {
    title: "React",
    icon: "⚛️",
    category: "programming",
    level: "intermediate",
    description: "Build modern user interfaces with React. Learn components, hooks, and state management.",
    duration: "8-10 weeks",
    popularity: "⭐⭐⭐⭐⭐",
    roadmap: {
      flowchart: [
        ["React Basics", "JSX & Components", "Props & Events"],
        ["State & Hooks", "Effect Hook", "Custom Hooks"],
        ["Context API", "Routing", "Form Handling"],
        ["State Management", "Testing", "Production Build"]
      ],
      steps: [{
        title: "React Fundamentals",
        duration: "2-3 weeks",
        description: "Learn React basics, JSX syntax, and component creation.",
        checklist: [
          "Set up React development environment",
          "Understand JSX syntax and rules",
          "Create functional components",
          "Pass and use props",
          "Handle events in React",
          "Understand component composition",
          "Use React Developer Tools"
        ],
        resources: [{
          title: "React Official Tutorial",
          url: "https://react.dev/learn",
          type: "📖 Documentation"
        }, {
          title: "React for Beginners",
          url: "https://www.youtube.com/watch?v=bMknfKXIFA8",
          type: "🎥 Video"
        }, {
          title: "Create React App",
          url: "https://create-react-app.dev/",
          type: "🔧 Tool"
        }]
      }, {
        title: "State & Hooks",
        duration: "2-3 weeks",
        description: "Master React state management with hooks for dynamic applications.",
        checklist: [
          "Use useState hook effectively",
          "Understand component re-rendering",
          "Handle arrays and objects in state",
          "Use useEffect for side effects",
          "Manage component lifecycle",
          "Implement useReducer for complex state",
          "Create custom hooks"
        ],
        resources: [{
          title: "React Hooks Guide",
          url: "https://react.dev/reference/react",
          type: "📖 Documentation"
        }, {
          title: "React Hooks Tutorial",
          url: "https://www.youtube.com/watch?v=O6P86uwfdR0",
          type: "🎥 Video"
        }, {
          title: "Hooks Practice Examples",
          url: "https://react.dev/reference/react/hooks",
          type: "💻 Practice"
        }]
      }, {
        title: "Advanced React Patterns",
        duration: "2-3 weeks",
        description: "Learn advanced React concepts for building complex applications.",
        checklist: [
          "Implement React Router for navigation",
          "Use Context API for global state",
          "Handle forms with controlled components",
          "Implement error boundaries",
          "Use React.memo for optimization",
          "Understand code splitting",
          "Work with refs and portals"
        ],
        resources: [{
          title: "React Router Documentation",
          url: "https://reactrouter.com/",
          type: "📖 Documentation"
        }, {
          title: "Advanced React Patterns",
          url: "https://www.youtube.com/watch?v=3XaXKiXtNjw",
          type: "🎥 Video"
        }, {
          title: "React Performance Tips",
          url: "https://react.dev/learn/render-and-commit",
          type: "📖 Documentation"
        }]
      }, {
        title: "React Ecosystem & Deployment",
        duration: "1-2 weeks",
        description: "Integrate popular tools and deploy React applications.",
        checklist: [
          "Set up state management (Redux/Zustand)",
          "Implement API calls with axios",
          "Add styling with CSS modules or styled-components",
          "Write unit tests with Jest and React Testing Library",
          "Build and optimize for production",
          "Deploy to Netlify or Vercel",
          "Set up CI/CD pipeline"
        ],
        resources: [{
          title: "Redux Toolkit Guide",
          url: "https://redux-toolkit.js.org/",
          type: "📖 Documentation"
        }, {
          title: "React Testing Library",
          url: "https://testing-library.com/docs/react-testing-library/intro/",
          type: "🧪 Testing"
        }, {
          title: "Deployment Guide",
          url: "https://create-react-app.dev/docs/deployment/",
          type: "🚀 Deploy"
        }]
      }]
    }
  },

  nodejs: {
    title: "Node.js",
    icon: "🟢",
    category: "programming",
    level: "intermediate",
    description: "Build scalable server-side applications with JavaScript runtime environment.",
    duration: "10-12 weeks",
    popularity: "⭐⭐⭐⭐⭐",
    roadmap: {
      flowchart: [
        ["Node.js Basics", "NPM & Modules", "File System"],
        ["Express.js", "Routing", "Middleware"],
        ["Database Integration", "Authentication", "REST APIs"],
        ["Real-time Apps", "Testing", "Deployment"]
      ],
      steps: [{
        title: "Node.js Fundamentals",
        duration: "2-3 weeks",
        description: "Learn Node.js runtime, modules system, and basic server concepts.",
        checklist: [
          "Install Node.js and npm",
          "Understand Node.js runtime environment",
          "Work with built-in modules (fs, path, http)",
          "Create and use custom modules",
          "Handle asynchronous operations",
          "Use npm to manage packages",
          "Understand package.json file"
        ],
        resources: [{
          title: "Node.js Official Docs",
          url: "https://nodejs.org/en/docs/",
          type: "📖 Documentation"
        }, {
          title: "Node.js Tutorial",
          url: "https://www.youtube.com/watch?v=TlB_eWDSMt4",
          type: "🎥 Video"
        }, {
          title: "Node.js Beginner Guide",
          url: "https://nodejs.dev/learn",
          type: "🎓 Course"
        }]
      }, {
        title: "Express.js Framework",
        duration: "3-4 weeks",
        description: "Build web applications and APIs with the Express.js framework.",
        checklist: [
          "Set up Express.js application",
          "Create routes and handle HTTP methods",
          "Use middleware for request processing",
          "Serve static files",
          "Handle form data and JSON",
          "Implement error handling",
          "Use template engines (EJS, Handlebars)"
        ],
        resources: [{
          title: "Express.js Guide",
          url: "https://expressjs.com/",
          type: "📖 Documentation"
        }, {
          title: "Express.js Crash Course",
          url: "https://www.youtube.com/watch?v=L72fhGm1tfE",
          type: "🎥 Video"
        }, {
          title: "Express.js Middleware",
          url: "https://expressjs.com/en/guide/using-middleware.html",
          type: "📖 Documentation"
        }]
      }, {
        title: "Database & Authentication",
        duration: "3-4 weeks",
        description: "Integrate databases and implement user authentication systems.",
        checklist: [
          "Connect to MongoDB with Mongoose",
          "Design database schemas",
          "Implement CRUD operations",
          "Hash passwords with bcrypt",
          "Implement JWT authentication",
          "Create protected routes",
          "Handle user sessions"
        ],
        resources: [{
          title: "MongoDB & Mongoose",
          url: "https://mongoosejs.com/",
          type: "📖 Documentation"
        }, {
          title: "JWT Authentication",
          url: "https://jwt.io/introduction/",
          type: "📖 Documentation"
        }, {
          title: "Node.js Auth Tutorial",
          url: "https://www.youtube.com/watch?v=mbsmsi7l3r4",
          type: "🎥 Video"
        }]
      }, {
        title: "Advanced Node.js & Deployment",
        duration: "2-3 weeks",
        description: "Learn advanced concepts and deploy Node.js applications.",
        checklist: [
          "Implement real-time features with Socket.io",
          "Write unit and integration tests",
          "Set up logging and monitoring",
          "Implement rate limiting and security",
          "Deploy to cloud platforms (Heroku, AWS)",
          "Set up environment variables",
          "Configure CI/CD pipelines"
        ],
        resources: [{
          title: "Socket.io Documentation",
          url: "https://socket.io/docs/",
          type: "📖 Documentation"
        }, {
          title: "Node.js Testing with Jest",
          url: "https://jestjs.io/docs/getting-started",
          type: "🧪 Testing"
        }, {
          title: "Deployment Guide",
          url: "https://devcenter.heroku.com/articles/getting-started-with-nodejs",
          type: "🚀 Deploy"
        }]
      }]
    }
  },

  uiux: {
    title: "UI/UX Design",
    icon: "🎨",
    category: "design",
    level: "beginner",
    description: "Design beautiful and user-friendly interfaces. Learn design principles, tools, and user research.",
    duration: "12-16 weeks",
    popularity: "⭐⭐⭐⭐⭐",
    roadmap: {
      flowchart: [
        ["Design Principles", "Color Theory", "Typography"],
        ["User Research", "Wireframing", "Prototyping"],
        ["Design Tools", "UI Components", "Design Systems"],
        ["User Testing", "Portfolio", "Industry Standards"]
      ],
      steps: [{
        title: "Design Fundamentals",
        duration: "3-4 weeks",
        description: "Learn core design principles, color theory, and typography basics.",
        checklist: [
          "Understand design principles (alignment, contrast, hierarchy)",
          "Learn color theory and color psychology",
          "Master typography fundamentals",
          "Study visual hierarchy and white space",
          "Understand grid systems and layout",
          "Learn about accessibility in design",
          "Study successful design examples"
        ],
        resources: [{
          title: "Design Principles Guide",
          url: "https://www.interaction-design.org/literature/topics/design-principles",
          type: "📖 Documentation"
        }, {
          title: "Color Theory Course",
          url: "https://www.youtube.com/watch?v=_2LLXnUdUIc",
          type: "🎥 Video"
        }, {
          title: "Typography Handbook",
          url: "https://typographyhandbook.com/",
          type: "📚 Book"
        }]
      }, {
        title: "User Research & Strategy",
        duration: "3-4 weeks",
        description: "Learn to understand users and their needs through research and analysis.",
        checklist: [
          "Conduct user interviews and surveys",
          "Create user personas and journey maps",
          "Perform competitive analysis",
          "Define user problems and pain points",
          "Create user stories and scenarios",
          "Learn information architecture",
          "Understand business goals and constraints"
        ],
        resources: [{
          title: "User Research Methods",
          url: "https://www.nngroup.com/articles/which-ux-research-methods/",
          type: "📖 Documentation"
        }, {
          title: "UX Research Course",
          url: "https://www.coursera.org/learn/user-experience-research",
          type: "🎓 Course"
        }, {
          title: "Persona Templates",
          url: "https://xtensio.com/user-persona-template/",
          type: "🔧 Tool"
        }]
      }, {
        title: "Design Tools & Prototyping",
        duration: "3-4 weeks",
        description: "Master design tools and create interactive prototypes.",
        checklist: [
          "Learn Figma interface and features",
          "Create wireframes and mockups",
          "Build interactive prototypes",
          "Use components and design systems",
          "Collaborate with design teams",
          "Version control and handoff",
          "Export assets for development"
        ],
        resources: [{
          title: "Figma Tutorial",
          url: "https://help.figma.com/hc/en-us/categories/360002051613",
          type: "📖 Documentation"
        }, {
          title: "Figma for Beginners",
          url: "https://www.youtube.com/watch?v=FTFaQWZBqQ8",
          type: "🎥 Video"
        }, {
          title: "Figma Community",
          url: "https://www.figma.com/community",
          type: "🌟 Community"
        }]
      }, {
        title: "Portfolio & Career Development",
        duration: "3-4 weeks",
        description: "Build a strong portfolio and prepare for design career opportunities.",
        checklist: [
          "Create 3-5 case studies",
          "Document design process and decisions",
          "Build personal brand and online presence",
          "Network with design community",
          "Prepare for design interviews",
          "Keep up with design trends",
          "Continuously iterate and improve"
        ],
        resources: [{
          title: "UX Portfolio Guide",
          url: "https://www.nngroup.com/articles/ux-portfolio/",
          type: "📖 Documentation"
        }, {
          title: "Design Portfolio Examples",
          url: "https://dribbble.com/",
          type: "🌟 Inspiration"
        }, {
          title: "Design Interview Prep",
          url: "https://www.youtube.com/watch?v=ZiNcbFfcfKY",
          type: "🎥 Video"
        }]
      }]
    }
  },

  datascience: {
    title: "Data Science",
    icon: "📊",
    category: "data",
    level: "intermediate",
    description: "Extract insights from data using Python, statistics, and machine learning techniques.",
    duration: "16-20 weeks",
    popularity: "⭐⭐⭐⭐⭐",
    roadmap: {
      flowchart: [
        ["Python Basics", "Statistics", "Data Analysis"],
        ["Pandas & NumPy", "Data Visualization", "SQL"],
        ["Machine Learning", "Model Training", "Feature Engineering"],
        ["Deep Learning", "Projects", "Deployment"]
      ],
      steps: [{
        title: "Python for Data Science",
        duration: "4-5 weeks",
        description: "Master Python programming with focus on data science libraries.",
        checklist: [
          "Master Python fundamentals",
          "Learn NumPy for numerical computing",
          "Use Pandas for data manipulation",
          "Work with Jupyter Notebooks",
          "Handle different data formats (CSV, JSON, Excel)",
          "Understand data types and structures",
          "Practice data cleaning techniques"
        ],
        resources: [{
          title: "Python Data Science Handbook",
          url: "https://jakevdp.github.io/PythonDataScienceHandbook/",
          type: "📚 Book"
        }, {
          title: "Pandas Tutorial",
          url: "https://pandas.pydata.org/docs/user_guide/",
          type: "📖 Documentation"
        }, {
          title: "NumPy Basics",
          url: "https://numpy.org/doc/stable/user/quickstart.html",
          type: "📖 Documentation"
        }]
      }, {
        title: "Statistics & Data Analysis",
        duration: "4-5 weeks",
        description: "Learn statistical concepts essential for data science.",
        checklist: [
          "Understand descriptive statistics",
          "Learn probability distributions",
          "Master hypothesis testing",
          "Perform correlation and regression analysis",
          "Handle missing data and outliers",
          "Understand sampling and bias",
          "Learn A/B testing concepts"
        ],
        resources: [{
          title: "Statistics for Data Science",
          url: "https://www.khanacademy.org/math/statistics-probability",
          type: "🎓 Course"
        }, {
          title: "Statistical Analysis with Python",
          url: "https://scipy-lectures.org/packages/statistics/index.html",
          type: "📖 Documentation"
        }, {
          title: "Think Stats Book",
          url: "https://greenteapress.com/wp/think-stats-2e/",
          type: "📚 Book"
        }]
      }, {
        title: "Machine Learning Fundamentals",
        duration: "4-5 weeks",
        description: "Learn core machine learning algorithms and techniques.",
        checklist: [
          "Understand supervised vs unsupervised learning",
          "Implement linear and logistic regression",
          "Use decision trees and random forests",
          "Apply clustering algorithms (K-means)",
          "Learn model evaluation metrics",
          "Understand cross-validation",
          "Practice feature selection and engineering"
        ],
        resources: [{
          title: "Scikit-learn Tutorial",
          url: "https://scikit-learn.org/stable/tutorial/index.html",
          type: "📖 Documentation"
        }, {
          title: "Machine Learning Course",
          url: "https://www.coursera.org/learn/machine-learning",
          type: "🎓 Course"
        }, {
          title: "Hands-On ML Book",
          url: "https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/",
          type: "📚 Book"
        }]
      }, {
        title: "Advanced Topics & Projects",
        duration: "3-5 weeks",
        description: "Apply skills to real projects and learn advanced techniques.",
        checklist: [
          "Build end-to-end ML projects",
          "Learn deep learning basics with TensorFlow",
          "Work with real-world datasets",
          "Deploy models to production",
          "Create data visualizations and dashboards",
          "Document and present findings",
          "Build a portfolio of projects"
        ],
        resources: [{
          title: "Kaggle Learn",
          url: "https://www.kaggle.com/learn",
          type: "🎓 Course"
        }, {
          title: "TensorFlow Tutorial",
          url: "https://www.tensorflow.org/learn",
          type: "📖 Documentation"
        }, {
          title: "ML Project Ideas",
          url: "https://www.kaggle.com/competitions",
          type: "💡 Projects"
        }]
      }]
    }
  },

  aws: {
    title: "AWS Cloud",
    icon: "☁️",
    category: "cloud",
    level: "intermediate",
    description: "Master Amazon Web Services for scalable cloud infrastructure and deployment.",
    duration: "12-16 weeks",
    popularity: "⭐⭐⭐⭐⭐",
    roadmap: {
      flowchart: [
        ["AWS Basics", "IAM & Security", "EC2 & Storage"],
        ["Networking", "Databases", "Load Balancing"],
        ["Serverless", "Containers", "Monitoring"],
        ["CI/CD", "Infrastructure as Code", "Certification"]
      ],
      steps: [{
        title: "AWS Fundamentals",
        duration: "3-4 weeks",
        description: "Learn AWS basics, account setup, and core services.",
        checklist: [
          "Create AWS account and understand billing",
          "Navigate AWS Console",
          "Understand AWS global infrastructure",
          "Learn about availability zones and regions",
          "Set up AWS CLI and SDKs",
          "Understand AWS service categories",
          "Learn cost optimization basics"
        ],
        resources: [{
          title: "AWS Getting Started",
          url: "https://aws.amazon.com/getting-started/",
          type: "📖 Documentation"
        }, {
          title: "AWS Cloud Practitioner",
          url: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
          type: "🎓 Certification"
        }, {
          title: "AWS Free Tier",
          url: "https://aws.amazon.com/free/",
          type: "💰 Free Resources"
        }]
      }, {
        title: "Core AWS Services",
        duration: "4-5 weeks",
        description: "Master essential AWS services for compute, storage, and databases.",
        checklist: [
          "Deploy EC2 instances and manage security groups",
          "Use S3 for object storage and static websites",
          "Set up RDS databases",
          "Configure VPC and networking",
          "Implement load balancing with ALB/NLB",
          "Use CloudFront for content delivery",
          "Set up Route 53 for DNS management"
        ],
        resources: [{
          title: "EC2 User Guide",
          url: "https://docs.aws.amazon.com/ec2/",
          type: "📖 Documentation"
        }, {
          title: "S3 Tutorial",
          url: "https://docs.aws.amazon.com/s3/",
          type: "📖 Documentation"
        }, {
          title: "AWS Networking Course",
          url: "https://www.youtube.com/watch?v=hiKPPy584Mg",
          type: "🎥 Video"
        }]
      }, {
        title: "DevOps & Automation",
        duration: "3-4 weeks",
        description: "Learn infrastructure automation and CI/CD pipelines.",
        checklist: [
          "Use CloudFormation for Infrastructure as Code",
          "Set up CI/CD with CodePipeline and CodeBuild",
          "Deploy containerized apps with ECS or EKS",
          "Implement monitoring with CloudWatch",
          "Use Lambda for serverless computing",
          "Set up automated backups and disaster recovery",
          "Implement security best practices"
        ],
        resources: [{
          title: "CloudFormation Guide",
          url: "https://docs.aws.amazon.com/cloudformation/",
          type: "📖 Documentation"
        }, {
          title: "AWS DevOps Course",
          url: "https://aws.amazon.com/devops/",
          type: "🎓 Course"
        }, {
          title: "Serverless Framework",
          url: "https://www.serverless.com/",
          type: "🔧 Tool"
        }]
      }, {
        title: "Advanced AWS & Certification",
        duration: "2-3 weeks",
        description: "Prepare for AWS certification and learn advanced patterns.",
        checklist: [
          "Study for AWS Solutions Architect certification",
          "Learn multi-region deployment strategies",
          "Implement advanced security with KMS and Secrets Manager",
          "Use AWS Organizations for account management",
          "Set up comprehensive monitoring and alerting",
          "Practice cost optimization techniques",
          "Build real-world projects"
        ],
        resources: [{
          title: "AWS Certification Prep",
          url: "https://aws.amazon.com/certification/",
          type: "🎓 Certification"
        }, {
          title: "AWS Well-Architected",
          url: "https://aws.amazon.com/architecture/well-architected/",
          type: "📖 Documentation"
        }, {
          title: "AWS Practice Exams",
          url: "https://aws.amazon.com/certification/certification-prep/",
          type: "🧪 Testing"
        }]
      }]
    }
  },

  digitalmarketing: {
    title: "Digital Marketing",
    icon: "📈",
    category: "business",
    level: "beginner",
    description: "Master online marketing strategies, SEO, social media, and analytics to grow businesses.",
    duration: "10-12 weeks",
    popularity: "⭐⭐⭐⭐⭐",
    roadmap: {
      flowchart: [
        ["Marketing Basics", "SEO Fundamentals", "Content Strategy"],
        ["Social Media", "Email Marketing", "PPC Advertising"],
        ["Analytics", "Conversion Optimization", "Marketing Automation"],
        ["Advanced Strategies", "Campaign Management", "ROI Analysis"]
      ],
      steps: [{
        title: "Digital Marketing Fundamentals",
        duration: "2-3 weeks",
        description: "Learn core marketing concepts and digital marketing landscape.",
        checklist: [
          "Understand digital marketing ecosystem",
          "Learn customer journey mapping",
          "Study target audience identification",
          "Understand marketing funnel concepts",
          "Learn basic marketing metrics and KPIs",
          "Study competitor analysis techniques",
          "Understand brand positioning"
        ],
        resources: [{
          title: "Google Digital Marketing Course",
          url: "https://learndigital.withgoogle.com/digitalmarketing",
          type: "🎓 Course"
        }, {
          title: "HubSpot Marketing Course",
          url: "https://academy.hubspot.com/courses/inbound-marketing",
          type: "🎓 Course"
        }, {
          title: "Digital Marketing Institute",
          url: "https://digitalmarketinginstitute.com/",
          type: "📖 Documentation"
        }]
      }, {
        title: "SEO & Content Marketing",
        duration: "3-4 weeks",
        description: "Master search engine optimization and content creation strategies.",
        checklist: [
          "Understand how search engines work",
          "Perform keyword research and analysis",
          "Optimize on-page SEO elements",
          "Create high-quality, SEO-friendly content",
          "Build effective link-building strategies",
          "Use Google Analytics and Search Console",
          "Track and measure SEO performance"
        ],
        resources: [{
          title: "Google SEO Starter Guide",
          url: "https://developers.google.com/search/docs/beginner/seo-starter-guide",
          type: "📖 Documentation"
        }, {
          title: "Moz SEO Learning Center",
          url: "https://moz.com/learn/seo",
          type: "🎓 Course"
        }, {
          title: "Ahrefs SEO Course",
          url: "https://ahrefs.com/academy",
          type: "🎓 Course"
        }]
      }, {
        title: "Social Media & Paid Advertising",
        duration: "3-4 weeks",
        description: "Learn social media marketing and paid advertising campaigns.",
        checklist: [
          "Develop social media strategies for different platforms",
          "Create engaging content for social media",
          "Set up and manage Facebook/Instagram ads",
          "Run Google Ads campaigns",
          "Understand ad targeting and audience segmentation",
          "A/B testing for ad optimization",
          "Measure social media ROI"
        ],
        resources: [{
          title: "Facebook Blueprint",
          url: "https://www.facebook.com/business/learn",
          type: "🎓 Course"
        }, {
          title: "Google Ads Certification",
          url: "https://skillshop.withgoogle.com/",
          type: "🎓 Certification"
        }, {
          title: "Hootsuite Social Media Course",
          url: "https://education.hootsuite.com/",
          type: "🎓 Course"
        }]
      }, {
        title: "Analytics & Optimization",
        duration: "2-3 weeks",
        description: "Master marketing analytics and conversion optimization techniques.",
        checklist: [
          "Set up comprehensive analytics tracking",
          "Create marketing dashboards and reports",
          "Implement conversion rate optimization",
          "Set up email marketing automation",
          "Use marketing automation tools",
          "Analyze campaign performance and ROI",
          "Develop data-driven marketing strategies"
        ],
        resources: [{
          title: "Google Analytics Academy",
          url: "https://analytics.google.com/analytics/academy/",
          type: "🎓 Course"
        }, {
          title: "Mailchimp Email Marketing",
          url: "https://mailchimp.com/resources/",
          type: "📖 Documentation"
        }, {
          title: "Conversion Rate Optimization",
          url: "https://cxl.com/institute/",
          type: "🎓 Course"
        }]
      }]
    }
  },

  flutter: {
    title: "Flutter",
    icon: "🦋",
    category: "programming",
    level: "intermediate",
    description: "Build beautiful native mobile apps for iOS and Android with a single codebase.",
    duration: "10-12 weeks",
    popularity: "⭐⭐⭐⭐",
    roadmap: {
      flowchart: [
        ["Dart Language", "Flutter Basics", "Widgets"],
        ["State Management", "Navigation", "HTTP & APIs"],
        ["Local Storage", "Native Features", "Testing"],
        ["Publishing", "Performance", "Advanced Patterns"]
      ],
      steps: [{
        title: "Dart & Flutter Fundamentals",
        duration: "3-4 weeks",
        description: "Learn Dart programming language and Flutter basics.",
        checklist: [
          "Master Dart syntax and features",
          "Set up Flutter development environment",
          "Understand Flutter architecture",
          "Create and customize widgets",
          "Handle layouts with rows, columns, and stacks",
          "Use material design components",
          "Debug Flutter applications"
        ],
        resources: [{
          title: "Flutter Documentation",
          url: "https://docs.flutter.dev/",
          type: "📖 Documentation"
        }, {
          title: "Dart Language Tour",
          url: "https://dart.dev/guides/language/language-tour",
          type: "📖 Documentation"
        }, {
          title: "Flutter Crash Course",
          url: "https://www.youtube.com/watch?v=pTJJsmejUOQ",
          type: "🎥 Video"
        }]
      }, {
        title: "State Management & Navigation",
        duration: "3-4 weeks",
        description: "Learn to manage app state and implement navigation between screens.",
        checklist: [
          "Understand stateful vs stateless widgets",
          "Implement Provider for state management",
          "Set up navigation between screens",
          "Pass data between screens",
          "Handle forms and user input",
          "Implement drawer and bottom navigation",
          "Use bloc pattern for complex state"
        ],
        resources: [{
          title: "Provider Package",
          url: "https://pub.dev/packages/provider",
          type: "📦 Package"
        }, {
          title: "Flutter Navigation",
          url: "https://docs.flutter.dev/cookbook/navigation",
          type: "📖 Documentation"
        }, {
          title: "State Management Guide",
          url: "https://docs.flutter.dev/development/data-and-backend/state-mgmt",
          type: "📖 Documentation"
        }]
      }, {
        title: "APIs & Local Storage",
        duration: "2-3 weeks",
        description: "Connect to APIs and implement local data storage.",
        checklist: [
          "Make HTTP requests to REST APIs",
          "Parse JSON data",
          "Handle loading states and errors",
          "Implement local storage with SQLite",
          "Use shared preferences for simple data",
          "Cache network responses",
          "Work with Firebase backend"
        ],
        resources: [{
          title: "HTTP Package",
          url: "https://pub.dev/packages/http",
          type: "📦 Package"
        }, {
          title: "SQLite Tutorial",
          url: "https://docs.flutter.dev/cookbook/persistence/sqlite",
          type: "📖 Documentation"
        }, {
          title: "Firebase for Flutter",
          url: "https://firebase.flutter.dev/",
          type: "📖 Documentation"
        }]
      }, {
        title: "Publishing & Advanced Topics",
        duration: "2-3 weeks",
        description: "Prepare apps for release and learn advanced Flutter concepts.",
        checklist: [
          "Prepare app for release",
          "Generate signed APKs and iOS builds",
          "Publish to Google Play and App Store",
          "Implement push notifications",
          "Add native device features (camera, location)",
          "Write widget and integration tests",
          "Optimize app performance"
        ],
        resources: [{
          title: "Publishing Guide",
          url: "https://docs.flutter.dev/deployment",
          type: "📖 Documentation"
        }, {
          title: "Flutter Testing",
          url: "https://docs.flutter.dev/testing",
          type: "🧪 Testing"
        }, {
          title: "Performance Best Practices",
          url: "https://docs.flutter.dev/perf",
          type: "📖 Documentation"
        }]
      }]
    }
  },

  figma: {
    title: "Figma",
    icon: "🎭",
    category: "design",
    level: "beginner",
    description: "Master the leading design tool for UI/UX design, prototyping, and collaboration.",
    duration: "6-8 weeks",
    popularity: "⭐⭐⭐⭐⭐",
    roadmap: {
      flowchart: [
        ["Figma Basics", "Interface Design", "Components"],
        ["Prototyping", "Design Systems", "Collaboration"],
        ["Advanced Features", "Plugins", "Handoff"],
        ["Portfolio", "Best Practices", "Workflow Optimization"]
      ],
      steps: [{
        title: "Figma Fundamentals",
        duration: "2 weeks",
        description: "Learn Figma interface, basic tools, and design fundamentals.",
        checklist: [
          "Navigate Figma interface efficiently",
          "Use basic tools (selection, pen, text, shapes)",
          "Work with frames and groups",
          "Apply colors, gradients, and effects",
          "Use typography and text styles",
          "Import and work with images",
          "Understand layers and organization"
        ],
        resources: [{
          title: "Figma Help Center",
          url: "https://help.figma.com/",
          type: "📖 Documentation"
        }, {
          title: "Figma Basics Course",
          url: "https://www.youtube.com/watch?v=FTFaQWZBqQ8",
          type: "🎥 Video"
        }, {
          title: "Figma Academy",
          url: "https://www.figma.com/academy/",
          type: "🎓 Course"
        }]
      }, {
        title: "Design Systems & Components",
        duration: "2-3 weeks",
        description: "Create reusable components and establish design systems.",
        checklist: [
          "Create and use components",
          "Set up component variants",
          "Build a design system library",
          "Use auto-layout for responsive design",
          "Create text and color styles",
          "Organize components with properties",
          "Share and maintain design systems"
        ],
        resources: [{
          title: "Design Systems in Figma",
          url: "https://help.figma.com/hc/en-us/articles/360038662654",
          type: "📖 Documentation"
        }, {
          title: "Component Best Practices",
          url: "https://www.figma.com/best-practices/",
          type: "📖 Documentation"
        }, {
          title: "Auto Layout Guide",
          url: "https://help.figma.com/hc/en-us/articles/5731482952599",
          type: "📖 Documentation"
        }]
      }, {
        title: "Prototyping & Collaboration",
        duration: "2-3 weeks",
        description: "Create interactive prototypes and collaborate with teams.",
        checklist: [
          "Create interactive prototypes",
          "Add transitions and animations",
          "Set up user flows and interactions",
          "Share prototypes for testing",
          "Collaborate with team members",
          "Gather and implement feedback",
          "Version control and file organization"
        ],
        resources: [{
          title: "Prototyping in Figma",
          url: "https://help.figma.com/hc/en-us/articles/360040314193",
          type: "📖 Documentation"
        }, {
          title: "Interactive Components",
          url: "https://www.figma.com/interactive-components/",
          type: "📖 Documentation"
        }, {
          title: "Collaboration Features",
          url: "https://help.figma.com/hc/en-us/sections/360006591013",
          type: "📖 Documentation"
        }]
      }, {
        title: "Advanced Workflows & Handoff",
        duration: "1-2 weeks",
        description: "Master advanced features and prepare designs for development.",
        checklist: [
          "Use advanced plugins and tools",
          "Prepare designs for developer handoff",
          "Export assets and specifications",
          "Set up design tokens",
          "Create comprehensive style guides",
          "Build impressive portfolio projects",
          "Stay updated with new features"
        ],
        resources: [{
          title: "Developer Handoff",
          url: "https://help.figma.com/hc/en-us/articles/360040516533",
          type: "📖 Documentation"
        }, {
          title: "Figma Plugins",
          url: "https://www.figma.com/community/plugins",
          type: "🔧 Tools"
        }, {
          title: "Design Portfolio Tips",
          url: "https://www.figma.com/blog/how-to-build-design-portfolio/",
          type: "📖 Documentation"
        }]
      }]
    }
  },

  sql: {
    title: "SQL",
    icon: "🗄️",
    category: "data",
    level: "beginner",
    description: "Master database querying and management with Structured Query Language.",
    duration: "6-8 weeks",
    popularity: "⭐⭐⭐⭐⭐",
    roadmap: {
      flowchart: [
        ["SQL Basics", "SELECT Queries", "Filtering Data"],
        ["Joins", "Aggregations", "Subqueries"],
        ["Database Design", "Functions", "Stored Procedures"],
        ["Performance", "Advanced Topics", "Real Projects"]
      ],
      steps: [{
        title: "SQL Fundamentals",
        duration: "2 weeks",
        description: "Learn basic SQL syntax and simple queries.",
        checklist: [
          "Understand database concepts and structure",
          "Write basic SELECT statements",
          "Filter data with WHERE clauses",
          "Sort results with ORDER BY",
          "Limit results and pagination",
          "Work with different data types",
          "Use comparison and logical operators"
        ],
        resources: [{
          title: "SQL Tutorial",
          url: "https://www.w3schools.com/sql/",
          type: "📖 Documentation"
        }, {
          title: "SQLBolt Interactive",
          url: "https://sqlbolt.com/",
          type: "💻 Practice"
        }, {
          title: "SQL Basics Course",
          url: "https://www.codecademy.com/learn/learn-sql",
          type: "🎓 Course"
        }]
      }, {
        title: "Advanced Queries & Joins",
        duration: "2-3 weeks",
        description: "Master complex queries, joins, and data aggregation.",
        checklist: [
          "Perform INNER, LEFT, RIGHT, and FULL joins",
          "Use GROUP BY for data aggregation",
          "Apply aggregate functions (COUNT, SUM, AVG)",
          "Filter grouped data with HAVING",
          "Write subqueries and correlated subqueries",
          "Use UNION and INTERSECT operations",
          "Work with CASE statements"
        ],
        resources: [{
          title: "SQL Joins Explained",
          url: "https://www.w3schools.com/sql/sql_join.asp",
          type: "📖 Documentation"
        }, {
          title: "Advanced SQL Course",
          url: "https://mode.com/sql-tutorial/",
          type: "🎓 Course"
        }, {
          title: "HackerRank SQL",
          url: "https://www.hackerrank.com/domains/sql",
          type: "💻 Practice"
        }]
      }, {
        title: "Database Design & Functions",
        duration: "2-3 weeks",
        description: "Learn database design principles and advanced SQL features.",
        checklist: [
          "Design normalized database schemas",
          "Create and manage tables",
          "Define primary and foreign keys",
          "Use indexes for performance",
          "Write stored procedures and functions",
          "Implement triggers and constraints",
          "Handle transactions and data integrity"
        ],
        resources: [{
          title: "Database Design Tutorial",
          url: "https://www.lucidchart.com/pages/database-diagram/database-design",
          type: "📖 Documentation"
        }, {
          title: "SQL Performance Tips",
          url: "https://use-the-index-luke.com/",
          type: "📖 Documentation"
        }, {
          title: "PostgreSQL Tutorial",
          url: "https://www.postgresqltutorial.com/",
          type: "📖 Documentation"
        }]
      }, {
        title: "Real-World Applications",
        duration: "1-2 weeks",
        description: "Apply SQL skills to real-world scenarios and projects.",
        checklist: [
          "Analyze real business datasets",
          "Create comprehensive reports",
          "Optimize query performance",
          "Work with different database systems",
          "Build data analysis projects",
          "Document and present SQL findings",
          "Prepare for SQL interviews"
        ],
        resources: [{
          title: "Kaggle SQL Datasets",
          url: "https://www.kaggle.com/datasets?search=sql",
          type: "📊 Data"
        }, {
          title: "SQL Interview Questions",
          url: "https://www.interviewbit.com/sql-interview-questions/",
          type: "🎯 Interview"
        }, {
          title: "Database Projects",
          url: "https://github.com/topics/sql-projects",
          type: "💡 Projects"
        }]
      }]
    }
  },

  docker: {
    title: "Docker",
    icon: "🐳",
    category: "cloud",
    level: "intermediate",
    description: "Master containerization with Docker for consistent development and deployment.",
    duration: "6-8 weeks",
    popularity: "⭐⭐⭐⭐⭐",
    roadmap: {
      flowchart: [
        ["Container Basics", "Docker Images", "Dockerfile"],
        ["Container Management", "Volumes", "Networks"],
        ["Docker Compose", "Multi-container Apps", "Orchestration"],
        ["Production", "Security", "Best Practices"]
      ],
      steps: [{
        title: "Docker Fundamentals",
        duration: "2 weeks",
        description: "Learn containerization concepts and basic Docker commands.",
        checklist: [
          "Understand containers vs virtual machines",
          "Install Docker on your system",
          "Run and manage containers",
          "Work with Docker images",
          "Use Docker Hub registry",
          "Understand container lifecycle",
          "Basic troubleshooting and debugging"
        ],
        resources: [{
          title: "Docker Getting Started",
          url: "https://docs.docker.com/get-started/",
          type: "📖 Documentation"
        }, {
          title: "Docker Crash Course",
          url: "https://www.youtube.com/watch?v=fqMOX6JJhGo",
          type: "🎥 Video"
        }, {
          title: "Docker Hub",
          url: "https://hub.docker.com/",
          type: "🔧 Tool"
        }]
      }, {
        title: "Creating Custom Images",
        duration: "2-3 weeks",
        description: "Build custom Docker images and optimize containerized applications.",
        checklist: [
          "Write efficient Dockerfiles",
          "Use multi-stage builds",
          "Manage layers and image size",
          "Configure environment variables",
          "Handle secrets and sensitive data",
          "Tag and version images properly",
          "Push images to registries"
        ],
        resources: [{
          title: "Dockerfile Best Practices",
          url: "https://docs.docker.com/develop/dev-best-practices/",
          type: "📖 Documentation"
        }, {
          title: "Multi-stage Builds",
          url: "https://docs.docker.com/build/building/multi-stage/",
          type: "📖 Documentation"
        }, {
          title: "Docker Image Optimization",
          url: "https://www.docker.com/blog/intro-guide-to-dockerfile-best-practices/",
          type: "📖 Documentation"
        }]
      }, {
        title: "Docker Compose & Multi-container",
        duration: "2-3 weeks",
        description: "Orchestrate multi-container applications with Docker Compose.",
        checklist: [
          "Create Docker Compose files",
          "Define services and dependencies",
          "Configure networks and volumes",
          "Manage environment-specific configurations",
          "Scale services horizontally",
          "Handle service communication",
          "Debug multi-container applications"
        ],
        resources: [{
          title: "Docker Compose Tutorial",
          url: "https://docs.docker.com/compose/",
          type: "📖 Documentation"
        }, {
          title: "Compose File Reference",
          url: "https://docs.docker.com/compose/compose-file/",
          type: "📖 Documentation"
        }, {
          title: "Multi-container App Tutorial",
          url: "https://docs.docker.com/get-started/07_multi_container/",
          type: "📖 Documentation"
        }]
      }, {
        title: "Production & Best Practices",
        duration: "1-2 weeks",
        description: "Deploy Docker containers in production with security and monitoring.",
        checklist: [
          "Implement container security best practices",
          "Set up health checks and monitoring",
          "Configure logging and log management",
          "Deploy to cloud platforms",
          "Use container orchestration (Kubernetes basics)",
          "Implement CI/CD with containers",
          "Performance tuning and optimization"
        ],
        resources: [{
          title: "Docker Security",
          url: "https://docs.docker.com/engine/security/",
          type: "📖 Documentation"
        }, {
          title: "Production Deployment",
          url: "https://docs.docker.com/engine/swarm/",
          type: "📖 Documentation"
        }, {
          title: "Kubernetes Basics",
          url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/",
          type: "📖 Documentation"
        }]
      }]
    }
  },

  projectmanagement: {
    title: "Project Management",
    icon: "📋",
    category: "business",
    level: "beginner",
    description: "Master project planning, execution, and team leadership for successful project delivery.",
    duration: "8-10 weeks",
    popularity: "⭐⭐⭐⭐⭐",
    roadmap: {
      flowchart: [
        ["PM Fundamentals", "Project Planning", "Team Management"],
        ["Agile & Scrum", "Risk Management", "Communication"],
        ["Tools & Software", "Quality Management", "Stakeholder Management"],
        ["Leadership", "Certification Prep", "Career Development"]
      ],
      steps: [{
        title: "Project Management Fundamentals",
        duration: "2-3 weeks",
        description: "Learn core project management concepts and methodologies.",
        checklist: [
          "Understand project lifecycle phases",
          "Learn project management frameworks (PMI, PRINCE2)",
          "Define project scope and objectives",
          "Create work breakdown structures",
          "Understand project constraints (time, budget, scope)",
          "Learn stakeholder identification",
          "Study project success criteria"
        ],
        resources: [{
          title: "PMI Guide",
          url: "https://www.pmi.org/learning/library",
          type: "📖 Documentation"
        }, {
          title: "Project Management Basics",
          url: "https://www.coursera.org/learn/project-management",
          type: "🎓 Course"
        }, {
          title: "PM Fundamentals",
          url: "https://www.youtube.com/watch?v=7T8DT7Yj3ag",
          type: "🎥 Video"
        }]
      }, {
        title: "Agile & Scrum Methodologies",
        duration: "2-3 weeks",
        description: "Master agile project management and Scrum framework.",
        checklist: [
          "Understand Agile principles and values",
          "Learn Scrum roles, events, and artifacts",
          "Facilitate sprint planning and retrospectives",
          "Manage product and sprint backlogs",
          "Conduct daily stand-ups effectively",
          "Use Kanban boards and workflows",
          "Handle agile metrics and reporting"
        ],
        resources: [{
          title: "Scrum Guide",
          url: "https://scrumguides.org/",
          type: "📖 Documentation"
        }, {
          title: "Agile Manifesto",
          url: "https://agilemanifesto.org/",
          type: "📖 Documentation"
        }, {
          title: "Scrum Master Course",
          url: "https://www.scrum.org/resources",
          type: "🎓 Course"
        }]
      }, {
        title: "Tools & Communication",
        duration: "2-3 weeks",
        description: "Learn project management tools and effective communication strategies.",
        checklist: [
          "Master project management software (Jira, Asana, Monday)",
          "Create effective project documentation",
          "Develop communication plans",
          "Manage project meetings and workshops",
          "Handle conflict resolution",
          "Report project status and progress",
          "Use collaboration tools effectively"
        ],
        resources: [{
          title: "Jira Tutorial",
          url: "https://www.atlassian.com/software/jira/guides",
          type: "📖 Documentation"
        }, {
          title: "Project Communication",
          url: "https://www.pmi.org/learning/library/effective-communication-better-project-management-6480",
          type: "📖 Documentation"
        }, {
          title: "PM Tools Comparison",
          url: "https://asana.com/resources",
          type: "🔧 Tools"
        }]
      }, {
        title: "Leadership & Career Development",
        duration: "2-3 weeks",
        description: "Develop leadership skills and prepare for PM career advancement.",
        checklist: [
          "Build team leadership capabilities",
          "Handle budget and resource management",
          "Develop risk management strategies",
          "Prepare for PMP or other certifications",
          "Create PM portfolio and case studies",
          "Network with PM community",
          "Practice interview skills"
        ],
        resources: [{
          title: "PMP Certification",
          url: "https://www.pmi.org/certifications/project-management-pmp",
          type: "🎓 Certification"
        }, {
          title: "PM Leadership",
          url: "https://www.pmi.org/learning/library/leadership-skills-project-managers-6834",
          type: "📖 Documentation"
        }, {
          title: "PM Career Guide",
          url: "https://www.projectmanager.com/blog/project-manager-career-path",
          type: "📖 Documentation"
        }]
      }]
    }
  },

  go: {
    title: "Go (Golang)",
    icon: "🐹",
    category: "programming",
    level: "intermediate",
    description: "Learn Google's Go language for building fast, reliable, and efficient software.",
    duration: "8-10 weeks",
    popularity: "⭐⭐⭐⭐",
    roadmap: {
      flowchart: [
        ["Go Basics", "Functions & Packages", "Data Structures"],
        ["Concurrency", "Error Handling", "Interfaces"],
        ["Web Development", "APIs", "Database Integration"],
        ["Testing", "Deployment", "Advanced Patterns"]
      ],
      steps: [{
        title: "Go Language Fundamentals",
        duration: "2-3 weeks",
        description: "Master Go syntax, basic concepts, and development environment.",
        checklist: [
          "Install Go and set up workspace",
          "Understand Go syntax and conventions",
          "Work with variables, constants, and data types",
          "Master control structures (if, for, switch)",
          "Create and use functions",
          "Work with arrays, slices, and maps",
          "Understand Go's package system"
        ],
        resources: [{
          title: "Go Tour",
          url: "https://tour.golang.org/",
          type: "📖 Documentation"
        }, {
          title: "Go by Example",
          url: "https://gobyexample.com/",
          type: "💻 Practice"
        }, {
          title: "Go Programming Course",
          url: "https://www.youtube.com/watch?v=YS4e4q9oBaU",
          type: "🎥 Video"
        }]
      }, {
        title: "Advanced Go Concepts",
        duration: "2-3 weeks",
        description: "Learn Go's unique features like goroutines, channels, and interfaces.",
        checklist: [
          "Master struct types and methods",
          "Understand interfaces and composition",
          "Learn goroutines and concurrency",
          "Use channels for communication",
          "Handle errors idiomatically",
          "Work with pointers and memory management",
          "Use defer, panic, and recover"
        ],
        resources: [{
          title: "Effective Go",
          url: "https://golang.org/doc/effective_go.html",
          type: "📖 Documentation"
        }, {
          title: "Go Concurrency Patterns",
          url: "https://www.youtube.com/watch?v=f6kdp27TYZs",
          type: "🎥 Video"
        }, {
          title: "Go Interfaces Tutorial",
          url: "https://gobyexample.com/interfaces",
          type: "📖 Documentation"
        }]
      }, {
        title: "Web Development with Go",
        duration: "2-3 weeks",
        description: "Build web applications and APIs using Go's standard library and frameworks.",
        checklist: [
          "Build HTTP servers with net/http",
          "Handle routing and middleware",
          "Work with popular frameworks (Gin, Echo)",
          "Implement REST APIs",
          "Handle JSON encoding/decoding",
          "Connect to databases (PostgreSQL, MongoDB)",
          "Implement authentication and authorization"
        ],
        resources: [{
          title: "Go Web Examples",
          url: "https://gowebexamples.com/",
          type: "💻 Practice"
        }, {
          title: "Gin Framework",
          url: "https://gin-gonic.com/docs/",
          type: "📖 Documentation"
        }, {
          title: "Building APIs in Go",
          url: "https://www.youtube.com/watch?v=SonwZ6MF5BE",
          type: "🎥 Video"
        }]
      }, {
        title: "Testing & Production Deployment",
        duration: "2-3 weeks",
        description: "Learn testing practices and deploy Go applications to production.",
        checklist: [
          "Write unit tests with testing package",
          "Implement integration and end-to-end tests",
          "Use table-driven tests",
          "Profile and benchmark Go applications",
          "Build and cross-compile applications",
          "Deploy to cloud platforms",
          "Set up CI/CD pipelines"
        ],
        resources: [{
          title: "Go Testing",
          url: "https://golang.org/pkg/testing/",
          type: "📖 Documentation"
        }, {
          title: "Go Testing Tutorial",
          url: "https://www.youtube.com/watch?v=ndmB0bj7eyw",
          type: "🎥 Video"
        }, {
          title: "Deploying Go Apps",
          url: "https://golang.org/doc/install",
          type: "📖 Documentation"
        }]
      }]
    }
  },

  cybersecurity: {
    title: "Cybersecurity",
    icon: "🔒",
    category: "data",
    level: "intermediate",
    description: "Protect systems and data from cyber threats with comprehensive security knowledge.",
    duration: "16-20 weeks",
    popularity: "⭐⭐⭐⭐⭐",
    roadmap: {
      flowchart: [
        ["Security Fundamentals", "Network Security", "Operating Systems"],
        ["Ethical Hacking", "Vulnerability Assessment", "Penetration Testing"],
        ["Incident Response", "Digital Forensics", "Compliance"],
        ["Advanced Topics", "Certifications", "Career Development"]
      ],
      steps: [{
        title: "Security Fundamentals",
        duration: "4-5 weeks",
        description: "Learn core cybersecurity concepts, principles, and frameworks.",
        checklist: [
          "Understand CIA triad (Confidentiality, Integrity, Availability)",
          "Learn common attack vectors and threats",
          "Study security frameworks (NIST, ISO 27001)",
          "Understand risk assessment and management",
          "Learn cryptography basics",
          "Study network protocols and security",
          "Understand security policies and procedures"
        ],
        resources: [{
          title: "NIST Cybersecurity Framework",
          url: "https://www.nist.gov/cyberframework",
          type: "📖 Documentation"
        }, {
          title: "Cybersecurity Basics",
          url: "https://www.sans.org/white-papers/",
          type: "📖 Documentation"
        }, {
          title: "Security+ Course",
          url: "https://www.comptia.org/certifications/security",
          type: "🎓 Certification"
        }]
      }, {
        title: "Ethical Hacking & Penetration Testing",
        duration: "4-5 weeks",
        description: "Learn offensive security techniques for defensive purposes.",
        checklist: [
          "Set up penetration testing lab",
          "Learn reconnaissance and information gathering",
          "Practice vulnerability scanning",
          "Understand exploitation techniques",
          "Learn web application security testing",
          "Practice wireless security assessment",
          "Document and report findings"
        ],
        resources: [{
          title: "Kali Linux Tutorial",
          url: "https://www.kali.org/docs/",
          type: "📖 Documentation"
        }, {
          title: "OWASP Top 10",
          url: "https://owasp.org/www-project-top-ten/",
          type: "📖 Documentation"
        }, {
          title: "CEH Certification",
          url: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/",
          type: "🎓 Certification"
        }]
      }, {
        title: "Incident Response & Forensics",
        duration: "4-5 weeks",
        description: "Learn to respond to security incidents and conduct digital forensics.",
        checklist: [
          "Develop incident response procedures",
          "Learn digital forensics techniques",
          "Practice malware analysis",
          "Understand log analysis and SIEM",
          "Learn evidence handling and chain of custody",
          "Practice threat hunting",
          "Understand legal and compliance requirements"
        ],
        resources: [{
          title: "SANS Incident Response",
          url: "https://www.sans.org/white-papers/33901/",
          type: "📖 Documentation"
        }, {
          title: "Digital Forensics Guide",
          url: "https://www.sans.org/white-papers/36227/",
          type: "📖 Documentation"
        }, {
          title: "GCIH Certification",
          url: "https://www.giac.org/certification/certified-incident-handler-gcih",
          type: "🎓 Certification"
        }]
      }, {
        title: "Advanced Security & Career Development",
        duration: "3-5 weeks",
        description: "Specialize in advanced topics and prepare for security career.",
        checklist: [
          "Choose specialization (red team, blue team, governance)",
          "Pursue industry certifications (CISSP, CISM, OSCP)",
          "Build practical lab environment",
          "Contribute to security community",
          "Develop security automation skills",
          "Build professional network",
          "Create security portfolio"
        ],
        resources: [{
          title: "CISSP Certification",
          url: "https://www.isc2.org/Certifications/CISSP",
          type: "🎓 Certification"
        }, {
          title: "OSCP Certification",
          url: "https://www.offensive-security.com/pwk-oscp/",
          type: "🎓 Certification"
        }, {
          title: "Security Career Guide",
          url: "https://www.sans.org/security-careers/",
          type: "📖 Documentation"
        }]
      }]
    }
  }
};