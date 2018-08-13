
// async function
export async function putObject(data) {
    // await response of fetch call
    console.log(data);
    let request = await fetch('http://localhost:5500/api/v1/orders', {
        method: 'PUT',
        mode: 'cors',
        body: JSON.stringify(data),
    });
    // only proceed once second promise is resolved
    return data;
}



export async function getTracks(page) {
    // await response of fetch call
    console.log(`http://localhost:5500/api/v1/tracks?page=${page}`)
    let response = await fetch(`http://libertyradio.iancullinane.com/api/v1/tracks?page=${page}`);
    // only proceed once promise is resolved
    let data = await response.json();
    // only proceed once second promise is resolved
    return data;
}
