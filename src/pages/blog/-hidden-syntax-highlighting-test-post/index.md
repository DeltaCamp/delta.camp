---
layout:    post
title:     "Test Post to show off Syntax Highlighting"
author:    "Chuck Bergeron"
category:  blog
date:      "2016-07-05T15:00:00.200Z"
draft: true
tags: ["music", "ableton", "live"]
shared_square_image: posts/LoFiFox-running-animated-still-lightboxed_114.jpg
---


A couple of months ago I was mussing around integrating noise, vigenette, chromatic aberration, and other image effects into Astervoid 2000.

<!-- more -->

```javascript{1,4-6}
// In your gatsby-config.js

plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-prismjs`,
      ]
    }
  }
]
```
<span class="caption">
    <a href="https://gist.github.com/chuckbergeron/0f6b1184f750dd8607c574247330428e">Download/Gist</a> - <a href="https://gist.githubusercontent.com/chuckbergeron/0f6b1184f750dd8607c574247330428e/raw/bb35cd6617f24d9833e21dcb4a84091456870fcc/DynamicCameraEffects.cs">Raw</a>
</span>

I can highlight `css^.some-class { background-color: red }` with CSS syntax.


```js{1,2,4-7,9-11}
import React from 'react'
import PropTypes from 'prop-types'

import Nav from 'src/components/Nav'
import MetaTags from 'src/components/MetaTags'
import Footer from 'src/components/Footer'
import { Transition } from 'src/components/Transition'

import { getPurePathname } from 'src/utils/getPurePathname'

import 'src/assets/stylesheets/deltacamp.css.scss'

require("prismjs/plugins/line-numbers/prism-line-numbers.css")

if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]')
}

class Layout extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  }

  static defaultProps = {
    location: {}
  }

  currentPage = () => {
    const pathname = this.props.location.pathname
    return getPurePathname(pathname)
  }

  render() {
    return (
      <div>
        <MetaTags {...this.props} cssClass={this.currentPage()} />
        <Nav />
        <Transition location={this.props.location}>
          <div className="animatable-content">
            { this.props.children }
            <Footer />
          </div>
        </Transition>
      </div>
    )
  }
}

export default Layout

```

<div>
  <video id="gif-mp4" poster="https://media.giphy.com/media/l0K46X5vYigLTUkZq/200_s.gif" style="margin:0;padding:0" width="100%" height="292" autoplay="" loop="">
    <source src="https://media.giphy.com/media/l0K46X5vYigLTUkZq/giphy.mp4" type="video/mp4">
      Your browser does not support the mp4 video codec.
    </source>
  </video>

  <div id="noplay" style="display:none">
    Your browser does not support the mp4 video codec.
  </div>
  <span class="caption">
    Example of chromatic aberration offset &amp; bloom intensity changing over time.
  </span>
</div>
