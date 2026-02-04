# Wedding Website Project - Development Guide

## Project Overview
A simple, responsive wedding website built with HTML, CSS, and JavaScript. Perfect for sharing wedding details, photos, and RSVP information with guests.

## Project Structure
- `index.html` - Main HTML file with all sections
- `css/styles.css` - Complete styling with CSS variables
- `js/script.js` - Interactive features (navigation, RSVP form, animations)
- `assets/` - Folder for images and media files
- `README.md` - User guide and customization instructions

## Setup Completed
✅ All necessary files created and configured
✅ Responsive design implemented (mobile, tablet, desktop)
✅ All sections ready to customize
✅ RSVP form with validation
✅ Smooth navigation and animations

## Quick Start

### 1. Open Website
Simply open `index.html` in any web browser to view the website locally.

### 2. Customize Content
Edit `index.html` to add:
- Your names and story
- Wedding date and time
- Venue information and addresses
- Contact email and phone
- Gallery descriptions

### 3. Add Photos
1. Place your photos in the `assets/` folder
2. Update gallery items in `index.html` with image sources
3. Replace placeholder text with photo descriptions

### 4. Change Colors (Optional)
Open `css/styles.css` and modify the CSS variables at the top:
```css
:root {
    --primary-color: #d4a574;      /* Change main color */
    --secondary-color: #8b5a3c;    /* Change secondary color */
    /* ... other colors ... */
}
```

## Key Features

### Navigation
- Sticky header with smooth scrolling
- Active section highlighting
- Mobile hamburger menu
- All anchor links work smoothly

### Sections
1. **Hero** - Welcome message and wedding date
2. **Our Story** - Your love story and highlights
3. **Gallery** - Photo showcase
4. **Event Details** - Ceremony and reception info
5. **RSVP** - Guest response form with validation
6. **Contact** - Contact information

### RSVP Form
- Validates all required fields
- Collects: Name, Email, Number of Guests, Attendance, Dietary Restrictions
- Shows success/error messages
- Currently logs to console (connect to backend if needed)

## Hosting Options

### GitHub Pages (Free)
1. Create GitHub repository
2. Push files to repo
3. Enable Pages in settings
4. Live at `username.github.io/wedding`

### Netlify (Free & Easy)
1. Go to netlify.com
2. Drag and drop wedding folder
3. Instant deployment

### Traditional Hosting
Upload files via FTP to any web host

## Customization Checklist

- [ ] Update wedding date throughout the site
- [ ] Write your love story in the Story section
- [ ] Add ceremony time and venue details
- [ ] Add reception time and venue details
- [ ] Update hotel information
- [ ] Add RSVP deadline date
- [ ] Update contact email address
- [ ] Update contact phone number
- [ ] Add your photos to assets folder
- [ ] Update gallery image sources
- [ ] Test on mobile and desktop
- [ ] Share website URL with guests

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## File Notes

### index.html
- All content is in semantic HTML5 sections
- Easy to find and update
- Placeholder text clearly marked
- Forms include proper labels for accessibility

### styles.css
- CSS variables for easy theme customization
- Mobile-first responsive approach
- Two main breakpoints: 768px and 480px
- All colors, shadows, and transitions use variables

### script.js
- Navigation menu toggle (hamburger)
- Active section highlighting
- Form validation and handling
- Smooth scroll behavior
- Optional: Can be extended with more features

## Tips for Best Results

1. **Photos**: Use high-quality, well-lit images
2. **Colors**: Test new color combinations for readability
3. **Mobile**: Always check how it looks on phones
4. **Updates**: Keep RSVP deadline current
5. **Response**: Check your contact email regularly
6. **Sharing**: Use QR codes or short URLs for easy sharing

## Future Enhancements

If you want to expand later:
- Connect RSVP form to email or database
- Add registry or gift information
- Create a timeline of your relationship
- Add wedding party information
- Include travel/accommodation guide
- Add music or background audio
- Create a countdown timer
- Add live updates on wedding day

## Support

- Check HTML comments for section descriptions
- Refer to README.md for detailed customization guide
- Validate HTML at: validator.w3.org
- Test responsiveness: responsivedesignchecker.com

---

Ready to customize and share your wedding with the world! 💕
