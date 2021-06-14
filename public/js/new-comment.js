const newCommentFormHandler = async (event) => {
    event.preventDefault();
    console.log('New-Comment JS');
    const post_content= document.querySelector('#new-comment').value.trim();
    const post_user = document.querySelector('#user').value.trim();
    const blog_id= sessionStorage.getItem("blogId");
    if (post_content) {
        const date_created = new Date();
    //  const response = await fetch('/api/dashboard/comment', {
    //    method: 'POST',
    //      body: JSON.stringify({ post_content, post_user, date_created, blog_id }),
    //      headers: { 'Content-Type': 'application/json' },
    //     });
  
    // if (response.ok) {
    //    document.location.replace('/');
    // } else {
    //     alert('No details exist please signup');
    //  }
   } else {
     alert('Enter a comment');
    }
  };
  
  document.querySelector('.new-post-form').addEventListener('submit',newCommentFormHandler);