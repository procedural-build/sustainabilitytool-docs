import React, { useState } from "react";
import { useLunr } from "react-lunr";
import { Formik, Form, Field } from "formik";

const index = "";
const store = {
  1: { id: 1, title: "Document 1" },
  2: { id: 2, title: "Document 2" },
  3: { id: 3, title: "Document 3" }
};

export const SearchBar = () => {
  const [query, setQuery] = useState(null);
  const results = useLunr(query, index, store);

  return (
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setQuery(values.query);
        setSubmitting(false);
      }}
    >
      <Form>
        <Field name="query" />
      </Form>
      <h1>Results</h1>
      <ul>
        {results.map(result => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </Formik>
  );
};
