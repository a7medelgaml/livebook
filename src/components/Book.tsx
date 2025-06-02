'use client';

import HTMLFlipBook from "react-pageflip";


const Book = () => {
  return (
    <div className="bg-light p-2">
    <div className="d-flex justify-justify-center align-items-center bg p-2">
      <HTMLFlipBook
        width={400}
        height={375}
        size="stretch"
        showCover={true}
        className="shadow-xl"
        style={{ margin: "0 auto" }}
        startPage={0}
        flippingTime={500}
        usePortrait={true}
        startZIndex={0}
    >
        
        <div className="page  d-flex justify-content-center align-items-center flex-column">
            <h1 className="">غلاف الكتاب</h1>
            <p className=''>مرحبًا بكم في كتابنا!</p> 

            
        </div>
        <div className="page p-3  "><h1>page 2</h1></div>
        <div className="page  p-3"><h1>page 3</h1></div>
        <div className="page p-3 "><h1>page 4</h1></div>
        <div className="page p-3 "><h1>page 5</h1></div>

    </HTMLFlipBook > 
    </div>
    </div>
  );
};

export default Book;
