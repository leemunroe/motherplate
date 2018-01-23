# Motherplate: A Responsive SCSS Boilerplate for Web Designers

Preview: https://leemunroe.github.io/motherplate/example.html

## What is this?
This is a bare bones HTML/CSS framework. This is what I'll typically start off most web projects with.

It includes a CSS reset and a bunch of minimal boilerplate styles that should come in useful for any project, including a responsive grid, typography, buttons, icons and forms.

It is not as in depth as something like <a href="https://html5boilerplate.com/">HTML5 Boilerplate</a> and doesn't include styled components like <a href="https://getbootstrap.com/">Bootstrap</a>.

It can be used for a static web project as is, or you can copy the CSS folder into an existing framework (e.g. Rails).

## Features
* Uses SCSS partials to help structure the CSS.
* Responsive-ready 12-column grid system to work across all devices.
* Uses Font Awesome icon fonts for icons.
* Uses Normalize to reset browser styles.
* Only enough CSS to get you started; minimal visual styling with this boilerplate.
* Only the HTML/JS you need to get started; very little components with this boilerplate.

## How to Use
This will vary depending on the framework you are using. The following is how to for a basic static website.

### Install Node.js and use Grunt
Motherplate uses SCSS. This particular repo uses [Grunt](https://gruntjs.com/) to compile the SCSS to CSS and [NPM](https://www.npmjs.com/) to manage external dependencies like FontAwesome and Normalize.

You will need [Node.js](https://nodejs.org/download/). 

Open up terminal (or command line) and run the default Grunt task.
```
$ npm install
$ grunt
```

Grunt will watch for any changes you make to your SCSS files and compile your new `main.css` file.

## HTML
A bare bones index.html template.

## CSS
* `base/config` Put all your variables in here e.g. colors, padding, border radius - this helps with consistency across your project.
* `base/grid` A basic responsive grid system with 12 columns.
* `base/ie` Any styles that you need to add in order for Internet Explorer to work.
* `base/mixins` Reusabled Sass mixins e.g. clearfix.
* `base/print` Basic print stylesheets to make your pages look better when printed.
* `base/responsive` Add any global responsive styles here e.g. hide elements, show elements, resize elements.
* `base/shame` Keep this to hand for any quick and dirty CSS you need to add but plan to tidy later.
* `base/type` Basic styling for your typography.
* `components/alerts` Alerts to notify or give feedback to the user
* `components/buttons` Styles for any text links and/or buttons.
* `components/forms` Some basic form styles.
* `components/media` Styles for images, video etc.
* `components/nav` Inline navigation.
* `components/other` Other reusable styles that come in handy.
* `components/tables` Styles for tables.
* `pages/home` Styles that are specific to the homepage
* `pages/layout` Global layout styles e.g. header, footer, logo etc.
* `main.scss` This brings all the partials together. 

As your project grows and you need to add more styles just create new .scss files and reference them anywhere in your main.scss file.

## JavaScript ##
* I've included some basic Javascript including the latest jQuery and the document ready function.

## Images ##
* There is a /img folder for images.
* For images referenced in the CSS I tend to keep them in the css/assets/ folder e.g. sp.png is a sprite I can reference.
* Images referenced in the HTML are stored in the /img folder.

## Fonts ##
* Included font awesome for icons

## Further Documentation ##
* <a href="http://sass-lang.com/">SASS</a>
* <a href="https://necolas.github.io/normalize.css/">normalize.css</a>
* <a href="http://fontawesome.io/">Font Awesome</a>
