import React, { useState, useEffect } from 'react';   //useState・・・データを持っておくための機能

const Booklist = props => {  //props・・・親(App component)から子(Booklist component)にデータを渡す時にデータの塊を入れるもの
    const [bookData, setBookData] = useState(null);
    useEffect(() => {
        const result = props.getData?.(props.language)
            .then(response => setBookData(response));
    }, [props])
    return (
        <div>
            <ul className='lists'>
                {
                    bookData === null
                        ? <p>now loading...</p>
                        : bookData.data.items.map((x, index) =>
                            <li key={index} className='list'>
                                <div className='list_detail'>
                                    <div className='thumbnail'>
                                        <img src={x.volumeInfo.imageLinks?.smallThumbnail} />
                                    </div>
                                    <div className='book_detail'>
                                        {x.volumeInfo.title}<br></br>
                                        著 / {x.volumeInfo.authors}<br></br>
                                        {x.saleInfo.listPrice?.amount}円
                                    </div>
                                </div>
                            </li>
                        )
                }
            </ul>
        </div>
    );
}
export default Booklist;