# Sprint 2 – Build a Product Listing with React

In today's assignment we are going to build a product listing in React. Your e-commerce store is a pharmacy, therefore are we going to list pharmaceuticals. To make life easy, we've given you a JSON file with product information for the products your page will list.

In the end it will look something like this:

![Wireframe](https://github.com/Technigo/assignment-product-page/blob/master/wireframe_products.png)

## How to complete this assignment

The main purpose of this task is to read the list of products from the JSON file and use that to render a React component for each product.

### Project setup

In the "code" folder in this assignment you'll find a copy of the Technigo React starter project which you can use as a base to complete this assignment! In the terminal, "cd" into that folder and install dependencies by running `npm install`. Once that's done, you can start the project by running `npm start`.

### React Components

Start by thinking of how to divide your page into React components. For example, you might want to build a `Page` component which is responsible for reading the JSON, and a `Product` component which the `Page` could render for each product. Try to draw out your plan on paper to get it clear in your mind.

### Iterate over the data

In the `code/src/product.json` file there's an array of products in JSON format –– basically just normal JavaScript objects. This is the data you will be using to fill your product listing. The starter code is set up to require this file and makes it available through the `productsJson` variable.

When the project is running, if you navigate to http://localhost:3000/ in the browser and look in the console, you'll see the products list printed out. It is being loaded from the JSON file we mentioned before.

Your task is to iterate over this array and render at least one component for each product to build up the page from reusable components. Every product listing should have the following data rendered:

* `name`
* `price`
* `type`
* `size`
* `numberInPack`
* `deliveryTime`
* `image`
* `substance`

Don't panic, there is more data in the file but let's leave that for the stretch goals.

When you are finished you should have a listing that looks like the sketch above.

### :books: Reading List

* [List and Keys in React](https://reactjs.org/docs/lists-and-keys.html)
* [React Components](https://reactjs.org/docs/react-component.html)

---

### :sos: How to get help
Learning how to think as a web developer is learning how to be an expert in problem solving. So whenever you get stuck start with step 1 and continue until problem solved.

1. Google! In English, type in the error message if there is one, search within the language you're using (ie CSS, JavaScript etc).
2. Ask your code buddies in your Company.
3. Ask your fellow students in Slack.
4. Ask Damien. Please note: we are part of a sharing community - share the answer with your fellows.

---

### :boom: Success!

After completing this assignment you should be comfortable working with reusable components in React. You should also be comfortable using your JavaScript skills to iterate over an array of data, select the parts you want, and create a dynamic webpage based on that.

---

### :runner: Stretch Goals

Done with the main task? Here's some ideas for things to continue with:

1. Add more information about the product on hover, use the `description` parameter for this. [Here's an example](https://www.apoteket.se/kategori/erbjudanden/) of what we're thinking.
1. Make your page responsive and work for mobile and tablets. Use a 2-column layout on tablet and single column for mobile.
1. Add a header to the listing that tells how many products you are showing. `xxx products`.
