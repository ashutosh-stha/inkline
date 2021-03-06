# Tables
## Documentation and examples for opt-in styling of tables with Inkline. { .lead }

### Basic Table
Using the most basic table markup, here’s how tables look in Inkline. All table styles are inherited in Inkline, meaning any nested tables will be styled in the same manner as the parent.

<i-code-preview title="Basic Table">

<i-table>
  <thead>
    <tr>
      <th># </th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Alex</td>
      <td>Grozav</td>
      <td>@alexgrozav</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>John</td>
      <td>Doe</td>
      <td>@johndoe</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Alice</td>
      <td>Cooper</td>
      <td>@alicecooper</td>
    </tr>
  </tbody>
</i-table>

<template slot="html">

~~~html
<i-table>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">#</th>
      <td>Alex</td>
      <td>Grozav</td>
      <td>@alexgrozav</td>
    </tr>
    <tr>
      <th scope="row">#</th>
      <td>John</td>
      <td>Doe</td>
      <td>@johndoe</td>
    </tr>
    <tr>
      <th scope="row">#</th>
      <td>Alice</td>
      <td>Doe</td>
      <td>@alicecooper</td>
    </tr>
  </tbody>
</i-table>
~~~

</template>
</i-code-preview>

<i-alert variant="info" class="_margin-top-1">
    <template slot="icon"><i-icon icon="info" class="h4"></i-icon></template>
    <p>If your tables require more features such as sorting, filtering and rendering, you might want to take a look at the <nuxt-link :to="{ name: 'docs-components-dashboard-datatable-introduction' }">Data Table</nuxt-link> component.</p>
</i-alert>


### Bordered Table
Add the `bordered` property for borders on all sides of the table and table cells.

<i-code-preview title="Bordered Table">

<i-table bordered>
  <thead>
    <tr>
      <th># </th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Alex</td>
      <td>Grozav</td>
      <td>@alexgrozav</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>John</td>
      <td>Doe</td>
      <td>@johndoe</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Alice</td>
      <td>Cooper</td>
      <td>@alicecooper</td>
    </tr>
  </tbody>
</i-table>

<template slot="html">

~~~html
<i-table bordered>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">#</th>
      <td>Alex</td>
      <td>Grozav</td>
      <td>@alexgrozav</td>
    </tr>
    <tr>
      <th scope="row">#</th>
      <td>John</td>
      <td>Doe</td>
      <td>@johndoe</td>
    </tr>
    <tr>
      <th scope="row">#</th>
      <td>Alice</td>
      <td>Doe</td>
      <td>@alicecooper</td>
    </tr>
  </tbody>
</i-table>
~~~

</template>
</i-code-preview>

### Striped Table
Add the `striped` property to add zebra-striping to any table row within the table body.

<i-code-preview title="Striped Table">

<i-table striped>
  <thead>
    <tr>
      <th># </th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Alex</td>
      <td>Grozav</td>
      <td>@alexgrozav</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>John</td>
      <td>Doe</td>
      <td>@johndoe</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Alice</td>
      <td>Cooper</td>
      <td>@alicecooper</td>
    </tr>
  </tbody>
</i-table>

<template slot="html">

~~~html
<i-table striped>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">#</th>
      <td>Alex</td>
      <td>Grozav</td>
      <td>@alexgrozav</td>
    </tr>
    <tr>
      <th scope="row">#</th>
      <td>John</td>
      <td>Doe</td>
      <td>@johndoe</td>
    </tr>
    <tr>
      <th scope="row">#</th>
      <td>Alice</td>
      <td>Doe</td>
      <td>@alicecooper</td>
    </tr>
  </tbody>
</i-table>
~~~

</template>
</i-code-preview>

### Hoverable Table
Add the `hover` property to enable a hover state on table rows within a `<tbody>`.

<i-code-preview title="Hoverable Table">

<i-table hover>
  <thead>
    <tr>
      <th># </th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Alex</td>
      <td>Grozav</td>
      <td>@alexgrozav</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>John</td>
      <td>Doe</td>
      <td>@johndoe</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Alice</td>
      <td>Cooper</td>
      <td>@alicecooper</td>
    </tr>
  </tbody>
</i-table>

<template slot="html">

~~~html
<i-table hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">#</th>
      <td>Alex</td>
      <td>Grozav</td>
      <td>@alexgrozav</td>
    </tr>
    <tr>
      <th scope="row">#</th>
      <td>John</td>
      <td>Doe</td>
      <td>@johndoe</td>
    </tr>
    <tr>
      <th scope="row">#</th>
      <td>Alice</td>
      <td>Doe</td>
      <td>@alicecooper</td>
    </tr>
  </tbody>
</i-table>
~~~

</template>
</i-code-preview>

### Responsive Table
Enable responsiveness by adding the `responsive` property. Responsive tables scroll horizontally on small devices. When viewing on anything larger, you will not see any difference in these tables.

