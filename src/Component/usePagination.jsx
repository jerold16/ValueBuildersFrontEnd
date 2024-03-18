import { useState, useEffect } from 'react';

export function usePagination(data, itemsPerPage) {
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  
  useEffect(() => {
    if (data && data.length > 0) {
      const newPageCount = Math.ceil(data.length / itemsPerPage);
      setPageCount(newPageCount);
      const newCurrentItems = data.slice(itemOffset, itemOffset + itemsPerPage);
      setCurrentItems(newCurrentItems);
    }
  }, [data, itemsPerPage, itemOffset]);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };

  return { itemOffset, currentItems, pageCount, handlePageClick };
}
