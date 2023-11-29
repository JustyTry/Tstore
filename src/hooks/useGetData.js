import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

export default function useGetData(collectionName) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const colRef = collection(db, collectionName);

  useEffect(() => {
    let unsubscribe;
    try {
      unsubscribe = onSnapshot(
        colRef,
        (snapshot) => {
          setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        },
        onSnapshotError,
      );
    } catch (err) {
      setError(err);
    }
    return () => unsubscribe && unsubscribe();
  }, []);

  const onSnapshotError = (err) => {
    setError(err);
  };

  return { data, error };
}
