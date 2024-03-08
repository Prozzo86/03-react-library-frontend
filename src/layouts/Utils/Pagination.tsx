// Definicija komponente Pagination koja prihvaća props: currentPage, totalPages, i paginate
export const Pagination: React.FC<{currentPage: number, totalPages: number, paginate: any}> = (props) => {

    // Inicijalizacija praznog niza za brojeve stranica
    const pageNumbers = [];

    // Ako je trenutna stranica 1, dodajemo 1 u niz
    if (props.currentPage === 1 ) {
        pageNumbers.push(props.currentPage);
        // Ako postoji sljedeća stranica, dodajemo je u niz
        if (props.totalPages >= props.currentPage + 1) {
            pageNumbers.push(props.currentPage + 1);
        }
        // Ako postoji i sljedeća stranica, dodajemo je u niz
        if (props.totalPages >= props.currentPage + 2) {
            pageNumbers.push(props.currentPage + 2);
        }
    } else if (props.currentPage > 1) { // Ako trenutna stranica nije 1
        // Ako trenutna stranica ima vrijednost veću ili jednaku 3, dodajemo dvije stranice prije i jednu stranicu prije trenutne stranice
        if (props.currentPage >= 3 ) {
            pageNumbers.push(props.currentPage - 2);
            pageNumbers.push(props.currentPage - 1);
        } else { // Ako trenutna stranica ima vrijednost manju od 3, dodajemo samo jednu stranicu prije
            pageNumbers.push(props.currentPage - 1);
        }

        // Dodajemo trenutnu stranicu u niz
        pageNumbers.push(props.currentPage);
    
        // Ako postoji sljedeća stranica, dodajemo je u niz
        if (props.totalPages >= props.currentPage + 1) {
        pageNumbers.push(props.currentPage + 1);
        }
        // Ako postoji i sljedeća stranica, dodajemo je u niz
        if (props.totalPages >= props.currentPage + 2) {
        pageNumbers.push(props.currentPage + 2);
        }
    }

    // Vraćanje JSX-a za paginaciju
    return (
        <nav aria-label="...">
            <ul className='pagination'>
                <li className='page-item' onClick={() => props.paginate(1)}>
                    <button className='page-link'>
                        First Page
                    </button>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} onClick={() => props.paginate(number)}
                        className={'page-item ' + (props.currentPage === number ? 'active' : '')}>
                            <button className='page-link'>
                                {number}
                            </button>
                    </li>
                ))}
                <li className='page-item' onClick={() => props.paginate(props.totalPages)}>
                    <button className='page-link'>
                        Last Page
                    </button>
                </li>
            </ul>
        </nav>
    );
}