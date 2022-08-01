import React from "react";
import sdata from "./sdata";
import Card from "./Card";

const Amazon = () => {
    return (
        <>
            <Card
                key={sdata[3].id}
                imgsrc={sdata[3].imgsrc}
                title={sdata[3].title}
                sname={sdata[3].sname}
                link={sdata[3].link}
            />
            <Card
                key={sdata[4].id}
                imgsrc={sdata[4].imgsrc}
                title={sdata[4].title}
                sname={sdata[4].sname}
                link={sdata[4].link}
            />
            <Card
                key={sdata[5].id}
                imgsrc={sdata[5].imgsrc}
                title={sdata[5].title}
                sname={sdata[5].sname}
                link={sdata[5].link}
            />
        </>
    );
};

export default Amazon;
