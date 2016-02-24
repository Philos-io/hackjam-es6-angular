export default function BookListController(BookFactory) {
  BookFactory.getBooks()
   .then((books)=>{
     this.books = books;
  });
}

BookListController.$inject = ['BookFactory'];
