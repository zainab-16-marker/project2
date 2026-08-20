
# 💄 Beauty Store Management System

A full-stack beauty store management and shopping application built with **Node.js, Express, MongoDB, and EJS**.

The application allows a store owner to manage products and shipments through an admin dashboard, while customers can browse products, manage their cart, place orders, and track their shipments.

---

## Screenshot

![Beauty Store Management System]

---

##  Project Description

The **Beauty Store Management System** is a full-stack web application designed for a beauty store.

The application has two types of users: **Admin** and **Customer**.

The **Admin** can manage the store's products by adding, viewing, editing, and deleting products. The Admin can also manage shipments by adding, viewing, editing, deleting, and tracking shipments.

The home page includes a small dashboard that provides visual information about the store's products and shipments, allowing the Admin to quickly view the current status of the store.

**Customers** can browse available beauty products, view product details, add products to their cart, edit or remove items from their cart, and complete the checkout process. Customers can also view and track their shipments.

The application uses **session-based authentication and role-based authorization** to ensure that Admin users can manage store data while Customers can access the shopping features available to them.

---

##  User Stories

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

## ✨ Features

### 🔐 Authentication & Authorization

- User registration
- User login
- Session-based authentication
- Logout
- Protected admin routes

### 👩🏻‍💼 Admin Features

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


### 🛍️ Customer Features

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

## 🗂️ Data Models

### User

```text
username: String
password: String
role: Enum

### Products
```text
name: String
price: Number
quantityAvailable: Number
category: Enum

### shippments
```text
user: User Schema
product: Product Schema
shipmentDate: Date
shipmentAddress: String
[View ERD](https://excalidraw.com/#json=J9HWwXUCUyiYFJvlQ5pey,dTf152lkRGVJnJ4RgPYgEw)
