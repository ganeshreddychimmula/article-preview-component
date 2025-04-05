# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:



If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.


### Structure review 1:

```html
  <body>
    <main class="container">
      <article class="preview-article">
        <figure class="article-img-container">
          <img src="./images/drawers.jpg" alt="Image of drawers" />
        </figure>
        <header>
          <h2 class="article-heading">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h2>
        </header>
        <p class="article-description">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
        <footer class="footer">
          <div class="profile-user">
            <img src="./images/avatar-michelle.jpg" alt="" aria-hidden="true" />
            <address class="user-details">
              <h3>Michelle Appleton</h3>
              <time> 28 Jun 2020 </time>
            </address>
          </div>
          <div class="share-container">
            <nav class="navi-menu">
              <span>Share</span>
              <ul class="navigation-list">
                <li class="nav-icons">
                  <a href="#" aria-label="share on facebook">
                    <img src="/images/icon-facebook.svg" alt="facebook icon" />
                  </a>
                </li>
                <li class="nav-icons">
                  <a href="#" aria-label="share on twitter">
                    <img src="./images/icon-twitter.svg" alt="twitter icon"/></a>
                </li>
                <li class="nav-icons">
                  <a href="#" aria-label="share on pinterest">
                    <img
                      src="./images/icon-pinterest.svg"
                      alt="pinterest icon"
                    />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <button class="share-button" aria-label="share this article">
            <img src="./images/icon-share.svg" alt="" aria-hidden="true" />
          </button>
        </footer>
      </article>
    </main>
  </body>
```
Here's feedback with some suggestions for improvement(from claude):

### Strengths:
1. Proper use of semantic elements like `<article>`, `<figure>`, `<header>`, and `<footer>`
2. Good use of `<time>` for the publication date
3. Clean organization of content sections
4. Appropriate use of `aria-label` for social sharing links
5. Alt text for images is present

### Areas for improvement:

1. **Time element**: The `<time>` element should include a `datetime` attribute with a machine-readable format:
   ```html
   <time datetime="2020-06-28">28 Jun 2020</time>
   ```

2. **Author markup**: Consider using `<address>` for the author information:
   ```html
   <address class="user-details">
     <h3>Michelle Appleton</h3>
     <time datetime="2020-06-28">28 Jun 2020</time>
   </address>
   ```

3. **Navigation purpose**: The `<nav>` element is typically for major site navigation - for social sharing, a simple `<div>` with appropriate ARIA might be more appropriate:
   ```html
   <div class="social-share" role="group" aria-label="Share options">
     <h3>Share</h3>
     <ul class="social-list">
       <!-- items -->
     </ul>
   </div>
   ```

4. **Share button**: The share button should include a type and potentially a more descriptive label:
   ```html
   <button type="button" class="share-button" aria-label="Share this article">
     <img src="./images/icon-share.svg" alt="" aria-hidden="true" />
   </button>
   ```
   Note that when the image is purely decorative and accompanied by aria-label, the alt text can be empty.

5. **Heading hierarchy**: The `<h3>` for "Share" might be reconsidered - it's not really a section heading but more of a label. Consider using a `<span>` with appropriate styling instead.

6. **Profile image**: Consider adding `aria-hidden="true"` to the profile picture since it's decorative and using empty alt text:
   ```html
   <img src="./images/avatar-michelle.jpg" alt="" aria-hidden="true" />
   ```

7. **Linking**: The article title could be wrapped in a link if it's meant to lead to the full article:
   ```html
   <h2 class="article-heading">
     <a href="/full-article">Shift the overall look and feel...</a>
   </h2>
   ```

### Choosing class-names Dilemma
Here's a clean and concise summary of better class naming practices:

✅ Better Class Naming – Notes

 1. **Be Descriptive & Semantic**
- Use meaningful names that reflect purpose, not appearance.  
  E.g., `.share-button` instead of `.box1`

---

 2. **Follow BEM Convention**
- Structure: `block__element--modifier`
```html
<div class="card">
  <h2 class="card__title"></h2>
  <button class="card__button card__button--active"></button>
</div>
```

---

3. **Avoid Visual-Based Names**
- ❌ `.red-text`  
- ✅ `.error-message`

---

4. **Consistent Casing**
- Prefer `kebab-case` for HTML/CSS  
  (e.g., `share-button`, `nav-item`)

---

5. **Group by Feature/Component**
- Use structured names like:
  - `.article-preview__heading`
  - `.profile-user__avatar`

---

6. **Prefix Utility Classes (if used)**
- For reusable helpers:  
  `u-margin-top-sm`, `u-text-center`

---

Bonus Tips
- Use **SASS** for better organization (nesting, variables).
- Consider **Tailwind CSS** for utility-first workflows.

---

Let me know if you want a live example refactored using BEM!




### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
