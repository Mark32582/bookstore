import React, { useState, useEffect } from 'react';

const ContactNavigation = () => {
  const [urlSegments, setUrlSegments] = useState([]);
  const [hrefs, setHrefs] = useState([]);

  useEffect(() => {
    const regex = /.*\/\/[a-zA-Z0-9:]*\/(.*)/;
    const currentUrl = window.location.href;
    const match = currentUrl.match(regex);
    const segments = match[1].split('/');
    segments.unshift("home");
    setUrlSegments(segments);
    const refs = segments.map((_, index) => segments.slice(1, index + 1).join("/"));
    setHrefs(refs);
  }, []);

  return (
    <div>
      <ul className="contact-navigation">
        {urlSegments.map((segment, index) => (
          <li key={index}>
            <p>/</p>
            <a target="_self" href={"/" + hrefs[index]} alt={"go to " + segment}>{segment}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactNavigation;
