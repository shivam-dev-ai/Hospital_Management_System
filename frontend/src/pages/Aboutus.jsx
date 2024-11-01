import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";

const Aboutus = () => {
    return (
        <>
            <Hero
                title={"Learn More About Us | ZeeCare Medical Institute"} imageurl={"/about.png"} />
            <Biography imageurl={"/whoweare.png"} />
        </>
    );
};

export default Aboutus;