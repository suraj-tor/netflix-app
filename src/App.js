import React from "react";
import Amazon from "./Amazon";
// import Card from "./Card";
// import sdata from "./sdata";
import "./index.css";
import Netflix from "./Netflix";

const favourites = "Netflix";

// const cards = sdata.map((value) => {
//     return <Card key={value.id} imgsrc={value.imgsrc} title={value.title} sname={value.sname} link={value.link} />;
// });

function App() {
    return (
        <>
            <h1 className="heading_stryle">List of top 5 Netflix Series in 2022</h1>
            {favourites === "Netflix" ? <Netflix /> : <Amazon />}
        </>
    );
}
export default App;
