export const frames = {
  1: {
    id: 1,
    name: "Full-suspension frame",
    description: null,
    family: "frame",
    createdAt: "2024-11-08T10:07:14.000+00:00",
    updatedAt: "2024-11-08T10:07:14.000+00:00",
    categoryId: 1,
    productVariants: [
      {
        id: 1,
        productId: 1,
        name: "Matte",
        price: 130,
        stock: 10,
        imageUrl: "/full_suspension_frame.webp",
        createdAt: "2024-11-08T10:07:14.000+00:00",
        updatedAt: "2024-11-08T10:07:14.000+00:00",
      },
      {
        id: 2,
        productId: 1,
        name: "Shiny",
        price: 100,
        stock: 10,
        imageUrl: "/full_suspension_frame.webp",
        createdAt: "2024-11-08T10:07:14.000+00:00",
        updatedAt: "2024-11-08T10:07:14.000+00:00",
      },
    ],
    conditions: [
      {
        id: 1,
        rule: "REQUIRED",
        description: null,
        createdAt: "2024-11-08T10:07:14.000+00:00",
        updatedAt: "2024-11-08T10:07:14.000+00:00",
        products: [{ id: 1 }, { id: 5 }],
      },
    ],
  },
  2: {
    id: 2,
    name: "Diamond frame",
    description: null,
    family: "frame",
    createdAt: "2024-11-08T10:07:14.000+00:00",
    updatedAt: "2024-11-08T10:07:14.000+00:00",
    categoryId: 1,
    productVariants: [
      {
        id: 3,
        productId: 2,
        name: "Matte",
        price: 200,
        stock: 10,
        imageUrl: "/diamond_frame.webp",
        createdAt: "2024-11-08T10:07:14.000+00:00",
        updatedAt: "2024-11-08T10:07:14.000+00:00",
      },
      {
        id: 4,
        productId: 2,
        name: "Shiny",
        price: 120,
        stock: 10,
        imageUrl: "/diamond_frame.webp",
        createdAt: "2024-11-08T10:07:14.000+00:00",
        updatedAt: "2024-11-08T10:07:14.000+00:00",
      },
    ],
    conditions: [],
  },
  3: {
    id: 3,
    name: "Step-through frame",
    description: null,
    family: "frame",
    createdAt: "2024-11-08T10:07:14.000+00:00",
    updatedAt: "2024-11-08T10:07:14.000+00:00",
    categoryId: 1,
    productVariants: [
      {
        id: 5,
        productId: 3,
        name: "Matte",
        price: 150,
        stock: 10,
        imageUrl: "/step_through_frame.webp",
        createdAt: "2024-11-08T10:07:14.000+00:00",
        updatedAt: "2024-11-08T10:07:14.000+00:00",
      },
      {
        id: 6,
        productId: 3,
        name: "Shiny",
        price: 130,
        stock: 10,
        imageUrl: "/step_through_frame.webp",
        createdAt: "2024-11-08T10:07:14.000+00:00",
        updatedAt: "2024-11-08T10:07:14.000+00:00",
      },
    ],
    conditions: [],
  },
};

export const wheels = {
  4: {
    id: 4,
    name: "Road wheels",
    description: null,
    family: "wheel",
    createdAt: "2024-11-08T10:07:14.000+00:00",
    updatedAt: "2024-11-08T10:07:14.000+00:00",
    categoryId: 1,
    productVariants: [
      {
        id: 7,
        productId: 4,
        name: "Red",
        price: 50,
        stock: 10,
        imageUrl: "/red_road_wheel.jpg",
        createdAt: "2024-11-08T10:07:14.000+00:00",
        updatedAt: "2024-11-08T10:07:14.000+00:00",
      },
      {
        id: 8,
        productId: 4,
        name: "Black",
        price: 24,
        stock: 10,
        imageUrl: "/black_road_wheel.webp",
        createdAt: "2024-11-08T10:07:14.000+00:00",
        updatedAt: "2024-11-08T10:07:14.000+00:00",
      },
    ],
    conditions: [],
  },
  5: {
    id: 5,
    name: "Mountain wheels",
    description: null,
    family: "wheel",
    createdAt: "2024-11-08T10:07:14.000+00:00",
    updatedAt: "2024-11-08T10:07:14.000+00:00",
    categoryId: 1,
    productVariants: [
      {
        id: 9,
        productId: 5,
        name: "Blue",
        price: 80,
        stock: 10,
        imageUrl: "/blue_mtn_wheel.jpg",
        createdAt: "2024-11-08T10:07:14.000+00:00",
        updatedAt: "2024-11-08T10:07:14.000+00:00",
      },
    ],
    conditions: [
      {
        id: 1,
        rule: "REQUIRED",
        description: null,
        createdAt: "2024-11-08T10:07:14.000+00:00",
        updatedAt: "2024-11-08T10:07:14.000+00:00",
        products: [
          {
            id: 1,
          },
          {
            id: 5,
          },
        ],
      },
    ],
  },
  6: {
    id: 6,
    name: "Fat bike wheels",
    description: null,
    family: "wheel",
    createdAt: "2024-11-08T10:07:14.000+00:00",
    updatedAt: "2024-11-08T10:07:14.000+00:00",
    categoryId: 1,
    productVariants: [
      {
        id: 10,
        productId: 6,
        name: "Red",
        price: 39,
        stock: 10,
        imageUrl: "/red_road_wheel.jpg",
        createdAt: "2024-11-08T10:07:14.000+00:00",
        updatedAt: "2024-11-08T10:07:14.000+00:00",
      },
    ],
    conditions: [],
  },
};