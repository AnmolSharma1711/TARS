# Quick Reference - How to Edit Content

## Adding/Removing Cards

### Features (About Page)
**File:** `src/data/featuresData.js`

To add a card:
```javascript
{
  id: 5,
  icon: '🎯',
  title: 'New Feature',
  description: 'Description here',
}
```

To remove: Delete the entire object from the array.

---

### Team Members
**File:** `src/data/teamMembersData.js`

To add a member:
```javascript
{
  id: 7,
  name: 'Jane Smith',
  role: 'Developer',
  subtitle: '& Designer',
  image: 'https://image-url.com/photo.jpg',
  linkedin: 'https://linkedin.com/in/username',
  github: 'https://github.com/username',
}
```

To remove: Delete the entire object from the array.

---

### Events
**File:** `src/data/eventsData.js`

To add an event:
```javascript
{
  id: 7,
  title: 'New Workshop',
  date: 'April 10, 2024',
  time: '2:00 PM - 5:00 PM',
  location: 'Tech Lab',
  description: 'Workshop description here...',
  attendees: 50,
  image: 'https://image-url.com/event.jpg',
  category: 'Workshop',
}
```

To remove: Delete the entire object from the array.

---

## File Structure Quick View

```
src/
├── data/
│   ├── featuresData.js ← Edit features here
│   ├── teamMembersData.js ← Edit team members here
│   └── eventsData.js ← Edit events here
│
├── components/ ← Component files with their CSS
│   ├── FeatureCards.jsx + FeatureCards.css
│   ├── TeamCard.jsx + TeamCard.css
│   └── EventCards.jsx + EventCards.css
│
└── pages/ ← Page wrapper components
    ├── HomePage.jsx
    ├── AboutPage.jsx
    ├── TeamPage.jsx
    └── EventsPage.jsx
```

## Important Rules

1. **IDs must be unique** - Each card needs a different ID number
2. **Don't forget commas** - Between objects in the array
3. **Export statement** - Keep the `export const` line at the top
4. **Image URLs** - Use full URLs (https://...)

## Component Structure

Each component now:
- Has its own CSS file
- Imports data from `src/data/`
- Is cleanly separated and maintainable

## Example: Complete Card Addition

1. Open the appropriate data file
2. Copy an existing object
3. Paste it at the end of the array (before the `]`)
4. Add a comma after the previous object
5. Update all fields with new data
6. Make sure the ID is unique
7. Save the file

That's it! The card will automatically appear on the website.
