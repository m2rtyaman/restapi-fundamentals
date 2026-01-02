const express = require("express");
const app = express();

//middleware
app.use(express.json());

let books = [
  {
    id: 1,
    title: "Book 1",
  },
  {
    id: 2,
    title: "Book 2",
  },
  {
    id: 3,
    title: "Book 3",
  },
];

//Get all Books
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to our bookstroe api",
  });
});
app.get("/get", (req, res) => {
  res.json(books);
});

//get a single book
app.get("/get/:id", (req, res) => {
  const book = books.find((item) => item.id == req.params.id);
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({
      message: "Book not found! Please try with a different Book ID",
    });
  }
});

//add a new book
app.post("/add", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: `Book ${books.length + 1}`,
  };
  books.push(newBook);
  res.status(200).json({
    data: newBook,
    message: "New Book is added successfull",
  });
});

//update a book
app.put("/update/:id", (req, res) => {
  const findCurrentBook = books.find(
    (bookItem) => bookItem.id === parseInt(req.params.id)
  );

  if (findCurrentBook) {
    findCurrentBook.title = req.body.title || findCurrentBook.title;

    res.status(200).json({
      message: "Updated successfully",
      data: findCurrentBook,
    });
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

//delete a book
app.delete("/delete/:id", (req, res) => {
  const bookIndex = books.findIndex(
    (item) => item.id === parseInt(req.params.id)
  );
  if (bookIndex !== -1) {
    const deletedBook = books.splice(bookIndex, 1);

    res.status(200).json({
      message: "Book deleted successfully",
      data: deletedBook[0],
    });
  } else {
    res.status(404).json({
      message: "Book not found",
    });
  }
});
port = 3000;
app.listen(port, () => {
  console.log(
    `Server is running port : ${port} and is link http://localhost:${port}`
  );
});
