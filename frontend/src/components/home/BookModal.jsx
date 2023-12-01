/* eslint-disable react/prop-types */

import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {book.publishYear}
        </h2>
        <h4 className="my-2 text-gray-500">{book._id}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.title}</h2>
        </div>

        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>

        <p className="mt-4">Anything you want to show</p>
        <div className="my-2">
          A book is a medium for recording information in the form of writing or
          images, typically composed of many pages (made of papyrus, parchment,
          vellum, or paper) bound together and protected by a cover.[1] It can
          also be a handwritten or printed work of fiction or nonfiction,
          usually on sheets of paper fastened or bound together within covers.
          The technical term for this physical arrangement is codex (plural,
          codices). In the history of hand-held physical supports for extended
          written compositions or records, the codex replaces its predecessor,
          the scroll. A single sheet in a codex is a leaf and each side of a
          leaf is a page.
        </div>
      </div>
    </div>
  );
};

export default BookModal;
