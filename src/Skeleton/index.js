import React from "react";
import "./style.css";

export const Skeleton = ({ circle }) => {
    return (
        <div
            className={`skeleton-wrapper${
                circle ? " skeleton-wrapper-circle" : ""
            }`}
        >
            <div className="skeleton">
                <div className="skeleton-indicator" />
            </div>
        </div>
    );
};
