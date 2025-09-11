// userService.js
export const getUser = (id) => ({ id, name: "John Doe" });
export const saveUser = (user) => console.log("Saved:", user);

export default function welcome(user) {
  return `Welcome ${user.name}!`;
}
