import React, { useEffect, useState } from "react";

const useTitle = () => {
    const [title, setTitle] = useState("Default Title");
    const changeTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    }
    useEffect(changeTitle, [title]);
    return setTitle
}


const Hooks = () => {
    const titleUpdate = useTitle();
    setTimeout(() => (titleUpdate("Batman")), 5000);
    return (
        <div>Hello</div>
    );

}

export default Hooks;