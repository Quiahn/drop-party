export const logIn = async (id) => {
    await fetch("http://localhost:4000/sign-up", {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: `{
        "id": "${id}"
        }`,
    })
}