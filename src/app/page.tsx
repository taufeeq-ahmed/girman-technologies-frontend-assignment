"use client";

import NotFound from "@/components/not-found";
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
    <div className="home-page flex justify-start h-full flex-col">
      <Search query={query || ""} setQuery={setQuery} />
      <div className="users-list overflow-scroll sm:w-[800px] sm:mx-auto flex flex-col sm:flex-row items-center sm:flex-wrap gap-5 mt-8 px-10 sm:px-0 ">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, idx) => {
            return <UserCard user={user} key={idx} />;
          })
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
}
