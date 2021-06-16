const updateFormHandler = async (event) => {
  console.log('Update JS');
  event.preventDefault();
  const title = document.getElementById('blog-title').value.trim();
  const content = document.getElementById('blog-content').value.trim();
  const creator = document.querySelector('#user').value.trim();
  const id = document.querySelector('#blog_id').value.trim(); 

  if (title && content) {
    const date_created = new Date();
    const response = await fetch(`/api/blog/updateblog/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content, creator, date_created }),
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
  console.log('Delete JS');
  event.preventDefault();
  const id = document.querySelector('#blog_id').value.trim(); 

  const response = await fetch(`/api/blog/delete/${id}`, {
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