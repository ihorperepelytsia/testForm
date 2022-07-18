import { useSelector } from "react-redux";
import { getUsersSelector } from "../../redux/users-selectors";
import { Table, Th, Td, Tr } from "./UsersTable.styled";

export const UsersTable = () => {
  const users = useSelector(getUsersSelector);
  return (
    <>
      {users.length > 0 && (
        <>
          <Table>
            <thead>
              <Tr>
                <Th>№</Th>
                <Th>First Name</Th>
                <Th>Last Name</Th>
                <Th>Phone Number</Th>
                <Th>Email</Th>
                <Th>Gender</Th>
                <Th>Address</Th>
              </Tr>
            </thead>
            <tbody>
              {users.map(
                (
                  { firstName, lastName, phoneNumber, email, gender, address },
                  index
                ) => (
                  <Tr key={index + 1}>
                    <Td>{index + 1}</Td>
                    <Td>{firstName}</Td>
                    <Td>{lastName}</Td>
                    <Td>{phoneNumber}</Td>
                    <Td>{email}</Td>
                    <Td>{gender}</Td>
                    <Td>{address}</Td>
                  </Tr>
                )
              )}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};
