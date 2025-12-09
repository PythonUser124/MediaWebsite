# 🚀 Quick Start Guide

## What You Have

A complete, professional news website with all required components for your Campaign Trail media project!

## First Steps (Do These Now!)

### 1. Open the Website
- Navigate to the `media-website` folder
- Double-click `index.html` to open it in your browser
- Explore all the pages using the navigation menu

### 2. Customize Network Personalities
**File: `personalities.html`**
- Add your anchor's name and character description
- Add your pundit's information
- Add your reporters' information
- Upload team photos to `images/` folder

### 3. Fill in the Press Conference Article
**File: `articles/press-conference.html`**
- All questions are already organized by type!
- After the press conference, add candidate responses
- Add your analysis section
- Include notable quotes

## What to Fill In

### Priority 1 - Essential Content
- [ ] `personalities.html` - Add your team members
- [ ] `about.html` - Customize if needed (mostly complete)
- [ ] `articles/press-conference.html` - Add responses and analysis after press conference

### Priority 2 - Main Articles
- [ ] `articles/interview.html` - After conducting candidate interview
- [ ] `articles/investigation.html` - Your investigative report
- [ ] `articles/profile.html` - The candidate you didn't interview
- [ ] `articles/events.html` - Campaign events you cover

### Priority 3 - Additional Content
- [ ] `articles/breaking.html` - Breaking news story
- [ ] `articles/pundit.html` - Pundit commentary
- [ ] `articles/human-interest.html` - Feature story
- [ ] `polling.html` - Your poll results and data
- [ ] `social.html` - Three social media posts

### Priority 4 - Final Touches
- [ ] `index.html` - Upload your finished newscast video
- [ ] `index.html` - Add your advertisements
- [ ] All pages - Add photos and images

## How to Edit

1. **Open any `.html` file in a text editor** (Notepad, VS Code, etc.)
2. **Look for text in [brackets]** - this is placeholder text to replace
3. **Replace it with your actual content**
4. **Save the file**
5. **Refresh your browser** to see changes

## Example: Adding Your Anchor

**Before:**
```html
<h3 class="personality-name">[Anchor Name]</h3>
<p class="personality-bio">
    [Add character name and description here...]
</p>
```

**After:**
```html
<h3 class="personality-name">Squidward Tentacles</h3>
<p class="personality-bio">
    Squidward brings his distinctive voice and sophisticated perspective to BBNN's anchor desk. Known for his refined taste and no-nonsense approach to journalism, he cuts through campaign spin to deliver the facts viewers need.
</p>
```

## Adding Your Broadcast Video

**Option 1: Upload Video File**
```html
<!-- In index.html, replace the placeholder div with: -->
<video controls width="100%" style="max-width: 900px;">
    <source src="videos/newscast.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
```

**Option 2: YouTube Embed**
```html
<iframe width="100%" height="500" style="max-width: 900px;"
    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
    frameborder="0" allowfullscreen>
</iframe>
```

**Option 3: Google Drive**
1. Upload video to Google Drive
2. Set sharing to "Anyone with link can view"
3. Get embed code or shareable link
4. Add to the video section

## Adding Images

1. Create an `images` folder if you haven't (already exists)
2. Save your photos/graphics there
3. Reference them in HTML:

```html
<img src="images/anchor-photo.jpg" alt="Description">
```

## Team Workflow Suggestion

**Divide the work:**
1. **Person 1**: Network identity, personalities page, about page
2. **Person 2**: Press conference coverage, interview article
3. **Person 3**: Investigative report, breaking news
4. **Person 4**: Campaign events, profile, human interest
5. **Person 5**: Pundit commentary, polling data, social media
6. **Everyone**: Final review and video production

## Pre-Submission Checklist

- [ ] All placeholder text `[like this]` has been replaced
- [ ] Team member names and bios added
- [ ] Broadcast video uploaded and working
- [ ] All 8 articles completed
- [ ] Polling data added with visualizations
- [ ] 3 social media posts created
- [ ] Advertisements added
- [ ] All images uploaded and displaying
- [ ] Checked for spelling/grammar errors
- [ ] Tested all links
- [ ] Viewed on different browsers

## Getting Help

1. Read the full `README.md` for detailed instructions
2. Check the comments in each HTML file - they have helpful tips
3. Look at the example content already in the templates
4. Ask your team members for help

## Pro Tips

✅ **DO:**
- Save your work frequently
- Test in a browser after each change
- Keep backups of your files
- Use consistent writing style across all articles
- Add photos and visuals - they make content engaging
- Proofread everything before submission

❌ **DON'T:**
- Delete the CSS or JS files
- Change file names (breaks links)
- Forget to replace ALL placeholder text
- Leave broken image links
- Submit without testing all pages

---

## You're All Set! 🎉

Your website is professional, complete, and ready to customize. Just fill in the content and you'll have an impressive news network website for your project!

**Questions?** Check the README.md or ask your team!
