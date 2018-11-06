### Building your site

```
npm run build
```
Copy the content of the ``public`` folder to your webhost or use a website like Netlify which automates that for you.

Make sure to use the right build command in your build settings e.g. if you use Netlify!
Per default Netlify sets it to `gatsby build` but you have to use `yarn run build` to run postcss before building the Gatsby site.