import { useState, useEffect } from 'react';

function Pagination({list, setList, resultsPerPage = 10}) {

  const [page, setPage] = useState(0)

  useEffect(() => {
    setList(list.slice(page * resultsPerPage, page * resultsPerPage + resultsPerPage))
  }, [page, resultsPerPage, setList])
  

  function handleNextPage() {
    setPage(page + 1)
  }

  function handlePreviousPage() {
    if (page === 0) {
      return
    }
    setPage(page - 1)
  }
  return (
    <>
      <button onClick={handlePreviousPage}>Page précédente</button>
      <h1>{page + 1}</h1>
      <button onClick={handleNextPage}>Page suivante</button>
      </>
  )
}

export default Pagination