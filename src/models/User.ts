import { gql } from "@apollo/client";

export interface User {
  _id: string;
  index: number;
  picture: string;
  age: number;
  eyeColor: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  friends?: User[];
  greeting?: string; // This looks strange, as the user inside of friends doesn't have it
}

export interface UserList {
  list: User[];
}

export const GET_USER_LIST = gql`
  query GetUserList($searchTerm: String) {
    list(name: $searchTerm) {
      _id
      name
      age
      eyeColor
      company
      email
      picture
    }
  }
`;

export const GET_USER_AND_ITS_FRIENDS = gql`
  query GetUserListAndItsFriends($userId: String!) {
    list(_id: $userId) {
      _id
      name
      age
      email
      picture
      friends {
        _id
        name
        age
        eyeColor
        company
        email
        picture
      }
    }
  }
`;
