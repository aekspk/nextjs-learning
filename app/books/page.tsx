import { generateBooks } from "@/utils/generator";

const bookPage = () => {
  const books = generateBooks();
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>{book.title}</li>
      ))}
    </ul>
  );
};
export default bookPage;
