import { Fragment } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Provider({ children }: React.PropsWithChildren) {
  return (
    <Fragment>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick={true}
        draggable={true}
      />
      {children}
    </Fragment>
  );
}
