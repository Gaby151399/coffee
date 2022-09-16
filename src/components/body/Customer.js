import { useState } from "react";

export default function Customer() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);

  const showDiv1 = () => {
    setClick1(!click1);
    setShow1(!show1);
  };
  const showDiv2 = () => {
    setClick2(!click2);
    setShow2(!show2);
  };
  const showDiv3 = () => {
    setClick3(!click3);
    setShow3(!show3);
  };
  const showDiv4 = () => {
    setClick4(!click4);
    setShow4(!show4);
  };

  return (
    <div className="customer">
      <h3>COMMON CUSTOMER QUESTIONS</h3>
      <div className="row">
        <div className="col-8">
          <h5>QUESTION ONE</h5>
        </div>
        <div className="col-2 p-0">
          <button className="btnPlus" onClick={showDiv1}>
            {click1 ? "-" : "+"}
          </button>
        </div>
        {show1 ? (
          <div className="div-hide-all" id="div-1">
            <p className="small" id="para1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              deserunt laborum nihil molestias earum autem facilis dolor? Quae
              hic, porro ratione repellat voluptatem quos aspernatur numquam
              iusto recusandae dolore minus!Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ab deserunt laborum nihil molestias
              earum autem facilis dolor? Quae hic, porro ratione repellat
              voluptatem quos aspernatur numquam iusto recusandae dolore
              minus!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="row">
        <div className="col-8">
          <h5>QUESTION TWO</h5>
        </div>
        <div className="col-2 p-0">
          <button className="btnPlus" onClick={showDiv2}>
            {click2 ? "-" : "+"}
          </button>
        </div>
        {show2 ? (
          <div className="div-hide-all" id="div-2">
            <p className="small" id="para2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              deserunt laborum nihil molestias earum autem facilis dolor? Quae
              hic, porro ratione repellat voluptatem quos aspernatur numquam
              iusto recusandae dolore minus!Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ab deserunt laborum nihil molestias
              earum autem facilis dolor? Quae hic, porro ratione repellat
              voluptatem quos aspernatur numquam iusto recusandae dolore
              minus!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="row">
        <div className="col-8">
          <h5>QUESTION THREE</h5>
        </div>
        <div className="col-2 p-0">
          <button className="btnPlus" onClick={showDiv3}>
            {click3 ? "-" : "+"}
          </button>
        </div>
        {show3 ? (
          <div className="div-hide-all" id="div-3">
            <p className="small" id="para3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              deserunt laborum nihil molestias earum autem facilis dolor? Quae
              hic, porro ratione repellat voluptatem quos aspernatur numquam
              iusto recusandae dolore minus!Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ab deserunt laborum nihil molestias
              earum autem facilis dolor? Quae hic, porro ratione repellat
              voluptatem quos aspernatur numquam iusto recusandae dolore
              minus!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="row">
        <div className="col-8">
          <h5>QUESTION FOUR</h5>
        </div>
        <div className="col-2 p-0">
          <button className="btnPlus" onClick={showDiv4}>
            {click4 ? "-" : "+"}
          </button>
        </div>
        {show4 ? (
          <div className="div-hide-all" id="div-4">
            <p className="small" id="para4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              deserunt laborum nihil molestias earum autem facilis dolor? Quae
              hic, porro ratione repellat voluptatem quos aspernatur numquam
              iusto recusandae dolore minus!Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ab deserunt laborum nihil molestias
              earum autem facilis dolor? Quae hic, porro ratione repellat
              voluptatem quos aspernatur numquam iusto recusandae dolore
              minus!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