You can target specific responsive breakpoints by setting a value to the `responsive` property: `responsive="<breakpoint>"`, where breakpoint is one of `xs`, `sm`, `md`, `lg` or `xl`.

<i-code-preview title="Responsive Table">

<i-table responsive>
  <thead>
    <tr>
      <th>#</th>
      <th>Table Heading</th>
      <th>Table Heading</th>
      <th>Table Heading</th>
      <th>Table Heading</th>
      <th>Table Heading</th>
      <th>Table Heading</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Table Cell</td>
      <td>Table Cell</td>
      <td>Table Cell</td>
      <td>Table Cell</td>
      <td>Table Cell</td>
      <td>Table Cell</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Table Cell</td>
      <td>Table Cell</td>
      <td>Table Cell</td>
      <td>Table Cell</td>
      <td>Table Cell</td>
      <td>Table Cell</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Table Cell</td>
      <td>Table Cell</td>
      <td>Table Cell</td>
      <td>Table Cell</td>
      <td>Table Cell</td>
      <td>Table Cell</td>
    </tr>
  </tbody>
</i-table>

<template slot="html">

~~~html
<i-table responsive>
  <thead>
    <tr>
      <th>#</th>
      <th>Table Heading</th>
      <th>Table Heading</th>
      <th>Table Heading</th>
      <th>Table Heading</th>
      <th>Table Heading</th>
      <th>Table Heading</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Table Cell</td>
      <td>Table Cell</td>
      <td>Table Cell</td>
      <td>Table Cell</td>
      <td>Table Cell</td>
      <td>Table Cell</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Table Cell</td>
      <td>Table Cell</td>
      <td>Table Cell</td>
      <td>Table Cell</td>
      <td>Table Cell</td>
      <td>Table Cell</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Table Cell</td>
      <td>Table Cell</td>
      <td>Table Cell</td>
      <td>Table Cell</td>
      <td>Table Cell</td>
      <td>Table Cell</td>
    </tr>
  </tbody>
</i-table>
~~~

</template>
</i-code-preview>

### Variants
Tables can be themed using the `variant` property. You can use colors such as `light`, `dark`, `primary`, `secondary`, `info`, `success`, `warning`, and `danger`. You can set a variant for the table as a whole or individual table elements. By default, tables have the `light` variant. You can use a variation of any of the above classes to create the table design you need.

<i-code-preview title="Table Variants">

<i-table variant="light" bordered striped hover class="_margin-bottom-1">
  <thead>
    <tr>
      <th># </th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Alex</td>
      <td>Grozav</td>
      <td>@alexgrozav</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>John</td>
      <td>Doe</td>
      <td>@johndoe</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Alice</td>
      <td>Cooper</td>
      <td>@alicecooper</td>
    </tr>
  </tbody>
</i-table>
<i-table variant="dark" bordered striped hover class="_margin-bottom-1">
  <thead>
    <tr>
      <th># </th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Alex</td>
      <td>Grozav</td>
      <td>@alexgrozav</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>John</td>
      <td>Doe</td>
      <td>@johndoe</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Alice</td>
      <td>Cooper</td>
      <td>@alicecooper</td>
    </tr>
  </tbody>
</i-table>
<i-table variant="primary" bordered striped hover class="_margin-bottom-1">
  <thead>
    <tr>
      <th># </th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Alex</td>
      <td>Grozav</td>
      <td>@alexgrozav</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>John</td>
      <td>Doe</td>
      <td>@johndoe</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Alice</td>
      <td>Cooper</td>
      <td>@alicecooper</td>
    </tr>
  </tbody>
</i-table>
<i-table variant="secondary" bordered striped hover class="_margin-bottom-1">
  <thead>
    <tr>
      <th># </th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Alex</td>
      <td>Grozav</td>
      <td>@alexgrozav</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>John</td>
      <td>Doe</td>
      <td>@johndoe</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Alice</td>
      <td>Cooper</td>
      <td>@alicecooper</td>
    </tr>
  </tbody>
</i-table>
<i-table variant="info" bordered striped hover class="_margin-bottom-1">
  <thead>
    <tr>
      <th># </th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Alex</td>
      <td>Grozav</td>
      <td>@alexgrozav</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>John</td>
      <td>Doe</td>
      <td>@johndoe</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Alice</td>
      <td>Cooper</td>
      <td>@alicecooper</td>
    </tr>
  </tbody>
</i-table>
<i-table variant="success" bordered striped hover class="_margin-bottom-1">
  <thead>
    <tr>
      <th># </th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Alex</td>
      <td>Grozav</td>
      <td>@alexgrozav</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>John</td>
      <td>Doe</td>
      <td>@johndoe</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Alice</td>
      <td>Cooper</td>
      <td>@alicecooper</td>
    </tr>
  </tbody>
