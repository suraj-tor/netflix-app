import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./Card";
import "./index.css";
import sdata from "./sdata";

console.log(sdata);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <h1 className="heading_stryle">List of top 5 Netflix Series in 2022</h1>
        <Card imgsrc={sdata[0].imgsrc} title={sdata[0].title} sname={sdata[0].sname} link={sdata[0].link} />
        <Card imgsrc={sdata[1].imgsrc} title={sdata[1].title} sname={sdata[1].sname} link={sdata[1].link} />
        <Card imgsrc={sdata[2].imgsrc} title={sdata[2].title} sname={sdata[2].sname} link={sdata[2].link} />
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
