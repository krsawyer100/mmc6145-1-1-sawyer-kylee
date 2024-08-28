# Module 1 Assignment: Create a Portfolio

(**NOTE:** View a rendered version of this file in VS Code with `ctrl-shift-v` or `cmd-shift-v`)

&nbsp;
## Introduction

For this assignment, you're going to build a personal portfolio using React, React Router, and Vite. The portfolio should show off your skills as a web developer and allow employers to contact you via social media, email, etc.

&nbsp;
## Setup

Copy the starter files inside of `unsolved` into the root directory of your GitHub repository.

Run `npm i` in the root directory of your repository (your `package.json` should be in the root directory).

To start developing, run `npm run dev`.

&nbsp;
## Instructions

Make a personal portfolio site for yourself using React. Your site must use clientside routing with React Router to create three different pages: home, about, and contact.

The homepage (on the / route), should show links/previews to at least two of your personal projects.

The about page should include some copy about you. This can be anything you wish to share with employers.

The contact page should include links to your linkedin profile and GitHub profile pages.

Additionally, your site must utilize two other components: header and project.

The header component should use a `header` tag and contain links to the homepage, about page, and contact page. The header component should be visible on all pages within the site.

The project component should be used on the homepage to render a list of projects (minimum 2). The component input and output may be anything you wish relating to your project like the title, an image, link, etc.


&nbsp;
## App Behavior

Your site should, at a minimum, have the same amount of content as [this example site](https://portfolio-example-vite-react.vercel.app).

However, your site may be styled to your liking and you are free to add as much extra content above the aforementioned requirements as you like.

**NOTE:** While completing this assignment, be cognizant of the links you are utilizing within your application. If you are linking to a location inside the app, you'll want to use a [Link component](https://reactrouter.com/en/main/components/link). If you're linking to an external site (like your portfolio projects), you'll want to use a [regular anchor tag](https://www.w3schools.com/tags/tag_a.asp).

Remember that navigating within an SPA should *not* re-request HTML from a server and trigger a reload of the entire page. SPAs "navigate" by using JavaScript to destroy and rebuild the HTML on the page. If you're using anchor tags to navigate within your site, you're defeating one of the main reasons of building an SPA.

&nbsp;
## Requirements for full credit

To receive full credit for this assignment, your program MUST:

  * Be implemented according to the above [instructions](#instructions).
  * Pass all [automated tests](#testing).
  * Be [deployed](#deployment) correctly.
  * Be [submitted](#submission) correctly. 

&nbsp;
## Testing

Automated tests are included with this assignment. To receive full credit, all automated tests must pass.

To run the tests, run:

```
npm test
```

To run the tests only once, run:

```
npm test -- run
```

&nbsp;
## Deployment

This assignment may be deployed for free with [Vercel](https://vercel.com/docs).

To deploy, make an account with Vercel and either [attach Vercel to your GitHub repository](https://vercel.com/docs/concepts/get-started/deploy#create-and-deploy-a-project) or [use the Vercel CLI](https://vercel.com/docs/cli) to [deploy](https://vercel.com/docs/cli/deploy) your site.

Vercel is pre-configured to be able to recognize and deploy Vite/React websites. That said, some additional configuration is required for Single Page Applications using client-side routing. These sites must include redirect instructions for Vercel to serve the `index.html` regardless of the requested path.

This file is included in the `/unsolved` folder of the assignment as `vercel.json`. Its contents are:

&nbsp;
```json
{
  "routes": [
    {
      "src": "/[^.]+",
      "dest": "/",
      "status": 200
    }
  ]
}
```

This code tells vercel to redirect all requests to `/`, which will allow the user to download the static files required for React/React Router to render based on the URL. 

&nbsp;
## Submission

When submitting this assignment, please include **ALL** of the following:

  * A link to the assignment's GitHub repository.
  * A link to the deployed application.
  * A screenshot of the automated test results.

Please verify that your links are correct when submitting.