</i-table>
<i-table variant="warning" bordered striped hover class="_margin-bottom-1">
  <thead>
    <tr>
      <th># </th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Alex</td>
      <td>Grozav</td>
      <td>@alexgrozav</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>John</td>
      <td>Doe</td>
      <td>@johndoe</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Alice</td>
      <td>Cooper</td>
      <td>@alicecooper</td>
    </tr>
  </tbody>
</i-table>
<i-table variant="danger" bordered striped hover class="_margin-bottom-1">
  <thead>
    <tr>
      <th># </th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Alex</td>
      <td>Grozav</td>
      <td>@alexgrozav</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>John</td>
      <td>Doe</td>
      <td>@johndoe</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Alice</td>
      <td>Cooper</td>
      <td>@alicecooper</td>
    </tr>
  </tbody>
</i-table>

<template slot="html">

~~~html
<i-table variant="light"> .. </i-table>
<i-table variant="dark"> .. </i-table>
<i-table variant="primary"> .. </i-table>
<i-table variant="secondary"> .. </i-table>
<i-table variant="info"> .. </i-table>
<i-table variant="success"> .. </i-table>
<i-table variant="warning"> .. </i-table>
<i-table variant="danger"> .. </i-table>
~~~

</template>
</i-code-preview>


### Component API
Here you can find a list of the various customization options you can use for the table components as props, as well as available slots.

<i-api-preview title="Table API" expanded markup="i-table">
    <template slot="props">
        <api-table>
            <api-table-row>
                <template slot="property">bordered</template>
                <template slot="description">Sets the table as bordered.</template>
                <template slot="type"><code>Boolean</code></template>
                <template slot="values"><code>true</code>, <code>false</code></template>
                <template slot="default"><code>false</code></template>
            </api-table-row>
            <api-table-row>
                <template slot="property">hover</template>
                <template slot="description">Sets the table as hoverable.</template>
                <template slot="type"><code>Boolean</code></template>
                <template slot="values"><code>true</code>, <code>false</code></template>
                <template slot="default"><code>false</code></template>
            </api-table-row>
            <api-table-row>
                <template slot="property">responsive</template>
                <template slot="description">Sets the table as responsive. When the table width reaches an overflow threshold, it will start scrolling horizontally.</template>
                <template slot="type"><code>Boolean</code></template>
                <template slot="values"><code>true</code>, <code>false</code></template>
                <template slot="default"><code>false</code></template>
            </api-table-row>
            <api-table-row>
                <template slot="property">striped</template>
                <template slot="description">Sets the table as striped.</template>
                <template slot="type"><code>Boolean</code></template>
                <template slot="values"><code>true</code>, <code>false</code></template>
                <template slot="default"><code>false</code></template>
            </api-table-row>
            <api-table-row>
                <template slot="property">variant</template>
                <template slot="description">Sets the color variant of the table component.</template>
                <template slot="type"><code>String</code></template>
                <template slot="values"><code>light</code>, <code>dark</code>, <code>primary</code>, <code>secondary</code>, <code>success</code>, <code>danger</code>, <code>warning</code>, <code>info</code></template>
                <template slot="default"><code>light</code></template>
            </api-table-row>
        </api-table>
    </template>
    <template slot="slots">
        <api-table>
            <api-table-row>
                <template slot="property">default</template>
                <template slot="description">Slot for table default content.</template>
            </api-table-row>
        </api-table>
    </template>
</i-api-preview>


### Sass Variables
Here you can find a list of the Sass variables you can use for the table components. If you're looking to find common variables that these rely on, you should take a look at the <nuxt-link :to="{ name: 'docs-core-sass-variables' }">Sass Variables</nuxt-link> page.

<i-scss-preview title="Table" expanded>
    <template slot="scss">
        <api-table>
            <api-table-row>
                <template slot="property">$table-margin-bottom</template>
                <template slot="default"><code>$spacer</code></template>
            </api-table-row>
            <api-table-row>
                <template slot="property">$table-cell-padding</template>
                <template slot="default"><code>0.75rem</code></template>
            </api-table-row>
            <api-table-row>
                <template slot="property">$table-cell-padding-sm</template>
                <template slot="default"><code>0.3rem</code></template>
            </api-table-row>
            <api-table-row>
                <template slot="property">$table-border-width</template>
                <template slot="default"><code>$border-width</code></template>
            </api-table-row>
            <api-table-row>
                <template slot="property">$table-border-color</template>
                <template slot="default"><code>$border-color</code></template>
            </api-table-row>
            <api-table-row>
                <template slot="property">$table-variants</template>
                <template slot="default"><code>('brand', 'monochrome-white', 'state')</code></template>
            </api-table-row>
            <api-table-row>
                <template slot="property">$table-variant-color-light</template>
                <template slot="default"><code>$variant-color-light</code></template>
            </api-table-row>
            <api-table-row>
                <template slot="property">$table-variant-color-dark</template>
                <template slot="default"><code>$variant-color-dark</code></template>
            </api-table-row>
        </api-table>
    </template>
</i-scss-preview>
