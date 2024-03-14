import { useState } from "react";
import { tabsContent } from "./constants/tabsContent";
import "./index.scss";

export default function Tabs() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleOnClick = (index) => {
    setActiveTabIndex(index);
  }

  const isActive = (index) => {
    return activeTabIndex === index ? "tabs-item-active" : "";
  }

  return (
    <div className="wrapper">
      <div className="tabs">
        {tabsContent.map((tabItem, index) => (
          <div
            onClick={() => handleOnClick(index)}
            key={tabItem.label}
            className={`tabs-item ${isActive(index)}`}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="item-content">
        {tabsContent[activeTabIndex] && tabsContent[activeTabIndex].content}
      </div>
    </div>
  );
}
