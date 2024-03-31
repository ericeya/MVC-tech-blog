const createNewPost = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#titleInput').value.trim();
    const content = document.querySelector('#contentInput').value.trim();

    if (title && content) {
        const response = await fetch('/api/blogpost', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Oops. Something went wrong!');
        }
    }
};

document
    .querySelector('.blog-post-form')
    .addEventListener('submit', createNewPost);
