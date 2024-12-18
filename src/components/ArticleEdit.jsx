import { useState, useEffect } from "react";

export default function ArticleEdit({ article, updateArticle, setEditing }) {
  const [title, setTitle] = useState(article.title);
  const [body, setBody] = useState(article.body);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTitle(article.title);
    setBody(article.body);
  }, [article]);

  function submit(e) {
    e.preventDefault();
    setError(null);
    if (!title.trim() || !body.trim()) {
      setError("Both the title and body must be supplied");
    } else {
      updateArticle({ id: article.id, title, body });
    }
  }

  return (
    <div>
      <form onSubmit={submit}>
        {error && <p className="error">{error}</p>}
        Title
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        Body
        <textarea
          rows="8"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <div>
        <button className="action-button edit-button" type="submit">Update</button>
        <button className="action-button delete-button" type="button" onClick={() => setEditing(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
}