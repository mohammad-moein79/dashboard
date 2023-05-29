import React, { useEffect } from "react";

function useLogSearch(titel) {
  useEffect(() => {
    console.log(titel);
  }, [titel]);
}

export default useLogSearch;
