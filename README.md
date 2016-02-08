## Website Performance Optimization portfolio project

This project was forked from https://github.com/udacity/frontend-nanodegree-mobile-portfolio, to optimize the site in a few ways.

Repository branch used is gh-pages, which makes the site accessible with Github Pages at http://carlosrp.github.io/website-performance-optimization/

### What needed to be done

####Part 1: Optimize PageSpeed Insights score for index.html

1. I optimized as much as I could, probably too much inline css and js in the index.html, but it was the only way to go above 90% score for PageSpeed Insights for both  desktop and mobile.

2. I used grunt-contrib-htmlmin to automate minimization of inline js and css (and a few other HTML things) in index.html

####Part 2: Optimize Frames per Second in pizza.html

1. 60 fps for scrolling with moving pizzas: this one is still a work in progress; after trying many options I can get it to between 50-60 fps (in the FPS meter, but when recording timelines it actually shows much worse times).

The thing I don't like is that each single moving pizza has its own layer, so we end up with 200+ layers. This can't be good...

Any suggestions here are welcome!

2. Time to resize pizza < 5ms: replace use of determineDx function with much simpler and efficent code.
