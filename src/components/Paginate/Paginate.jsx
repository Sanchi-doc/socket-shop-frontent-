import ReactPaginate from 'react-paginate';
// import './paginate.css'

const  PaginatedItems = ({ totalPages, currentPage, setPageNumber, name }) => {

  const handlePageClick = (event) => {
    if ( name ){
      setPageNumber({name, page: event.selected + 1 })
      windowScroll()
      return
    }
    setPageNumber({page: event.selected + 1 })
    windowScroll()
    
  }
  const windowScroll = () => {
    window.scrollBy({
      top: -10000,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <ReactPaginate
        pageCount = {totalPages}
        forcePage = {currentPage}
        onPageChange = {handlePageClick}
        breakLabel = '...'
        nextLabel = 'next ->'
        previousLabel = '<- previous'
        renderOnZeroPageCount = {null}
        pageRangeDisplayed = {2}
        marginPagesDisplayed = {4}
        containerClassName="pagination"
        activeClassName="active"
        breakClassName="item"
        breakLinkClassName="link"
        pageClassName="item"
        pageLinkClassName="link"
        previousClassName="item"
        previousLinkClassName="link"
        nextClassName="item"
        nextLinkClassName="link"
      />
    </div>
  );
}

export default PaginatedItems;