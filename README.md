# PropertyHub - Real Estate Portal

A modern, mobile-first property rental and sales website built with HTML, CSS, JavaScript, and Decap CMS (formerly Netlify CMS).

## Features

- **Mobile-First Design**: Responsive design optimized for all devices
- **Neutral Color Scheme**: Inviting forest green and warm taupe palette
- **Content Management**: Easy property management with Decap CMS
- **Search Functionality**: Advanced property search with filters
- **Property Listings**: Comprehensive property details and galleries
- **Agent Profiles**: Agent management and contact information
- **Development Projects**: Showcase new developments and projects

## Color Scheme

The website uses a neutral and inviting color palette:

- **Primary**: Deep Forest Green (#2c5530)
- **Secondary**: Warm Taupe (#8b7355)
- **Accent**: Warm Gold (#d4a574)
- **Background**: Off-white (#fafafa) and Light Gray (#f5f5f5)
- **Text**: Dark Gray (#2d3748) and Medium Gray (#718096)

## Technology Stack

- **Frontend**: HTML5, CSS3 (Custom Variables), Vanilla JavaScript
- **CMS**: Decap CMS for content management
- **Deployment**: Netlify
- **Authentication**: Netlify Identity
- **Images**: Unsplash integration for demo content

## Project Structure

```
property-portal/
├── index.html              # Main homepage
├── css/
│   └── style.css           # Main stylesheet with mobile-first design
├── js/
│   └── main.js             # Interactive functionality
├── admin/
│   ├── index.html          # Decap CMS admin interface
│   └── config.yml          # CMS configuration
├── _properties/            # Property listings (managed by CMS)
├── _projects/              # Development projects (managed by CMS)
├── _agents/                # Agent profiles (managed by CMS)
├── _data/                  # Site settings and configuration
├── images/uploads/         # Uploaded media files
├── netlify.toml           # Netlify deployment configuration
└── README.md              # This file
```

## Setup Instructions

### 1. Deploy to Netlify

1. Fork or clone this repository
2. Connect your repository to Netlify
3. Deploy with these settings:
   - Build command: `echo 'Static site build complete'`
   - Publish directory: `.` (root)

### 2. Enable Netlify Identity

1. Go to your Netlify site dashboard
2. Navigate to Identity tab
3. Click "Enable Identity"
4. Configure registration preferences (invite-only recommended)
5. Enable Git Gateway in Identity settings

### 3. Access the Admin Panel

1. Visit `https://your-site.netlify.app/admin/`
2. Create an admin account or log in
3. Start managing your properties, projects, and agents

## Content Management

### Properties
- Add, edit, and delete property listings
- Upload multiple images per property
- Set property details (bedrooms, bathrooms, features)
- Assign agents to properties
- Manage property status (active, pending, sold, rented)

### Development Projects
- Showcase new developments
- Add project details and amenities
- Upload project images and renderings
- Manage project status and completion dates

### Agents
- Create agent profiles
- Add contact information and photos
- Manage agent specialties and languages
- Social media integration

### Site Settings
- Update site-wide settings
- Manage contact information
- Configure social media links
- SEO settings

## Customization

### Colors
The color scheme can be easily modified by updating the CSS variables in `css/style.css`:

```css
:root {
    --primary: #2c5530;        /* Deep forest green */
    --secondary: #8b7355;      /* Warm taupe */
    --accent: #d4a574;         /* Warm gold */
    /* ... other color variables */
}
```

### Layout
The website uses CSS Grid and Flexbox for responsive layouts. Media queries are mobile-first:

- Mobile: Base styles
- Tablet: `@media (min-width: 768px)`
- Desktop: `@media (min-width: 1024px)`
- Large Desktop: `@media (min-width: 1200px)`

### JavaScript Functionality
Interactive features include:
- Mobile menu toggle
- Search form with dynamic price ranges
- Tab switching (Buy/Rent, Sale/Rent)
- Smooth scrolling
- Image lazy loading
- Form validation

## Performance Features

- **Lazy Loading**: Images load only when needed
- **Responsive Images**: Optimized image sizes for different devices
- **CSS Variables**: Efficient styling with custom properties
- **Minimal Dependencies**: Pure JavaScript without heavy frameworks
- **Optimized Assets**: Compressed and optimized resources

## Accessibility

- **ARIA Labels**: Proper labeling for screen readers
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Visible focus indicators
- **Semantic HTML**: Proper heading hierarchy and structure
- **Alt Text**: Descriptive alt text for all images

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across different devices
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Support

For questions or support, please contact the development team or create an issue in the repository.

---

Built with ❤️ for the real estate industry
