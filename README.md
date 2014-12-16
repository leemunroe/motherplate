# Motherplate: A Responsive SCSS Boilerplate for Web Designers

Preview: http://leemunroe.github.io/motherplate/example.html

## What is this?
This is a bare bones HTML/CSS framework. This is what I'll typically start off most web projects with.

It includes a CSS reset and a bunch of minimal boilerplate styles that should come in useful for any project, including a responsive grid, typography, buttons, icons and forms.

It is not as in depth as something like <a href="http://html5boilerplate.com/">HTML5 Boilerplate</a> and doesn't include styled components like <a href="http://twitter.github.io/bootstrap/">Bootstrap</a>.

It can be used for a static web project as is, or you can copy the CSS folder into an existing framework (e.g. Rails).

Using Motherplate for your project? [Let me know](http://www.leemunroe.com/contact) so I can check it out.

## Features
* Uses SCSS partials to help structure the CSS.
* Uses Compass to take advantage of CSS3 mixins so you don't have to worry about browser prefixes (-webkit- etc.).
* Responsive-ready 12-column grid system to work across all devices.
* Uses Font-Awesome icon fonts for icons.
* Uses Normalize to reset browser styles.
* Only enough CSS to get you started; minimal visual styling with this boilerplate.
* Only the HTML/JS you need to get started; very little components with this boilerplate.

## How to Use
This will vary depending on the framework you are using. The following is how to for a basic static website.

### Install Ruby
Motherplate uses SCSS and Compass, which rely on Ruby.

OSX comes pre-installed with Ruby but if you need to you can <a href="http://www.ruby-lang.org/en/downloads/">download ruby here</a>.

### Install the compass gem
Open up terminal (or command line) and install compass .
```
$ gem update --system
$ gem install compass
```

### Download Motherplate
Download and copy the motherplate files into your new project folder.

### Run compass watch
In terminal go to your project folder and run compass.
```
$ cd sites/mynewproject/
$ compass watch
```

### Only edit the SCSS files
When you make changes to any of the SCSS files, your main.css file will be automatically updated.
You don't edit main.css directly, compass takes care of that for you.

If you were working on a Rails project for example, you could copy the files in the css folder to app/assets/stylesheets. The asset pipeline (and compass-rails gem) would take care of the rest.

## HTML
A bare bones index.html template.

## CSS
* `base/config` Put all your variables in here e.g. colors, padding, border radius - this helps with consistency across your project.
* `base/grid` A basic responsive grid system with 12 columns.
* `base/icons` This is Font Awesome's CSS stylesheet. Plug and play icons.
* `base/ie` Any styles that you need to add in order for Internet Explorer to work.
* `base/mixins` Reusabled Sass mixins e.g. clearfix.
* `base/normalize` This is Normalize, a CSS reset.
* `base/print` Basic print stylesheets to make your pages look better when printed.
* `base/responsive` Add any global responsive styles here e.g. hide elements, show elements, resize elements.
* `base/shame` Keep this to hand for any quick and dirty CSS you need to add but plan to tidy later.
* `base/type` Basic styling for your typography.
* `modules/alerts` Alerts to notify or give feedback to the user
* `modules/buttons` Styles for any text links and/or buttons.
* `modules/forms` Some basic form styles.
* `modules/media` Styles for images, video etc.
* `modules/nav` Inline navigation.
* `modules/other` Other reusable styles that come in handy.
* `modules/tables` Styles for tables.
* `pages/home` Styles that are specific to the homepage
* `pages/layout` Global layout styles e.g. header, footer, logo etc.
* `main.scss` This brings all the partials together. Compass only compiles files that don't have an underscore

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
* <a href="http://compass-style.org/">Compass Framework</a>
* <a href="http://sass-lang.com/">SASS</a>
* <a href="http://necolas.github.com/normalize.css/">normalize.css</a>
* <a href="http://fontawesome.io/">Font Awesome</a>
