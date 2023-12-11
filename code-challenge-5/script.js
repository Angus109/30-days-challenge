function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const progressContainer = document.getElementById('progress-container');
    const progressBar = document.getElementById('progress-bar');

    const file = fileInput.files[0];

    if (!file) {
      alert('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener('progress', (event) => {
      if (event.lengthComputable) {
        const percentage = (event.loaded / event.total) * 100;
        progressBar.style.width = percentage + '%';
      }
    });

    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          alert('File uploaded successfully!');
          resetProgress();
        } else {
          alert('File upload failed.');
        }
      }
    };

    xhr.open('POST', 'YOUR_UPLOAD_ENDPOINT', true);
    xhr.send(formData);

    progressContainer.style.display = 'block';
  }

  function resetProgress() {
    const progressContainer = document.getElementById('progress-container');
    const progressBar = document.getElementById('progress-bar');

    progressContainer.style.display = 'none';
    progressBar.style.width = '0';
  }
