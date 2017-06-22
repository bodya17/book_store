## Getting all books

**Request:**

[GET] /authors

**Response:**

```
[
    {
        _id: "594bcdebb9435208507e3eac",
        name: "Express in Action",
        ISBN: "978-1617292422",
        year: 2016,
        pages: 256,
        price: 31.99,
        __v: 0,
        currency: "United States dollar",
        copies: 8,
        authors: [
        "Evan M.Hahn"
        ]
    },
    ...
]
```

## Getting all authors

**Request:**

[GET] /authors

**Response:**

```
[
    "Evan M.Hahn",
    "Erich Gamma",
    "Richard Helm",
    "Ralph Johnson",
    "John Vlissides",
    "Jon Duckett"
    ...
]
```