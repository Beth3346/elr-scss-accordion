# elr-scss-accordion

[![Build Status](https://travis-ci.org/Beth3346/elr-scss-accordion.svg?branch=master)](https://travis-ci.org/Beth3346/elr-scss-accordion)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/npm/dm/elr-scss-accordion.svg?style=flat)](https://npmjs.com/package/elr-scss-accordion) [![Greenkeeper badge](https://badges.greenkeeper.io/Beth3346/elr-scss-accordion.svg)](https://greenkeeper.io/)

a scss mixin for accordions

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install elr-scss-accordion --save
yarn add elr-scss-accordion
```

### Installation

Its up to you to wire up the JavaScript to provide the accordion functionality. This way you can use any framework, library or even vanilla JavaScript.

#### Arguments

- label-color
- border-radius
- color
- border-color
- icon-color

#### Scss

```scss
@import '~elr-scss-accordion';

.elr-accordion {
  @include elr-accordion(
    $config: (
      label-color: #333,
      border-radius: 3px,
      color: #333,
      border-color: #333,
      icon-color: #333
    )
  );
}
```

#### HTML

```html
<div class="accordion elr-accordion">
  <h2 class="elr-accordion-label active">
    <i class="elr-accordion-icon fa fa-angle-down"></i>Label 1
  </h2>
  <div class="elr-accordion-content active">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nobis ab illum
      a maiores animi laboriosam corrupti eos necessitatibus tempore?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil adipisci,
      dolore libero rerum natus numquam.
    </p>
  </div>
  <h2 class="elr-accordion-label">
    <i class="elr-accordion-icon fa fa-angle-down"></i>Label 2
  </h2>
  <div class="elr-accordion-content">
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur eos
      animi illum voluptas obcaecati commodi nobis et, nam vero soluta explicabo
      recusandae unde provident perferendis. Neque optio odio numquam commodi.
    </p>
  </div>
  <h2 class="elr-accordion-label">
    <i class="elr-accordion-icon fa fa-angle-down"></i>Label 3
  </h2>
  <div class="elr-accordion-content">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
      perferendis quo, minima accusantium, nihil, eius distinctio ea rem
      consequatur optio culpa quod harum? Dolores, perspiciatis.
    </p>
  </div>
  <h2 class="elr-accordion-label">
    <i class="elr-accordion-icon fa fa-angle-down"></i>Label 4
  </h2>
  <div class="elr-accordion-content">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae enim
      inventore minus sunt distinctio vitae obcaecati sequi, unde in placeat nam
      officiis explicabo cum quas dignissimos optio.
    </p>
  </div>
</div>
```

## License

SEE LICENSE IN LICENSE.md
