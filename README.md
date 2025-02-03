# Cookies To Go 🍪

<p align="center">
  <img src="https://i.ibb.co/tM55Sq3Q/Cookies-To-Go-Logo.png" alt="Markdown To Go Logo" width="200"/>
</p>

<p align="center">
A lightweight, customizable drop-in cookie consent banner solution for web applications.
</p>

## Features 🚀

- **Zero Dependencies**: Pure JavaScript implementation with no external dependencies
- **Fully Customizable**: Extensive theming and configuration options
- **Responsive Design**: Works seamlessly on all devices and screen sizes
- **Accessibility**: WCAG 2.1 compliant with full keyboard navigation and screen reader support
- **Lightweight**: Only ~10KB minified
- **Cross-Browser Compatible**: Works on all modern browsers
- **Self-Contained**: A single drop-in JavaScript file, that can be called from multiple locations

## Screenshots 📸
Desktop View
![Desktop View of the Cookie Banner](https://i.ibb.co/Kpz3Dj0M/cookiestogo-1.png)
Cookie Policy Banner
![Cookie Policy Popup](https://i.ibb.co/tpvjNX8w/cookiestogo-2.png)
Mobile View
![Mobile View of the Cookie Banner](https://i.ibb.co/b5r9zgWz/cookiestogo-3.png)

## Quick Start 🎯

### 1. Installation

Add the script to your HTML:

```html
<script src="path/to/cookiestogobanner.js"></script>
```

### 2. Basic Usage

The banner will initialize automatically with default settings. No additional code required!

### 3. Customization

Configure the banner by modifying the `COOKIE_BANNER_CONFIG` part in the code.

## API Reference 📚

### Public Methods

```javascript
// Show cookie settings
CookiesToGo.showSettings();

// Get current cookie preference
CookiesToGo.getPreference();
```

### Configuration Options

| Option | Type | Description |
|--------|------|-------------|
| position | string | Banner position ('top' or 'bottom') |
| cookieExpireDays | number | Days until cookie consent expires |
| bannerText | string | Main banner message |
| theme | object | Color and styling configurations |
| callbacks | object | Event callback functions |

## Advanced Features 🛠️

### Custom Callbacks

```javascript
callbacks: {
    onAcceptAll: () => {
        // Custom logic when all cookies are accepted
        initializeAnalytics();
    },
    onDecline: () => {
        // Handle cookie rejection
        disableNonEssentialFeatures();
    }
}
```

### Custom Cookie Policy

Either link to an external policy:
```javascript
cookiePolicyLink: 'https://your-website.com/cookie-policy'
```

Or use the built-in popup:
```javascript
cookiePolicyPopupText: `Your custom policy HTML here`
```

## Implementation Guide 📝

1. **Download**: Get the script from repository
2. **Include**: Add to your HTML file
3. **Configure**: Customize settings if needed
4. **Test**: Verify functionality across devices
5. **Deploy**: Push to production

## License 📄

MIT License - feel free to use in personal and commercial projects.

## Support 🌟

If you find this project helpful, please consider:
- Giving it a star ⭐
- [Buying me a coffee](https://buymeacoffee.com/uzayyildirim)
