const createNewPost = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#titleInput').value.trim();
    const content = document.querySelector('#blogcontent').value.trim();

    if (title && content) {
        const response = await fetch('/api/blogpost', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard')
        }

        
    }
};

document
    .querySelector('.blog-post-form')
    .addEventListener('submit', createNewPost);

// const myDate = new Date(Date.now())
// let  month = myDate.getMonth()+1
// let date = myDate.getDate()
// let year = myDate.getFullYear()

// console.log(`${month}/${date}/${year}`)

// const myDate2 = new Date();
// let month2 = myDate2.getMonth()+1
// let fullDate = myDate2.toString()

// console.log(myDate2)
// console.log(month2)
// console.log(fullDate)