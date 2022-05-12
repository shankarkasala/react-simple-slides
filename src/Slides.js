import React, { useState } from 'react';
const Slides = ({ data }) => {
  const [count, setCount] = useState(0);
  const [next, setNext] = useState({
    title: data[0].title,
    body: data[0].body,
  });
  //const [prev, setprev] = useState([]);

  const handelNext = () => {
    console.log('next', count);
    //console.log("next",next);
    if (count < 3) {
      setNext(data[count + 1]);
      setCount(count + 1);
      console.log('next', count);
    }
  };
  const handelPrev = () => {
    console.log('prev', count);
    if (count >= 0) {
      setNext(data[count - 1]);
      setCount((prev) => prev - 1);
      console.log('prev', count);
    }
    //console.log("prev",next);
  };
  const handelReset = () => {
    let res = { ...data[0] };
    setNext(res);
    setCount(0);
  };
  return (
    <>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          onClick={handelReset}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          onClick={handelPrev}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          onClick={handelNext}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        {/* {
        data?data.map(slide=>{
        return <div><h1 data-testid="title">{slide.title}</h1>
        <p data-testid="text">{slide.text}</p>
        </div>
        }):null
      } */}
        {next ? (
          <div>
            <h1>{next.title}</h1>
            <p>{next.body}</p>
          </div>
        ) : null}
      </div>
    </>
  );
};
export default Slides;
