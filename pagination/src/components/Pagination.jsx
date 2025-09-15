function Pagination({ page, totalPages, onPageChange }) {
  const visiblePages = [];
  const maxPagesToShow = 5;

  let start = Math.max(1, page - 2);
  let end = Math.min(totalPages, start + maxPagesToShow - 1);

  if (end - start < maxPagesToShow - 1) {
    start = Math.max(1, end - maxPagesToShow + 1);
  }

  for (let i = start; i <= end; i++) {
    visiblePages.push(i);
  }

  return (
    <div className="pagination">
      <button disabled={page === 1} onClick={() => onPageChange(page - 1)}>
        Prev
      </button>

      {start > 1 && (
        <>
          <button
            className={page === 1 ? "active" : ""}
            onClick={() => onPageChange(1)}
          >
            1
          </button>

          {/* show the dots if gap 1...5 */}
          {start > 2 && <span className="dots">...</span>}
        </>
      )}

      {/* show the page number */}

      {visiblePages.map((num) => (
        <button
          onClick={() => onPageChange(num)}
          className={num === page ? "active" : ""}
        >
          {num}
        </button>
      ))}

      {/* Always show the last page  */}

      {end < totalPages && (
        <>
          {/* show dots if the gap */}
          {end < totalPages - 1 && <span className="dots">...</span>}
          <button
            onClick={() => onPageChange(totalPages)}
            className={page === totalPages ? "active" : ""}
          >
            {totalPages}
          </button>
        </>
      )}
      <button
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
