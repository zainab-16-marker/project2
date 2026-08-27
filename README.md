# ZOI

![ZOI](./imges/screenshot.png)

A full-stack beauty store management and shopping application built with **Node.js, Express, MongoDB, and EJS**.

ZOI is a beauty store where customers can browse and purchase products, manage their cart, and track shipments, while admins can manage products and shipments through an admin dashboard.

---



![ZOI](./images/logo.png)

---

## Project Description

**ZOI** is a full-stack web application designed for a beauty store.

The application has two types of users: **Admin** and **Customer**.

The **Admin** can manage the store's products by adding, viewing, editing, and deleting products. The Admin can also manage shipments by adding, viewing, editing, deleting, and tracking shipments.

The home page includes a small dashboard that provides visual information about the store's products and shipments, allowing the Admin to quickly view the current status of the store.

**Customers** can browse available beauty products, view product details, add products to their cart, edit or remove items from their cart, and complete the checkout process. Customers can also view and track their shipments.

The application uses **session-based authentication and role-based authorization** to ensure that Admin users can manage store data while Customers can access the shopping features available to them.

---

## Background

I built **ZOI** as a full-stack web application to practice developing a complete beauty store system using **Node.js, Express, MongoDB, and EJS**.

The idea was to create a simple and user-friendly beauty shopping experience while also providing an Admin with the tools needed to manage products and shipments.

This project allowed me to apply concepts such as **CRUD operations, authentication, authorization, database relationships, sessions, and server-side rendering** in one complete application.

---

## User Stories

### Authentication

- As a user, I want to see a clear landing page when I arrive at the website so that I know I am in the right place.
- As a user, I want to sign up and log in smoothly so that I can access my account.
- As a user, I want to log out securely so that I can protect my account.

### Admin

- As an admin, I want to view a dashboard showing products and shipments so that I can quickly understand the current status of the store.
- As an admin, I want to view all available products so that I can manage the store's inventory.
- As an admin, I want to add new products so that I can keep the product catalog up to date.
- As an admin, I want to edit products so that I can keep product information accurate.
- As an admin, I want to delete products so that I can remove products that are no longer available.
- As an admin, I want to view all shipments so that I can manage customer orders.
- As an admin, I want to add new shipments so that I can record customer orders.
- As an admin, I want to edit shipments so that I can update shipment information.
- As an admin, I want to delete shipments so that I can remove cancelled or incorrect shipments.
- As an admin, I want to update shipment information so that customers can track their orders.

### Customer

- As a customer, I want to browse available beauty products so that I can choose what I want to purchase.
- As a customer, I want to view product details so that I can learn more about a product before purchasing it.
- As a customer, I want to add products to my cart so that I can purchase the products I want.
- As a customer, I want to edit the quantity of products in my cart so that I can adjust my order.
- As a customer, I want to remove products from my cart so that I can change my order before checkout.
- As a customer, I want to review my cart so that I can make sure my order is correct.
- As a customer, I want to provide my shipping address so that my order can be delivered.
- As a customer, I want to complete the checkout process so that I can place my order.
- As a customer, I want to track my shipment so that I know the status of my order.

---

## Features

### Authentication & Authorization

- User registration
- User login
- Session-based authentication
- Logout
- Protected admin routes
- Role-based authorization

### Admin Features

- Admin dashboard
- View all products
- Add products
- Edit products
- Delete products
- View all shipments
- Add shipments
- Edit shipments
- Delete shipments
- Update shipment information

### Customer Features

- Browse available products
- View product details
- Add products to cart
- Edit cart quantities
- Remove products from cart
- Review cart
- Checkout
- Place orders
- Track shipments

---

## Technologies Used

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **EJS** - Server-side templating engine
- **JavaScript** - Application functionality
- **HTML** - Page structure
- **CSS** - Styling and layout
- **Express Session** - Session-based authentication
- **Method Override** - Support for PUT and DELETE HTTP methods
- **Morgan** - HTTP request logging
- **Git & GitHub** - Version control and project repository

---

## Getting Started

### Deployed App

[View the deployed ZOI App](DEPLOYED_APP_LINK)

### Planning Materials

- [View the ERD](https://github.com/zainab-16-marker/project2/blob/master/imges/erd.jpg)
- [View the Wire Frame](https://excalidraw.com/#json=J9HWwXUCUyiYFJvlQ5pey,dTf152lkRGVJnJ4RgPYgEw)

---

## ERD

[ZOI ERD](https://github.com/zainab-16-marker/project2/blob/master/imges/erd.jpg)

[View ERD Image](https://github.com/zainab-16-marker/project2/raw/master/imges/erd.jpg)

---

## Wire Frame

[View Wire Frame for ZOI](https://excalidraw.com/#json=J9HWwXUCUyiYFJvlQ5pey,dTf152lkRGVJnJ4RgPYgEw)

---

## Attributions

This project uses open-source libraries and technologies including **Node.js, Express.js, MongoDB, Mongoose, EJS, Express Session, Method Override, and Morgan**.

No external assets requiring attribution were used in the application.

---

## Next Steps

Future enhancements for **ZOI** may include:

- Add online payment functionality.
- Add product search and filtering.
- Add customer profile management.
- Add email notifications for order and shipment updates.
- Add order history for customers.
- Add more detailed analytics to the Admin dashboard.
- Improve responsive design for mobile devices.
- Add product reviews and ratings.
