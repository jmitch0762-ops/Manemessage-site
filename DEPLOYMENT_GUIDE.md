# How to Deploy Your ManeMessage Site to Vercel

## What You Have

This folder is your complete website — a Next.js project with 6 pages:
- **Home** (`/`)
- **Services** (`/services`)
- **About** (`/about`)
- **Blog** (`/blog`)
- **Portfolio** (`/portfolio`)
- **Contact** (`/contact`)

All your content lives in ONE file: `content/site-data.ts`  
When you want to change text, pricing, add blog posts, or update testimonials — that's the only file you edit.

---

## Step 1: Get the Project Files onto Your Computer

You'll need to download this project folder and have it on your computer. Save/unzip the entire `manemessage-site` folder somewhere easy to find (like your Desktop).

---

## Step 2: Install the Tools You Need (One-Time Setup)

### Install Node.js
1. Go to https://nodejs.org
2. Download the **LTS** version (the green button)
3. Run the installer — click Next through everything, accept defaults
4. When done, open **Terminal** (Mac) or **Command Prompt** (Windows)
5. Type `node --version` and press Enter — you should see a version number

### Install Git
1. Go to https://git-scm.com/downloads
2. Download for your operating system
3. Run the installer — accept all defaults
4. In Terminal/Command Prompt, type `git --version` — you should see a version number

---

## Step 3: Push the Project to GitHub

### First time only — connect Git to your GitHub account:
Open Terminal/Command Prompt and type these commands one at a time:

```
git config --global user.name "Your Name"
git config --global user.email "your-github-email@example.com"
```

### Create a new repository on GitHub:
1. Go to https://github.com and log in
2. Click the green **"New"** button (top left) or go to https://github.com/new
3. Name it: `manemessage-site`
4. Keep it **Public** (Vercel needs to see it)
5. Do NOT check any boxes (no README, no .gitignore, no license)
6. Click **"Create repository"**
7. You'll see a page with setup instructions — keep this page open

### Push your code:
In Terminal/Command Prompt, navigate to your project folder:

```
cd ~/Desktop/manemessage-site
```
(Adjust the path if you saved it somewhere else)

Then run these commands one by one:

```
git init
git add .
git commit -m "Initial site build"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/manemessage-site.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

If it asks for a password, you may need to create a Personal Access Token:
1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Give it a name, check the "repo" box
4. Click Generate — copy the token
5. Use the token as your password when Git asks

---

## Step 4: Deploy on Vercel

1. Go to https://vercel.com and log in
2. Click **"Add New..."** → **"Project"**
3. It will show your GitHub repositories — find `manemessage-site` and click **"Import"**
4. On the configuration page:
   - **Framework Preset**: Should auto-detect "Next.js" — if not, select it
   - Leave everything else as default
5. Click **"Deploy"**
6. Wait 1-2 minutes — Vercel will build and deploy your site
7. You'll get a URL like `manemessage-site.vercel.app` — that's your live site!

### Connect Your Custom Domain (manemessagemarketing.com):
1. In your Vercel project dashboard, go to **Settings** → **Domains**
2. Type `manemessagemarketing.com` and click **Add**
3. Vercel will tell you what DNS records to set up
4. Go to your domain registrar (wherever you bought your domain) and update the DNS:
   - Usually you'll add a **CNAME** record pointing to `cname.vercel-dns.com`
   - Or an **A** record pointing to `76.76.21.21`
5. It may take up to 48 hours for the domain to fully connect (usually much faster)

---

## How to Update Your Site

### Editing content (text, pricing, testimonials, blog posts):

1. Open `content/site-data.ts` in any text editor (VS Code is free and great: https://code.visualstudio.com)
2. Find the section you want to change
3. Edit the text between the quote marks
4. Save the file

### Example — Updating a service price:
Find this in `content/site-data.ts`:
```
price: "Starting at $500",
```
Change it to:
```
price: "Starting at $600",
```

### Example — Adding a real testimonial:
Find the testimonials section and replace a placeholder:
```
{
  quote: "Jen understood our breeding program better than any marketer...",
  author: "Sarah Johnson",
  role: "Johnson Performance Horses, Virginia",
  isPlaceholder: false,  // Change this to false!
},
```

### Example — Adding a new blog post:
Copy an existing blog post object and change the fields:
```
{
  slug: "my-new-post",
  tag: "Content Strategy",
  title: "Your New Blog Post Title Here",
  excerpt: "A short description of what this post is about.",
  date: "2026-04-01",
  externalUrl: "https://medium.com/@jenmitch_762/your-new-post-url",
},
```

### After editing — push the changes live:
Open Terminal, navigate to your project folder, and run:

```
cd ~/Desktop/manemessage-site
git add .
git commit -m "Updated pricing"
git push
```

That's it! Vercel automatically detects the push and redeploys your site within about 60 seconds.

---

## File Structure — What's What

```
manemessage-site/
├── content/
│   └── site-data.ts        ← YOUR CONTENT FILE (edit this!)
├── components/
│   ├── Nav.tsx              ← Navigation bar
│   ├── Footer.tsx           ← Footer
│   └── CTABanner.tsx        ← Call-to-action banner
├── app/
│   ├── layout.tsx           ← Overall page wrapper
│   ├── globals.css          ← Styles
│   ├── page.tsx             ← Homepage
│   ├── services/page.tsx    ← Services page
│   ├── about/page.tsx       ← About page
│   ├── blog/page.tsx        ← Blog page
│   ├── portfolio/page.tsx   ← Portfolio page
│   └── contact/page.tsx     ← Contact page
├── public/
│   └── images/              ← Put your photos here
├── package.json
├── tailwind.config.ts
└── DEPLOYMENT_GUIDE.md      ← This file!
```

---

## Adding Your Photos

1. Put your images in the `public/images/` folder
2. Name them clearly: `hero-riding.jpg`, `jen-athena.jpg`, etc.
3. To use an image in the site, you'll reference it as `/images/hero-riding.jpg`
4. For the hero background and about photo, you'll need to edit the page files — ask Claude to help with this when you're ready

---

## Need Help?

If something goes wrong or you get stuck:
- Copy the error message
- Bring it back to Claude with context about what you were trying to do
- We'll sort it out together

Common issues:
- **"Permission denied"** → You may need to set up GitHub authentication (see the token step above)
- **Build failed on Vercel** → Check the build logs in your Vercel dashboard — usually a typo in the content file
- **Site looks broken** → Make sure you didn't accidentally delete a comma or quote mark in `site-data.ts`
