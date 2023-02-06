import Pagination from 'react-bootstrap/Pagination';
import React, { useState, useEffect, useReducer } from 'react';

export function PageNumberBar(params) {
  const ROWMAX = 5; // Default items in page number bar
  const totalItems = params.params.totalItems;
  const itemsPerPage = params.params.itemsPerPage ?? 10; // Default items per page
  const totalRows = totalItems / itemsPerPage;

  const [isActive, setIsActive] = useState(1);
  const [items, setItems] = useState([]);
  const [first, setFirst] = useState(1);
  const [last, setLast] = useState(totalRows > ROWMAX ? ROWMAX : totalRows);

  function getPageItems(first, last) {
    const itemsArray = [];
    for (let currPageIndex = first; currPageIndex <= last; currPageIndex++) {
      itemsArray.push(
          <Pagination.Item
            key={currPageIndex}
            active={currPageIndex === isActive}
            onClick={() => {
              setIsActive(currPageIndex);
            }}
          >
            {currPageIndex}
          </Pagination.Item>,
      );
    }
    return itemsArray;
  }

  // Workaround for isActive taking time to update
  useEffect(() => {
    const newItems = getPageItems(first, last);
    console.log(newItems);
    setItems(newItems);
  }, [isActive, first, last]);

  function goPrevious() {
    if (isActive > 1) {
      setIsActive(isActive - 1);
      console.log(isActive);
      const middle = Math.ceil((parseInt(items[ROWMAX - 1].key) + parseInt(items[0].key)) / 2);
      if (isActive <= middle) {
        setFirst(isActive - Math.floor(ROWMAX / 2) < 1 ? 1 : isActive - Math.floor(ROWMAX / 2));
        setLast(isActive + Math.floor(ROWMAX / 2) > totalRows ? totalRows : isActive + Math.floor(ROWMAX / 2));
      }
    }
  }
  function goNext() {
    if (isActive < totalRows) {
      setIsActive(isActive + 1);
      const middle = Math.ceil((parseInt(items[ROWMAX - 1].key) + parseInt(items[0].key)) / 2);
      if (isActive >= middle) {
        setFirst(isActive - Math.floor(ROWMAX / 2) < 1 ? 1 : isActive - Math.floor(ROWMAX / 2));
        setLast(isActive + Math.floor(ROWMAX / 2) > totalRows ? totalRows : isActive + Math.floor(ROWMAX / 2));
      }
    }
  }

  useEffect(() => {
    const dsds = getPageItems(first, last);
    setItems(dsds);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ zIndex: '99', position: 'fixed', bottom: '10px' }}>
        <Pagination>
          <Pagination.Prev
            disabled={isActive==1}
            onClick={() => {
              goPrevious();
            }}
          />
          {items}
          <Pagination.Next
            disabled={isActive==totalRows}
            onClick={() => {
              goNext();
            }}
          />
        </Pagination>
      </div>
    </div>
  );
}
