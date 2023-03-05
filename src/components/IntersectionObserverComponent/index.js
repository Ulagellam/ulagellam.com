import React, { useEffect } from "react";

const IntersectionObserverComponent = ({
  showClass,
  hideClass,
  children,
  options,
}) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(showClass);
        } else {
          entry.target.classList.remove(showClass);
        }
      });
    }, options);

    const hiddenElements = document.querySelectorAll(`.${hideClass}`);
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  });

  return <div>{children}</div>;
};

export default IntersectionObserverComponent;
