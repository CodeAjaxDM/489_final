// uncomment to return delete function. requeued removal from Subu.

// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

// function DeleteModal({ user, setMsg }) {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const deleteUser = () => {
//     fetch("http://localhost:4000/api/user/" + user.email, {
//       method: "DELETE",
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         handleClose();
//         setMsg(data.msg);
//       });
//   };

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Delete
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Deleting a user</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Do you want to delete {user.email}?</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="danger" onClick={deleteUser}>
//             Delete
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default DeleteModal;
