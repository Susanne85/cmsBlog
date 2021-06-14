const newCommentFormHandler = async (event) => {
  event.preventDefault();
  console.log('New-Comment JS');
  const post_comment = document.querySelector('#new-comment').value.trim();
  const post_user = document.querySelector('#user').value.trim();
  const blog_id = sessionStorage.getItem("blogId");
  if (post_comment) {
    const post_date = new Date();
    console.log('new comment', post_comment + ' ' + post_user + ' ' + blog_id);
    const response = await fetch('/api/dashboard/newcomment', {
      method: 'POST',
      body: JSON.stringify({ post_comment, post_user, post_date, blog_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Comment could not be added');
    }
  } else {
    alert('Enter a comment');
  }
};

document.querySelector('.new-post-form').addEventListener('submit', newCommentFormHandler);