import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./pages/Create";
import Detail from "./pages/Detail";
import Main from "./pages/Main";
import Edit from "./pages/Edit";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Note, NoteData, Tag } from "./types";
import { v4 } from "uuid";
import Layout from "./components/Layout";

const App = () => {
  const [notes, setNotes] = useLocalStorage<Note[]>("notes", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("tags", []);

  // etiket oluşturma
  const createTag = (tag: Tag): void => {
    setTags((prev) => [...prev, tag]);
  };

  // yeni etiket oluşturma
  const createNote = (noteData: NoteData): void => {
    // formdan gelen veriye id ekle
    const newNote: Note = {
      id: v4(),
      ...noteData,
    };

    // state^e yeni notu ekle
    setNotes((prev) => [...prev, newNote]);
  };

  // note'u kaldır
  const deleteNote = (id: string) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  // note'u güncelle
  const updateNote = (id: string, updatedData: NoteData) => {
    // amaç: dizideki bir elemanı güncellemek
    // diziyi dönüp yeni bir dizi oluşturyor
    const updated = notes.map((note) => {
      if (note.id === id) {
        // eğer eleman güncellenicek eleman ise güncel verileri yeni diziye ekle
        return { id, ...updatedData };
      } else {
        // değilse note'un veirlerini yeni diziye ekle
        return note;
      }
    });

    // state'i güncelle
    setNotes(updated);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main notes={notes} availableTags={tags} />} />
        <Route
          path="/new"
          element={
            <Create
              handleSubmit={createNote}
              createTag={createTag}
              availableTags={tags}
            />
          }
        />

        <Route path="/note/:id" element={<Layout notes={notes} />}>
          <Route index element={<Detail deleteNote={deleteNote} />} />
          <Route
            path="edit"
            element={
              <Edit
                handleSubmit={updateNote}
                createTag={createTag}
                availableTags={tags}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
