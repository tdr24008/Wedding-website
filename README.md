# 💍 Our Wedding Website

A modern, responsive wedding website to celebrate your special day.

## Features

✨ **Beautiful Design**
- Elegant and modern interface with a warm color palette
- Fully responsive for mobile, tablet, and desktop devices
- Smooth scrolling and animations

🎯 **Key Sections**
- **Home/Hero**: Eye-catching landing section with wedding date
- **Our Story**: Share how you met and fell in love
- **Gallery**: Showcase your favorite photos and moments
- **Wedding Details**: Ceremony and reception information
- **RSVP Form**: Easy way for guests to confirm attendance
- **Contact**: Get in touch with your guests

📱 **Responsive Navigation**
- Sticky navigation bar with smooth scrolling
- Hamburger menu for mobile devices
- Active section highlighting

🎨 **Customizable**
- Easy to update text, dates, and contact information
- Color scheme can be customized via CSS variables
- Add your own photos to the gallery

## File Structure

```
wedding/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   └── script.js       # JavaScript functionality
├── assets/             # Folder for images and media
└── README.md          # This file
```

## Getting Started

1. **Open the website**: Simply open `index.html` in your web browser
2. **Customize content**: Edit the text in `index.html` to add your information
3. **Add photos**: Place your images in the `assets/` folder and update the HTML
4. **Adjust colors**: Modify CSS variables in `styles.css` if desired
5. **Update details**: Fill in your venue details, dates, and contact information

## Customization Guide

### Update Your Information

Edit `index.html`:
- Wedding date (search for "June 14, 2026")
- Couple names and story
- Venue and address information
- Contact email and phone number
- RSVP deadline date

### Change Colors

Edit `css/styles.css` at the top:

```css
:root {
    --primary-color: #d4a574;      /* Main color (gold) */
    --secondary-color: #8b5a3c;    /* Secondary color (brown) */
    --accent-color: #f5e6d3;       /* Light background color */
    --dark-color: #2c2c2c;         /* Dark text color */
    --light-color: #f9f7f4;        /* Light background */
}
```

### Add Photos

1. Create an `assets/` folder if it doesn't exist
2. Add your photos there
3. Update the gallery in `index.html`:

```html
<div class="gallery-item">
    <img src="assets/your-photo.jpg" alt="Description">
    <p>Photo Title</p>
</div>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Features & Functionality

### RSVP Form
- Collects guest name, email, number of guests, attendance confirmation
- Includes dietary restrictions field
- Form validation and success message
- Currently logs data to browser console (integrate with backend as needed)

### Navigation
- Smooth scroll to sections
- Active section highlighting
- Mobile hamburger menu
- Sticky header for easy navigation

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px and 480px
- Touch-friendly interface elements

## Hosting Your Website

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Push your files to the repository
3. Enable GitHub Pages in repository settings
4. Your site will be live at `username.github.io/wedding`

### Option 2: Netlify (Free)
1. Go to [Netlify.com](https://netlify.com)
2. Drag and drop your wedding folder
3. Your site will be live instantly

### Option 3: Traditional Hosting
1. Contact any web hosting provider
2. Upload files via FTP
3. Point domain to your hosting

## Sharing Your Website

Once hosted, you can share the URL with your guests via:
- Email invitations
- Text messages
- Social media
- Wedding announcements

## Tips for Success

- 📸 Use high-quality, well-lit photos
- 💬 Write a heartfelt story about your relationship
- 📅 Update dates and deadlines regularly
- 📧 Use a contact email that you check frequently
- 📱 Test on mobile devices before sharing
- 🎨 Ensure all text is easy to read (good contrast)

## Need Help?

- Check the HTML comments for section descriptions
- Test in different browsers and devices
- Validate HTML at [W3C Validator](https://validator.w3.org/)
- Check console for any JavaScript errors

## License

This template is free to use and modify for your personal wedding website.

---

Made with ❤️ for your special day!

# Wedding-website
I'm getting married
