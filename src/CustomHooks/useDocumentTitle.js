import { useEffect, useRef } from 'react';

function useDocumentTitle(title) {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    const newTitle = title ? `${title} - TODO APP` : 'TOTO APP';
    document.title = newTitle;
    const currentTitle = defaultTitle.current

    return () => {
      document.title = currentTitle;
    };
  }, [title]);
}

export default useDocumentTitle;
