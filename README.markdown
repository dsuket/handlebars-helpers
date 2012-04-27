What's this ?
===============
helper functions for [handlebars](http://handlebarsjs.com/) JavaScript template engine.


Helpers
=======

each\_with\_idx
----------------
each function with loop index.

#### Usage:

        <ul class="people_list">
          {{#each_with_idx people}}
          <li>{{this.idx}} - {{this}}</li>
          {{/each}}
        </ul>

Result:

        <ul class="people_list">
          <li>0 - Yehuda Katz</li>
          <li>1 - Alan Johnson</li>
          <li>2 - Charles Jolley</li>
        </ul>

#### Options:

- start
 - number of start index.

Example

        <ul class="people_list">
          {{#each_with_idx people start=5}}
          <li>{{this.idx}} - {{this}}</li>
          {{/each}}
        </ul>

Result:

        <ul class="people_list">
          <li>5 - Yehuda Katz</li>
          <li>6 - Alan Johnson</li>
          <li>7 - Charles Jolley</li>
        </ul>



See
====
- [handlebars.js](http://handlebarsjs.com/)


License
========
Copyright (c) 2012 Daisuke Takaoka. 
MIT License.
