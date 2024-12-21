# 🎨 Creative Assets Host

📜 **A hub for all your creative and multimedia asset needs!** Whether you're building websites, designing graphics, producing videos, or crafting unique projects, this repository has you covered. Featuring icons, images, videos, and audio files, it’s the ultimate toolbox for creativity. From sleek UI icons to stunning wallpapers, cinematic posters, and high-quality soundtracks, everything you need is here. 🎬✨🚀 

## 🔗 Live Demo
Access the project live at:
[Assets Host GitHub Pages](https://torresjdev.github.io/assets-host/)

---

## 🛠️ Technologies Used
- **<a href="https://nextjs.org/" target="_blank"><img src="https://profilinator.rishav.dev/skills-assets/nextjs.png" alt="NextJS" height="13"/></a> Next.js**: A React framework for building web applications.
- **<a href="https://www.typescriptlang.org/" target="_blank"><img src="https://profilinator.rishav.dev/skills-assets/typescript-original.svg" alt="TypeScript" height="12"/></a>TypeScript**: Ensures type safety and code maintainability.
- **<a href="https://tailwindcss.com/" target="_blank"><img src="https://torresjdev.github.io/assets-host/assets/icons/tech/tail.svg" alt="tailwindcss" height="13"></a>Tailwind CSS**: Rapidly builds modern, responsive designs.
- **<a href="https://pages.github.com/" target="_blank"><img src="https://torresjdev.github.io/assets-host/assets/icons/social/github.svg" alt="github pages" height="13"></a>GitHub Pages**: Hosts the static export of the application.

---

## 📂 Repository Structure

```
app/
  ├── components/       # Reusable React components
  ├── lib/              # Utility functions and metadata
  ├── page.tsx          # Main entry point for rendering the homepage
  └── layout.tsx        # Root layout file

public/
  └── assets/           # Static asset files (icons, images, audio, etc.)

scripts/
  └── generateMetadata.js  # Script to generate metadata for assets

styles/
  └── globals.css       # Global Tailwind CSS styles

.github/
  └── workflows/
       └── nextjs.yml   # Workflow for building and deploying to GitHub Pages

assets/ 
  ├── 🎧 audio/
  │    ├── 🔔 effects/        # Sound effects (e.g., notifications, clicks)
  │    ├── 🎵 music/          # Background music tracks
  │    └── 🎙️ voiceovers/     # Voiceover recordings for videos or presentations
  │
  ├── 🖍️ backgrounds/
  │    ├── 🎭 abstract/       # Abstract patterns, gradients
  │    ├── 🪵 textures/       # Textures like wood, marble, or fabric
  │    ├── 🎨 themed/         # Themed backgrounds (e.g., holiday, retro)
  │    └── 🌈 gradient-sets/  # Color gradient packs
  │
  ├── 🖼️ covers/
  │    ├── 🖌️ logos/          # Cover images for logos
  │    ├── 🖼️ wallart/        # Wall art covers, including posters and illustrations
  │    └── 📋 general/        # General cover images for miscellaneous projects
  │
  ├── 📜 docs/
  │    ├── 📑 licenses/       # License agreements for assets
  │    ├── 📚 usage-guides/   # How to use and credit assets
  │    ├── 📕 pdfs/           # PDF documents for guides or resources
  │    └── 📄 word-docs/      # Word documents stored for additional documentation
  │
  └── 🔗 icons/
       ├── 🌐 social/         # Social media icons (e.g., Facebook, Twitter, Instagram)
       ├── 💡 tech/           # tech lib & frame icons (e.g., js, py, c# icons)
       ├── 💡 ui/             # UI/UX icons (e.g., buttons, actions, system icons)
       └── 🎲 misc/           # Miscellaneous icons not specific to a category
```

---

## 🌟 Features
- **Centralized Hosting**: A single hub for all creative assets.
- **Clear Organization**: Hierarchical folder structure for easy navigation.
- **GitHub Pages Ready**: Automatically deploys static content.

---

## 🚀 Deployment

### Steps to Deploy
1. **Generate Metadata**
   Ensure the `generateMetadata.js` script is executed to create metadata for assets.
   ```bash
   npm run generate:metadata
   ```

2. **Build the Project**
   Build the project for static export:
   ```bash
   npm run build
   ```

3. **Push to GitHub**
   Push the changes to the `main` branch. The GitHub Actions workflow will automatically deploy the site to GitHub Pages.

4. **Access the Site**
   Visit the deployed site:
   ```
   https://<username>.github.io/assets-host/
   ```

---

## 🔗 Usage Instructions

### Accessing Assets
You can access assets using the following URL format:
```
https://<username>.github.io/assets-host/assets/<path-to-file>
```

### Examples
- Icon: `https://torresjdev.github.io/assets-host/assets/icons/social/github.svg`
- Wallpaper: `https://torresjdev.github.io/assets-host/assets/backgrounds/gradient-set1.jpg`

---

## 🧩 Troubleshooting

### Images Not Loading
Ensure that:
1. **`basePath` is Correct**: The `next.config.js` file includes:
   ```javascript
   basePath: '/assets-host';
   ```
2. **Metadata Paths are Accurate**: Check `generateMetadata.js` ensures paths include `/assets-host`.

### Development Server
To run the development server locally:
```bash
npm run dev
```
Visit `http://localhost:3000` in your browser.

---

## 🤝 Contributions
Contributions are welcome! Feel free to:
- Add new assets.
- Improve existing components or scripts.
- Suggest structural improvements.

---

## 📜 License
Refer to `public/docs/licenses/` for licensing information. Proper attribution is required where applicable.
