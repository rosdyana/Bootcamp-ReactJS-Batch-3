import styles from "./styles.module.css";

/**
 * Pagination component
 * @param {int} currentPage - current page
 * @param {int} totalPages - total pages
 * @param {function} onPageChange - function to handle page change
 * @returns {JSX.Element} - pagination component
 */
function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];
  // Generate page numbers
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  // Handle page change
  const handleClick = (page) => {
    onPageChange(page);
  };

  return (
    <div className={styles.pagination}>
      {currentPage > 1 && (
        <button
          className={styles.button}
          onClick={() => handleClick(currentPage - 1)}
        >
          &lt; Sebelumnya
        </button>
      )}
      {pageNumbers.map((page) => {
        if (page === currentPage) {
          return (
            <button
              className={`${styles.button} ${styles.active}`}
              key={page}
              onClick={() => handleClick(page)}
            >
              {page}
            </button>
          );
        } else if (
          page === 1 ||
          page === totalPages ||
          (page >= currentPage - 1 && page <= currentPage + 1)
        ) {
          return (
            <button
              className={styles.button}
              key={page}
              onClick={() => handleClick(page)}
            >
              {page}
            </button>
          );
        } else if (
          page === 2 ||
          page === totalPages - 1 ||
          (page >= currentPage - 2 && page <= currentPage + 2)
        ) {
          return (
            <span className={styles.ellipsis} key={page}>
              ...
            </span>
          );
        } else {
          return null;
        }
      })}
      {currentPage < totalPages && (
        <button
          className={styles.button}
          onClick={() => handleClick(currentPage + 1)}
        >
          Selanjutnya &gt;
        </button>
      )}
    </div>
  );
}

export default Pagination;
