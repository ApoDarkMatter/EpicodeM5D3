import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "../singleBook/SingleBook";
import { ClimbingBoxLoader } from "react-spinners";

export default function LatestRelease({ books }) {
  const [load, isLoad] = useState(false);
  const [search, isSearch] = useState("")
  const [result, setResult] = useState([])

  useEffect(() => {
    if (search === ""){
        setResult(books)
    } else {
        const searchedBooks = books.filter(el => el.title.toLowerCase().includes(search.toLowerCase()))
        setResult(searchedBooks)
    }
  },[search,books])

  useEffect(() => {
    const timer = setTimeout(() => {
        isLoad(true)
    },1000);

    return () => clearTimeout(timer);
  },[]);

  if (load) {
    return (
      <Container>
        <input type="text"
        onChange={(e) => isSearch(e.target.value)}
        placeholder="Search book"
        ></input>
        <Row>
          {result.map((book) => (
            <Col key={book.asin}>
              <SingleBook book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  } else {
    return (
      <Container>
        <ClimbingBoxLoader />
      </Container>
    );
  }
}
