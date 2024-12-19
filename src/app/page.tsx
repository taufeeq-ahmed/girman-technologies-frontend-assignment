"use client";

import Search from "@/components/search";
import UserCard from "@/components/user-card";
import { users } from "@/lib/users";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState<string>("");

  const filteredUsers = users.filter((user) => {
    const userName = user.first_name + " " + user.last_name;
    return userName.toLowerCase().includes(query);
  });

  return (
    <div className="home-page flex justify-center h-full flex-col">
      <Search query={query || ""} setQuery={setQuery} />
      <div className="users-list overflow-scroll w-[800px] mx-auto flex flex-wrap gap-5 mt-8">
        {filteredUsers.map((user, idx) => {
          return <UserCard user={user} key={idx} />;
        })}
      </div>
    </div>
  );
}
