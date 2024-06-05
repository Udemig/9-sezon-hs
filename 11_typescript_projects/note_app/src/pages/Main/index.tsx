import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { Note, Tag } from "../../types";
import { Link } from "react-router-dom";
import ReactSelect from "react-select";
import Card from "../../components/Card";
import { useState } from "react";

type Props = {
  availableTags: Tag[];
  notes: Note[];
};

const Main = ({ availableTags, notes }: Props) => {
  const [title, setTitle] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  /*
   1) Not başlığı 1.inputla aratılan metni içermelidir. Eğer aranan metin boş ise koşul sağlanır. Aksi takdirde note'un başlığının küçük harfe çevrilmiş  hali aratılan metnin küçük harfe çevrilmiş halini içeriyorsa koşul sağlanır
   
   &&

   2) 2.input ile seçilen etiketler noteun içerisindeki etiler ile birebir eşeleşmelidi. Seçilen etiket dizisindeki her etiket için note'a ait etiketler arasında eşleşme kontrol edilir.
  */

  const filtredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(title.toLowerCase()) &&
      selectedTags.every((s_tag) =>
        note.tags.some((noteTag) => noteTag.value == s_tag.value)
      )
  );

  return (
    <div className="container py-5">
      {/* ÜST KISIM */}
      <Stack direction="horizontal" className="justify-content-between">
        <h1>Notlar</h1>

        <Link to="/new">
          <Button>Oluştur</Button>
        </Link>
      </Stack>

      {/* FORM ALANI */}
      <Form className="mt-4">
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Başlığa Göre Ara</Form.Label>
              <Form.Control
                onChange={(e) => setTitle(e.target.value)}
                className="shadow"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Etikete Göre Ara</Form.Label>
              <ReactSelect
                onChange={(tags) => setSelectedTags(tags as Tag[])}
                options={availableTags}
                className="text-black"
                isMulti
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>

      {/* NOT LİSTESİ */}
      <Row xs={1} sm={2} lg={3} xl={4} className="g-3 mt-4">
        {filtredNotes.map((note) => (
          <Col>
            <Card note={note} key={note.id} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Main;
