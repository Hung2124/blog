# 🚀 AI Blog Pro - Powered by Fuwari

> Modern, fast, and beautiful AI blog template built with Astro framework. Perfect for AI enthusiasts, researchers, and professionals who want to share knowledge about Machine Learning, Deep Learning, and Data Science.

![AI Blog Pro](https://img.shields.io/badge/AI%20Blog%20Pro-Live-brightgreen) ![Astro](https://img.shields.io/badge/Astro-5.8.1-orange) ![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Styled-cyan)

## ✨ Features

### 🎨 **Modern Design**
- **Clean, minimalist aesthetic** inspired by Japanese design principles
- **Dark/Light mode** with automatic system preference detection
- **Responsive design** perfect on all devices
- **Smooth animations** and micro-interactions
- **Professional typography** optimized for reading

### 📝 **Content-First**
- **Markdown/MDX support** with syntax highlighting
- **Math formulas** with KaTeX integration
- **Code blocks** with multiple language support
- **Image optimization** and lazy loading
- **Tags and categories** for content organization

### 🚀 **Performance**
- **99+ Lighthouse scores** across all metrics
- **Static site generation** with Astro
- **Minimal JavaScript** bundle
- **CDN-ready** with optimized assets
- **Fast loading** and excellent SEO

### 🔧 **Developer Experience**
- **TypeScript** throughout
- **Modern tooling** with Vite and ESBuild
- **Hot reload** development server
- **ESLint and Prettier** configured
- **Git hooks** for code quality

### 📱 **Features for AI Blog**
- **Code syntax highlighting** for Python, R, SQL, etc.
- **Mathematical notation** with KaTeX
- **Jupyter notebook** style code blocks
- **Research paper** citation support
- **AI/ML taxonomy** tags and categories

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) - Modern static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- **Icons**: [Lucide Icons](https://lucide.dev) - Beautiful, consistent icons
- **Fonts**: [Inter](https://rsms.me/inter/) - Optimized for screens
- **Math**: [KaTeX](https://katex.org) - Fast math typesetting
- **Search**: [Pagefind](https://pagefind.app) - Static search
- **Developer Tools**: [Stagewise](https://stagewise.ai) - Browser toolbar for AI-powered editing

## 🚀 Quick Start

### Prerequisites
- **Node.js** >= 20.0.0
- **pnpm** >= 9.0.0 (recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url> ai-blog-pro
   cd ai-blog-pro
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```
   Visit `http://localhost:4321` to see your blog!

4. **Build for production**
   ```bash
   pnpm build
   ```

## 📁 Project Structure

```
ai-blog-pro/
├── public/                 # Static assets
│   ├── images/            # Blog images
│   └── favicon.ico        # Favicon
├── src/
│   ├── components/        # Reusable components
│   ├── content/          # Blog content
│   │   ├── posts/        # Blog posts (markdown)
│   │   └── spec/         # Pages (about, etc.)
│   ├── layouts/          # Page layouts
│   ├── pages/            # Route pages
│   ├── styles/           # Global styles
│   └── config.ts         # Site configuration
├── astro.config.mjs      # Astro configuration
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

## ⚙️ Configuration

### Site Settings

Edit `src/config.ts` to customize your blog:

```typescript
export const siteConfig: SiteConfig = {
  title: "Your AI Blog",
  subtitle: "Exploring AI & Machine Learning",
  lang: "en",
  themeColor: {
    hue: 210,  // Blue theme
    fixed: false
  },
  banner: {
    enable: true,
    src: "assets/images/banner.jpg"
  }
};

export const profileConfig: ProfileConfig = {
  avatar: "assets/images/avatar.png",
  name: "Your Name",
  bio: "AI Researcher & Developer",
  links: [
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: "github"
    }
    // Add more social links
  ]
};
```

### Navigation

Customize navigation in `src/config.ts`:

```typescript
export const navBarConfig: NavBarConfig = {
  links: [
    { name: "Posts", url: "/posts", external: false },
    { name: "Archive", url: "/archive", external: false },
    { name: "Categories", url: "/categories", external: false },
    { name: "About", url: "/about", external: false }
  ]
};
```

## 📝 Content Creation & Deployment

### 🚀 Writing New Blog Posts (GitHub Actions Auto-Deploy)

After setting up GitHub Actions, writing blog posts becomes **extremely simple**:

#### **Step 1: Create a new post**
Create a `.md` file in the `src/content/posts/` directory:

```bash
# Create new post file
touch src/content/posts/new-post-title.md
```

#### **Step 2: Write content**
```yaml
---
title: "Your Post Title"
published: 2025-06-09
description: "Brief description of your post for SEO"
image: "path/to/image.jpg"          # Optional: featured image
tags: ["AI", "Machine Learning"]    # Post tags
category: "Tutorial"                # Category
draft: false                        # false = publish, true = draft
---

# Post Content

Write your content in **Markdown** here...

## Code Examples

```python
# Python code with syntax highlighting
import numpy as np
print("Hello AI World!")
```

## Math Formulas

Inline math: $E = mc^2$

Display math:
$$\sum_{i=1}^n x_i = x_1 + x_2 + ... + x_n$$
```

#### **Step 3: Auto-deploy**
```bash
# Just these 3 commands!
git add .
git commit -m "Add new post: Post Title"
git push
```

#### **✨ That's it!**
- ⚡ **GitHub Actions** automatically detects push
- 🔄 **Auto-builds** Astro project with new post  
- 🚀 **Auto-deploys** to website
- ⏱️ **2-3 minutes** later your post appears on the blog!

### 🎯 Nothing else needed!

- ❌ **No need for** `pnpm build`
- ❌ **No need for** manual deployment
- ❌ **No need to** run server
- ✅ **Just** git push and wait!

### 📋 Content Guidelines

**Frontmatter Template:**
```yaml
---
title: "SEO-friendly title"
published: 2025-06-09              # Publication date
description: "150-160 character description for SEO"
image: "assets/images/post1.jpg"   # Optional thumbnail
tags: ["AI", "Python", "Tutorial"] # 3-5 relevant tags
category: "Tutorial"               # Main category
draft: false                       # true to hide
---
```

**Content Support:**
- ✅ **Full Markdown syntax**
- ✅ **Code blocks** with 50+ languages
- ✅ **Math formulas** with KaTeX (`$...$` and `$$...$$`)
- ✅ **Images** with auto-optimization
- ✅ **Tables, lists, quotes**
- ✅ **Custom callouts** (`> [!NOTE]`, `> [!WARNING]`)

### 🎨 Advanced Features

**Code Examples with syntax highlighting:**

```python
# Python with AI/ML libraries
import tensorflow as tf
import numpy as np

model = tf.keras.Sequential([
    tf.keras.layers.Dense(128, activation='relu'),
    tf.keras.layers.Dense(10, activation='softmax')
])
```

```javascript
// JavaScript/TypeScript
const predict = async (model, data) => {
    const prediction = await model.predict(data);
    return prediction.dataSync();
};
```

**Math Formulas with KaTeX:**

```markdown
Inline: Neural network output $y = \sigma(Wx + b)$

Display block:
$$\text{Loss} = -\frac{1}{N}\sum_{i=1}^N \sum_{c=1}^C y_{i,c} \log(\hat{y}_{i,c})$$
```

**Callouts/Admonitions:**

```markdown
> [!NOTE]
> Important notes for readers

> [!WARNING]
> Warnings about potential issues

> [!TIP]
> Useful tips and tricks
```

## 🎯 GitHub Actions Workflow

### 📁 Auto-Deploy Structure

```yaml
# .github/workflows/static.yml
name: Deploy static content to Pages
on:
  push:
    branches: ["main"]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - uses: pnpm/action-setup@v4
      - run: pnpm install
      - run: pnpm run build
      - uses: actions/deploy-pages@v4
```

### 🔄 Deploy Process

1. **Push code** → **GitHub detects changes**
2. **Actions trigger** → **Install dependencies** 
3. **Build Astro** → **Generate static site**
4. **Deploy Pages** → **Website live!**

### ⚡ Workflow Features

- ✅ **Auto-trigger** on push to main branch
- ✅ **pnpm support** with correct version detection
- ✅ **Error handling** and retry logic
- ✅ **Build caching** for faster deploys
- ✅ **Multi-environment** support (staging/production)

### 📊 Monitoring Deploys

**Monitor deployment:**
1. Go to **GitHub repository** → **Actions tab**
2. View **"Deploy static content to Pages"** workflow
3. **Monitor progress**: Install → Build → Deploy
4. **Check logs** if there are errors
5. **Website live** after 2-3 minutes if successful

### Code Examples

Python code with syntax highlighting:

```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

# Generate sample data
X = np.random.randn(100, 1)
y = 2 * X + 1 + 0.1 * np.random.randn(100, 1)

# Train model
model = LinearRegression()
model.fit(X, y)

# Predict
predictions = model.predict(X)

print(f"Coefficient: {model.coef_[0][0]:.2f}")
print(f"Intercept: {model.intercept_[0]:.2f}")
```

### Math Formulas

Inline math: The loss function is $L = \frac{1}{n}\sum_{i=1}^n (y_i - \hat{y_i})^2$

Block math:
$$
\nabla_\theta J(\theta) = \frac{1}{m} \sum_{i=1}^m (h_\theta(x^{(i)}) - y^{(i)}) x^{(i)}
$$

## 🎨 Customization

### Colors and Theming

The blog supports custom color themes. Modify `src/config.ts`:

```typescript
themeColor: {
  hue: 210,        // 0-360, determines base color
  fixed: false     // Allow users to customize
}
```

### Fonts

Change fonts in `src/layouts/BaseLayout.astro`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Adding Components

Create reusable components in `src/components/`:

```astro
---
// src/components/CodeBlock.astro
interface Props {
  language: string;
  code: string;
}

const { language, code } = Astro.props;
---

<div class="code-block">
  <pre class={`language-${language}`}><code>{code}</code></pre>
</div>
```

## 🚀 Deployment

Multiple deployment options available:

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Netlify
```bash
# Build and deploy
pnpm build
# Drag ./dist folder to netlify.app
```

### GitHub Pages
Add GitHub Actions workflow (see `DEPLOYMENT_GUIDE.md` for details)

## 🔧 Development

### Available Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm new-post "title"` - Create new blog post
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier

### Code Quality

The project includes:
- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type safety
- **Husky** for Git hooks
- **lint-staged** for pre-commit checks

## 📊 Analytics & SEO

### Built-in SEO Features
- **Meta tags** optimization
- **Open Graph** tags for social sharing
- **Structured data** (JSON-LD)
- **Sitemap** generation
- **Robots.txt** configuration

### Analytics Integration

Add Google Analytics to `src/layouts/BaseLayout.astro`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🤝 Contributing

We welcome contributions! Please:

1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open Pull Request**

### Development Guidelines
- Follow existing code style
- Add TypeScript types
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation if needed

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[Fuwari](https://github.com/saicaca/fuwari)** - Original template
- **[Astro](https://astro.build)** - Amazing framework
- **[Tailwind CSS](https://tailwindcss.com)** - Styling system
- **[Inter Font](https://rsms.me/inter/)** - Typography
- **AI Community** - Inspiration and feedback

## 📞 Support

- **Documentation**: Check `DEPLOYMENT_GUIDE.md` for detailed setup
- **Issues**: [GitHub Issues](../../issues) for bug reports
- **Discussions**: [GitHub Discussions](../../discussions) for questions
- **Email**: contact@your-domain.com

---

## 🌟 Showcase

Using AI Blog Pro? We'd love to feature your blog! Submit a PR adding your site to this section.

### Live Examples
- **AI Blog Pro Demo**: [demo-link] - Example implementation
- **Your Blog Here**: Submit your blog URL!

---

**⭐ Star this repository if you find it helpful! It helps others discover the project.**

**🚀 Happy blogging! Share your AI knowledge with the world!**
