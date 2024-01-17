// import DeleteIcon from '@mui/icons-material/Delete';
// import { Button } from '@mui/material';
// import { useRouter } from "next/navigation";

// export default function RemoveBtn({ id }) {
//   const router = useRouter();
//   const removeForm = async () => {
//     const confirmed = confirm("Are you sure?");

//     if (confirmed) {
//       const res = await fetch(`http://localhost:3000/api/forms?id=${id}`, {
//         method: "DELETE",
//       });

//       if (res.ok) {
//         router.refresh();
//       }
//     }
//   };

//   return (
//     <Button onClick={removeForm}>
//       <DeleteIcon size={24} />
//     </Button>
//   );
// }