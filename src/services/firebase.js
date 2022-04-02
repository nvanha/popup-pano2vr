import { firebase } from "lib/firebase";

export async function getDetailByHomeId(homeId) {
  const result = await firebase
    .firestore()
    .collection("homes")
    .where("homeId", "==", homeId)
    .get();

  return result.docs.map((item) => {
    console.log("item: ", item);

    return {
      ...item.data(),
      docId: item.id,
    };
  });
}
