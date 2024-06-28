# joeloconnor.nz

Welcome to the personal website and blog of Joel O'Connor. This is a [Next.js](https://nextjs.org/) site bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), and it uses the beta `app` directory for pages, layouts, and route handlers.

This site uses [Tailwind CSS](https://tailwindcss.com) along with the [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) plugin for styling.

I'm currently using [nodemailer](https://nodemailer.com) to send contact emails, but may look to replace this with a more robust solution in the near future.

My blog is authored using MDX and [Contentlayer](https://www.contentlayer.dev). I'll attempt to regularly post articles about my hobbies, projects, and learning.

## URLs

You can visit my site at the following URLs:

- https://joeloconnor.nz - the live site
- https://dev.joeloconnor.nz - the current development site

## Planned Features/Tasks

- Home page
  - [x] Social media links
  - [ ] Work experience
  - [ ] CV download link
  - [ ] Blog articles
- Blog
  - [x] Index page
  - [x] Post page
  - [ ] Categories
  - [ ] Social sharing images
  - [ ] Styled code blocks
  - [ ] RSS feed
- Header
  - [ ] Blog link
  - [ ] Mobile-friendly menu
  - [x] Dark mode toggle
  - [x] Logo
- Footer
  - [ ] Site links
  - [ ] Remove social media links
- Contact form
  - [x] Captcha
  - [x] Input validation
  - [ ] Faster email service
- About page
  - [ ] Social media links
  - [ ] NZ map with POIs
- #### Bug fixes
  - [x] Captcha theme doesn't update when dark mode toggle is pressed
  - [ ] Can't toggle to dark mode when multiple tabs are open in Safari
- #### Improvements
  - [ ] Update styles
  - [ ] Logo to use primary colour on homepage. Currently the other way around

## Getting Started

To run this site locally, first install the npm dependencies:

```bash
npm install
```

Next, create a file named `.env.local` in the root of your project and the following environment variables:

```properties
# SMTP Credentials
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASSWORD=
SMTP_FROM_ADDRESS=
SMTP_TO_ADDRESS=
```

Next, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Learn More

To learn more about the technologies used in this site, see the following resources:

- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Contentlayer](https://www.contentlayer.dev/docs) - the official Contentlayer documentation
- [MDX](https://mdxjs.com/docs) - the official MDX documentation
