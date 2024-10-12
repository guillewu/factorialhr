### 1. Data model

Check file

### 2. Main user actions

The main actions the user would perform would be to add parts to the cart and then checkout.

### 3. Product page

I would present this as a multi-step process. For example, a user could choose in order:

1. Frame type & paint
2. Wheels & rim color
3. Chain

Along each step, the options presented will be the ones that are available combinations given the prervious choices. Steps should be skippable as well, given that a user doesn't want a specific part of the bike.

The price could be updated on the side as the user selects parts.

### 4. Add to cart action

Once the user adds to cart, we create a cart with all the parts selected.

### 5. Administrative workflows:

New product creation:
We will provide an admin panel for the admin to create a product, along with its variants, prices and stock.

Adding a new part choice:
Marcus will have to add a productVariant by selecting the product it belongs to. He will also need to specify the price

### Assumptions

A product must have a product variant (i.e. a mountain bike frame must have a variant such as unpainted, red, black). So the price lives in the product variant.
