import Pagination from 'react-bootstrap/Pagination';
import React, { useState, useEffect } from 'react';

export function PageNumberBar(params) {
  const ROWMAX = 5; // Default items in page number bar
  const totalItems = params.params.totalItems;
  const itemsPerPage = params.params.itemsPerPage ?? 10; // Default items per page
  const totalRows = totalItems / itemsPerPage;

  const [active, setActive] = useState(1);
  const [items, setItems] = useState([]);
  const [first, setFirst] = useState(1);
  const [last, setLast] = useState(totalRows > ROWMAX ? ROWMAX : totalRows);
  // const items = [];
  // let first = 1;
  // let last = totalRows > ROWMAX ? ROWMAX : totalRows;

  function setPageItems(first, last) {
    const itemsArray = [];
    for (let currPageIndex = first; currPageIndex <= last; currPageIndex++) {
      itemsArray.push(
          <Pagination.Item
            key={currPageIndex}
            active={currPageIndex === active}
            onClick={() => {
              changePage(currPageIndex);
            }}
          >
            {currPageIndex}
          </Pagination.Item>,
      );
    }
    return itemsArray;
  }

  function changePage(pageNumber) {
    setActive(pageNumber);
    setItems(setPageItems(first, last));
  }

  function goPrevious() {
    if (active-1 >= 1) {
      setActive(active - 1);
      console.log(active);
      setItems(setPageItems(first, last));
      const middle = Math.ceil((parseInt(items[ROWMAX - 1].key) + parseInt(items[0].key)) / 2);
      if (active <= middle) {
        setFirst((active - Math.floor(ROWMAX / 2) < 1) ? 1 : active - Math.floor(ROWMAX / 2));
        setLast((active + Math.floor(ROWMAX / 2) > totalRows) ? totalRows : active + Math.floor(ROWMAX / 2));
        setItems(setPageItems(first, last));
      }
    }
  }
  function goNext() {
    if (active+1 <= totalRows) {
      setActive(active + 1);
      console.log(active);
      setItems(setPageItems(first, last));
      const middle = Math.ceil((parseInt(items[ROWMAX - 1].key) + parseInt(items[0].key)) / 2);
      console.log(middle);
      if (active >= middle) {
        setFirst((active - Math.floor(ROWMAX / 2) < 1) ? 1 : active - Math.floor(ROWMAX / 2));
        setLast((active + Math.floor(ROWMAX / 2) > totalRows) ? totalRows : active + Math.floor(ROWMAX / 2));
        setItems(setPageItems(first, last));
      }
    }
  }

  useEffect(() => {
    const dsds = setPageItems(first, last);
    setItems(dsds);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ zIndex: '99', position: 'fixed', bottom: '10px' }}>
        <Pagination>
          <Pagination.Prev
            onClick={() => {
              goPrevious();
            }}
          />
          {items}
          <Pagination.Next
            onClick={() => {
              goNext();
            }}
          />
        </Pagination>
      </div>
    </div>
  );
}
