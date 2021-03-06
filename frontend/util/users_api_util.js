export const edit = user => {
  return $.ajax({
    url: `/api/users/${user.id}`,
    method: "PATCH",
    data: { user }
  });
}

export const fetchUser = id => {
  return $.ajax({
    url: `/api/users/${id}`,
    method: "GET",
  })
}

export const fetchUsers = () => {
  return $.ajax({
    url: `/api/users`,
    method: "GET"
  });
}