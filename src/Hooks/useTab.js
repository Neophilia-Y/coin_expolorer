import React, { useState } from "react";

const content = [
    {
        tab: "Section 1",
        content: "I'm Content 1"
    },
    {
        tab: "Section 2",
        content: "I'm Content 2"
    }
]

const useTab = (currentTab, Alltab) => {
    const [tabIndex, setTab] = useState(currentTab);
    if (!Alltab || !Array.isArray(Alltab)) {
        return;
    }
    return {
        currentItem: Alltab[tabIndex],
        onClick: setTab
    }

}

export default useTab;