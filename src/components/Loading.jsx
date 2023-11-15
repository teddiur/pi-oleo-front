import { loading } from "../stores/loading.js";
import { useStore } from "@nanostores/react";
import styles from "./Loading.module.css";
import { useEffect, useRef } from "react";
import Spinner from "./Spinner.jsx";

export const Loading = () => {
  const $loading = useStore(loading);
  const dialogRef = useRef();

  useEffect(() => {
    if ($loading) {
      dialogRef?.current?.showModal();
    } else {
      dialogRef?.current?.close();
    }
    return () => dialogRef?.current?.close();
  }, [$loading]);

  return (
    <dialog ref={dialogRef} className={styles.loading}>
      <div role="status">
        <Spinner />
      </div>
    </dialog>
  );
};
