# Installation & Setup Guide

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download here](https://git-scm.com/)

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/rahul700raj/event-organizer-pro.git
cd event-organizer-pro
```

### 2. Install Dependencies

```bash
npm install
```

Or if you prefer yarn:

```bash
yarn install
```

### 3. Start Development Server

```bash
npm start
```

Or with yarn:

```bash
yarn start
```

The application will open automatically in your browser at `http://localhost:3000`

## Available Scripts

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## Deployment

### Deploy to Netlify

1. Build your project:
```bash
npm run build
```

2. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

3. Deploy:
```bash
netlify deploy --prod --dir=build
```

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
"homepage": "https://rahul700raj.github.io/event-organizer-pro",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```

## Project Structure

```
event-organizer-pro/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # React components
│   │   ├── Header.js
│   │   ├── Header.css
│   │   ├── Hero.js
│   │   ├── Hero.css
│   │   ├── EventList.js
│   │   ├── EventList.css
│   │   ├── CreateEvent.js
│   │   ├── CreateEvent.css
│   │   ├── EventDetails.js
│   │   ├── EventDetails.css
│   │   ├── Dashboard.js
│   │   └── Dashboard.css
│   ├── App.js              # Main app component
│   ├── App.css             # Global app styles
│   ├── index.js            # Entry point
│   └── index.css           # Global styles
├── package.json            # Dependencies and scripts
├── .gitignore             # Git ignore rules
└── README.md              # Project documentation
```

## Customization

### Changing Colors

Edit the gradient colors in `src/index.css` and component CSS files:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Adding New Event Categories

In `src/components/CreateEvent.js`, add new options to the category select:

```jsx
<option value="YourCategory">Your Category</option>
```

### Modifying Sample Events

Edit the initial events array in `src/App.js`:

```javascript
const [events, setEvents] = useState([
  // Add your sample events here
]);
```

## Troubleshooting

### Port Already in Use

If port 3000 is already in use, you can specify a different port:

```bash
PORT=3001 npm start
```

### Build Errors

Clear cache and reinstall dependencies:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Module Not Found

Ensure all dependencies are installed:

```bash
npm install
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimization

The production build includes:
- Minified JavaScript and CSS
- Optimized images
- Code splitting
- Tree shaking
- Gzip compression

## Security

- No sensitive data is stored in the frontend
- All user inputs are validated
- XSS protection enabled
- HTTPS recommended for production

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Support

For issues and questions:
- Open an issue on [GitHub](https://github.com/rahul700raj/event-organizer-pro/issues)
- Check existing issues for solutions

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Happy Event Planning! 🎉