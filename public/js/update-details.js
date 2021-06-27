const blogId = document.getElementById('blog-id').value.trim();
const updateFormHandler = async (event) => {
  console.log('Update Blog JS');
  event.preventDefault();
  const title = document.getElementById('blog-title').value.trim();
  const content = document.getElementById('blog-content').value.trim();
  
  if (title && content) {
    const date_created = new Date();
    const response = await fetch(`/api/blog/updateblog/${blogId}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content, date_created }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Blog could not be updated');
    }
  } else {
    alert('Enter a title and content to update your blog');
  }
};
const deleteFormHandler = async (event) => {
  console.log('Delete Blog JS');
  event.preventDefault();

  const response = await fetch(`/api/blog/delete/${blogId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
  
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Blog could not be updated');
  }
}
document.querySelector('.update-form').addEventListener('click', updateFormHandler);
document.querySelector('.delete-form').addEventListener('click', deleteFormHandler);