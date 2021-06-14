const newPostFormHandler = async (event) => {
  console.log('New-POST JS');
  event.preventDefault();
  const title = document.querySelector('#blog-title').value.trim();
  const content = document.querySelector('#blog-content').value.trim();
  const creator = document.querySelector('#user').value.trim();

  if (title && content) {
    const date_created = new Date();
    const response = await fetch('/api/dashboard/newblog', {
      method: 'POST',
      body: JSON.stringify({ title, content, creator, date_created }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Blog could not be added');
    }
  } else {
    alert('Enter a title and content for your new blog');
  }
};

document.querySelector('.new-post-form').addEventListener('submit', newPostFormHandler);