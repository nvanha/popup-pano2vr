import { useContext, useEffect, useState } from "react";
import UserContext from "context/user";
import { getPhotos, getUserByUserId } from "services/firebase";

export default function usePhotos() {
  const [photos, setPhotos] = useState(null);
  const {
    user: { uid: userId = "" },
  } = useContext(UserContext);

  useEffect(() => {
    async function getTimeLinePhotos() {
      // example: [2, 1, 5] <- 2 being raphael
      const [{ following }] = await getUserByUserId(userId);
      let followedUserPhotos = [];

      // does the user actually follow people?
      if (following.length > 0) {
        followedUserPhotos = await getPhotos(userId, following);
      }

      // re-arrange array to be newest photos first by dateCreated
      followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
      setPhotos(followedUserPhotos);
    }

    getTimeLinePhotos();
  }, [userId]);

  return { photos };
}
