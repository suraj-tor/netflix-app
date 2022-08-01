import React from "react";
import sdata from "./sdata";
import Card from "./Card";


const Netflix = () => {
    return (
        <>
            <Card
                key={sdata[0].id}
                imgsrc={sdata[0].imgsrc}
                title={sdata[0].title}
                sname={sdata[0].sname}
                link={sdata[0].link}
            />
            <Card
                key={sdata[1].id}
                imgsrc={sdata[1].imgsrc}
                title={sdata[0].title}
                sname={sdata[0].sname}
                link={sdata[0].link}
            />
            <Card
                key={sdata[2].id}
                imgsrc={sdata[2].imgsrc}
                title={sdata[0].title}
                sname={sdata[0].sname}
                link={sdata[0].link}
            />
        </>
    );
};

export default Netflix;
