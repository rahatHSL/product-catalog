# Product Catalog API

This project is a backend API built with NestJS to manage a product catalog. It supports functionalities like adding, updating, deleting, viewing products, and provides filtering, sorting, and pagination options.

## Project Overview

This API offers a RESTful interface for managing products with role-based access control:

- **Admin** users can create, update, and delete products.
- **Public** users can view product lists with sorting, filtering, and pagination.

## Features

- **Product Management**: Add, update, delete products (Admin only).
- **Full-Text Search**: Add a search feature on the name or description fields to filter
  products by keywords.
- **Product Retrieval**: View products with pagination, sorting by price and creation date, and filtering by category.
- **Error Handling**: Handles validation errors, missing fields, and incorrect queries.
- **Authentication**: Basic role-based authentication to secure specific routes.

## Requirements

- **Framework**: [NestJS](https://nestjs.com/)
- **Database**: PostgreSQL
- **Containerization**: Docker and Docker Compose

## Project Setup

### Prerequisites

- Docker and Docker Compose should be installed on your system.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rahatHSL/product-catalog.git
   cd product-catalog
   ```
2. **Run Docker Compose**:

   ```bash
   docker compose up -d
   ```

3. **Access the API Endpoint**:
   - **API**: [http://localhost:3000/products](http://localhost:3000/products) (for admin routes use role: admin in headers) `i.g. POST, PATCH, DELETE`
   - **Swagger Docs**: [http://localhost:3000/api/docs](http://localhost:3000/api/docs)

## Api Documentation

Please find the all endpoints in the [Swagger](http://localhost:3000/api/docs) documentation.
