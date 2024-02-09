export default async function Bookmarks() {
    const authenticate = async () => {
        try {
            const res = await fetch('http://entertainmentweb.local/wp-json/jwt-auth/v1/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: 'leo991128',
                    password: 'Leo991128**'
                })
            })
            console.log('Res: ',res);
            const userInfo = await res.json();
            console.log('User info: ', userInfo);
            return userInfo;
        } catch (error) {
            console.log(error);
        }
    }

    const user = await authenticate();
    console.log(user);

    return (
        <>
            <h1>Bookmarks Page</h1>
        </>
    )
}