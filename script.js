 async function urlShortener(event){
    event.preventDefault();
    const inputField=document.querySelector('.shorten-url-form input[type="url"]')
    const longUrl=inputField.value;
    const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`);
    if (response.ok) {
        const data = await response.text();
        // console.log("short="+data);
        document.getElementById('result').innerHTML = `
        shortend URL : <a href="${data }" target="_blank">${data}</a>`;
    }
    else{
        // console.log("error")
        document.getElementById('result').innerHTML = "Error shortening"
    }
}