import React, { useState } from "react";
//import { useLunr } from "react-lunr";
import lunr from "lunr";
import FS from "fs";
import { Formik, Form, Field } from "formik";

export const SearchBar = () => {
  const index = FS.readFileSync("assets/lunr/lunrIndex.json").toString();
  const store = JSON.parse(FS.readFileSync("assets/lunr/lunrDocuments.json").toString())

  const [query, setQuery] = useState(null);
  const results = useLunr('business', index, store);

  const renderResults = function() {
    console.log('RESULTS', results)

    if (!results) {return null}

    return (
        <div>
          <ul>
          {results.map(result => (
                <li key={result.id}>{result.title}</li>
            ))}
          </ul>
        </div>
    )
  };


  return (
    <React.Fragment>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setQuery(values.query);
          setSubmitting(false);
        }}
      >
        <div>
          <Form>
            <Field name="query" />
          </Form>
          {renderResults()}
        </div>
      </Formik>
    </React.Fragment>
  );
};

import { useEffect, useMemo } from "react";

const InvalidIndexError = Error("Lunr index could not be parsed. Check that your index exists and is valid.");
const InvalidStoreError = Error("Lunr store could not be parsed. Check that your store exists and is valid.");

export const useLunr = (query, providedIndex, providedStore) => {
  const [index, setIndex] = useState(null);
  const [store, setStore] = useState(null);

  useEffect(() => {
    const processedIndex =
      typeof providedIndex === "string" ? lunr.Index.load(JSON.parse(providedIndex)) : providedIndex;

    if (!processedIndex) throw InvalidIndexError;

    setIndex(processedIndex);
  }, [providedIndex]);

  useEffect(() => {
    const processedStore = typeof providedStore === "string" ? JSON.parse(providedStore) : providedStore;
    if (!processedStore) throw InvalidStoreError;

    setStore(processedStore);
  }, [providedStore]);

  return useMemo(() => {
    if (!query || !index || !store) return [];

    const lunrResults = index.search(query);

    return lunrResults.map(({ ref }) => store[ref]);
  }, [query, index, store]);
};

/*
import { Lunr } from "react-lunr";

const index = FS.readFileSync("assets/lunr/lunrIndex.json").toString();
const store = {
  1: { id: 1, title: "Document 1" },
  2: { id: 2, title: "Document 2" },
  3: { id: 3, title: "Document 3" }
};

export const SearchBar = () => {
  return (
    <React.Fragment>
      <Lunr index={index} store={store}>
        {({ results, setQuery }) => (
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
        )}
      </Lunr>
    </React.Fragment>
  );
};

 */
