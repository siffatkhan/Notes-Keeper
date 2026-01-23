import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
    setError("");
  }

  function submitNote(event) {
    event.preventDefault();

    if (note.title.trim() === "" && note.content.trim() === "") {
      setError("Note cannot be empty.");
      return;
    }
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setError("");
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
        {error && <small style={{ color: "red", marginTop: "2px" }}> {error}</small>}
      </form>
    </div>
  );
}

export default CreateArea;
