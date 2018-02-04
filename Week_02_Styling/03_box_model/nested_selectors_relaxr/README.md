# Nested Selectors: A Core Style Guide

### Description 

Large websites should be equipped with a complete style guide. This is useful for content writers as they will have a toolkit of html to use that is pre-styled and consistent with the brand. A variety of selector approaches will be needed.

### Selector Examples

#### Select Multiple Elements
Use a comma
.myClass, p, h2 {}

#### Select element only inside another element
.myClass p {}

#### Select element only when it's an IMMEDIATE child of a particular element
.myclass > p {}

#### Select elements that are exact match for both tag AND class combination
p.myclass {}


### Requirements and Instructions

* All styles should ONLY apply to elements inside the class .relaxr-corestyles