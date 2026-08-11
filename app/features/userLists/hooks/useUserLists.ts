"use client";

import { ChangeEvent, useMemo, useState } from "react";
import { UserListItem } from "@/app/features/userLists/models/UserListItem.interface";

export const useUserLists = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState<UserListItem[]>([]);

  const canAddUser = useMemo(
    () => name.trim().length > 0,
    [name]
  );

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleAddUser = () => {
    const trimmedName = name.trim();
    if (!trimmedName) {
      return;
    }

    setUsers((currentUsers) => [
      ...currentUsers,
      {
        id: crypto.randomUUID(),
        name: trimmedName,
      },
    ]);
    setName("");
  };

  const handleRemoveUser = (id: string) => {
    setUsers((currentUsers) =>
      currentUsers.filter((user) => user.id !== id)
    );
  };

  return {
    name,
    users,
    canAddUser,
    handleNameChange,
    handleAddUser,
    handleRemoveUser,
  };
};
