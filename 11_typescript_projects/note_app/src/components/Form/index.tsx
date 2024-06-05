import { FormEvent, useRef, useState } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ReactSelect from "react-select/creatable";
import { v4 } from "uuid";
import { Tag } from "../../types";
import { CreateProps } from "../../pages/Create";

const CustomForm = ({
  handleSubmit,
  createTag,
  availableTags,
  markdown = "",
  title = "",
  tags = [],
}: CreateProps) => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>(tags);

  const navigate = useNavigate();

  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = (e: FormEvent) => {
    e.preventDefault();

    // yeni note'u locale kaydeder
    handleSubmit({
      title: titleRef.current?.value as string,
      markdown: markdownRef.current?.value as string,
      tags: selectedTags,
    });

    // anasayfaya yönlendir
    navigate("/");
  };

  return (
    <Form onSubmit={handleSend} className="mt-4">
      <Stack>
        {/* Başlık - Etiket Alanı */}
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Başlık</Form.Label>
              <Form.Control
                defaultValue={title}
                ref={titleRef}
                className="shadow"
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Etiketler</Form.Label>
              <ReactSelect
                // elelman kaldırldığında çalışır
                onChange={(all_tags) => setSelectedTags(all_tags as Tag[])}
                // yeni etiket oluşturulduğunda çalışır
                onCreateOption={(text) => {
                  // etiket objesi oluştur ve id ekle
                  const newTag: Tag = { label: text, value: v4() };

                  // yeni etiketi locale kaydet
                  createTag(newTag);

                  // state'e ekle
                  setSelectedTags([...selectedTags, newTag]);
                }}
                // eklenenleri görüntüle
                value={selectedTags}
                // daha önce eklenenleri seçenek olarka göster
                options={availableTags}
                className="text-black shadow"
                isMulti
              />
            </Form.Group>
          </Col>
        </Row>

        {/* İçerik Alanı */}
        <Form.Group className="mt-4">
          <Form.Label>İçerik (markdown destekler)</Form.Label>
          <Form.Control
            defaultValue={markdown}
            ref={markdownRef}
            as="textarea"
            className="shadow"
            style={{
              minHeight: "300px",
              maxHeight: "500px",
            }}
          />
        </Form.Group>

        {/* Butonlar */}
        <Stack
          direction="horizontal"
          className="justify-content-end mt-5"
          gap={4}
        >
          <Button type="submit">Kaydet</Button>
          <Button
            onClick={() => navigate(-1)}
            type="button"
            variant="secondary"
          >
            Geri
          </Button>
        </Stack>
      </Stack>
    </Form>
  );
};

export default CustomForm;
